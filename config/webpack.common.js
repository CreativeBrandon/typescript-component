const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'app': './src/main.ts',
        'index': './src/index.ts'
    },

    resolve: {
        extensions: ['*', '.js', '.json', '.ts', 'scss']
    },

    module: {
        rules: [
            {
                 test: /\.ts$/,
                 loader: 'awesome-typescript-loader'
            },
            {
                 test: /\.scss$/,
                 loader: 'sass-loader'
            },
            {
                 test: /\.html$/,
                 loader: 'html-loader'
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['index', 'app', 'polyfills']
        }),

        new htmlWebpackPlugin({
            template: 'src/index.html',
            chunksSortMode: 'dependency'
        })
    ]
}

module.exports = config;
