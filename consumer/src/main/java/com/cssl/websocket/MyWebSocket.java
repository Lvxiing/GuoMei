package com.cssl.websocket;

import org.springframework.stereotype.Component;

import javax.websocket.*;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;
import java.io.IOException;
import java.util.concurrent.CopyOnWriteArraySet;

/**
 * Created by tym on 2018/10/19 0019.
 */
@ServerEndpoint(value = "/websocket/{nickname}")
@Component
public class MyWebSocket {
    //用来存放每个客户端对应的MyWebSocket对象。   
    private static CopyOnWriteArraySet<MyWebSocket> webSocketSet = new CopyOnWriteArraySet<MyWebSocket>();
    //与某个客户端的连接会话，需要通过它来给客户端发送数据

    //静态变量，用来记录当前在线连接数。应该把它设计成线程安全的。
    private static int onlineCount = 0;

    private Session session;

    private String nickname;

    /**
     *      * 连接建立成功调用的方法
     *     
     */

    @OnOpen
    public void onOpen(Session session, @PathParam("nickname") String nickname) {
        this.session = session;
        this.nickname = nickname;
        webSocketSet.add(this);//加入set中
        addOnlineCount();
        System.out.println("有新连接" + nickname + "加入！当前在线人数为" + getOnlineCount());
       /* try {
            sendMessage("欢迎" + nickname + "进入聊天室！！<br/>");
        } catch (IOException e) {
            System.out.println("IO异常");
        }
        */
    }

    /**
     *      * 连接关闭调用的方法
     *     
     */

    @OnClose
    public void onClose() {
        webSocketSet.remove(this); //从set中删除
        subOnlineCount();           //在线数减1
        System.out.println("有一连接关闭！当前在线人数为" + getOnlineCount());
    }

    /**
     *      * 收到客户端消息后调用的方法
     *      *
     *      * @param message 客户端发送过来的消息
     */

    @OnMessage
    public void onMessage(String message, Session session, @PathParam("nickname") String nickname) {
        System.out.println("来自客户端的消息-->" + message);
        //群发消息
        this.broadcast(message);
    }


 /**
      * 发生错误时调用
      *
      */

    @OnError
    public void onError(Session session, Throwable error) {
System.out.println("发生错误");
error.printStackTrace();
}
 /**
      * 群发自定义消息
      * */
        public void broadcast(String message) {
            for (MyWebSocket item : webSocketSet) {
                try {
                    item.sendMessage(message);
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
}


    /*
     * 控制器传用户id过来获取WebSocket对象推送强制下线消息
     */
    public static MyWebSocket getWebSocket(String userid) {
        if (webSocketSet == null || webSocketSet.size() <= 0) {
            return null;
        }
        for (MyWebSocket item : webSocketSet) {
            if (userid.equals(item.nickname)) {
                return item;
            }
        }
        return null;
    }


    public void sendMessage(String message) throws IOException {
        this.session.getBasicRemote().sendText(message);
        //this.session.getAsyncRemote().sendText(message);
    }

    /**
     * 群发自定义消息
     * */
    public static void sendInfo(String message) throws IOException {
        for (MyWebSocket item : webSocketSet) {
            try {
                item.sendMessage(message);
            } catch (IOException e) {
                continue;
            }
        }
    }

    public static synchronized int getOnlineCount() {
        return onlineCount;
    }

    public static synchronized void addOnlineCount() {
        MyWebSocket.onlineCount++;
    }

    public static synchronized void subOnlineCount() {
        MyWebSocket.onlineCount--;
    }

}