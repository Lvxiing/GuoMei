package com.cssl;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@EnableEurekaClient
@MapperScan("com.cssl.mapper")
@EnableTransactionManagement
@EnableFeignClients(value = "com.cssl.api")
@EnableScheduling//启动quartz
public class ServiceProduct8002Application {

    public static void main(String[] args) {
        SpringApplication.run(ServiceProduct8002Application.class, args);
    }

}
