package com.cssl.job;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.cssl.entity.Coupon;
import com.cssl.service.CouponService;
import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.springframework.beans.factory.annotation.Autowired;

import java.text.SimpleDateFormat;
import java.util.Date;

public class MyJob implements Job {

    @Autowired
    private CouponService couponService;

    @Override
    public void execute(JobExecutionContext jobExecutionContext) throws JobExecutionException {
        Coupon coupon = new Coupon();
        coupon.setStatus(-1);
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        couponService.update(coupon, new UpdateWrapper<Coupon>().eq("end_time", df.format(new Date())));
    }
}
