package com.cssl.controller;


import org.apache.commons.mail.EmailException;
import org.apache.commons.mail.HtmlEmail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "email")
public class EmailController {

    @Autowired
    private JavaMailSender mailSender;

    /**
     * 发送人
     */
    private final String FROM = "1179765743@qq.com";

    /**
     * 名称
     */
    private final String FROM_NAME = "国美";
    /**
     * 服务器名称
     */
    private final String HOST = "smtp.qq.com";
    /**
     * 授权码(1天有效时间)
     */
    private final String PASSWORD = "qcdetsabwxvpiced";

    @PostMapping("send_email")
    public String send_Email(@RequestParam(value = "userEmail") String to,@RequestParam(value = "eSubject") String subject,@RequestParam(value = "uName") StringBuffer content,@RequestParam(value = "Eimg") String Eimg,@RequestParam(value = "gTitle") String gTitle) throws EmailException {
        //创建一个htmlEmail实例对象
        HtmlEmail email = new HtmlEmail();
        //邮箱的STMP服务器,qq邮箱w为smtp.qq.com
        email.setHostName(HOST);
        //设置发送的字符类型
        email.setCharset("utf-8");
        //设置收件人
        email.addTo(to);
        //发送人的y邮箱为自己的, 用户名可以随便填
        email.setFrom(FROM, FROM_NAME);
        //设置发送人到的邮箱和用户名和授权码(授权码是自己设置的)
        email.setAuthentication(FROM, PASSWORD);
        //设置发送主题
        email.setSubject(subject);
        email.setHtmlMsg("<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">\n" +
                "<html lang=\"en\">\n" +
                "<head>\n" +
                "    <meta charset=\"UTF-8\">\n" +
                "    <title>邮件提醒</title>\n" +
                "    　　<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/>\n" +
                "</head>\n" +
                "<body style=\"margin: 0; padding: 0;\">\n" +
                "<table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\" style=\"border-collapse: collapse;\">\n" +
                "    <tr>\n" +
                "        <td>\n" +
                "            <div style=\"margin: 20px;text-align: center;margin-top: 50px\">\n" +
                "                <img src='"+Eimg+"' border=\"0\" style=\"display:block;width: 100%;height: 100%\">\n" +
                "            </div>\n" +
                "        </td>\n" +
                "    </tr>\n" +
                "    <tr>\n" +
                "        <td>\n" +
                "            <div style=\"border: #009a61 4px solid;margin: 30px;padding: 20px\">\n" +
                "                <label style=\"font-size: 22px;color: #36649d;font-weight: bold\">您好，欢迎使用国美!</label>\n" +
                "                <p style=\"font-size: 16px\">亲爱的用户&nbsp;<label style='font-weight: bold'>" +content+
                "</label>&nbsp; 您好！欢迎加入国美大家庭。你的商品:<label style='font-weight: bold'>"+gTitle+"</label>已提交订单!请尽快完成付款!\n" +
                "                </p>\n" +
                "                <p style=\"font-size: 16px\">----来自国美管理团队</p>\n" +
                "                <p style=\"color:red;font-size: 14px \">（这是一封自动发送的邮件，请勿回复。）</p>\n" +
                "            </div>\n" +
                "        </td>\n" +
                "    </tr>\n" +
                "    <tr>\n" +
                "    <td>\n" +
                "    </td>\n" +
                "    </tr>\n" +
                "</table>\n" +
                "</body>\n" +
                "</html>\n");
        //进行发送
        email.send();
        return "发送成功";
    }
}
