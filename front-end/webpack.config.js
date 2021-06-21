const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: 'development',
    entry: ['./app.js'],
    output: {
        filename: 'build.js',
        path: path.join(__dirname, "/dist")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({template: path.join(__dirname, "/index.html")})],
    devServer: {
        historyApiFallback: true,
        host: "localhost",
        port: "8080"
    }
}