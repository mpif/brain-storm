package com.spring.springmvc.util;

import com.aliyuncs.DefaultAcsClient;
import com.aliyuncs.IAcsClient;
import com.aliyuncs.dm.DmClient;
import com.aliyuncs.dm.HangZhouDmClient;
import com.aliyuncs.dm.model.v20151123.SingleSendMailRequest;
import com.aliyuncs.dm.model.v20151123.SingleSendMailResponse;
import com.aliyuncs.exceptions.ClientException;
import com.aliyuncs.exceptions.ServerException;
import com.aliyuncs.http.HttpResponse;
import com.aliyuncs.profile.DefaultProfile;
import com.aliyuncs.profile.IClientProfile;

/**
 * @Author: ShengzhiCai
 * @Date: 2017-11-28 22:06
 *
 * Java SDK 手册 - 发送邮件示例
 * https://help.aliyun.com/document_detail/29459.html?spm=5176.2020520150.101.15.626d9f6zQBpcA
 *
 */

public class SingleSendMail {

    public void send() {

        String accessKey = "LTAILDrtQDRGTM97";
        String accessSecret = "SmO1DUrzooukwypukv2hIU0ocpcoi0";

        // 如果是除杭州region外的其它region（如新加坡、澳洲Region），需要将下面的"cn-hangzhou"替换为"ap-southeast-1"、或"ap-southeast-2"。
//        IClientProfile profile = DefaultProfile.getProfile("cn-hangzhou", accessKey, accessSecret);
        IClientProfile profile = DefaultProfile.getProfile("cn-beijing", accessKey, accessSecret);
        // 如果是除杭州region外的其它region（如新加坡region）， 需要做如下处理
//        try {
//            DefaultProfile.addEndpoint("dm.ap-southeast-1.aliyuncs.com", "ap-southeast-1", "Dm",  "dm.ap-southeast-1.aliyuncs.com");
//        } catch (ClientException e) {
//            e.printStackTrace();
//        }
        IAcsClient client = new DefaultAcsClient(profile);


//        DmClient client = new HangZhouDmClient(accessKey, accessSecret);
        SingleSendMailRequest request = new SingleSendMailRequest();
        try {

            // 如果是除杭州region外的其它region（如新加坡region）,必须指定为2017-06-22
//            request.setVersion("2017-06-22");
            request.setAccountName("notify@smtp.mindstorm.site");
            request.setFromAlias("发信人昵称");
            request.setAddressType(1);
            request.setTagName("mailTag");
            request.setReplyToAddress(true);
            request.setToAddress("363874279@qq.com");
            request.setSubject("邮件主题");
            request.setHtmlBody("邮件正文");

            HttpResponse httpResponse = client.doAction(request);
            int status = httpResponse.getStatus();
            byte[] content = httpResponse.getHttpContent();
            System.out.println("status:" + status);
            System.out.println("content:" + new String(content));

//            SingleSendMailResponse httpResponse = client.getAcsResponse(request);
//            String envId = httpResponse.getEnvId();
//            String requestId = httpResponse.getRequestId();
//            System.out.println("envId:" + envId);
//            System.out.println("requestId:" + requestId);

        } catch (ServerException e) {
            e.printStackTrace();
        }
        catch (ClientException e) {
            e.printStackTrace();
        }


    }


}
