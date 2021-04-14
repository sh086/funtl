# 增删改查操作

## 参数配置

### 导入mongo相关jar包

```
<dependency>
    <groupId>org.mongodb</groupId>
    <artifactId>mongo-java-driver</artifactId>
    <version>3.5.0</version>
</dependency>

<dependency>
    <groupId>org.springframework.data</groupId>
    <artifactId>spring-data-mongodb</artifactId>
    <version>2.0.0.RELEASE</version>
</dependency>
```

### 配置mongo连接信息

​	连接配置，使用自动配置方式，在applicaiton.properties中配置连接信息即可

```
spring.data.mongodb.host=127.0.0.1
spring.data.mongodb.port=27017
spring.data.mongodb.database=mongdbname
```

### 注入mongoTemplate对象 

```
 @Autowired
 private MongoTemplate mongoTemplate;  
```

### 建立实体类型

​	首先创建一个javabean，使用@Document注解指定对应的collection。

```
@Document(collection="student")
@Data
public class Student {
    private String id;
    private String name;
}
```

## Where条件

### Criteria类

 构造Criteria类：它封装所有的语句，以方法的形式进行查询

```
//Criteria.where返回的是Criteria类型
Criteria.where("areaCode").is(300);
//多条件is("值")后面可以加and("字段2").is("值2")
Criteria.where("classId").is("1").and("Students.studentId").is("3")
Criteria.where("areaCode").in(List<String> ins);
Criteria.where("areaCode").regex(queryPattern)
//gte大于 lte小于
Criteria.where("timestamp").gte(startTime).lte(endTime+1000));
//模糊查询
Pattern pattern = Pattern.compile("^.*" + selectVo.getName() + ".*$", Pattern.CASE_INSENSITIVE);
Criteria.where("areaCode").regex(pattern)

//使用addCriteria方法可以添加多个Criteria类型
Criteria criAreaCode = new Criteria();
criteria.andOperator(Criteria criteria...);
```

### Query类

　Query类：这是将语句进行封装或者添加排序之类的操作。

```
//使用构造方式
Query query = new Query(criteria);
//使用addCriteria方法
Query query = new Query();
query.addCriteria(criteria);
//使用静态方法
Query query = Query.query(criteria);

//Sort.Order  Sort.Direction.DESC的Sort可以不写
query.with(new Sort(new Sort.Order(Sort.Direction.DESC,"date"),
		  new Order(Direction.DESC, "value")));
query.limit(31);
```

### Sort类

### Update类

```
//如果这条数据中没有要更新的字段，则会添加该字段。 
Update update = Update.update("要更新的字段", "更新的值");

//内嵌文档的更新、插入
Update update = new Update();
//添加内嵌文档中的数据：addToSet如果数据已经存在，则不做任何操作，而push会插入一条一样的数据。
update.push("Students", student);
update.addToSet("Students", student);
//更新内嵌文档
Update update = Update.update("Students.$.name", "lisi");
//删除内嵌文档中的数据
update.unset("Students.$");
```

## SQL查询语句

### Search方法

```
//查找全部的记录
List<Object> objs =mongoTemplate.findAll(Object.class);
List<Object> objs = mongoTemplate.find(query, Object.class);
List<Object> objs = mongoTemplate.findAndRemove(query, Object.class);

//根据Id查询
Object obj = mongoOps.findById(object.getId(), Object.class);    
//根据筛选条件进行查询
Object obj = mongoOps.findOne(query, Object.class);

//统计符合条件的记录数
mongoTemplate.count(query, Object.class);

//分页查询
Query query = new Query();
int skip = (page.getCurrentPage() - 1) * page.getPageSize();
query.skip(skip).limit(page.getPageSize()); 
List<Object> objs = mongoTemplate.find(query, Object.class);
```

### Insert方法

​	调用inset方法，就可以插入一条数据，但为null（为“ ” ？）的字段不会被记录。插入成功后，id会被赋予主键值。（如id已存在值，是否提示插入重复键？object可以为null吗？）

```
//object代表数据库中的实体类
mongoTemplate.insert(object);

//将其转换成json对象，即可直接插入到mongodb中。
String classStr = "{'classId':'1','Students':[{'studentId':'1','name':'zhangsan'}]}";
JSONObject parseObject = JSON.parseObject(classStr);
mongoTemplate.insert(parseObject,"class");

//保存 或 根据Id更新（会报重复键错误吗？）
mongoTemplate.save(experiment);
```

### Update类

​	Update用于更新、插入、删除文档

```
//如果query条件没有筛选出对应的数据，那么upsert会插入一条新的数据，而update则什么都不会做
mongoTemplate.upsert(query, update, CLASS/collectionName);
mongoTemplate.update(query, update, CLASS/collectionName);
//更新满足条件的第一条数据
mongoTemplate.updateFirest(query, update, CLASS/collectionName);
//更新所有满足条件的数据
mongoTemplate.updateMulti(query, update, CLASS/collectionName);
```

### Remove方法

​	remove操作是直接将所有满足条件的数据给删除

```
mongoTemplate.remove(query,AutomaticAlarm.class);   
mongoOps.remove(query);

List<Object> objs = mongoTemplate.findAndRemove(query, Object.class);

//删除集合
mongoOps.dropCollection(Object.class);
```

## 附录：

​	[菜鸟mongoDB教程](http://www.runoob.com/mongodb/mongodb-tutorial.html)

​	[Spring Data MongoDB](https://docs.spring.io/spring-data/mongodb/docs/current/api/org/springframework/data/mongodb/core/MongoTemplate.html)