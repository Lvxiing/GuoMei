package com.cssl.controller;

import com.cssl.api.UserFeignInterface;
import com.cssl.entity.Grade;
import com.cssl.entity.PageInfo;
import com.cssl.entity.Users;
import com.cssl.util.NginxUtil;
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
import java.sql.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@Controller
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserFeignInterface userFeignInterface;

    //查询所有用户
    @RequestMapping("/findAll")
    @ResponseBody
    public List<Users> findAll(){
        return userFeignInterface.findAll();
    }

    //给手机号码发验证码
    @RequestMapping("/ajaxNum")
    @ResponseBody
    public String sendMsg(@RequestParam("phoneNum") String phoneNum) throws Exception{
        System.out.println("phone:"+phoneNum);
        return userFeignInterface.sendMsg(phoneNum);
    }

//验证手机验证码
    @RequestMapping("/verfiy")
    public String login(@RequestParam("phoneNum") String phoneNum,@RequestParam("code") String code,Model model){
        System.out.println("phoneNum:"+phoneNum+","+"code:"+code);
        int num = userFeignInterface.login(phoneNum, code);
        System.out.println("num:"+num);
        if(num==1){
            return "redirect:/index.html";
        }else {
            model.addAttribute("errorMess", "登录失败,请重试");
            return "gm-login";
        }
    }

//判断该手机号是否已被注册
    @RequestMapping("/selectPhone")
    @ResponseBody
    public  int  selectPhone(@RequestParam("phoneNum") String phoneNum){
        return  userFeignInterface.selectPhone(phoneNum);
    }

    //判断该用户名是否已被注册
    @RequestMapping("/selectUserName")
    @ResponseBody
    public  int  selectUserName(@RequestParam("userName") String userName){
        return  userFeignInterface.selectUserName(userName);
    }

    //用户注册
    @RequestMapping("/userRegister")
    @ResponseBody
    public   boolean   userRegister(Users users){
        //spring 自带的 DigestUtils 工具类可以进行 md5 加密
        String password = DigestUtils.md5DigestAsHex(users.getPassWord().getBytes());
        users.setPassWord(password);
        return  userFeignInterface.userRegister(users);
    }



















    //**************后台*************

    //管理员登录
    @RequestMapping(value="/adminLogin",method = RequestMethod.POST)
    public String adminLogin(Users users, Model model, HttpSession session) {
        //解密
        String password = DigestUtils.md5DigestAsHex(users.getPassWord().getBytes());
        users.setPassWord(password);
        Users u = userFeignInterface.adminLogin(users);
        if (u== null) {
            model.addAttribute("errorMess", "用户名或密码错误");
            return "forward:/Manager/login.html";
        } else {
            session.setAttribute("user", u);
            return "redirect:/Manager/frame.html";
        }
    }

    //查询用户
    @RequestMapping("/findUsers/{userName}")
    @ResponseBody
    public Map<String, Object> findUsers(@PathVariable("userName") String userName, int page, int limit) {
        PageInfo<Users> usersPageInfo = userFeignInterface.UsersFenYe(userName, page, limit);
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("code", 0);
        map.put("msg", "");
        map.put("count", usersPageInfo.getTotalCount());  //总记录数
        map.put("data",  usersPageInfo.getList());
        return map;
    }

    //删除用户
    @RequestMapping("/delUser/{id}")
    @ResponseBody
    public boolean delUser(@PathVariable("id") Integer id){
        return  userFeignInterface.delUser(id);
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
        Users user = new Users();
        user.setId(Integer.valueOf(map.get("id")));
        user.setUserName(map.get("userName"));
        user.setSex(Integer.valueOf(map.get("sex")));
        user.setBirthday(Date.valueOf(map.get("birthday")));
        user.setPhone(map.get("phone"));
        user.setEmail(map.get("email"));
        user.setTime(Date.valueOf(map.get("time")));
        user.setAddress(map.get("address"));
        user.setHeadImg(map.get("headImg"));
        return userFeignInterface.updateUser(user);
    }

    //上传用户头像
    @RequestMapping("/upload/img")
    @ResponseBody
    public Map<String, Object> upload(MultipartFile file, HttpServletRequest request) throws IOException {
        Map<String, Object> res = new HashMap<>();
        //服务器上存放图片的文件夹路径
        String path = "/users";
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

    //查询会员
    @RequestMapping("/findVip/{userName}/{gradeName}")
    @ResponseBody
    public Map<String, Object> findVip(@PathVariable("userName") String userName, @PathVariable("gradeName") String gradeName,int page, int limit){
        Map hm = new HashMap();
        hm.put("userName", userName);
        hm.put("gradeName", gradeName);
        PageInfo<Map> userInfoPageInfo = userFeignInterface.UserInfoFenYe(hm,page,limit);
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("code", 0);
        map.put("msg", "");
        map.put("count", userInfoPageInfo.getTotalCount());  //总记录数
        map.put("data",  userInfoPageInfo.getList());
        return map;
    }

    //显示所有会员等级
    @RequestMapping("/allGrade")
    @ResponseBody
    public List<Grade> allGrade() {
        return  userFeignInterface.allGrade();
    }

    //管理员修改密码
    @RequestMapping("/updatePwd")
    @ResponseBody
    public  boolean  updatePwd(Users users){
        //spring 自带的 DigestUtils 工具类可以进行 md5 加密
        String password = DigestUtils.md5DigestAsHex(users.getPassWord().getBytes());
        users.setPassWord(password);
        return userFeignInterface.updatePwd(users);
    }

    //查询管理员的原始密码是否正确
    @RequestMapping("/selectPwd")
    @ResponseBody
    public Users selectPwd(Users user){
        //解密
        String password = DigestUtils.md5DigestAsHex(user.getPassWord().getBytes());
        user.setPassWord(password);
        return  userFeignInterface.selectPwd(user);
    }

    //管理员注销退出登录
    @RequestMapping("/outUser")
    public  String  outUser(HttpSession session){
        session.removeAttribute("user");
        return "redirect:/Manager/login.html";
    }


}
