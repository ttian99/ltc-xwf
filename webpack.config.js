var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
console.log('APP_PATH = ' + APP_PATH);
var DIST_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports= {
  entry: {
    app: path.resolve(APP_PATH, 'entry.jsx')
  },
  output: {
    path: DIST_PATH,
    filename: 'output.js'
  },
  //enable dev source map
  devtool: 'eval-source-map',
  //enable dev server
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  //babel重要的loader在这里
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: APP_PATH,
        query: {
          //添加两个presents 使用这两种presets处理js或者jsx文件
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(css)$/,
        loader: "style!css"
      },
      {
        test: /\.(scss)$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      }, 
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      },
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: '美一间',
      template: 'index.html',
    })
  ],
  // 这样就可以在js中import加载jsx这种扩展名的脚本
  resolve: {
      extensions: ['', '.js', '.jsx']
  }
}