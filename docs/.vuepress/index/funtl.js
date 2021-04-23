
const index = [
    {
        title: '指南',
        collapsable: false,
        children: [
            ['', '开篇'],
            ['framework/', '走进单体地狱'],
            ['microservice/', '微服务解决复杂问题'],
            ['datascience/', '价值互联网'],
            ['interview/', '面试宝典'],
        ]
    },
    {
        title: '专题',
        collapsable: false,
        children: [
            ['topic/vue.md','GitFlow工作流'],
            ['topic/gitflow.md','Vue渐进式JavaScript框架'],
            ['topic/springsecurityoauth2.md','Spring Security Oauth2'],
        ]
    },
    {
        title: '实战',
        collapsable: false,
        children: [
            ['myshop/','MyShop实战'],
            ['itoken/','微服务实战之iToken'],
        ]
    },
]

module.exports.index = index
