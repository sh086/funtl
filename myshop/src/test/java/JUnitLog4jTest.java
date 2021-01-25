import com.shooter.funtl.module.entiry.User;
import com.shooter.funtl.module.service.UserService;
import com.shooter.funtl.module.service.impl.UserServiceImpl;
import org.junit.Before;
import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class JUnitLog4jTest {

    private static final Logger logger = LoggerFactory.getLogger(JUnitLog4jTest.class);

    private UserService userService;

    @Before
    public void testBefore(){
        userService = new UserServiceImpl();
    }

    @Test
    public void testUserService(){
        User user  = userService.login("admin@qq.com","admin");
        logger.info("用户：{}",user.getEmail());
    }
}