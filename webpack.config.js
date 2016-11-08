var webpack = require('webpack');
var merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var NpmInstallPlugin = require('npm-install-webpack-plugin');
var path = require('path');

const TARGET = process.env.npm_lifecycle_event;
console.log("target event is " + TARGET);

var common = {
  cache: true,
  debug: true,
  entry: './src/script/index.jsx',
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  output: {
    filename: '[name].js',
    sourceMapFilename: '[file].map'
  },
  module: {
    loaders: [{
      test: /\.js[x]?$/,
      loaders: ['babel-loader?presets[]=es2015&presets[]=react'],
      exclude: /(node_modules)/
    }, {
      test: /\.css$/,
      loaders: ['style', 'css']
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    }, {
      test: /\.less$/,
      loaders: ['style', 'css', 'less']
    }, {
      test: /\.woff$/,
      loader: "url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]"
    }, {
      test: /\.woff2$/,
      loader: "url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]"
    }, {
      test: /\.(eot|ttf|svg|gif|png)$/,
      loader: "file-loader"
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};

if(TARGET === 'dev' || !TARGET) {
    module.exports = merge(common,{
        devtool: 'eval-source-map',
        devServer: {
            historyApiFallback: true
        },
        entry: './src/script/index.jsx',
        output: {
            filename: '[name].js',
            publicPath: 'http://localhost:8090/assets'
        },
        plugins: [
            new NpmInstallPlugin({
                save: true // --save
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('dev')
            })
        ]
    });
}

if (TARGET === 'build') {
  module.exports = merge(common, {
    devtool: 'source-map',
    output: {
      path: './build'
    }
  });
}
