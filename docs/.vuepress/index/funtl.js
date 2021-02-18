
const index = [
    {
        title: '指南',
        collapsable: false,
        children: [
            ['', '开篇'],
            ['guide/framework/', '走进单体地狱'],
            ['guide/cloudservice/', '云计算服务'],
            ['guide/microservice/', '微服务架构'],
            ['guide/datascience/', '价值互联网'],
            ['guide/interview/','面试宝典'],
        ]
    },
    {
        title: '实战',
        collapsable: false,
        children: [
            ['demo/','课堂示例代码'],
            ['project/myshop-framework.html','MyShop实战'],
            ['project/itoken-springcloud.html','微服务实战之iToken'],
            ['project/myshop-springcloud.html','Spring Cloud Alibaba Myshop'],
        ]
    },
    {
        title: '专题',
        collapsable: false,
        children: [
            ['topic/vue.html','Vue渐进式JavaScript框架'],
            ['topic/springsecurityoauth2.html','Spring Security Aauth2'],
        ]
    },
]

// const guide = [
//     {
//         title: '走进单体地狱',
//         collapsable: false,
//         children: [
//             ['introduce.md', '开篇'],
//             ['quickstart.md', '快速入门'],
//             ['bootstrap.md', 'BootStrap'],
//             ['common.md', '基础框架入门'],
//             ['ssm.md', 'SpringFrame'],
//         ]
//     },
//     {
//         title: '微服务解决复杂问题',
//         collapsable: false,
//         children: [
//             ['microservice.md', '微服务简介'],
//             ['cloudservice.md', '云计算服务'],
//             ['springboot.md', 'Spring Boot'],
//             ['springcloudnetflix.md', 'Spring Cloud Netflix'],
//             ['apachedubbozookeeper.md', 'Apache Dubbo Zookeeper'],
//             ['springcloudalibaba.md', 'Spring Cloud Alibaba'],
//             ['springcloudalibabadubbo.md', 'Spring Cloud Alibaba Dubbo'],
//         ]
//     },{
//         title: '价值互联网',
//         collapsable: false,
//         children: [
//             ['servicemesh.md', '服务网格化'],
//             ['blockchain.md', '区块链即未来'],
//         ]
//     },
// ]



module.exports.index = index
