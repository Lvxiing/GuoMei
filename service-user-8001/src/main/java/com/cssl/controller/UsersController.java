package com.cssl.controller;


import com.alibaba.druid.sql.visitor.functions.Now;
import com.aliyuncs.DefaultAcsClient;
import com.aliyuncs.IAcsClient;
import com.aliyuncs.dysmsapi.model.v20170525.SendSmsRequest;
import com.aliyuncs.dysmsapi.model.v20170525.SendSmsResponse;
import com.aliyuncs.profile.DefaultProfile;
import com.aliyuncs.profile.IClientProfile;
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.cssl.api.RedisFeignInterface;
import com.cssl.entity.Growup;
import com.cssl.entity.GrowupType;
import com.cssl.entity.PageInfo;
import com.cssl.entity.Users;
import com.cssl.service.GrowupService;
import com.cssl.service.Growup_typeService;
import com.cssl.service.UsersService;
import com.cssl.util.AliAccessKey;
import com.cssl.util.VerifyCodeUtil;
import com.github.pagehelper.Page;
import org.apache.logging.log4j.message.StringFormattedMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.ReactiveUpdateOperation;
import org.springframework.util.DigestUtils;
import org.springframework.web.bind.annotation.*;

import org.springframework.stereotype.Controller;
import com.aliyuncs.http.MethodType;
import org.springframework.ui.Model;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.sql.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author lx
 * @since 2019-09-10
 */
@RestController
@RequestMapping("/users")
public class UsersController {

    @Autowired
    private UsersService usersService;

    @Autowired
    private RedisFeignInterface redisFeignInterface;


    @RequestMapping("/ajaxNum")
    public String sendMsg(@RequestParam("phoneNum") String phoneNum) throws Exception{
        System.out.println("***phone:"+phoneNum);
        //设置超时时间-可自行调整
        System.setProperty("sun.net.client.defaultConnectTimeout", "10000");
        System.setProperty("sun.net.client.defaultReadTimeout", "10000");
//初始化ascClient需要的几个参数
        final String product = "Dysmsapi";//短信API产品名称（短信产品名固定，无需修改）
        final String domain = "dysmsapi.aliyuncs.com";//短信API产品域名（接口地址固定，无需修改）
//替换成你的AK
        final String accessKeyId = AliAccessKey.accessKeyId;//你的accessKeyId,参考本文档步骤2
        final String accessKeySecret = AliAccessKey.accessKeySecret;//你的accessKeySecret，参考本文档步骤2
//初始化ascClient,暂时不支持多region（请勿修改）
        IClientProfile profile = DefaultProfile.getProfile("cn-hangzhou", accessKeyId,
                accessKeySecret);
        DefaultProfile.addEndpoint("cn-hangzhou", "cn-hangzhou", product, domain);
        IAcsClient acsClient = new DefaultAcsClient(profile);
        //组装请求对象
        SendSmsRequest request = new SendSmsRequest();
        //使用post提交
        request.setMethod(MethodType.POST);
        //必填:待发送手机号。支持以逗号分隔的形式进行批量调用，批量上限为1000个手机号码,批量调用相对于单条调用及时性稍有延迟,验证码类型的短信推荐使用单条调用的方式；发送国际/港澳台消息时，接收号码格式为国际区号+号码，如“85200000000”
        request.setPhoneNumbers(phoneNum);
        //必填:短信签名-可在短信控制台中找到
        request.setSignName("公子网站验证校验");
        //必填:短信模板-可在短信控制台中找到，发送国际/港澳台消息时，请使用国际/港澳台短信模版
        request.setTemplateCode("SMS_172885074");
        //可选:模板中的变量替换JSON串,如模板内容为"亲爱的${name},您的验证码为${code}"时,此处的值为
        //友情提示:如果JSON中需要带换行符,请参照标准的JSON协议对换行符的要求,比如短信内容中包含\r\n的情况在JSON中需要表示成\\r\\n,否则会导致JSON在服务端解析失败
        //生成6位的动态验证码
        String numeric = VerifyCodeUtil.randNum();
        System.out.println("***验证码:"+numeric);
        request.setTemplateParam("{\"code\":\""+numeric+"\"}");
        //可选-上行短信扩展码(扩展码字段控制在7位或以下，无特殊需求用户请忽略此字段)
        //request.setSmsUpExtendCode("90997");
        //可选:outId为提供给业务方扩展字段,最终在短信回执消息中将此值带回给调用者
        request.setOutId("yourOutId");

        //请求失败这里会抛ClientException异常
        SendSmsResponse sendSmsResponse = acsClient.getAcsResponse(request);
        if(sendSmsResponse.getCode() != null && sendSmsResponse.getCode().equals("OK")) {
            //请求成功  存储到redis缓存
            redisFeignInterface.set("sms_"+phoneNum,numeric,-300);
            return numeric;
        }else {
            System.out.println("失败状态"+sendSmsResponse.getCode());
            System.out.println("失败原因"+sendSmsResponse.getMessage());
            return "error";
        }

    }

    @RequestMapping("/verfiy")
    public Map<String,String> login(@RequestParam("phoneNum") String phoneNum, @RequestParam("code") String code) {

        //获取用户输入的手机号和验证码//客户端用户输入的手机号 //客户端用户输入的验证码

        //获取redis中存放的验证码
        String redisCode = redisFeignInterface.get("sms_" + phoneNum);
        System.out.println("*****redisCode:"+redisCode);
Map<String,String> hm=new HashMap<>();

        if (code != null && !"".equals(code)) {
            //如果用户输入的验证码和生成的验证码保持一致
            if (code.equals(redisCode)) {
                //删除redis中存放的验证码缓存
 //答辩时取消该注释!!!               redisFeignInterface.del(new String[]{"sms_" + phoneNum});
                //同时删除redis中存放的用户输入验证码的错误次数
                redisFeignInterface.del(new String[]{"error_" + phoneNum});
                hm.put("mess","success");
                return  hm;    //"index";
            } else {
                //如果验证失败  给该用户总共三次输入机会，大于三次重新获取验证码
                //如果是第一次错误，则第一次给用户创建错误次数并存放于redis中，每次错误都会在原有的键上对其值+1
                Long incr = redisFeignInterface.incr("error_" + phoneNum,1);
                if (incr > 3) {  //如果用户错误的次数大于三次
                    //清除旧的验证码
                    redisFeignInterface.del(new String[]{"sms_" + phoneNum});
                    //清除redis中存放的用户输入验证码的错误次数
                    redisFeignInterface.del(new String[]{"error_" + phoneNum});
                   // model.addAttribute("accp", "1001");//超过验证码错误次数，请重新获取验证码！
                    hm.put("mess","error");
                    return   hm;//"login";
                } else { //如果用户输入错误且错误小于3次 则刷新一次页面用户继续输入
                    hm.put("mess","error");
                    return  hm; //"login";
                }

            }
        } else {
            System.out.println("没有取到验证码");
            hm.put("mess","error");
            return    hm;//"login";
        }

    }

    @RequestMapping("/updateLoginTime")
    public boolean updateLoginTime(@RequestBody  Users users) {
        users.setLoginTime(new java.util.Date());
       return  usersService.updateById(users);
    }

    @RequestMapping("/selectPhone")
    public  Users  selectPhone(@RequestParam("phoneNum") String phoneNum){
      return  usersService.getOne(new QueryWrapper<Users>().eq("user_phone",phoneNum));
    }

    @RequestMapping("/userRegister")
    public   boolean   userRegister(@RequestBody  Users users){
        //spring 自带的 DigestUtils 工具类可以进行 md5 加密
        String password = DigestUtils.md5DigestAsHex(users.getPassWord().getBytes());
        users.setPassWord(password);
        return usersService.save(users);
    }

    @RequestMapping("/selectUserName")
    public  Users  selectUserName(@RequestParam("userName") String userName){
        return  usersService.getOne(new QueryWrapper<Users>().eq("user_name", userName));
    }

    @RequestMapping("/findVip")
    public List<Map> findVip(@RequestParam  Map map) {
        return usersService.findVip(map);
    }






    //**************后台************


    @RequestMapping("/adminLogin")
    public Users adminLogin(@RequestBody Users users){
        //解密
        String password = DigestUtils.md5DigestAsHex(users.getPassWord().getBytes());
        users.setPassWord(password);
        return  usersService.getOne(new QueryWrapper<Users>().eq("user_name",users.getUserName()).eq("user_pwd",users.getPassWord()).eq("user_role",1));
    }

    @RequestMapping("/findUsers/{userName}/{pageIndex}/{pageSize}")
    public PageInfo<Users> usersFenYe(@PathVariable("userName") String userName,@PathVariable("pageIndex") int pageIndex,@PathVariable("pageSize") int pageSize) {
        Page<Users> usersPage = usersService.usersFenYe(userName, pageIndex, pageSize);
        PageInfo<Users> page=new PageInfo<>();
        page.setList(usersPage.getResult());
        page.setTotalCount((int)usersPage.getTotal());
        return   page;
    }

    @RequestMapping("/delUser/{id}")
    public boolean delUser(@PathVariable("id") Integer id) {
        return usersService.removeById(id);
    }

    @RequestMapping("/findById/{id}")
    public Users findById(@PathVariable("id") Integer id){
        return usersService.getOne(new QueryWrapper<Users>().eq("user_id", id));
    }

    @RequestMapping("/updateUser")
    public boolean updateUser(@RequestParam Map<String,String> map)
    {
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
        if(map.get("infoComplete")!=null){
            user.setInfoComplete(Integer.valueOf(map.get("infoComplete")));
        }
        return usersService.updateById(user);
    }

    @RequestMapping("/updatePwd")
    public boolean  updatePwd(@RequestBody Users users){
        //spring 自带的 DigestUtils 工具类可以进行 md5 加密
        String password = DigestUtils.md5DigestAsHex(users.getPassWord().getBytes());
        users.setPassWord(password);
        return  usersService.updateById(users);
    }

    @RequestMapping("/selectPwd")
    public Users selectPwd(@RequestBody  Users user) {
        //解密
        String password = DigestUtils.md5DigestAsHex(user.getPassWord().getBytes());
        user.setPassWord(password);
        return usersService.getOne(new QueryWrapper<Users>().eq("user_id",user.getId()).eq("user_pwd",user.getPassWord()));
    }

    @RequestMapping("/findVip/{pageIndex}/{pageSize}")
    public PageInfo<Map> userVipFenYe(@RequestBody Map map, @PathVariable("pageIndex") int pageIndex, @PathVariable("pageSize") int pageSize) {
        Page<Map> userVipPage = usersService.userVipFenYe(map, pageIndex, pageSize);
        PageInfo<Map> page=new PageInfo<>();
        page.setList(userVipPage.getResult());
        page.setTotalCount((int)userVipPage.getTotal());
        return   page;
    }



}
