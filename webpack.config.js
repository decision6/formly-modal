const webpack = require('webpack')
const path = require('path')
const version = require('./package.json').version
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const banner = 'ModalForm v' + version + '\n' +
               '(c) 2017 Decision6 Team\n' +
               'Released under the MIT License.'

const common = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
        include: path.join(__dirname, './')
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.BannerPlugin({
      banner: banner
    }),
    new ExtractTextPlugin('formly-modal.css')
  ],
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src')
    }
  }
}

module.exports = [
  {
    entry: path.resolve(__dirname, 'src/index'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'formly-modal.js',
      library: 'FormlyModal',
      libraryTarget: 'umd'
    },
    externals: {
      vue: 'vue',
      quasar: 'quasar-framework',
      lodash: 'lodash'
    },
    module: common.module,
    plugins: [
      ...common.plugins,
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: false,
        mangle: false
      })
    ],
    resolve: common.resolve
  },
  {
    entry: path.resolve(__dirname, 'src/index'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'formly-modal.min.js',
      library: 'FormlyModal',
      libraryTarget: 'umd'
    },
    externals: {
      vue: 'vue',
      quasar: 'quasar-framework',
      lodash: 'lodash'
    },
    module: common.module,
    plugins: [
      ...common.plugins,
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        warnings: false
      })
    ],
    resolve: common.resolve
  }
]
