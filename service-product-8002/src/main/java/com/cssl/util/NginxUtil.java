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
    private static boolean connect(String path) throws Exception {
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
    private static void upload(File file) throws Exception {
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
                    String newFileName = UUID.randomUUID().toString() + file2.getName().substring(file2.getName().length() - 5);
                    ftp.storeFile(newFileName, input);
                    input.close();
                }
            }
        } else {
            File file2 = new File(file.getPath());
            //生成随机的文件名
            String newFileName = UUID.randomUUID().toString() + file2.getName().substring(file2.getName().length() - 5);
            FileInputStream input = new FileInputStream(file2);
            ftp.storeFile(newFileName, input);
            input.close();
        }
    }

    public static void main(String[] args) throws Exception {
        connect("product/index");//路径,默认在static/images下
        File file = new File("F:/img/9.jpg"); //上传路径
        upload(file);
    }

}
