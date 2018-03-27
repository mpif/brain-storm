package com.spring.springmvc;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.Test;

/**
 * @author: caishengzhi
 * @date: 2017-11-28 13:56
 **/
public class Log4J2Test {

    @Test
    public void log4j2Test() {
        Logger logger = LogManager.getLogger(Log4J2Test.class);
        logger.debug("fdlfjdfdlfk");

    }

}
