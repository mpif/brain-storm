package com.spring.springmvc;

import com.aliyuncs.DefaultAcsClient;
import com.aliyuncs.IAcsClient;
import com.aliyuncs.dm.model.v20151123.SingleSendMailRequest;
import com.aliyuncs.dm.model.v20151123.SingleSendMailResponse;
import com.aliyuncs.dm.simple.Email;
import com.aliyuncs.dm.simple.MailSender;
import com.aliyuncs.exceptions.ClientException;
import com.aliyuncs.exceptions.ServerException;
import com.aliyuncs.profile.DefaultProfile;
import com.aliyuncs.profile.IClientProfile;
import com.spring.springmvc.util.SingleSendMail;
import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

/**
 * @author caishengzhi
 * @date 2017/12/28 14:06
 */
public class AliyunMailTest {

    @Test
    public void aliyunMailTest() {
        SingleSendMail ssm = new SingleSendMail();
        ssm.send();
    }

    @Test
    public void aliyunSmtpSend() {

        String host = "smtpdm.aliyun.com";
        String port = "25";
        String userName = "notify@smtp.mindstorm.site";
        String password = "LTAILDrtQDRGTM97";
        MailSender mailSender = new MailSender(host, port, userName, password);

        Email.From mailFrom = Email.builder();
        Email.Recipients recipients = mailFrom.from("notify@smtp.mindstorm.site");
        Email.EmailBuilder mailBuilder = recipients.to("363874279@qq.com");
        mailBuilder.replyToAddress(new Email.Address("smtp@mindstorm.site", "replyToAddress"));
        mailBuilder.subject("测试邮件");
        mailBuilder.text("测试邮件body内容");
        Email email = mailBuilder.build();

        String result = mailSender.sendMail(email);
        System.out.println(result);




    }

    @Test
    public void aliyunSmtpSendOfficial() {

        String smtpHost = "smtpdm.aliyun.com";
        String smtpPort = "25";
        String smtpFrom = "notify@smtp.mindstorm.site";
        String fromPass = "LTAILDrtQDRGTM97";

        String subject = "【简易思维导图】验证码";
        String content = "欢迎使用简易思维导图, 您的验证码是: 1234";

        String toAddress = "363874279@qq.com";

        MailSender mailSender = new MailSender(smtpHost, smtpPort, smtpFrom, fromPass);

        boolean sendSuccess = false;
        List<Email.Address> addressList = new ArrayList<Email.Address>();
        addressList.add(new Email.Address(toAddress, "ssss"));
        Email email = Email.builder()
                .from(smtpFrom, "Notify")
                .recipients(addressList)
                .subject(subject)
                .text(content)
                .replyToAddress(new Email.Address(smtpFrom, "Notify"))
                .build();

        String result = mailSender.sendMail(email);
        System.out.println(result);
        if("success".equals(result)) {
            sendSuccess = true;
        }

    }

    @Test
    public void aliyunHttpMailSend() {

        IClientProfile profile = DefaultProfile.getProfile("cn-hangzhou", "<your accessKey>", "<your accessSecret>");
        IAcsClient client = new DefaultAcsClient(profile);
        try {

            SingleSendMailRequest request = new SingleSendMailRequest();
//            request.set


            SingleSendMailResponse response = client.getAcsResponse(request);




        }catch (ServerException e) {
            e.printStackTrace();
        }
        catch (ClientException e) {
            e.printStackTrace();
        }
    }

}
