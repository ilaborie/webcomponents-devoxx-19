const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

const outDir = path.resolve(__dirname, 'dist');

module.exports = {
    entry: {
        main: './src/index.ts'
    },
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        chunkFilename: "[name].chunk.js",
        path: outDir
    },
    devServer: {
        contentBase: outDir,
        hot: true,
        open: false
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CopyWebpackPlugin(
            [
                'node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js'
            ]),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [{
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
};