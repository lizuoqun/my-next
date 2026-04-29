export type Dictionary = {
    title: string
    description: string
    keywords: string
}
// 支持的语言
export const locales = ['en', 'zh', 'ja', 'ko']
export const defaultLocale = 'zh'

// 去根据语言得到对应的json文件
export function getDictionary(locale: string): Promise<Dictionary> {
    return import(`./${locale}.json`).then(module => module.default)
}