package com.spring.springmvc.util;


import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.io.IOException;
import java.util.Calendar;
import java.util.Properties;

/**
 * @author: caishengzhi
 * @date: 2017-11-17 23:05
 **/
public class MailUtils {

    private String smtpHost = "smtp.sina.cn";
    private String smtpPort = "25";
    private String from = "mtests@sina.cn";
    private String fromPass = "mstest";

    private String SUBJECT = "【简易思维导图】验证码";
    private String MESSAGE_TYPE = "text/html;charset=gb2312";

    private MailUtils() {

    }

    public MailUtils(String smtpHost, String smtpPort, String from, String fromPass) {
        this.smtpHost = smtpHost;
        this.smtpPort = smtpPort;
        this.from = from;
        this.fromPass = fromPass;
    }

    public boolean sendMessage(String receiver, String content) throws IOException, MessagingException {
        boolean sendSuccess = false;
        sendMessage(this.smtpHost, this.from, this.fromPass, receiver, SUBJECT, content, MESSAGE_TYPE);
        sendSuccess = true;
        return sendSuccess;
    }

    @SuppressWarnings("static-access")
    private void sendMessage(String smtpHost, String from,
                                   String fromUserPassword, String to, String subject,
                                   String messageText, String messageType) throws MessagingException {
        // 第一步：配置javax.mail.Session对象
        System.out.println("为" + smtpHost + "配置mail session对象");


        Properties props = new Properties();
        props.put("mail.smtp.host", smtpHost);
        props.put("mail.smtp.starttls.enable","true");//使用 STARTTLS安全连接
        props.put("mail.smtp.port", smtpPort);	     //google使用465或587端口
        props.put("mail.smtp.auth", "true");		// 使用验证
        //props.put("mail.debug", "true");

        final String userName = from;
        final String password = fromUserPassword;

        Session mailSession = Session.getInstance(props,new MyAuthenticator(from,fromUserPassword));

        // 第二步：编写消息
        System.out.println("编写消息from——to:" + from + "——" + to);

        InternetAddress fromAddress = new InternetAddress(from);
        InternetAddress toAddress = new InternetAddress(to);

        MimeMessage message = new MimeMessage(mailSession);

        message.setFrom(fromAddress);
        message.addRecipient(MimeMessage.RecipientType.TO, toAddress);

        message.setSentDate(Calendar.getInstance().getTime());
        message.setSubject(subject);
        message.setContent(messageText, messageType);

        // 第三步：发送消息
        Transport transport = mailSession.getTransport("smtp");
        transport.connect(smtpHost,from, fromUserPassword);
        Transport.send(message, message.getRecipients(MimeMessage.RecipientType.TO));
        System.out.println("message yes");

    }

    public static void main(String[] args) {
        try {

//            String smtpHost = "smtp.sina.cn";
//            String smtpPort = "25";
//            String from = "mtests@sina.cn";
//            String fromPass = "mstest";

            String smtpHost = "smtpdm.aliyun.com";
            String smtpPort = "80";
            String from = "notify@smtp.mindstorm.site";
            String fromPass = "LTAILDrtQDRGTM97";

            MailUtils mailUtils = new MailUtils(smtpHost, smtpPort, from , fromPass);
            mailUtils.sendMessage("363874279@qq.com", "nihao");

        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }



}

class MyAuthenticator extends Authenticator {
    String userName="";
    String password="";
    public MyAuthenticator(){

    }
    public MyAuthenticator(String userName,String password){
        this.userName=userName;
        this.password=password;
    }
    @Override
    protected PasswordAuthentication getPasswordAuthentication(){
        return new PasswordAuthentication(userName, password);
    }
}

