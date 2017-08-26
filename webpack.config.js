var path = require('path')
// var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: '/build/',
    filename: 'app.js',
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Red Feed / Blue Feed',
    template: 'src/index.ejs',
  })],
  module: {
    loaders: [
      {
        test: /\.(html)$/,
        loader: 'file-loader?name=[path][name].[ext]!./index.html',
      },
    ],

    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // {{#sass}}
            // // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // // the "scss" and "sass" values for the lang attribute to the right configs here.
            // // other preprocessors should work out of the box, no loader config like this necessary.
            // 'scss': 'vue-style-loader!css-loader!sass-loader',
            // 'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
            // {{/sass}}
          },
          // other vue-loader options go here
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
        },
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader', // creates style nodes from JS strings
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }, {
          loader: 'sass-loader', // compiles Sass to CSS
        }],
      },
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader', // creates style nodes from JS strings
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }],
      },
    ],
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    },
  },
}

// if (process.env.NODE_ENV === 'production') {
//   module.exports.devtool = '#source-map'
//   // http://vue-loader.vuejs.org/en/workflow/production.html
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: '"production"'
//       }
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       sourceMap: true,
//       compress: {
//         warnings: false
//       }
//     }),
//     new webpack.LoaderOptionsPlugin({
//       minimize: true
//     })
//   ])
// }
