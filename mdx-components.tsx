import type {MDXComponents} from 'mdx/types'

const components: MDXComponents = {
    h1: ({children}) => <h1 className='text-2xl font-bold'>{children}</h1>, //# 代表h1 你可以自定义修改样式
    li: ({children}) => <li className='list-disc list-inside'>{children}</li>, //- 代表li 你可以自定义修改样式
}

export function useMDXComponents(): MDXComponents {
    return components
}