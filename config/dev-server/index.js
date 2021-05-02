const {
    prepareProxy,
    choosePort
} = require('react-dev-utils/WebpackDevServerUtils');
const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');
const evalSourceMapMiddleware = require('react-dev-utils/evalSourceMapMiddleware');
const paths = require('../paths');
const HOST = process.env.HOST || '0.0.0.0';
let proxyOtp = process.env.REACT_APP_PROXY;

module.exports = async function ({
    port: DEFAULT_PORT,
    serverBaseURL
}) {
    const port = await choosePort(HOST, DEFAULT_PORT);
    return {
        historyApiFallback: {
            disableDotRule: true
        },
        clientLogLevel: 'none', // 禁止调试
        disableHostCheck: true,
        contentBase: paths.appPublic,
        // https://webpack.docschina.org/configuration/watch/
        watchContentBase: true,
        watchOptions: {
            aggregateTimeout: 1000,
            ignored: /node_modules/
        },
        staticOptions: {
            redirect: false
        },
        publicPath: '/',
        https: false,
        host: HOST,
        inline: true,
        https: false,
        overlay: false,
        hot: true,
        // transportMode: {
        //     server: 'ws'
        // },
        hotOnly: true,
        open: true,
        openPage: `http://${serverBaseURL}:${port}`,
        public: `${HOST}:${port}`,
        port,
        compress: true,
        quiet: true,
        proxy: {
            '/api': 'http://49.234.70.125:3005',
            '/user': 'http://49.234.70.125:3005',
        },
        before(app, server) {
            // 报错定位两兄弟
            app.use(evalSourceMapMiddleware(server));
            app.use(errorOverlayMiddleware());
        }
    }
};