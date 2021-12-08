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
            // set 'fs' to an empty module on the client to prevent this error on build --> Error: Can't resolve 'fs'
            config.node = {
                electron: 'empty'
            }
        }

        return config;

} 
};
