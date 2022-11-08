const path = require('path');
const HTMLPlug = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssEXtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development'

function optimization(){
    const obj = { splitChunks: {
      chunks: 'all'
    }}
    if(!isDev){
      obj.minimizer = [
        new CssMinimizerWebpackPlugin(),
        new TerserWebpackPlugin()
      ]
    }
  
    return obj
  }

function createLoader(load){
    if(load){return [{loader: MiniCssEXtractPlugin.loader},'css-loader', load]}
    else{return [{loader: MiniCssEXtractPlugin.loader},'css-loader']}
}

module.exports = {
    resolve: {
        alias: {
            '@js': path.resolve(__dirname, 'maket/js'),
            '@maket': path.resolve(__dirname, 'maket'),
        }
    },
    entry:'@js/script.js',
    output:{
        filename: 'bundle.[chunkhash].js',
        path: path.resolve(__dirname, 'public')
    },
    devServer:{
        port: 3000,
        hot: isDev
    },
    plugins:[
        new HTMLPlug({template:'./maket/index.html',  minify: {collapseWhitespace: !isDev}}),
        new CleanWebpackPlugin(),
        new MiniCssEXtractPlugin()
    ],
    module:{
        rules:[
            {
                test: /\.css$/,
                use:  createLoader(),
                type: 'javascript/auto'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {loader: 'babel-loader',options: {presets: ['@babel/preset-env']}}
            }
            ]
    },
    optimization: optimization(),
}