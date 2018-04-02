var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './server.js',
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.bundle.js'
    },
    node: {
        fs: 'empty',
        net: 'empty'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    optimization: {
        minimize: false
    },
    stats: {
        colors: true
    },
    devtool: 'source-map',
    mode: "development"
};