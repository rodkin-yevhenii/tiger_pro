const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack')

// Paths
const assetsPath = 'wp-content/themes/tigerpro/frontend/'
const paths = {
  assets: path.resolve(__dirname, assetsPath),
  src: {
    root: path.resolve(__dirname, assetsPath + 'src'),
    js: path.resolve(__dirname, assetsPath + 'src/js'),
    css: path.resolve(__dirname, assetsPath + 'src/css'),
    img: path.resolve(__dirname, assetsPath + 'src/img')
  },
  dist: {
    root: path.resolve(__dirname, assetsPath + 'dist'),
    js: path.resolve(__dirname, assetsPath + 'dist/js'),
    css: path.resolve(__dirname, assetsPath + 'dist/css'),
    img: path.resolve(__dirname, assetsPath + 'dist/img')
  }
}

// HTML files
const htmlFiles = [
  'index',
  '404',
  '500',
  'contacts',
  'geodesy',
  'geology',
  'land-management',
]

// Config
module.exports = (env, argv) => {
  // Functions
  const isDev = argv.mode === 'development'
  const isProd = !isDev
  const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`
  const plugins = () => {
    const plugins = [
      new CleanWebpackPlugin(),
      new CopyPlugin({
        patterns: [
          { from: paths.src.root + "/favicon.png", to: paths.dist.root },
          { from: paths.src.img, to: paths.dist.img },
        ]
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].css'
      }),
      new webpack.ProvidePlugin( {
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      } )
    ]

    htmlFiles.forEach(name => {
      plugins.push(
        new HtmlWebpackPlugin({
          filename: name + '.html',
          template: name + '.html'
        })
      )
    })

    return plugins
  }

  return {
    mode: argv.mode,
    context: paths.src.root,
    entry: {
      main: './js/index.js',
      jquery: 'jquery'
      // forms: './js/forms.js'
    },
    output: {
      filename: 'js/[name].js',
      path: paths.dist.root,
      publicPath: '/'
    },
    resolve: {
      alias: {
        '@src': paths.src.root,
        '@js': paths.src.js,
        '@css': paths.src.css,
        '@img': paths.src.img
      }
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: (resourcePath, context) => {
                  return path.relative(path.dirname(resourcePath), context) + '/';
                }
              },
            },
            'css-loader',
            'resolve-url-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        },
        {
          test: /\.css$/,
          use: [ MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
          test: /\.(png|jpg|svg|gif)$/,
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      ]
    },
    plugins: plugins(),
    devServer: {
      port: 4200,
      hot: isDev
    },
    devtool: isDev ? 'source-map' : 'eval',
  }
}
