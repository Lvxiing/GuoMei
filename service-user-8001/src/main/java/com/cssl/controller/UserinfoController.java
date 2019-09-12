package com.cssl.controller;


import com.cssl.entity.PageInfo;
import com.cssl.service.UserinfoService;
import com.github.pagehelper.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.stereotype.Controller;

import java.util.Map;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author lx
 * @since 2019-09-10
 */
@Controller
@RequestMapping("/userinfo")
public class UserinfoController {

    @Autowired
    private UserinfoService userinfoService;

    @RequestMapping("/findVip/{pageIndex}/{pageSize}")
    public PageInfo<Map> UserInfoFenYe(@RequestBody Map map, @PathVariable("pageIndex") int pageIndex, @PathVariable("pageSize") int pageSize) {
        Page<Map> userInfoPage = userinfoService.UserInfoFenYe(map, pageIndex, pageSize);
        PageInfo<Map> page=new PageInfo<>();
        page.setList(userInfoPage.getResult());
        page.setTotalCount((int)userInfoPage.getTotal());
        return   page;
    }

}
