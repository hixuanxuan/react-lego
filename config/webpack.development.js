const {
  join,
  resolve
} = require('path');
const webpack = require('webpack');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const ESLintPlugin = require('eslint-webpack-plugin');
// const StyleLintPlugin = require('stylelint-webpack-plugin');
const internalIp = require('internal-ip');
const chalk = require('chalk');

const port = 3005;
const serverBaseURL = process.env.hostname || 'localhost';
const paths = require('./paths');
const getDevServerConf = require('./dev-server');
const name = process.env.npm_package_name;
process.env.NODE_ENV = 'development';
module.exports = async () => {
  const devServer = await getDevServerConf({
    port,
    serverBaseURL
  });
  return {
    entry: {
      app: [
        // react 热更新相关配置
        paths.appIndexJs,
      ],
    },
    output: {
      pathinfo: true,
      assetModuleFilename: 'static/media/[name][ext]',
      filename: 'static/js/[name].bundle.js',
      chunkFilename: 'static/js/[name].chunk.js',
      crossOriginLoading: 'anonymous',
      publicPath: '/',
    },
    devtool: 'cheap-source-map',
    devServer: devServer,
    plugins: [
      new ESLintPlugin({
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        // fix: true,
        lintDirtyModulesOnly: true,
        threads: 5,
      }),
      // new StyleLintPlugin({
      //     files: '**/*.(s(c|a)ss|css|less)',
      //     // cache: true,
      //     // fix: true,

      // }),
      // new webpack.ProvidePlugin({
      //     process: 'process/browser',
      // }),
      new WebpackBuildNotifierPlugin({
        title: `${name} build`,
        suppressSuccess: true,
        logo: paths.logo,
      }),
      new MiniCssExtractPlugin({
        filename: 'styles/[name].css',
        chunkFilename: 'styles/[name].css',
      }),
      new webpack.HotModuleReplacementPlugin(),
      new FriendlyErrorsWebpackPlugin({
        compilationSuccessInfo: {
          messages: [
            `
                        App running at:
                        - Local:     ${chalk.cyan.underline(
                            `http://localhost:${port}/`,
                        )}
                        - Network:   ${chalk.cyan.underline(
                            `http://${internalIp.v4.sync()}:${port}/`,
                        )}
                        - After End: ${chalk.cyan.underline(
                            `http://${serverBaseURL}:${port}`,
                        )}
                    `,
          ],
        },
      }),
    ],
    // 性能提示 bundle体积提示 单个>250kb 会提示
    // performance: {
    //     hints: 'warning',
    // },
  };
};