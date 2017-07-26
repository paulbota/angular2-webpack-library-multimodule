const webpack = require('webpack');
const helpers = require('./config/helpers');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
const METADATA = {
  title: 'Angular 2 Webpack Library',
  host: HOST,
  port: PORT,
  ENV: ENV,
  baseUrl: '/',
  isDevServer: helpers.isWebpackDevServer()
};

var path = process.env.arg;

module.exports = {

  metadata: METADATA,

  // devtool: 'cheap-module-source-map',

  entry: './' + path + '/index.ts',

  output: {
    path: helpers.root('dist'),
    filename: path + '/index.js',
    library: 'angular2-webpack-library',
    libraryTarget: 'umd',

    umdNamedDefine: true
  },

  externals: [
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/forms'
  ],

  resolve: {
    extensions: ['', '.ts', '.js', '.json'],
    root: helpers.root(path),
    modulesDirectories: ['node_modules'],
  },

  module: {

    preLoaders: [],

    loaders: [
      {
        test: /\.ts$/,
        loaders: [
          "ts-loader?{configFileName:'" + path +"/tsconfig.json'}",
          'angular2-template-loader'
        ],
        exclude: [/\.(spec|e2e)\.ts$/]
      },

      {
        test: /\.json$/,
        loader: 'json-loader'
      },

      {
        test: /\.css$/,
        loaders: ['to-string-loader', 'css-loader']
      },

      {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: []
      },

      {
        test: /\.(jpg|png|gif)$/,
        loader: 'file'
      }
    ]

  },

  plugins: [

    // new CopyWebpackPlugin([{
    //   from: 'src/assets',
    //   to: 'assets'
    // }]),

    new DefinePlugin({
      'ENV': JSON.stringify(METADATA.ENV),
      'process.env': {
        'ENV': JSON.stringify(METADATA.ENV),
        'NODE_ENV': JSON.stringify(METADATA.ENV),
      }
    }),

    // new NamedModulesPlugin(), // Description: Uses file names as module name.
  ],

  tslint: {
    emitErrors: false,
    failOnHint: false,
    resourcePath: path
  },

  devServer: {
    port: METADATA.port,
    host: METADATA.host,
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    outputPath: helpers.root('dist')
  },

  node: {
    global: 'window',
    crypto: 'empty',
    process: true,
    module: false,
    clearImmediate: false,
    setImmediate: false
  }

};
