import fs from 'fs'

export default async function StaticCachePage() {
    const data = fs.readFileSync('./src/app/cache/static/data.json', 'utf-8')
    console.log(data)
    const impData = await import('./data.json')
    console.log(impData)
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">文件内容</h1>
            <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap">
                    {data}
                </pre>
        </div>
    )
}
