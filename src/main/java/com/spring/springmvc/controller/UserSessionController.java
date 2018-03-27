package com.spring.springmvc.controller;

import com.spring.springmvc.constant.ContextConstants;
import com.spring.springmvc.constant.HttpHeaderConstants;
import com.spring.springmvc.constant.SessionConstants;
import com.spring.springmvc.dto.Message;
import com.spring.springmvc.model.BrainMapping;
import com.spring.springmvc.model.User;
import com.spring.springmvc.service.BlackListService;
import com.spring.springmvc.service.BrainMappingService;
import com.spring.springmvc.service.UserService;
import com.spring.springmvc.util.*;
import com.sun.deploy.net.HttpResponse;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.collections.CollectionUtils;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.util.WebUtils;

import javax.annotation.Resource;
import javax.mail.MessagingException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.*;
import java.util.*;

/**
 * @author: caishengzhi
 * @date: 2017-11-16 15:51
 **/
@Controller
public class UserSessionController extends BaseController {

    private Logger log = LogManager.getLogger(UserSessionController.class);

    @Resource
    private UserService userService;

    @Resource
    private BrainMappingService brainMappingService;

    @Resource(name="user01")
    private User user01;

    @Resource(name="user02")
    private User user02;

    @Resource
    private MailUtils mailUtils;

    @Resource
    private SmsSender smsSender;

    @Value("${smtpSender}")
    private String smtpSender;

    @Resource
    private AliyunSmtpSender aliyunSmtpSender;

    @Resource
    private BlackListService blackListService;

    @RequestMapping(value = "/verifyCode", method = {RequestMethod.GET})
    public Map<String, Object> verifyCode(
            @RequestParam(value="telephone", required = false) String telephone) {

        if(log.isInfoEnabled()) {
            log.info("verifyCode, telephone={}", telephone);
        }
        System.out.println("telephone=" + telephone);

        Message message = new Message();

        Map<String, Object> rtnRes = new HashMap<String, Object>();

        try {


            if(StringUtils.isNotEmpty(telephone)) {

                System.out.println("user01 == user02:" + (user01 == user02));
                System.out.println("user01.equals(user02):" + (user01.equals(user02)));

                /**
                 * 校验手机号或者邮箱
                 */
                if(RegexUtils.isValidMobile(telephone) || RegexUtils.isValidEmail(telephone)) {

                    HttpServletRequest request = super.getRequest();
                    String requestIp = request.getRemoteAddr();

                    boolean canAccess = blackListService.checkBlackList(requestIp, telephone);

                    if(canAccess) {
                        HttpSession session = this.getSession();
                        session.setAttribute("telephone", telephone);

//                        String verifyCode = CommonUtils.randomVerifyCode();
                        String verifyCode = CommonUtils.randomDigitalVerifyCode();
                        boolean sendSuccess = false;

                        if (RegexUtils.isValidEmail(telephone)) {

                            String content = "欢迎使用简易思维脑图，您的验证码是:" + verifyCode;

                            if("aliyunSmtp".equals(smtpSender)) {
                                sendSuccess = aliyunSmtpSender.smtpSend(telephone, content);
                            } else {
                                sendSuccess = mailUtils.sendMessage(telephone, content);
                            }
                            if(sendSuccess) {
                                if(log.isInfoEnabled()) {
                                    log.info("邮件发送成功, 邮箱地址:" + telephone + ", 验证码为:" + verifyCode);
                                }
                            } else {
                                if(log.isInfoEnabled()) {
                                    log.info("邮件发送失败, 邮箱地址:" + telephone + ", 验证码为:" + verifyCode);
                                }
                            }
                            session.setAttribute("verifyCode", verifyCode);

                            message = Message.success("验证码已发送到您的邮箱!");

                        } else {
                            System.out.println("目前还不支持手机接收验证码, telephone=" + telephone);
                            if(log.isInfoEnabled()) {
                                log.info("目前还不支持手机接收验证码, telephone=" + telephone);
                            }

//                            sendSuccess  = smsSender.sendSms(telephone, verifyCode);
//                            if(sendSuccess) {
//                                if(log.isInfoEnabled()) {
//                                    log.info("短信发送成功, 手机号:" + telephone + ", 验证码为:" + verifyCode);
//                                }
//                            } else {
//                                if(log.isInfoEnabled()) {
//                                    log.info("短信发送失败, 手机号:" + telephone + ", 验证码为:" + verifyCode);
//                                }
//                            }
//                            session.setAttribute("verifyCode", verifyCode);
//
//                            message = Message.success("验证码已发送到您的手机!");

                        }
                    } else {
                        message = Message.fail("当前地址或账号不能访问!");
                    }

                } else {

                    message = Message.fail("手机号或者邮箱格式不正确!");

                }
            } else {

                message = Message.fail("手机号或者邮箱不能为空!");

            }


        } catch (Throwable e) {
            e.printStackTrace();
            log.error("获取验证码失败, 异常信息为: ", e);
        }

//        Message msg = new Message();
//        msg.setMsg("验证码已发送到您的邮箱!");

//        返回Message类，前端收到的是：
//        {"message":{"ctn":0,"data":null,"msg":"验证码已发送到您的邮箱!"}}

//        返回Map<String, Object>类，前端收到的是：
//        {"msg":"验证码已发送到您的邮箱!","data":"{}","rtn":"0"}

//        return rtnRes;

        return message.getReturnResult();

    }

    @RequestMapping(value = "/login", method = {RequestMethod.GET})
    public Map<String, Object> login(
            @RequestParam(value="telephone", required = true) String telephone,
            @RequestParam(value="vcode", required = true) String vcode) {

        if(log.isInfoEnabled()) {
            log.info("telephone={}, vcode={}", telephone, vcode);
        }

        Message message = new Message();

        try {

            HttpSession session = this.getSession(false);

            if(session != null) {
                String phone = (String)session.getAttribute(SessionConstants.TELEPHONE);
                String verifyCode = (String)session.getAttribute(SessionConstants.VERIFY_CODE);
                if(StringUtils.isNotEmpty(verifyCode) && verifyCode.equals(vcode)) {

                    if(StringUtils.isNotEmpty(phone) && phone.equals(telephone)) {

                        User queryUser = new User();
                        queryUser.setTelephone(telephone);
                        User user = userService.queryBySelective(queryUser);
                        if(user == null) {
                            user = new User();
                            user.setTelephone(telephone);
                            user.setUsername(telephone);
                            user.setUniqueNo(Md5Utils.getUUID());
                            user.setCreateTime(DateUtils.format(new Date()));
                            userService.insertSelective(user);
                        }

    //                    登录返回内容：
    //                    {"rtn":0,"data":{"paid":false,"session":"a9kr21u5842uzk3p0cc4"},"msg":""}
                        if(user != null) {
                            message = Message.success("登录成功!");
                            Byte paid = user.getPaid();
                            if(paid != null && paid == 1) {
                                message.put(SessionConstants.PAID, true);
                                session.setAttribute(SessionConstants.PAID, "true");
                            } else {
                                message.put(SessionConstants.PAID, false);
                                session.setAttribute(SessionConstants.PAID, "false");
                            }


//                            message.put(SessionConstants.SESSIONID, user.getUniqueNo());
//                            session.setAttribute(SessionConstants.SESSIONID, user.getUniqueNo());
//                            session.setAttribute(user.getUniqueNo(), user);

                            String jsessionId = this.getJsessionId();
                            if(StringUtils.isNotEmpty(jsessionId)) {
                                message.put(SessionConstants.SESSIONID, jsessionId);
                                session.setAttribute(SessionConstants.SESSIONID, jsessionId);
                                session.setAttribute(jsessionId, user);
                            }

                            session.setAttribute(SessionConstants.NAME, user.getUsername());

                            /**
                             * 移除使用过的验证码
                             */
                            session.removeAttribute(SessionConstants.VERIFY_CODE);

                        } else {
                            if(log.isDebugEnabled()) {
                                log.debug("用户不存在!");
                            }
                            message = Message.fail("用户不存在!");
                        }


                    } else {
                        if(log.isDebugEnabled()) {
                            log.debug("手机号不匹配!");
                        }
                        message = Message.fail("手机号不匹配!");
                    }

                } else {
                    if(log.isDebugEnabled()) {
                        log.debug("验证码不正确!");
                    }
                    message = Message.fail("验证码不正确!");
                }


            } else {
                if(log.isDebugEnabled()) {
                    log.debug("session为空!");
                }
                message = Message.fail("session为空!");

            }


        } catch (Exception e) {
            e.printStackTrace();
            log.error("登录异常,异常信息为:{}", e);
        }

//        登录返回内容：
//        {"rtn":0,"data":{"paid":false,"session":"a9kr21u5842uzk3p0cc4"},"msg":""}

//        Map<String, Object> rtnRes = new HashMap<String, Object>();
//        return rtnRes;

        return message.getReturnResult();

    }


    @RequestMapping(value = "/userSync", method = {RequestMethod.GET})
    public Map<String, Object> userSync(
            @RequestParam(value="data", required = false) String data) {

        Message message = new Message();

        HttpServletRequest request = this.getRequest();
        String uniqueNo = this.getHeader(request, HttpHeaderConstants.SESSION);

        HttpSession session = this.getSession(false);
        if(session != null) {
            Object uniqueNoObj = session.getAttribute(SessionConstants.SESSIONID);
            if(uniqueNoObj != null) {
                if(String.valueOf(uniqueNoObj).equals(uniqueNo)) {
                    message = Message.success("成功同步用户登录信息!");
                    message.put(SessionConstants.PAID, session.getAttribute(SessionConstants.PAID));
                    message.put(SessionConstants.NAME, session.getAttribute(SessionConstants.NAME));
                    message.put(SessionConstants.SESSIONID, uniqueNo);
                } else {
                    String errorMsg = "session不一致!";
                    System.out.println(errorMsg);
                    if (log.isDebugEnabled()) {
                        log.debug(errorMsg);
                    }
                    message = Message.fail(errorMsg);
                }
            } else {
                String errorMsg = "session为空!";
                System.out.println(errorMsg);
                if (log.isDebugEnabled()) {
                    log.debug(errorMsg);
                }
                message = Message.fail(errorMsg);
            }

        } else {
            String errorMsg = "用户未登录!";
            System.out.println(errorMsg);
            if (log.isDebugEnabled()) {
                log.debug(errorMsg);
            }
            message = Message.fail(errorMsg);
        }

        return message.getReturnResult();

    }


    @RequestMapping(value = "/logout", method = {RequestMethod.GET})
    public Map<String, Object> logout() {

        Message message = new Message();

        HttpServletRequest request = this.getRequest();
        String uniqueNo = this.getHeader(request, HttpHeaderConstants.SESSION);


        HttpSession session = this.getSession(false);
        if(session != null) {
            session.removeAttribute(uniqueNo);
            session.removeAttribute(SessionConstants.SESSIONID);
            session.removeAttribute(SessionConstants.TELEPHONE);
            session.removeAttribute(SessionConstants.PAID);
            message = Message.success("退出成功!");
        }

        return message.getReturnResult();
    }



    @RequestMapping(value = "/saveFile", method = {RequestMethod.POST})
    @ResponseBody
    public Map<String, Object> saveFile(@RequestBody String jsonData) {

        Message msg = new Message();

        if(log.isDebugEnabled()) {
            log.debug("saveFile method, jsonData={}", jsonData);
        }
        System.out.println("jsonData:");
        System.out.println(jsonData);


        try {
            HttpServletRequest request = this.getRequest();
            System.out.println("Content-Type:");
            System.out.println(request.getHeader("Content-Type"));

            String resultStr = "";

            String requestSessionId = request.getRequestedSessionId();
            System.out.println("requestSessionId:" + requestSessionId);

            HttpSession httpSession = request.getSession();

            String path = request.getHeader(HttpHeaderConstants.PATH);
            if(path != null) {
                if(path.indexOf(ContextConstants.PATH_SEPERATE) == 0) {
                    path = path.substring(ContextConstants.PATH_SEPERATE.length());
                }
            }

//        Cookie:BAEID=7F29166D9C03F244A07D8F60F43A4BB1
            String cookie = request.getHeader(HttpHeaderConstants.COOKIE);
            String session = request.getHeader(HttpHeaderConstants.SESSION);
            String vc = request.getHeader(HttpHeaderConstants.VC);

            //获取用户NO
            String uniqueNo = "";
            if(StringUtils.isNotEmpty(cookie)) {
                String cookieHeaderPrefix = "Cookie:BAEID=";
                if(cookie.indexOf(cookieHeaderPrefix) >= 0) {
                    uniqueNo = cookie.substring(cookie.indexOf(cookieHeaderPrefix) + cookieHeaderPrefix.length());
                }
            }

            if(StringUtils.isEmpty(uniqueNo)) {
                uniqueNo = Md5Utils.getUUID();
            }

//          校验sessionId
            User loginUser = (User)httpSession.getAttribute(session);
            String jsessionId = (String)httpSession.getAttribute(SessionConstants.SESSIONID);
            if(loginUser != null && session.equals(jsessionId)) {

                BrainMapping brainMappingExists = brainMappingService.queryBrainMappingByPath(path);
                if(brainMappingExists == null) {
                    BrainMapping brainMapping = new BrainMapping();
                    brainMapping.setUserUniqueNo(uniqueNo);
                    brainMapping.setPath(path);
                    brainMapping.setContent(jsonData);
                    brainMapping.setCreateTime(DateUtils.format(new Date()));
                    Integer count = brainMappingService.insertBrainMapping(brainMapping);
                    if (count != null && count >= 1) {
                        resultStr = "success";
                        msg = Message.success("导图保存成功!");
                    }
                } else {

                    BrainMapping brainMapping = new BrainMapping();
                    brainMapping.setPath(CommonUtils.urlDecode(path));
                    brainMapping.setContent(jsonData);
                    brainMapping.setUpdateTime(DateUtils.format(new Date()));
                    Integer count = brainMappingService.updateBrainMapping(brainMapping);
                    if (count != null && count >= 1) {
                        resultStr = "success";
                        msg = Message.success("导图更新成功!");
                    }

                }

            } else {
                resultStr = "fail";
                String errorMsg = "未登录, 请先登录后再保存";
                System.out.println(errorMsg + ", userUniqueNo={}" + uniqueNo);
                if(log.isDebugEnabled()) {
                    log.debug(errorMsg + ", userUniqueNo={}", uniqueNo);
                }
                msg = Message.fail(errorMsg);
            }


        } catch (Exception e) {
            e.printStackTrace();
        }

//        Map<String, String> headers = new HashMap<String, String>();
//        String[] headerNames = HttpHeaderConstants.saveFileHeaders;
//        List<String> headerNameList = Arrays.asList(headerNames);
//
//        Enumeration enumeration = request.getHeaderNames();
//        String headerName = null;
//        String headerValue = "";
//        while(enumeration.hasMoreElements()) {
//            headerName = (String)enumeration.nextElement();
//            if(headerNameList.contains(headerName)) {
//                headerValue = request.getHeader(headerName);
//                System.out.println(headerName + ": " + headerValue);
//                headers.put(headerName, headerValue);
//            }
//        }


        return msg.getReturnResult();

//        return resultStr;

    }

    @RequestMapping(value = "/listFiles", method = {RequestMethod.GET})
    @ResponseBody
    public Map<String, Object> listFiles(
            @RequestParam(value="dir", required = false) String dir) {

        if(log.isDebugEnabled()) {
            log.debug("saveFile method, dir={}", dir);
        }
        System.out.println("dir:");
        System.out.println(dir);

//        String paramData = request.getParameter("data");
//        Map map = request.getParameterMap();
//        String[] paramValues = request.getParameterValues("data");
//        System.out.println("paramData:" + paramData);
//        System.out.println("map:" + map != null ? map.toString() : "map is null");
//        System.out.println("paramValues:" + paramValues != null ? paramValues.toString() : "paramValues is null");

        Message message = new Message();
        try {

            List<BrainMapping> brainMappingList = brainMappingService.queryBrainMappingAllList();
            if(CollectionUtils.isNotEmpty(brainMappingList)) {
                List<String> pathList = new ArrayList<String>();
                BrainMapping brainMapping = null;
                for(int i = 0; i < brainMappingList.size(); i ++) {
                    brainMapping = brainMappingList.get(i);
                    pathList.add(CommonUtils.urlDecode(brainMapping.getPath()));
                }

                Map<String, Object> data = new HashMap<String, Object>();
                data.put("files", pathList.toArray());

                message.setData(data);
            }

        } catch (Exception e) {
            e.printStackTrace();
            log.error("listFiles exception, {}", e);
        }

        return message.getReturnResult();
//        return "success";

    }

    /**
     *
     SpringMVC返回字符串乱码问题

     解决方案一：produces加@ResponseBody
     @RequestMapping(value = "/getFile", produces = "application/json; charset=utf-8", method = {RequestMethod.GET})
     @ResponseBody
     public String getFile() {
     String result = "";
     return result;
     }

     解决方案二：设置response的编码并用response输出字符串
     @RequestMapping(value = "/getFile", method = {RequestMethod.GET})
     public void getFile() {
     String result = "";
     response.setContentType("application/json;charset=UTF-8");
     response.getWriter().print(result);
     }
     
     * @param request
     * @param response
     * @param path
     */
    //方案二
//    @RequestMapping(value = "/getFile", method = {RequestMethod.GET})
    //方案一
    @RequestMapping(value = "/getFile", method = {RequestMethod.GET}, produces = "application/json; charset=utf-8")
    @ResponseBody
    public String getFile(
            HttpServletRequest request,
            HttpServletResponse response
            ,
            @RequestParam(value="path", required = false) String path
    ) {


        String result = "";
        try {

//            if(log.isDebugEnabled()) {
//                log.debug("getFile method before, path={}", path);
//            }

            //有些情况需要先设置request的编码
//            request.setCharacterEncoding("UTF-8");
//            String path = request.getParameter("path");

            String characterEncoding = request.getCharacterEncoding();
            System.out.println(characterEncoding);

            //有些情况需要进行转码
            if(characterEncoding.equals("UTF-8")) {
                if (path != null) {
                    path = new String(path.getBytes("iso-8859-1"), "utf-8");
                }
            }

            if(log.isDebugEnabled()) {
                log.debug("getFile method, path={}", path);
            }
            System.out.println("path:");
            System.out.println(path);

            //方案二
//            response.setContentType("application/json;charset=UTF-8");

            if (path != null) {
                String prefix = "/";
                int len = prefix.length();
                int index = path.indexOf(prefix);
                if (index >= 0) {
                    System.out.println("before, path=" + path);
                    path = path.substring(index + len);
                    System.out.println("after, path=" + path);
                }
            }
            BrainMapping brainMapping = brainMappingService.queryBrainMappingByPath(path);
            if (brainMapping != null) {
                result = brainMapping.getContent();
                //方案二
//                    response.getWriter().print(result);
            } else {
                String errorMsg = "未查到相应的思维导图,path=" + path;
                if(log.isDebugEnabled()) {
                    log.debug(errorMsg);
                }
                result = errorMsg;
            }


        } catch (Exception e) {
            e.printStackTrace();
        }

        return result;
//        return "success";

    }

    /**
     * {"rtn":0,"data":{"url":"http://7te7vq.com1.z0.glb.clouddn.com/0FPRH2.mm"},"msg":""}
     * @param request
     * @param response
     * @param jsonData
     * @return
     */
    @RequestMapping(value = "/exportFile", method = {RequestMethod.POST})
    public Map<String, Object> exportFile(
            HttpServletRequest request,
            HttpServletResponse response,
            @RequestBody String jsonData) {

        Message msg = new Message();

        if(log.isDebugEnabled()) {
            log.debug("exportFile method, jsonData={}", jsonData);
        }
        System.out.println("jsonData:");
        System.out.println(jsonData);

        BufferedInputStream bis = null;
        BufferedOutputStream bos = null;

        try {
            String extension = this.getHeader(request, "extension");
            String timestamp = this.getHeader(request, "timestamp");
            String fileName = timestamp + "." + extension;

            String root = request.getSession().getServletContext().getRealPath("");
            File rootDir = new File(root + File.separator + ContextConstants.TEMP_DIR);
            if(!rootDir.exists()) {
                rootDir.mkdirs();
            }
            File outFile = new File(rootDir + File.separator + fileName);

            InputStream is = new ByteArrayInputStream(jsonData.getBytes("utf-8"));
            OutputStream os = new FileOutputStream(outFile);
            bis = new BufferedInputStream(is);
            bos = new BufferedOutputStream(os);

            byte[] b = new byte[2048];
            int length;
            long downLen = 0L;
            while ((length = bis.read(b)) > 0) {
                bos.write(b, 0, length);
                downLen += b.length;
            }

            String requestUrl = request.getRequestURL().toString();
            String requestUri = request.getRequestURI();

            String remoteAddr = request.getRemoteAddr();
            String remoteHost = request.getRemoteHost();
            int remotePort = request.getRemotePort();

            System.out.println("requestUrl:" + requestUrl);
            System.out.println("requestUri:" + requestUri);
            System.out.println("remoteAddr:" + remoteAddr);
            System.out.println("remoteHost:" + remoteHost);
            System.out.println("remotePort:" + remotePort);

            String url = requestUrl.substring(0, requestUrl.indexOf(requestUri)) + "/" + ContextConstants.TEMP_DIR + "/" + fileName;
//            String url = requestUrl.substring(0, requestUrl.indexOf(requestUri)) + "/" + fileName;
//            msg.put("url", CommonUtils.urlEncode(url));
            msg.put("url", url);

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                IoUtils.close(bis, bos);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

//        Map<String, Object> rtnRes = new HashMap<String, Object>();
//        return rtnRes;

        return msg.getReturnResult();

    }


    @RequestMapping(value = "/files/{fileName:.+}", method = {RequestMethod.GET})
    public void downloadFile(
            HttpServletRequest request,
            HttpServletResponse response,
            @PathVariable(value = "fileName") String fileName) {

        Message msg = new Message();

        if(log.isDebugEnabled()) {
            log.debug("downloadFile method, fileName={}", fileName);
        }
        System.out.println("fileName:");
        System.out.println(fileName);

        if(StringUtils.isEmpty(fileName)) {
            System.out.println("fileName is empty!");
            return;
        }

        BufferedInputStream bis = null;
        BufferedOutputStream bos = null;

        try {

//            String extension = this.getHeader(request, "extension");
//            String timestamp = this.getHeader(request, "timestamp");
//            String fileName = timestamp + "." + extension;

            String root = request.getSession().getServletContext().getRealPath("");
            File rootDir = new File(root + File.separator + ContextConstants.TEMP_DIR);
            if(!rootDir.exists()) {
                rootDir.mkdirs();
            }
            File outFile = new File(rootDir + File.separator + fileName);

            //获取文件的长度
            long fileLength = outFile.length();

            //设置文件输出类型
            response.setContentType("application/octet-stream");
            response.setHeader("Content-disposition", "attachment; filename="
                    + new String(fileName.getBytes("utf-8"), "ISO8859-1"));
            //设置输出长度
            response.setHeader("Content-Length", String.valueOf(fileLength));

            InputStream is = new FileInputStream(outFile);
            OutputStream os = response.getOutputStream();
            bis = new BufferedInputStream(is);
            bos = new BufferedOutputStream(os);

            byte[] b = new byte[2048];
            int length;
            long downLen = 0L;
            while ((length = bis.read(b)) > 0) {
                bos.write(b, 0, length);
                downLen += b.length;
            }

            String requestUrl = request.getRequestURL().toString();
            String requestUri = request.getRequestURI();

            String remoteAddr = request.getRemoteAddr();
            String remoteHost = request.getRemoteHost();
            int remotePort = request.getRemotePort();

            System.out.println("requestUrl:" + requestUrl);
            System.out.println("requestUri:" + requestUri);
            System.out.println("remoteAddr:" + remoteAddr);
            System.out.println("remoteHost:" + remoteHost);
            System.out.println("remotePort:" + remotePort);

            String url = requestUrl.substring(0, requestUrl.indexOf(requestUri)) + "/" + ContextConstants.TEMP_DIR + "/" + fileName;
            msg.put("url", url);

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                IoUtils.close(bis, bos);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

//        Map<String, Object> rtnRes = new HashMap<String, Object>();
//        return rtnRes;

//        return msg.getReturnResult();

    }














}
