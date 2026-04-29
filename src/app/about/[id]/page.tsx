// 'use client';
// import {useParams} from 'next/navigation';
//
// export default function DynamicRoute() {
//     const {id} = useParams();
//     return <div>
//         <div>动态路由获取 {id}</div>
//         <hr/>
//         <IndexPage/>
//     </div>;
// }

import type {Metadata, ResolvingMetadata} from 'next';

type Props = {
    params: Promise<{ id: string }>;
};

export async function generateMetadata(
    {params}: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const {id} = await params;
    const resolvedParent = await parent;

    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {next: {revalidate: 3600}}
    );
    if (!res.ok) {
        return {title: '文章未找到'};
    }
    const data = await res.json();

    return {
        title: `${data.title} | ${resolvedParent.title?.absolute ?? '文章'}`,
        description: data.body.slice(0, 150),
        keywords: [data.title],
    };
}

export default async function IndexPage({params}: Props) {
    const {id} = await params;
    return <div>文章 id：{id}</div>;
}
