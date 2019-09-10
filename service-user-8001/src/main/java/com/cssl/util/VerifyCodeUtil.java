package com.cssl.util;

import java.util.Random;

public class VerifyCodeUtil {
    private VerifyCodeUtil(){}
    private static final VerifyCodeUtil instance = new VerifyCodeUtil();
    public static VerifyCodeUtil getInstance()
    {
        return instance;
    }
    public static String randNum() {
        StringBuffer sb = new StringBuffer();
        int values[] = new int[9];
        int temp1, temp2, temp3;
        Random r = new Random();
        //初始化数组
        for (int i = 0; i < values.length; i++) {
            values[i] = i + 1;
        }
        //随机交换values.length次
        for (int i = 0; i < values.length; i++) {
            temp1 = Math.abs(r.nextInt()) % (values.length - 1); //随机产生一个位置
            temp2 = Math.abs(r.nextInt()) % (values.length - 1); //随机产生另一个位置
            if (temp1 != temp2) {
                temp3 = values[temp1];
                values[temp1] = values[temp2];
                values[temp2] = temp3;
            }
        }
        // 遍历数组并打印数据
        for (int i = 0; i <6; i++) {
            sb.append(values[i]);
        }
        return sb.toString();
    }
}
