const {merge} = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;

const commomConfig = require('./webpack.common');


const devConfig = {
    mode: 'development',
    devServer: {
        port: '8081',  
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

module.exports = merge(commomConfig, devConfig);