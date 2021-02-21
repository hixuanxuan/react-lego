const { join, resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  output: {
    path: join(__dirname, '../dist/'),
    publicPath: '/',
    assetModuleFilename: 'scripts/[name].[contenthash:5].bundule.[ext]',
    filename: 'scripts/[name].[contenthash:5].bundule.js',
  },
  devtool: 'cheap-source-map',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new OptimizeCSSAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: [
            'default',
            {
              discardComments: {
                removeAll: true,
              },
            },
          ],
        },
        canPrint: true,
      }),
    ],
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'LEGO',
      filename: 'index.html',
      template: './public/index.ejs',
      favicon: resolve( __dirname, '../public/lego.svg'),
      minify: {
        minifyJS: true,
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash:5].css',
      chunkFilename: 'styles/[name].[contenthash:5].css',
    }),
  ]
}