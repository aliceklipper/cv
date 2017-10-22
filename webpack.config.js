/**
 * @file Alice Klipper's CV, webpack config.
 * @author Alice Klipper <aliceklipper@yandex.com> (https://t.me/aliceklipper)
 * @license MIT
 * @copyright Alice Klipper, 2017
 * @flow
 */

/*
 eslint
 no-magic-numbers: off,
 import/no-extraneous-dependencies: off,
 import/no-commonjs: off,
 import/unambiguous: off,
 fp/no-mutation: off,
 */

const { join } = require('path');

const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const { BundleAnalyzerPlugin: AnalyzerPlugin } = require('webpack-bundle-analyzer');
const NotifierPlugin = require('webpack-notifier');
const { Plugin: ShakePlugin } = require('webpack-common-shake');
const LivereloadPlugin = require('webpack-livereload-plugin');

const { EnvironmentPlugin: EnvPlugin, NamedModulesPlugin, NoEmitOnErrorsPlugin, optimize: { ModuleConcatenationPlugin } } = webpack;

const dev = process.env.NODE_ENV === 'development';

module.exports = {
    target: 'web',
    context: process.cwd(),
    entry: {
        index: ['babel-polyfill', './src/index.jsx'],
    },
    output: {
        chunkFilename: '[id].js',
        filename: '[name].js',
        path: join(process.cwd(), 'build'),
        pathinfo: dev,
        publicPath: '/cv/',
    },
    externals: {},
    devtool: dev ? 'source-map' : undefined,
    devServer: {
        compress: false,
        port: 1337,
        host: 'localhost',
        historyApiFallback: true,
        publicPath: '/cv/',
        contentBase: join(process.cwd(), 'build'),
        watchContentBase: true,
        hot: false,
        // open: dev,
    },
    watch: dev,
    node: {},
    resolve: {
        extensions: ['.jsx', '.js', '.json'],
        alias: {
            '~': join(process.cwd(), 'src'),
            api: join(process.cwd(), 'src', 'api'),
            components: join(process.cwd(), 'src', 'components'),
            config: join(process.cwd(), 'src', 'config'),
            containers: join(process.cwd(), 'src', 'containers'),
            lib: join(process.cwd(), 'src', 'lib'),
            messages: join(process.cwd(), 'src', 'messages'),
            store: join(process.cwd(), 'src', 'store'),
            types: join(process.cwd(), 'src', 'types'),
        },
        // mainFields: ['module', 'jsnext:main', 'browser', 'main'],
    },
    module: {
        rules: [
            {
                test: /\.json$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'json-loader',
                    },
                ],
            },
            {
                test: /\.(?:png|jpe?g|gif|svg|ttf|woff|woff2|eot)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules\/(?:core-js|react-dom)\//,
                use: [
                    {
                        loader: 'babel-loader',
                        options: { cacheDirectory: true },
                    },
                    {
                        loader: 'eslint-loader',
                        options: {
                            emitError: true,
                            fix: true,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            template: '!pug-loader!./index.pug',
            title: `Alice Klipper's CV`,
            appMountId: 'root',
            mobile: true,
            scripts: [dev ? 'http://localhost:35729/livereload.js' : null].filter(Boolean),
        }),
        new EnvPlugin(['NODE_ENV']),
        dev ? new NamedModulesPlugin() : null,
        new NoEmitOnErrorsPlugin(),
        new ShakePlugin(),
        dev ? null : new ModuleConcatenationPlugin(),
        dev ? null : new MinifyPlugin(),
        dev ? null : new CompressionPlugin(),
        dev ? new LivereloadPlugin() : null,
        new NotifierPlugin({
            alwaysNotify: true,
            title: 'webpack',
        }),
        new AnalyzerPlugin({
            analyzerMode: 'static',
            defaultSizes: dev ? 'stat' : 'gzip',
            openAnalyzer: false,
            logLevel: 'silent',
        }),
    ].filter(Boolean),
};
