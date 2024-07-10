import { use } from 'react';
import { server } from 'typescript';

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        config.module.rules.push({test: /\.nodes$/, use: 'raw-loader' })

        if (!isServer) config.externals.push('canvas');
        return config;
    }
};

export default nextConfig;
