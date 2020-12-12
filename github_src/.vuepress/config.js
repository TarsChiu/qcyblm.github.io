const moment = require('moment')
moment.updateLocale('zh-cn', {
  meridiem : function (hour, minute) {
      if (hour < 9) {
          return "早上";
      } else if (hour < 11 && minute < 30) {
          return "上午";
      } else if (hour < 13 && minute < 30) {
          return "中午";
      } else if (hour < 18) {
          return "下午";
      } else {
          return "晚上";
      }
  }
});
module.exports = {
  title: '青春永不落幕',
  description: '一位静态网站设计爱好者',
  temp: '.temp',
  cache: '.cache',
  theme: '@qcyblm/vpx',
  locales: {
    '/': {
      lang: 'zh-CN',
    }
  },
  themeConfig: {
    logo: '/assets/img/logo.webp',
    nav: [
      { text: '主页', link: '/', icon: 'fa fa-home' },
      { text: '关于', link: '/about', icon: 'fa fa-user' },
      { text: '项目', link: '/project', icon: 'fa fa-th-large' },
      {
        text: 'Windows',
        icon: 'fab fa-windows',
        items: [
          { text: 'Windows常用软件下载官网', link: '/windows/software' },
          { text: 'Windows PE 工具', link: '/windows/wepe' }
        ]
      },
      { text: '文档', link: '/book/', icon: 'fa fa-book' },
      { text: '导航', link: '/book/', icon: 'fa fa-bookmark' },
      { text: '支持', link: '/support', icon: 'fa fa-bell' },
    ],
    sidebar: {
      '/windows/': [
        '/windows/software',
        '/windows/wepe'
      ]
    },
    repo: {
      platform: 'https://github.com/',
      icon: 'fab fa-github',
      owner: 'qcyblm',
      repositories: 'qcyblm.github.io',
    },
    editLinks: true,
    editLinkText: '编辑当前页',
    edit: {
      docsDir: 'github_src',
    },
    lastUpdated: '最后更新时间',
    footer: {
      createYear: '2020',
      author: 'qcyblm',
      authorLink: 'https://qcyblm.github.io/',
      licensedLink: 'https://github.com/qcyblm/qcyblm.github.io/blob/master/LICENSE',
      licensed: 'MIT',
    }
  },
  plugins: {
    '@vssue/vuepress-plugin-vssue': {
      platform: 'github',
      owner: 'qcyblm',
      repo: 'qcyblm.github.io',
      clientId: '76bea0001ccb4222088c',
      clientSecret: 'ed7bd6738a82c5d9becdfe8732f38bd2e158bcf8',
    },
    '@vuepress/last-updated': {
      transformer: (timestamp) => {
        return moment(timestamp).format("Y-M-D H:M:ss Z")
      }
    }
  }
}
