import { join } from "path";
import HtmlWebpackPlugin from 'html-webpack-plugin';
export const entry = './src/index.js';
export const output = {
    path: join(__dirname, "/dist"),
    filename: "index_bundle.js",
    publicPath: '/'
};
export const devServer = {
    historyApiFallback: true
};
export const module = {
    rules: [
        {
            test: /\.js$|\.jsx$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.css$/,
            use: [
                {
                    loader: 'style-loader',
                },
                {
                    loader: 'css-loader',
                },
            ]
        },
    ],
};
export const plugins = [
    new HtmlWebpackPlugin({
        template: "./src/index.html"
    })
];
export const resolve = {
    extensions: ['.js', '.jsx'],
};

