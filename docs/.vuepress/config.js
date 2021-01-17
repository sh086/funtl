const nav = require('./nav.js');
const sidebar = require('./sidebar');
module.exports = {
    title: '鲁斯菲尔-李卫东',
    description: '有道无术，术尚可求，有术无道，止于术',
    port: '8001',
    base:'/funtl/',
    themeConfig: {
        repo: 'https://github.com/sh086/funtl',
        nav: nav,//导航栏
        sidebar: sidebar,//自动生产导航栏
        sidebarDepth: 2,//sidebar的最大深度
        search: true, //搜索
        searchMaxSuggestions: 10,
        lastUpdated: 'Last update time：'
    },
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    markdown: {
        lineNumbers: true
    },
    plugins: ['@vuepress/back-to-top']
}
