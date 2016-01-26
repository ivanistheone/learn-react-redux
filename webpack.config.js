/// Minimum viable webpack config //////////////////////////////////////////////
var path = require('path');
var webpack = require('webpack');

var config = module.exports = {
    entry: [                                   // the application's entry points
        './frontend/index',
    ],
    output: {                               // where webpack should output files
        path: path.resolve(__dirname, "frontend/build"),
        publicPath: '/frontend/build/',      // adjust depending on server setup
        filename: '/js/bundle.js',
    },
    module: {
        preLoaders: [
            {                                                     // eslint code
                test: /\.jsx$|\.js$/,
                loader: 'eslint-loader',
                include: path.join(__dirname, 'frontend'),
                exclude: /bundle\.js$/
            }
        ],
        loaders: [
            {
                test: /\.js$/,                             // main loader for js
                include: path.join(__dirname, 'frontend'),
                loader: 'babel',
                query: { cacheDirectory: true, presets: ['es2015'] },
            },
        ]
    },
    plugins: [                                                 // common plugins
        new webpack.optimize.OccurenceOrderPlugin(),
    ],
    devtool: process.env.NODE_ENV === 'production' ? '#source-map' : '#eval-source-map'
};

if (process.env.NODE_ENV === 'production') {              // only for production
    config.plugins.push(
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({ minimize: true, sourceMap: true })
    );
}

if (process.env.NODE_ENV === 'development') {            // only for development
    config.plugins.push(new webpack.NoErrorsPlugin());
}
