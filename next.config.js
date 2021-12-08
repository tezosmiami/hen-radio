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
            // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
            config.resolve.fallback = {
                fs: false
            }
        }

        return config;
    }
        };
