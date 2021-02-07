
import com.shooter.funtl.module.entity.User;
import com.shooter.funtl.module.service.UserService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.util.DigestUtils;

import java.time.LocalDateTime;
import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({"classpath:spring-context.xml", "classpath:spring-context-druid.xml", "classpath:spring-context-mybatis.xml"})
public class UserServiceTest {

    private static final Logger logger = LoggerFactory.getLogger(UserServiceTest.class);

    @Autowired
    private UserService userService;

    @Test
    public void testSelectUserById() {
        User user = userService.selectUserById(7L);
        logger.info("testSelectUserById : 用户名 {}",user.getUserName());
    }

    @Test
    public void testSelectUserByName() {
        User user = userService.selectUserByName("zhangsan1");
        logger.info("testSelectUserByName : 用户名 {}",user.getUserName());
    }

    @Test
    public void testSelectUserByNameLike() {
        List<User> users = userService.selectUserByNameLike("zhangsan");
        logger.info("testSelectUserByNameLike : 共计 {} 个",users.size());
    }

    @Test
    public void selectUserByEmail() {
        User user = userService.selectUserByEmail("aa@a");
        logger.info("selectUserByEmail : 用户名 {}",user.getUserName());
    }

    @Test
    public void testSelectAll() {
        List<User> users = userService.selectUserAll();
        logger.info("testSelectAll : 共计 {} 个",users.size());
    }

    @Test
    public void testInsert() {
        User user = new User();
        user.setEmail("admin@qq.com");
        user.setPassWord(DigestUtils.md5DigestAsHex("123456".getBytes()));
        user.setPhone(15888888888L);
        user.setUserName("admin");
        userService.insert(user);
    }

    @Test
    public void testUpdateById() {
        User user = userService.selectUserById(37L);
        user.setUserName("adminTest");
        userService.updateById(user);
    }

    @Test
    public void testDeleteById() {
        userService.deleteById(37L);
    }

}