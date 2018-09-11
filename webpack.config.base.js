import path from 'path';
import chalk from 'chalk';
import autoprefixer from 'autoprefixer';
import flexbugs from 'postcss-flexbugs-fixes'
import mixin from 'postcss-mixins';
import easing from 'postcss-easings';
import csswring from 'csswring';
import rucksack from 'rucksack-css';

import { config } from './gulp/constants/config';

const MODE = process.env.NODE_ENV === 'prod' ? 'production' : 'development';
const isProd = !!(process.env.NODE_ENV === 'prod');

console.log(
  chalk.cyan(
    `Attempting to bind to HOST environment variable: ${chalk.yellow(
        chalk.bold.bgCyan(process.env.NODE_ENV)
    )}`
  )
);

// console.log(process.env);
console.log(`isProd : ${isProd}`);

const postCSSLoaderOptions = {
  indent: 'postcss',
  sourceMap: isProd ? false : 'inline',
  plugins: (loader) => [
    require('postcss-import')({ root: loader.resourcePath }),
    flexbugs(),
    rucksack(),
    easing(),
    mixin(),
    autoprefixer(
      {browsers: ['last 2 versions', 'ie 9', 'ios 7', 'android 4.1'], grid: true}
    ),
    csswring()
  ],
};


export default {
  mode: MODE,
  cache: true,
  target: 'web',
  output: {
    path: path.join(__dirname, config.tmp, config.assets, config.js),
    publicPath: `/${config.assets}/${config.js}/`,
    filename: '[name].bundle.js',
    chunkFilename: '[chunkhash].js',
    sourceMapFilename: '[name].map'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        include: __dirname,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true

            }
          }
        ]
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: !isProd,
              minimize: true
            }
          }
        ]
      },
      // SASS support - compile all other .scss files and pipe it to style.css
      {
        test: /\.(scss|sass)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: true,
              modules: true,
              sourceMap: !isProd,
              importLoaders: 2,
              localIdentName: '[name]-[local]-[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: postCSSLoaderOptions
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: !isProd
            }
          }
        ]
      }
    ]
  },
  resolve: {
    descriptionFiles: ['package.json'],
    enforceExtension: false,
    modules: ['src', 'src/js', 'web_modules', 'node_modules']
  }
}