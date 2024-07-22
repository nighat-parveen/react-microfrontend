const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commomConfig = require('./webpack.common');

const prodConfig = {
    mode: 'production',
    devServer: {
        port: 8082
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};

module.exports = merge(commomConfig, prodConfig);