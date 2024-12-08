import { NavbarConfig } from './nav'
import { type Plugin } from 'vitepress'
interface MacrosPlugins {
    baidu?: string // baidtu-tongji https://tongji.baidu.com/web/help/article?id=219

    search?: boolean // use minisearch
}

type CategoryType = "Announcements" | "General" | "Ideas" | "Polls" | "Q&A" | "Show and tell"

interface MacrosCommon {
    repo: string
    reopId: string
    category?: CategoryType // default Announcements
    categoryId: string
}

interface SNS {
    icon: string
    link: string
}
interface UserPersonal {
    // 头像
    avatar: string
    // 描述
    description: string
    // 博客名
    text: string,

    sns?: SNS[]
}

export interface MacrosThemeConfig {
    nav: {
        title?: string
        alwaysShow?: boolean,
        items?: NavbarConfig
    },

    vitePlugins?: Plugin[]

    themePlugin?: MacrosPlugins

    // banner
    banner?: string[]

    // use 评论系统
    common?: MacrosCommon

    // 个人信息
    personal: UserPersonal
}