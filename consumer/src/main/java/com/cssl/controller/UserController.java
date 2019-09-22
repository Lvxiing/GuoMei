package com.cssl.controller;

import ch.qos.logback.core.net.SyslogOutputStream;
import com.cssl.api.RedisFeignInterface;
import com.cssl.api.UserFeignInterface;
import com.cssl.entity.*;
import com.cssl.util.NginxUtil;
import org.apache.catalina.filters.SessionInitializerFilter;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.DigestUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@Controller
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserFeignInterface userFeignInterface;

@Autowired
    private  RedisFeignInterface  redisFeignInterface;


//redis中根据gdetailId获取value
@RequestMapping("/redisGetgdetailId/{gdetailId}")
@ResponseBody
public  Map   redisGetgdetailId(@PathVariable("gdetailId") String gdetailId){
    String str= redisFeignInterface.get(gdetailId);
    Map map=new HashMap();
    map.put("description",str);
    return   map;
}

    //给手机号码发验证码
    @RequestMapping("/ajaxNum")
    @ResponseBody
    public String sendMsg(@RequestParam("phoneNum") String phoneNum) throws Exception {
        System.out.println("phone:" + phoneNum);
        return userFeignInterface.sendMsg(phoneNum);
    }

    //登录:验证手机验证码
    @RequestMapping("/verfiy")
    public String login(@RequestParam("phoneNum") String phoneNum, @RequestParam("code") String code, HttpSession session) {
        System.out.println("phoneNum:" + phoneNum + "," + "code:" + code);
        Map<String, String> hm = userFeignInterface.login(phoneNum, code);
        System.out.println("mess:" + hm.get("mess"));
        if ("success".equals(hm.get("mess"))) {
            Users u = selectPhone(phoneNum);
            session.setAttribute("user", u);
            Map map = new HashMap();
            map.put("userId", u.getId());
            final String typeName = "每日登录";
            map.put("typeName", typeName);
            //时间格式转换
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
//用户上次登录时间
            String loginTime = sdf.format(u.getLoginTime());
            //当前系统时间
            String nowDate = sdf.format(System.currentTimeMillis());
            //用户当日注册当日登录
            //每日首次登录加成长值
            if (!loginTime.equals(nowDate)) {
                int ucount = userFeignInterface.updateGrowupSum(map);
                int scount = userFeignInterface.saveGrowupdetail(map);
                //将此次获得的成长值详细说明存入redis中
                Map desMap = userFeignInterface.detailDescription();
                Object gdetailId = desMap.get("gdetailId");
                Object userPhone = desMap.get("userPhone");
                Object gdetailTime = desMap.get("gdetailTime");
                try {
                    Date parse = sdf.parse(gdetailTime.toString());
                    redisFeignInterface.set(gdetailId.toString(),"登录账户:"+userPhone+",登录时间:"+ sdf.format(parse),-1);
                } catch (ParseException e) {
                    e.printStackTrace();
                }
            }
            u.setLoginTime(new Date());
            boolean b = userFeignInterface.updateLoginTime(u);
            System.out.println("sessionUser:" + session.getAttribute("user"));
            return "redirect:/index.html";
        } else {
            return "redirect:/gm-login.html";
        }
    }

    //判断该手机号是否已被注册
    @RequestMapping("/selectPhone")
    @ResponseBody
    public Users selectPhone(@RequestParam("phoneNum") String phoneNum) {
        return userFeignInterface.selectPhone(phoneNum);
    }

    //判断该用户名是否已被注册
    @RequestMapping("/selectUserName")
    @ResponseBody
    public Users selectUserName(@RequestParam("userName") String userName) {
        return userFeignInterface.selectUserName(userName);
    }

    //用户注册
    @RequestMapping("/userRegister")
    @ResponseBody
    public boolean userRegister(Users users) {
        boolean pd = userFeignInterface.userRegister(users);
        if (pd == true) {
            Users u = userFeignInterface.selectUserName(users.getUserName());
            Map map = new HashMap();
            Growup growup = new Growup();
            growup.setUserId(u.getId());
            map.put("userId", u.getId());
            //注册加成长值
            final String typeName = "注册";
            map.put("typeName", typeName);
            GrowupType growupType = userFeignInterface.findByTypeName(typeName);
            growup.setGrowupSum(growupType.getValue());
            boolean save = userFeignInterface.saveGrowup(growup);
            int scount = userFeignInterface.saveGrowupdetail(map);
//将此次获得的成长值详细说明存入redis中
            Map desMap = userFeignInterface.detailDescription();
            Object gdetailId = desMap.get("gdetailId");
            Object userTime = desMap.get("userTime");
            //时间格式转换
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
            try {
                Date parse = sdf.parse(userTime.toString());
                redisFeignInterface.set(gdetailId.toString(),"注册时间:"+sdf.format(parse),-1);
            } catch (ParseException e) {
                e.printStackTrace();
            }
        }
        return pd;
    }

    //得到session中的用户
    @RequestMapping("/getSessionUser")
    @ResponseBody
    public Users getSessionUser(HttpSession session) {
        System.out.println("*******sessionUser");
        return (Users) session.getAttribute("user");
    }

    //用户退出登录
    @RequestMapping("/outUser")
    public String outUser(HttpSession session) {
        session.removeAttribute("user");
        return "redirect:/gm-login.html";
    }

    //会员俱乐部显示该会员信息
    @RequestMapping("/findVip")
    @ResponseBody
    public List<Map> findVip(HttpSession session) {
      Users  users =  (Users) session.getAttribute("user");
      Map map=new HashMap();
      map.put("userId",users.getId());
        return userFeignInterface.findVip(map);
    }

    //该会员获得的成长值明细
    @RequestMapping("/findGrowupDetail")
    @ResponseBody
    public  List<Map> findGrowupDetail(HttpSession session){
        Users  users =  (Users) session.getAttribute("user");
        return userFeignInterface.findGrowupDetail(users.getId());
    }






    //**************后台*************

    //管理员登录
    @RequestMapping(value = "/adminLogin", method = RequestMethod.POST)
    public String adminLogin(Users users, HttpSession session) {
        Users u = userFeignInterface.adminLogin(users);
        if (u == null) {
            return "redirect:/Manager/login.html";
        } else {
            session.setAttribute("adminUser", u);
            return "redirect:/Manager/frame.html";
        }
    }

    //查询用户,并分页显示
    @RequestMapping("/findUsers/{userName}")
    @ResponseBody
    public Map<String, Object> findUsers(@PathVariable("userName") String userName, int page, int limit) {
        PageInfo<Users> usersPageInfo = userFeignInterface.usersFenYe(userName, page, limit);
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("code", 0);
        map.put("msg", "");
        map.put("count", usersPageInfo.getTotalCount());  //总记录数
        map.put("data", usersPageInfo.getList());
        return map;
    }

    //删除用户
    @RequestMapping("/delUser/{id}")
    @ResponseBody
    public boolean delUser(@PathVariable("id") Integer id) {
        return userFeignInterface.delUser(id);
    }

    //根据id查询
    @RequestMapping("/findById/{id}")
    @ResponseBody
    public Users findById(@PathVariable("id") Integer id) {
        return userFeignInterface.findById(id);
    }

    //修改用户
    @RequestMapping("/updateUser")
    @ResponseBody
    public boolean updateUser(@RequestParam Map<String, String> map) {
        Users u = userFeignInterface.selectUserName(map.get("userName"));
        //用户完善基本资料加成长值
        if (u.getInfoComplete() == 0) {
            Map hm = new HashMap();
            hm.put("userId", u.getId());
            final String typeName = "完善基本资料";
            hm.put("typeName", typeName);
            int ucount = userFeignInterface.updateGrowupSum(hm);
            int scount = userFeignInterface.saveGrowupdetail(hm);
            String  infoComplete="1";
            map.put("infoComplete",infoComplete);
            //将此次获得的成长值详细说明存入redis中
            Map desMap = userFeignInterface.detailDescription();
            Object gdetailId = desMap.get("gdetailId");
            redisFeignInterface.set(gdetailId.toString(),"基本资料完善度提升到100%",-1);
        }
        return userFeignInterface.updateUser(map);
    }

    //上传用户头像
    @RequestMapping("/upload/img")
    @ResponseBody
    public Map<String, Object> upload(MultipartFile file, HttpServletRequest request) throws IOException {
        Map<String, Object> res = new HashMap<>();
        //服务器上存放图片的文件夹路径
        String path = "users";
        try {
            //类型转换
            String fileName = file.getOriginalFilename();  //获取文件名
            String prefix = fileName.substring(fileName.lastIndexOf("."));     // 获取文件后缀
            File excelFile = File.createTempFile(fileName, prefix);
            file.transferTo(excelFile);

            //建立ftp连接
            NginxUtil.connect(path);
            //上传文件,返回随机生成的不唯一文件名
            String uploadName = NginxUtil.upload(excelFile);
            //返回服务器上存放图片的完整路径
            String fileUrl = NginxUtil.getFileUrl(path, uploadName);
            res.put("url", fileUrl);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return res;
    }

    //查询会员,并分页显示
    @RequestMapping("/findVip/{userName}/{gradeName}")
    @ResponseBody
    public Map<String, Object> findVip(@PathVariable("userName") String userName, @PathVariable("gradeName") String gradeName, int page, int limit) {
        Map hm = new HashMap();
        hm.put("userName", userName);
        hm.put("gradeName", gradeName);
        PageInfo<Map> userVipPageInfo = userFeignInterface.userVipFenYe(hm, page, limit);
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("code", 0);
        map.put("msg", "");
        map.put("count", userVipPageInfo.getTotalCount());  //总记录数
        map.put("data", userVipPageInfo.getList());
        return map;
    }

    //显示所有会员等级
    @RequestMapping("/allGrade")
    @ResponseBody
    public List<Grade> allGrade() {
        return userFeignInterface.allGrade();
    }

    //管理员修改密码
    @RequestMapping("/updatePwd")
    @ResponseBody
    public boolean updatePwd(Users users) {
        return userFeignInterface.updatePwd(users);
    }

    //查询管理员的原始密码是否正确
    @RequestMapping("/selectPwd")
    @ResponseBody
    public Users selectPwd(Users user) {
        return userFeignInterface.selectPwd(user);
    }

    //管理员注销退出登录
    @RequestMapping("/outAdminUser")
    public String outAdminUser(HttpSession session) {
        session.removeAttribute("adminUser");
        return "redirect:/Manager/login.html";
    }

    //得到session中的管理员
    @RequestMapping("/getSessionAdminUser")
    @ResponseBody
    public Users getSessionAdminUser(HttpSession session) {
        return (Users) session.getAttribute("adminUser");
    }


}
