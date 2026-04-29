import type {MetadataRoute} from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: 'Googlebot', // 搜索引擎爬虫的名称
                allow: '/', // 允许访问的页面
                disallow: '/api/', // 不允许访问的页面
                crawlDelay: 10, // 访问间隔时间(Google机器人不支持该参数，其他部分爬虫机器人支持该参数)
            }
        ],
        sitemap: 'xxxx'
    }
}