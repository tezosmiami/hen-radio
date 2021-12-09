module.exports = {
    
    reactStrictMode: true,
    images: {
        domains: [
            'cloudflare-ipfs.com',
            'infura-ipfs.io',
            'dweb.link',
            'gateway.pinata.cloud',
            'ipfs.io',
            'services.tzkt.io',
        ],
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback = {
                fs: false,
                https: false,
                http:false,
                os: false,
                stream: false,
                path: false,
                crypto: false
                electron: false,
            }
        }

        return config;
    }
        };
