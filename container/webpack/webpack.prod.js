const merge = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const commomConfig = require('./webpack.common');
const domain = 'http://production-domain'; //process.env.PRODUCTION_DOMAIN
const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/dist/',
        clean: true,

    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: `marketing@${domain}/marketing/remoteEntry.js`
            },
        })
    ]
};

module.exports = merge(commomConfig, prodConfig);