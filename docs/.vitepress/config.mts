import { type MacrosThemeConfig } from 'vitepress-theme-macros'
import { defineConfigWithTheme } from 'vitepress'

export default defineConfigWithTheme<MacrosThemeConfig>({
  lang: 'zh-CN',
  title: "Macors",
  description: "Macors 博客 blog vitepress vue gis webgl three.js",
  themeConfig: {
    nav: {
      title: 'Macros',
      alwaysShow: true,
      items: [
        {
          text: 'Home',
          link: '/',
          icon: 'ri-home-heart-line',
          rel: '_blank'
        },
        {
          text: '其他',
          children: [
            {
              text: 'bilibili',
              link: "http://www.baidu.com",
              rel: '_blank',
              icon: 'ri-bilibili-fill'
            },
            {
              text: '百度地图',
              link: "http://www.baidu.com",
              rel: '_blank'
            },
            {
              text: '1',
              link: "http://www.baidu.com",
              rel: '_blank'
            }
          ]
        }
      ]
    },
    themePlugin: {
      baidu: "ef1966afd473a1f13a359b9a4f04ca84",
    },
    common: {
      repo: "atomMacros/blog_giscus",
      reopId: "R_kgDONH8JRw",
      category: "Announcements",
      categoryId: "DIC_kwDONH8JR84Cj0lh"
    },
    banner: ['./images/bg_01.jpg', './images/bg_02.jpg'],
    personal: {
      avatar: './images/avatar.jpg',
      description: 'A blog theme for VuePress.',
      text: 'Marcos',
      sns: [
        {
          link: 'http://www.baidu.com',
          icon: 'si-baidu'
        },
        {
          link: 'http://github.com',
          icon: 'co-github'
        },
        {
          link: 'http://qq.com',
          icon: 'co-qq'
        },
        {
          link: 'http://twitter.com',
          icon: 'bi-twitter'
        },
        {
          link: 'http://facebook.com',
          icon: 'bi-facebook'
        },
        {
          link: 'http://mail.qq.com',
          icon: 'md-email-outlined'
        }
      ]
    }
  },
})
