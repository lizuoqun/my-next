import fs from 'fs'
import path from 'path'
import {Suspense} from "react";
import {NoCachePage} from "@/app/cache/strategy/page";

export async function ServerPage() {
    const filePath = path.join(process.cwd(), 'README.md')
    const content = await fs.promises.readFile(filePath, 'utf-8')

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">文件内容</h1>
            <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap">
                    {content}
                </pre>
        </div>
    )
}

export default function Page() {
    return <Suspense fallback={<div>动态内容Loading...</div>}>
        <ServerPage/>
    </Suspense>
}
