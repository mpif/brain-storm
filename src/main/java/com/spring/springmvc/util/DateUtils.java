package com.spring.springmvc.util;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * @author: caishengzhi
 * @date: 2017-11-21 11:31
 **/
public class DateUtils {

    private static final ThreadLocal<DateFormat> LOCAL_DATE_FORMAT = new ThreadLocal<DateFormat>(){
        @Override
        protected DateFormat initialValue() {
            return new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        }
    };

    public static String format(Date date) {
        DateFormat df = LOCAL_DATE_FORMAT.get();
        return df.format(date);
    }

    public static Date parse(String dateStr) throws ParseException {
        DateFormat df = LOCAL_DATE_FORMAT.get();
        return df.parse(dateStr);
    }

}
