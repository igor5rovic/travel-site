const path = require('path');

module.exports = {
    entry: {
        App: "./app/assets/scripts/App.js",
        Vendor: "./app/assets/scripts/Vendor.js"
    },
    output: {
        path: path.resolve(__dirname, 'app/temp/scripts'),
        filename: "[name].js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015'],
            },
            exclude: [path.resolve(__dirname, "node_modules")]
        }]
    }
    /*module: {
        loaders: [{
            loader: 'babel',
            query: {
                presets: ['es015']
            },
            test: /\.js$/,
            exclude: /node_modules/
        }]
    } */
}