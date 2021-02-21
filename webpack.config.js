const webpack = require('webpack');
const {
    join,
    resolve
} = require('path');
const {
    merge
} = require('webpack-merge');
const argv = require('minimist')(process.argv.slice(2));
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const WebpackBar = require('webpackbar');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = argv.mode || 'development';
const mergeConfig = require(`./config/webpack.${mode}.js`);

// 定义一些正则
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;

const isEnvDevelopment = mode === 'development';
const isEnvProduction = mode === 'production';
const cssModuleName = isEnvDevelopment ? '[path][name]__[local]--[hash:base64:5]' : '[local]--[hash:base64:5]';
const shouldUseSourceMap = isEnvDevelopment
// 分开写不太方便 放到一起吧
const getStyleLoaders = (cssOptions, ...preProcessors) => {
    const loaders = [
        isEnvProduction && MiniCssExtractPlugin.loader,
        isEnvDevelopment && require.resolve('style-loader'),
        {
            loader: 'thread-loader',
            options: {
                workers: 3,
            },
        },
        {
            loader: require.resolve('css-loader'),
            options: cssOptions,
        },
        {
            loader: require.resolve('postcss-loader'),
            options: {
                postcssOptions: {
                    ident: 'postcss',
                    plugins: () => [
                        require('postcss-flexbugs-fixes'),
                        require('postcss-preset-env')({
                            stage: 3,
                            features: {
                                'nesting-rules': true,
                            },
                            autoprefixer: {
                                flexbox: 'no-2009',
                            },
                            browsers: [
                                '>1%',
                                'last 4 versions',
                                'Firefox ESR',
                                'not ie < 11'
                            ]
                        }),
                        postcssNormalize()
                    ]
                },
                sourceMap: shouldUseSourceMap
            }
        },
    ].filter(Boolean);
    if (preProcessors.length) {
        preProcessors.forEach(preProcessor => {
            if (typeof (preProcessor) !== 'string') {
                loaders.push(preProcessor);
            } else {
                loaders.push({
                    loader: require.resolve(preProcessor),
                });
            }
        });
    }
    return loaders;
};

const webpackBaseConfig = {
    entry: {
        app: resolve('./src/index.tsx'),
    },
    cache: {
        type: 'filesystem',
    },
    mode,
    module: {
        rules: [{
                test: /\.(js|jsx|ts|tsx)$/,
                include: [resolve('src')],
                exclude: /node_modules/,
                use: [{
                        loader: 'thread-loader',
                        options: {
                            workers: 3,
                        },
                    },
                    'babel-loader',
                ],
            },
            {
                test: cssRegex,
                exclude: cssModuleRegex,
                use: getStyleLoaders({
                    importLoaders: 1,
                    sourceMap: shouldUseSourceMap,
                }),
                sideEffects: true,
            },
            {
                test: cssModuleRegex,
                use: getStyleLoaders({
                    importLoaders: 1,
                    sourceMap: shouldUseSourceMap,
                    modules: {
                        localIdentName: cssModuleName
                    },
                }),
            },
            {
                test: lessRegex,
                exclude: [lessModuleRegex, /node_modules/],
                use: getStyleLoaders({
                        importLoaders: 2,
                        sourceMap: shouldUseSourceMap,
                    },
                    'less-loader', {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: [
                                resolve(
                                    './src/static/css/vars.less',
                                ),
                            ],
                        },
                    }
                ),
                sideEffects: true,
            },
            {
                test: lessRegex,
                include: /node_modules\/antd/,
                use: getStyleLoaders({
                    importLoaders: 2,
                    sourceMap: shouldUseSourceMap,
                }, {
                    loader: 'less-loader',
                    options: {
                        lessOptions: {
                            modifyVars: require('./modifyVars'),
                            javascriptEnabled: true,
                        }
                    }
                })
            },
            {
                test: lessModuleRegex,
                use: getStyleLoaders({
                        importLoaders: 2,
                        sourceMap: shouldUseSourceMap,
                        modules: {
                            localIdentName: cssModuleName
                        },
                    },
                    'less-loader', {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: [
                                resolve(
                                    './src/static/css/vars.less',
                                ),
                            ],
                        },
                    }
                ),
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.(png|jpg|jpeg|gif|eot|woff|woff2|ttf|otf)$/,
                type: 'asset',
            },

        ],
    },
    plugins: [
        new WebpackBuildNotifierPlugin({
            title: 'LEGO Build',
            suppressSuccess: true,
            logo: resolve(__dirname, './public/lego.png'),
        }),
        new WebpackBar({
            name: 'LEGO',
            color: 'blue',
            profile: true,
        }),
        new webpack.DefinePlugin({
            'process.env': {
                mod: JSON.stringify(process.env.mod),
                id: JSON.stringify(process.env.id)
            }
        })
    ],
    resolve: {
        modules: ['node_modules', resolve('src')],
        extensions: ['.js', '.ts', '.tsx', 'jsx'],
        alias: {
            '@': resolve('./src'),
            '@imgs': resolve('./src/static/imgs'),
            '@components': resolve('./src/components'),
            '@css': resolve('./src/static/css'),
            '@utils': resolve('./src/utils'),
            '@layout': resolve('./src/layout'),
            '@hooks': resolve('./src/hooks'),
            '@widgets': resolve('./src/widgets'),
        },
    },
};
module.exports = merge(webpackBaseConfig, mergeConfig);