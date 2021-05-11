const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const paths = require('./paths');

const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP === 'true';
const publicPath = paths.servedPath;

module.exports = async () => ({
    entry: {
        app: paths.appIndexJs,
    },
    output: {
        path: paths.appBuild,
        // publicPath采用 `PUBLIC_URL` 环境变量 或者package.json 里面的 homepage
        publicPath,
        assetModuleFilename: 'static/media/[name].[hash:8].[ext]',
        filename: 'static/js/[name].[contenthash:8].js',
        chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
    },
    devtool: shouldUseSourceMap ? 'hidden-source-map' : false,
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    parse: {
                        ecma: 5,
                    },
                    compress: {
                        ecma: 5,
                        warnings: false,
                        comparisons: false,
                        //生产模式去掉console和debugger
                        drop_console: true,
                        drop_debugger: true,
                        inline: 2,
                    },
                    mangle: {
                        safari10: true,
                    },
                    output: {
                        ecma: 5,
                        // 删注释
                        comments: false,
                        ascii_only: true,
                    },
                },
                parallel: true,
                // cache: true,
                // sourceMap: shouldUseSourceMap,
            }),
            new OptimizeCSSAssetsPlugin({// 默认用cssnano
                assetNameRegExp: /\.css$/g,
                cssProcessorOptions: {
                    map: shouldUseSourceMap ? {
                        inline: false,
                        annotation: true,
                    } : false,
                },
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
        splitChunks: {
            chunks: 'all',
        },
        runtimeChunk: true,
    },
    plugins: [
        // 删除上次的产出
        new CleanWebpackPlugin(),
        // 把runtime嵌入行内
        new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime~.+[.]js/]),
        // 生产环境将每个模块下的css文件抽离出来单独打包
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].[contenthash:8].css',
            chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
        }),
    ],
    // node: {
    //     module: 'empty',
    //     dgram: 'empty',
    //     dns: 'mock',
    //     fs: 'empty',
    //     http2: 'empty',
    //     net: 'empty',
    //     tls: 'empty',
    //     child_process: 'empty',
    // }
});
