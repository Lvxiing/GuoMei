package com.cssl.util;

//创建工具类  帮助我们实现第三方实体类注入myjob的工作

import org.quartz.spi.TriggerFiredBundle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.AutowireCapableBeanFactory;
import org.springframework.scheduling.quartz.AdaptableJobFactory;
import org.springframework.stereotype.Component;

@Component("myAdaptableJobFactory")
public class MyAdaptableJobFactory extends AdaptableJobFactory {

    //将普通对象加入springIOC的容器中，并且可以完成属性注入
    @Autowired
    private AutowireCapableBeanFactory autowireCapableBeanFactory;

    //该方法需要将业务逻辑层 加入IOC
    @Override
    protected Object createJobInstance(TriggerFiredBundle bundle) throws Exception {
        //原始对象
        Object obj=super.createJobInstance(bundle);
        //将obj这个对象加入Ioc
        autowireCapableBeanFactory.autowireBean(obj);

        return obj;
    }
}
