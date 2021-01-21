//package com.shooter.funtl.common.context;
//
//import org.apache.commons.lang3.Validate;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.BeansException;
//import org.springframework.beans.factory.DisposableBean;
//import org.springframework.context.ApplicationContext;
//import org.springframework.context.ApplicationContextAware;
//import org.springframework.context.support.ClassPathXmlApplicationContext;
//import org.springframework.stereotype.Component;
//
//@Component
//public class SpringContext implements ApplicationContextAware,DisposableBean{
//
//
//    private static final Logger logger = LoggerFactory.getLogger(SpringContext.class);
//
//    private static ApplicationContext applicationContext;
//
//
//    public void destroy() throws Exception {
//        applicationContext = null;
//        logger.debug("ApplicationContext 已被销毁！");
//    }
//
//    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
//        SpringContext.applicationContext = applicationContext;
//    }
//
//    public static <T> T getBean(Class<T> clazz){
//        Validate.validState(applicationContext != null,"ApplicationContext 未被成功加载！");
//        return applicationContext.getBean(clazz);
//    }
//
//    public static <T> T getBean(String beanId){
//        Validate.validState(applicationContext != null,"ApplicationContext 未被成功加载！");
//        return (T)applicationContext.getBean(beanId);
//    }
//}
