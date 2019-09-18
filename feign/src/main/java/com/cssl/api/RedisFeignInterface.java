package com.cssl.api;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Map;

@FeignClient(value = "service-redis")
public interface RedisFeignInterface {


    /**
     * 指定缓存失效时间
     *
     * @param key  键
     * @param time 时间(秒)
     * @return
     */
    @RequestMapping("/redis/expire")
    boolean expire(@RequestParam("key") String key, @RequestParam("time") long time);

    /**
     * 根据key 获取过期时间
     *
     * @param key 键 不能为null
     * @return 时间(秒) 返回0代表为永久有效
     */
    @RequestMapping("/redis/getExpire")
    long getExpire(@RequestParam("key") String key);

    /**
     * 判断key是否存在
     *
     * @param key 键
     * @return true 存在 false不存在
     */
    @RequestMapping("/redis/hasKey")
    boolean hasKey(@RequestParam("key") String key);

    /**
     * 删除缓存
     *
     * @param key 可以传一个值 或多个
     */
    @RequestMapping("/redis/del")
    void del(@RequestParam("key") String[] key);

// ============================String=============================

    /**
     * 普通缓存获取
     *
     * @param key 键
     * @return 值
     */
    @RequestMapping("/redis/get")
    String get(@RequestParam("key") String key);

    @RequestMapping("/redis/getSession")
    byte[] getObject(@RequestParam("key") byte[] key);

    @RequestMapping("/redis/setSession")
    void setObject(@RequestParam("key") byte[] key, @RequestParam("value") byte[] value, @RequestParam("time") long time);

    /**
     * 普通缓存放入并设置时间
     *
     * @param key   键
     * @param value 值
     * @param time  时间(秒) time要大于0 如果time小于等于0 将设置无限期
     * @return true成功 false 失败
     */
    @RequestMapping("/redis/set")
    boolean set(@RequestParam("key") String key, @RequestParam("value") Object value, @RequestParam("time") long time);

    /**
     * 递增
     *
     * @param key 键
     * @return
     * @paramby 要增加几(大于0)
     */
    @RequestMapping("/redis/incr")
    long incr(@RequestParam("key") String key, @RequestParam("delta") long delta);

    /**
     * 递减
     *
     * @param key 键
     * @return
     * @paramby 要减少几(小于0)
     */
    @RequestMapping("/redis/decr")
    long decr(@RequestParam("key") String key, @RequestParam("delta") long delta);


}