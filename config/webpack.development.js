const { join, resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const internalIp = require('internal-ip');
const chalk = require('chalk');
const argv = require('minimist')(process.argv.slice(2));
const port = 8000;
const serverBaseURL = argv.host || 'localhost';

module.exports = {
  output: {
    publicPath: '/',
    assetModuleFilename: 'images/[name][ext]',
    filename: 'scripts/[name].bundule.js',
  },
  devServer: {
    historyApiFallback: true,
    clientLogLevel: 'none', // 禁止调试
    disableHostCheck: true,
    contentBase: join(__dirname, '../dist'),
    hot: true,
    open: true,
    port,
    compress: true,
    quiet: true,
    proxy: {
      '/api': {
        target: `http://${serverBaseURL}:3000`,
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
        secure: false,
      },
    }
 
  },
  devtool: 'eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'LEGO',
      filename: 'index.html',
      template: './public/index.ejs',
      favicon: resolve( __dirname, '../public/lego.png')
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
      chunkFilename: 'styles/[name].css',
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx']
    }),
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [
          `
    App running at:
    - Local:     ${chalk.cyan.underline(`http://localhost:${port}/`)}
    - Network:   ${chalk.cyan.underline(`http://${internalIp.v4.sync()}:${port}/`)}
    - After End: ${chalk.cyan.underline(`http://${serverBaseURL}:3000`)}`,
        ],
      },
    }),
  ],
};
