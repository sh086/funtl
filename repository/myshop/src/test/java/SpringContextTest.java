import com.shooter.funtl.module.entity.User;
import com.shooter.funtl.module.service.UserService;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;


public class SpringContextTest {

    @Test
    public void login() {
        // 获取 Spring 容器
        ApplicationContext applicationContext =
                new ClassPathXmlApplicationContext("spring-context.xml");
        // 从 Spring 容器中获取对象
        UserService userService =
                (UserService) applicationContext.getBean("userService");
        User user = userService.login("admin@qq.com","admin");
        System.out.println("Email："+user.getEmail());
    }

}