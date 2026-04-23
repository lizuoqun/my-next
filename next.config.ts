import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,
    cacheComponents: true, // 启用缓存组件
    images: {
        formats: ['image/avif', 'image/webp'], //默认是 ['image/webp']
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // 设备尺寸
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // 图片尺寸
        remotePatterns: [
            {
                protocol: 'https', // 协议
                hostname: 'eo-img.521799.xyz', // 主机名
                pathname: '/i/pc/**', // 路径
                port: '', // 端口
            },
        ],
    }
};

export default nextConfig;
