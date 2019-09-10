package com.cssl;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@EnableEurekaClient          //启动后会自动注册进eureka服务中
@MapperScan("com.cssl.mapper")
@EnableTransactionManagement
@EnableFeignClients(value = "com.cssl.api")
public class ServiceUser8001Application {

    public static void main(String[] args) {
        SpringApplication.run(ServiceUser8001Application.class, args);
    }

}
