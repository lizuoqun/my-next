import {Suspense} from "react"
import {cookies} from "next/headers"
import {connection} from "next/server";
import {cacheLife} from "next/cache";

const DynamicContent = async () => {
    const data = await fetch('https://www.mocklib.com/mock/random/name') //随机生成一个名称
    const json = await data.json()
    console.log(json)
    const cookieStore = await cookies() //获取cookie
    console.log(cookieStore)

    await connection() //使用connection表示不要预渲染这部分
    const random = Math.random()
    const now = Date.now()
    console.log(random, now)
    return (
        <div>
            <h2>动态内容</h2>
            <main>
                <ul>
                    <li>名称：{json.name}</li>
                    <li>随机数：{random}</li>
                    <li>时间戳：{now}</li>
                </ul>
            </main>
        </div>
    )
}

const CacheLifeComponent = async () => {
    // 使用预设参数
    'use cache'
    cacheLife("hours")
    const data = await fetch('https://www.mocklib.com/mock/random/name')
    const json = await data.json()
    return (
        <div>
            <h2>缓存内容</h2>
            <main>
                <ul>
                    <li>名称：{json.name}</li>
                </ul>
            </main>
        </div>
    )
}

export default async function DynamicCachePage() {

    return (
        <div>
            <h1>Home</h1>
            <Suspense fallback={<div>动态内容Loading...</div>}>
                <DynamicContent/>
                <CacheLifeComponent/>
            </Suspense>
        </div>
    )
}