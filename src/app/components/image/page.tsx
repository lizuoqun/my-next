import Image from "next/image"
import ImageByPng from '@/public/1.png'

export default function ImagePage() {
    return (
        <div>
            <h1>src直接使用</h1>
            <Image
                src="/1.png"
                loading="eager"
                width={100}
                height={100}
                alt="1"
            />
            <h1>import动态引入</h1>
            <Image
                src={ImageByPng}
                alt="1"
            />
            <h1>远程图片加载</h1>
            <RemoteImage/>
        </div>
    )
}

export function RemoteImage() {
    const len = 20;
    return (
        <div>
            <h1>Home</h1>
            {Array.from({length: len}).map((_, index) => (
                <Image
                    key={index}
                    src={`https://eo-img.521799.xyz/i/pc/img${index + 1}.webp`}
                    alt="1"
                    width={192}
                    height={108}
                />
            ))}
        </div>
    )
}