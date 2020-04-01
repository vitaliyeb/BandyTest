const   HtmlWebpackPlugin       = require('html-webpack-plugin'),
        MiniCssExtractPlugin    = require('mini-css-extract-plugin');


module.exports = {
    mode: "development",

    module: {
        rules:[
            //js
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            //stylus -> css loader
            {
                test: /\.styl$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "stylus-loader"
                ]
            },
            //file-loader
            {
                test: /\.(png|jpg|jpeg)$/,
                use:[
                    {
                        loader: "file-loader",
                        options:{
                            outputPath: 'images',
                            name: '[name]-[sha1:hash:7].[ext]'
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: 'style-[hash:8].css',
        })
    ],

    devServer: {
        open: true
    }
};