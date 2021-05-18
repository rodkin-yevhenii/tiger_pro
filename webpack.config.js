const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

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
        ]
      })
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
      main: './js/main.js',
      forms: './js/forms.js'
    },
    output: {
      filename: 'js/[name].js',
      path: paths.dist.root
    },
    resolve: {
      alias: {
        '@src': paths.src.root,
        '@js': paths.src.js,
        '@css': paths.src.css,
        '@img': paths.src.img,
      }
    },
    plugins: plugins(),
  }
}
