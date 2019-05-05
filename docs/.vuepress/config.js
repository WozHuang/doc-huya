module.exports = {
    title: 'Doc-Huya',
    description: 'A document for Huya',
    port: 8090,
    head: [
        // ['link', { rel: 'icon', href: '/leihou.jpg' }]
    ],
    markdown: {
        lineNumbers: true,// 开启代码行数显示
    },
    themeConfig: {
        nav: [
            { text: 'home', link: '/' },
            { text: 'api', link: '/api' },
            { text: 'huya', link: '/huya' },
        ],
        sidebar: 'auto'
    }
}
