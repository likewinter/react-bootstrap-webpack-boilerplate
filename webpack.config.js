var path = require('path');
var webpack = require('webpack');
var production = (process.env.NODE_ENV === 'production');

var bundle = ['./resources/index'];
var plugins = [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'js/vendor.js')
];
var jsLoaders = ['babel'];

if (production) {
    plugins.unshift(
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    );
} else {
    bundle.unshift(
        'webpack-dev-server/client?http://0.0.0.0:8080',
        'webpack/hot/only-dev-server'
    );
    plugins.unshift(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    );
    jsLoaders.unshift('react-hot');
}

var webpackConfig = {
    entry: {
        bundle: bundle,
        vendor: ['react']
    },
    output: {
        path: path.join(__dirname, 'app'),
        filename: 'js/[name].js',
        publicPath: 'http://localhost:8080/'
    },
    plugins: plugins,
    resolve: {
        alias: {
            'assets': path.join(__dirname, 'resources/')
        },
        extensions: ['', '.js', '.jsx', '.es6', '.less', '.css']
    },
    module: {
        loaders: [
            {
                test: /\.(jsx|es6)$/,
                exclude: /node_modules/,
                loaders: jsLoaders
            },
            {
                test: /\.(less)$/,
                loader: 'style!css!less'
            },
            {
                test: /\.(css)$/,
                loader: 'style!css'
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                loader: 'file?name=fonts/[name].[ext]'
            }
        ]
    }
};

module.exports = webpackConfig;
