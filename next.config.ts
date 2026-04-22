import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,
    cacheComponents: true, // 启用缓存组件
    images: {
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
