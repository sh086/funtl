
module.exports = {
    '/guide/': [
        {
            title: '走进单体地狱',
            collapsable: false,
            children: [
                ['introduce.md', '开篇'],
                ['quickstart.md', '快速入门'],
                ['bootstrap.md', 'BootStrap'],
                ['common.md', '基础框架入门'],
                ['ssm.md', 'SpringFrame'],
            ]
        },
        {
            title: '微服务解决复杂问题',
            collapsable: false,
            children: [
                ['microservice.md', '微服务简介'],
                ['cloudservice.md', '云计算服务'],
                ['springboot.md', 'Spring Boot'],
                ['springcloudnetflix.md', 'Spring Cloud Netflix'],
                ['apachedubbozookeeper.md', 'Apache Dubbo Zookeeper'],
                ['springcloudalibaba.md', 'Spring Cloud Alibaba'],
                ['springcloudalibabadubbo.md', 'Spring Cloud Alibaba Dubbo'],
            ]
        },{
            title: '价值互联网',
            collapsable: false,
            children: [
                ['servicemesh.md', '服务网格化'],
                ['blockchain.md', '区块链即未来'],
            ]
        },
        {
            title: '专题',
            collapsable: false,
            children: [
                ['vue.md', 'Vue渐进式JavaScript框架'],
                ['springsecurityoauth2.md', 'Spring Security Oauth2'],
                ['gitflow.md', 'GitFlow工作流指南'],
                ['interview.md', '面试宝典'],
            ]
        },
    ],
    '/project/': [
        {
            title: '单体项目',
            collapsable: false,
            children: [
                ['myshop-frame.md','简单的登录功能'],
                ['myshop-module.md','MyShop实战'],
            ]
        },
        {
            title: '微服务实战',
            collapsable: false,
            children: [
                ['itoken-springcloud.md','Spring Cloud iToken'],
                ['myshop-springcloud.md','Spring Cloud Alibaba Myshop'],
            ]
        },
    ]
}

