<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>登录</title>
</head>
<body>
<form action="/login" method="post">
    用户名：<input name="loginId" type="text"/><br/>
    密码：<input name="loginPwd" type="password"/><br/>
    <input type="submit" value="登录"/>
</form>
</body>
</html>