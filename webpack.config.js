const path = require('path');

module.exports = {
    entry: "./app/assets/scripts/App.js",
    output: {
        path: path.resolve(__dirname, 'app/temp/scripts'),
        filename: "App.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: [path.resolve(__dirname, "node_modules")],

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