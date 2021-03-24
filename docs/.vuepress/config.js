const nav = require('./nav.js');
const sidebar = require('./sidebar');
module.exports = {
    title: 'NoteBook',
    description: 'NoteBook',
    port: '8001',
    base:'/college/',
    themeConfig: {
        repo: 'https://github.com/sh086/college',
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
