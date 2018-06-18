const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = {
    entry: {
        index: './src/scripts/index.js',
        catalog: './src/scripts/catalog.js',
        form: './src/scripts/form.js'
    },
    output: {
        filename: '[name]-min.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                "presets": [
                    "env"
                ]
            }
        }]
    }
};

module.exports = config;