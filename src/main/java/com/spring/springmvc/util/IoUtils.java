package com.spring.springmvc.util;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

/**
 * @Author: ShengzhiCai
 * @Date: 2017-11-21 22:24
 */

public class IoUtils {

    public static void close(InputStream is) throws IOException {
        if(is != null) {
            is.close();
            is = null;
        }
    }

    public static void close(OutputStream os) throws IOException {
        if(os != null) {
            os.flush();
            os.close();
            os = null;
        }
    }

    public static void close(InputStream is, OutputStream os) throws IOException {
        close(is);
        close(os);
    }

}
