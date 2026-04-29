import type {MetadataRoute} from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://example.com',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
            images: ['http://localhost:3000/xxxxxxxxxx.jpg'],
        },
        {
            url: 'https://example.com/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
            videos: [
                {
                    thumbnail_loc: 'http://localhost:3000/xxxxxxxxxx.jpg',
                    title: '视频标题',
                    description: '视频描述',
                    duration: 100,
                    publication_date: new Date(),
                }
            ]
        },
        {
            url: 'https://example.com/blog',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
    ]
}