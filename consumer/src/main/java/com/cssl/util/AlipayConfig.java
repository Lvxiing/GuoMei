package com.cssl.util;

public class AlipayConfig {

    // 应用ID,APPID，收款账号既是您的APPID对应支付宝账号
    public static String app_id = "2016092900627099";

    // 商户私钥，您的PKCS8格式RSA2私钥
    public static String merchant_private_key = "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCL+/N0Ftr0lPDDAZEAAbeWrnVUFUGnnuFrtCMgqT+B/gcFjrknyB8WbS6gF8SVvjs9rxnrKCjv11MT7+kMuw8jb62pe23ib8dvkNMhxMrwRNh6oGVJMTi9vvwEQAtT6Gr1cmH2/VoWgSWU1VlVDSbfKr3KeQpuPzRh4lyaQibjPFz1fZFwI7MfGQkF9Gd9Tra2i/nv8Rmr5jrHtq1129BQX2wofmJ//qzazcakCfX3sG/KhHgngkdnBH+kte1goWQyPtTwhnGrsETixy/MY3mOesYrZXbleb59ZthZD0pD7qvLykd7CQf+SsBne9gl59ISRrul8rPYh9zP0JGKKyT1AgMBAAECggEAOxzTKtO39I6suPyBWcpf146mVzJ+viT2tj+kkddGzUMTfgJOKAF3N0Y16T8AMefaJms5+7bCyr1YBNRLyqd3dhRj9mz78yIWywMSVXE/7YR1EhuHigfyGRZ8X+MXpYBBIpMB0YYdM+GnmBkcFzFtl9H5wXWptPKV0TwAtNd4in49f36UloUP8pnPy6/m8gqmSRwrjTRsbs465P7N9tD2R7lGk6IysX53noXluhL5HIZPydCPuJVl7H2lKJuAkkvXIk/mxYV3iGVa1f5Sr0XcPJxCIkdn0QPzLuryyB2w0IuWPhhFjEduS+/HvIFEp2yG3J+PyL0sLw+qvAsyaUY4YQKBgQD8rDd3ZCO6fkOYMJoab1IFnVqq3gU2j0gxhnQU0jY5+H4d19DqN7W0ed1tmNTDiKYZPnFkeyMPACZ/GA6PCBSeCCb50zpOJXmiyClW9StQkQJI5/IcF71tsj7SShqhhCnpuubvszlVX4kBnkpcv0dlSyLAQ+pZryNs6mLidjBzeQKBgQCN09nKQ0OTp+mTKAi3p55a3roatdOP+lbP64ELflnAxufJnLwsuFmcPxsjFmTjs1JWxJvRZ0MtnfmLFnUhABFTafmUQ1dlUoiPcWtTRWvpEROZdmL4v1NvSJaTbdS1pEhOt/X8Q0+wEquyHEdd2Wk55neXSu9qD4ezapFNZCxCXQKBgQCxFFkDGXFYwCjLPjSiFiZbvP3QBi2NITmtS9eKyBAs7JQmghvuKgD0bPvcVWG3b8tIodSCYTIezzIrnEaHw1f/sSLvrzOLlQP8K1+di9FBc38wbS3mtlSRznvskPa8/40IO26hyu+Bf6TbN35SJdP5j4DZUj+pfu7K5DFNGRu3sQKBgBC4Pt6XW2oWy3Rrrcto2URBKZNoiA5bJszQKKBgPth5Gm4sKgrjmLzQu7RBOZeWVkigWPYwxDymePqqpRhE18YLoj6WScFKH4s5hbuFXZlWSAc5a6WDeKSP3CB5PDBFs7iD+13H2acaLF+M8eTgcoU+5C5TyTGprwe5snN7MbSJAoGAAMPLCY5bx558Utvl/0dhTW9ckqS1ViBHYFpH4dZsdlgepe5o0/DCPg9KWrA+DRuJ6bCHaPfrs6u65EN1kBr8kdQII0eNhukfYF446qPXwIum9qeFNMvsaVgZaon3bNJvkeXDU9P84DCxbLnaceqvei+Y9evy3oCI6ET+hZgAbxE=";

    // 支付宝公钥,查看地址：https://openhome.alipay.com/platform/keyManage.htm 对应APPID下的支付宝公钥。
    public static String alipay_public_key = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDIgHnOn7LLILlKETd6BFRJ0GqgS2Y3mn1wMQmyh9zEyWlz5p1zrahRahbXAfCfSqshSNfqOmAQzSHRVjCqjsAw1jyqrXaPdKBmr90DIpIxmIyKXv4GGAkPyJ/6FTFY99uhpiq0qadD/uSzQsefWo0aTvP/65zi3eof7TcZ32oWpwIDAQAB";


    //notify_url是支付包与服务器交互的页面，用户看不到，支付成功以notify_url返回的参数或者查询订单返回的参数为准。
    // 服务器异步通知页面路径  需http://格式的完整路径，不能加?id=123这类自定义参数，必须外网可以正常访问
    public static String notify_url = "http://127.0.0.1:9001/pay/NotifyServlet";

    //return_url是指付款成功之后返回给用户查看的界面
    // 页面跳转同步通知页面路径 需http://格式的完整路径，不能加?id=123这类自定义参数，必须外网可以正常访问
    public static String return_url = "http://127.0.0.1:9001/pay-success.html";

    // 签名方式
    public static String sign_type = "RSA";

    // 字符编码格式
    public static String charset = "utf-8";

    // 支付宝网关
    public static String gatewayUrl = "https://openapi.alipaydev.com/gateway.do";

    // 支付宝网关
    public static String log_path = "C:\\";

}
