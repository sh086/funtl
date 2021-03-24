
const index = [
    {
        title: '指南',
        collapsable: false,
        children: [
            ['', '开篇'],
            ['framework/', '走进单体地狱'],
            ['cloudservice/', '云计算服务'],
            ['microservice/', '微服务架构'],
            ['datascience/', '价值互联网'],
            ['topic/', '专题'],
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
    {
        title: '文档',
        collapsable: false,
        children: [
            ['tools','在线工具'],
            ['https://www.runoob.com/docker/docker-tutorial.html','Docker'],
        ]
    },
]

module.exports.index = index
