package com.cssl.config;

import com.cssl.job.MyJob;
import com.cssl.util.MyAdaptableJobFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.quartz.AdaptableJobFactory;
import org.springframework.scheduling.quartz.CronTriggerFactoryBean;
import org.springframework.scheduling.quartz.JobDetailFactoryBean;
import org.springframework.scheduling.quartz.SchedulerFactoryBean;

//quartz配置文件
@Configuration
public class QuartzConfig {
    //1.创建job对象
    @Bean
    public JobDetailFactoryBean jobDetailFactoryBean(){
        JobDetailFactoryBean factory = new JobDetailFactoryBean();
        //关联我们定义的job类
        factory.setJobClass(MyJob.class);
        AdaptableJobFactory a=null;// 业务逻辑层  空指针异常的原因 createJobInstance

        //1.解决办法  继承AdaptableJobFactory 重写createJobInstance  先将myjob类加入SprigIOC

        return factory;
    }

    /**
     * 使用cron表达式
     *
     * */
    @Bean
    public CronTriggerFactoryBean cronTriggerFactoryBean(JobDetailFactoryBean jobDetailFactoryBean){
        CronTriggerFactoryBean factory=new CronTriggerFactoryBean();
        factory.setJobDetail(jobDetailFactoryBean.getObject());
        factory.setCronExpression("0 0 0 */1 * ?");//每天0点触发
        return  factory;

    }


    @Bean
    public SchedulerFactoryBean schedulerFactoryBean(CronTriggerFactoryBean cronTriggerFactoryBean, MyAdaptableJobFactory myAdaptableJobFactory){
        SchedulerFactoryBean factory=new SchedulerFactoryBean();
        //关联 trigger
        factory.setTriggers(cronTriggerFactoryBean.getObject());
        //可以重新设置新job
        factory.setJobFactory(myAdaptableJobFactory);
        return factory;
    }

}
