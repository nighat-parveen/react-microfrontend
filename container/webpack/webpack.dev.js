const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

const commomConfig = require('./webpack.common');

const devConfig = {
    mode: 'development',
    devServer: {
        port: '8080',
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: 'marketing@http://localhost:8081/remoteEntry.js'
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};

module.exports = merge(commomConfig, devConfig);