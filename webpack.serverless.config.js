var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './lambda.js',
    target: 'node',
    output: {
        libraryTarget: 'commonjs2',
        path: path.resolve(__dirname, 'build'),
        filename: 'lambda.js'
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