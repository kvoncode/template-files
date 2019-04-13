/* eslint-disable */

const path = require('path');

module.exports = {
    entry: './html/tribute-page/src/index.jsx',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'html/tribute-page', 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};