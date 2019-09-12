package com.cssl.util;


import com.jcraft.jsch.*;
import org.apache.commons.net.ftp.FTPClient;
import org.apache.commons.net.ftp.FTPReply;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import java.util.UUID;

/**
 * 上传文件到ftp服务器
 * 使用nginx映射访问图片路径
 * <p>
 * 上传图片
 * 文件夹根目录默认在ftp指定的static/images下
 * <p>
 * 1.调用connect(String path)方法建立ftp连接 path为图片存放的文件夹路径 传入users则路径为static/images/user
 * <p>
 * 2.调用upload(File file)放入要存放的文件
 * <p>
 * 例子在main方法中
 *
 * @author lvxing
 */
public class NginxUtil {

    private static FTPClient ftp; //ftp客户端
    private static String username = "lvxing"; //用户名
    private static String password = "lv85208520"; //密码
    private static Integer port = 21; //端口号
    private static String addr = "47.101.130.148"; //服务器地址

    /**
     * @param path ftp服务器上传路径
     * @return
     * @throws Exception
     */
    public static boolean connect(String path) throws Exception {
        boolean result = false;
        ftp = new FTPClient();
        int reply;
        ftp.connect(addr, port);
        ftp.login(username, password);
        ftp.setFileType(FTPClient.BINARY_FILE_TYPE);
        reply = ftp.getReplyCode();
        if (!FTPReply.isPositiveCompletion(reply)) {
            ftp.disconnect();
            return result;
        }
        ftp.changeWorkingDirectory(path);
        result = true;
        return result;
    }

    /**
     * @param file 上传的文件或文件夹
     * @throws Exception
     */
    public static String upload(File file) throws Exception {
        String newFileName = null;
        if (file.isDirectory()) {
            ftp.makeDirectory(file.getName());
            ftp.changeWorkingDirectory(file.getName());
            String[] files = file.list();
            for (int i = 0; i < files.length; i++) {
                File file1 = new File(file.getPath() + "\\" + files[i]);
                if (file1.isDirectory()) {
                    upload(file1);
                    ftp.changeToParentDirectory();
                } else {
                    File file2 = new File(file.getPath() + "\\" + files[i]);
                    FileInputStream input = new FileInputStream(file2);
                    //生成随机的文件名
                    newFileName = UUID.randomUUID().toString() + file2.getName().substring(file2.getName().length() - 5);
                    ftp.storeFile(newFileName, input);
                    input.close();
                }
            }
        } else {
            File file2 = new File(file.getPath());
            //生成随机的文件名
            newFileName = UUID.randomUUID().toString() + file2.getName().substring(file2.getName().length() - 5);
            FileInputStream input = new FileInputStream(file2);
            ftp.storeFile(newFileName, input);
            input.close();

        }
        return newFileName;

    }

    public static String getFileUrl(String path, String fileName) {
        String url = "http://47.101.130.148:88/images/" + path + "/"+fileName;
        return url;
    }

    public static void main(String[] args) throws Exception {
        connect("product/index");//路径,默认在static/images下
        File file = new File("F:/img/9.jpg"); //上传路径
        String upload = upload(file);
        System.out.println("upload = " + upload);
        String fileUrl = getFileUrl("product/index", upload);
        System.out.println("fileUrl = " + fileUrl);
    }

}
