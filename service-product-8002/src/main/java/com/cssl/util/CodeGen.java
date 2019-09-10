package com.cssl.util;

import com.baomidou.mybatisplus.annotation.DbType;
import com.baomidou.mybatisplus.generator.AutoGenerator;
import com.baomidou.mybatisplus.generator.config.DataSourceConfig;
import com.baomidou.mybatisplus.generator.config.GlobalConfig;
import com.baomidou.mybatisplus.generator.config.PackageConfig;
import com.baomidou.mybatisplus.generator.config.StrategyConfig;
import com.baomidou.mybatisplus.generator.engine.FreemarkerTemplateEngine;

// import com.baomidou.mybatisplus.generator.config.rules.NamingStrategy;

public class CodeGen {

    public static void main(String[] args) {
        AutoGenerator mpg = new AutoGenerator();
        // 选择 freemarker 引擎，默认 Velocity
        mpg.setTemplateEngine(new FreemarkerTemplateEngine());

        // 全局配置
        GlobalConfig gc = new GlobalConfig();
        gc.setAuthor("lx"); // 作者
        gc.setOutputDir("service-product-8002\\src\\main\\java"); // 生成文件的输出目录 默认值：D 盘根目录
        gc.setFileOverride(false); // 是否覆盖同名文件，默认是false
        gc.setOpen(true); // 是否打开输出目录 默认true
        gc.setActiveRecord(true); // 不需要ActiveRecord特性的请改为false
        gc.setEnableCache(false); // XML 二级缓存
        gc.setBaseResultMap(true); // XML ResultMap
        gc.setBaseColumnList(false); // XML columList
        gc.setServiceName("%sService"); // 设置service接口名 %s占位符  service后缀
        mpg.setGlobalConfig(gc);

        // 数据源配置
        DataSourceConfig dsc = new DataSourceConfig();
        dsc.setDbType(DbType.MYSQL);
        dsc.setDriverName("com.mysql.jdbc.Driver");
        dsc.setUsername("root");
        dsc.setPassword("root");
        dsc.setUrl(
                "jdbc:mysql://localhost:3306/guomei?useUnicode=true&serverTimezone=UTC&characterEncoding=utf8");
        mpg.setDataSource(dsc);

        // 数据源配置
        StrategyConfig strategy = new StrategyConfig();
        // strategy.setTablePrefix(new String[] { "buy_" });// // 此处可以修改为您的表前缀׺
        // strategy.setNaming(NamingStrategy.no_change);// 表名生成策略 默认是全部表
        //strategy.setInclude(new String[] {"emp", "dept"}); // 表名生成策略 指定表
        strategy.setEntityLombokModel(true);

        mpg.setStrategy(strategy);

        // 包配置
        PackageConfig pc = new PackageConfig();
        pc.setParent("com.cssl");
        // pc.setModuleName("test");
        mpg.setPackageInfo(pc);

        // 执行生成
        mpg.execute();
    }
}
