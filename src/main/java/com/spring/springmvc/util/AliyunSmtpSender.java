package com.spring.springmvc.util;

import com.aliyuncs.dm.simple.Email;
import com.aliyuncs.dm.simple.MailSender;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

/**
 * @author caishengzhi
 * @date 2018/1/9 15:47
 */
@Component
public class AliyunSmtpSender {

    @Value("${smtpHost}")
    private String smtpHost = "smtp.sina.cn";
    @Value("${smtpPort}")
    private String smtpPort = "25";
    @Value("${smtpFrom}")
    private String smtpFrom = "mtests@sina.cn";
    @Value("${smtpFromPass}")
    private String fromPass = "mstest";

    private String subject = "【简易思维导图】验证码";
    private String contentPrefix = "欢迎使用简易思维导图, 您的验证码是: ";

    private MailSender mailSender;

    public AliyunSmtpSender() {

    }

    public boolean smtpSend(String toAddress, String content) {

        if(mailSender == null) {
            mailSender = new MailSender(smtpHost, smtpPort, smtpFrom, fromPass);
        }

        boolean sendSuccess = false;
        List<Email.Address> addressList = new ArrayList<Email.Address>();
        addressList.add(new Email.Address(toAddress, "ssss"));
        Email email = Email.builder()
                .from(smtpFrom)
                .recipients(addressList)
                .subject(subject)
                .text(content)
                .replyToAddress(new Email.Address(smtpFrom))
                .build();

        String result = mailSender.sendMail(email);
        if("success".equals(result)) {
            sendSuccess = true;
        }
        return sendSuccess;
    }

}
