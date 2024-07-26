const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commomConfig = require('./webpack.common');

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/dist/',
        clean: true,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketing',
            filename:'remoteEntry.js',
            exposes: {
                './marketingApp': './src/bootstrap'
            }
        }),
    ]
};

module.exports = merge(commomConfig, prodConfig);