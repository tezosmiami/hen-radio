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
    webpack: (config, { webpack }) => {
        config.plugins.push(new webpack.IgnorePlugin({
            resourceRegExp: /^electron$/
        }),);},
};
