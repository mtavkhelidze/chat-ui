const path = require("path");

const pkg = require("./package.json");

const webpack = require("webpack");
const merge = require("webpack-merge");

const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const template = "./assets/index.html";

const isProduction = () => process.env.NODE_ENV === "production";

config = {
    entry: [
        "./src/index.tsx"
    ],
    output: {
        filename: "script.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/"
    },

    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]

    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                test: /\.scss$/,
                loader: isProduction()
                    ? ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: "css-loader?minimize=true!sass-loader"
                    })
                    : "style-loader!css-loader!sass-loader"
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: pkg.description,
            template: template,
            appMountId: "app",
            minify: {
                html5: true
            }
        })
    ]
};

if (isProduction()) {
    delete config.devtool;
    config = merge(config, {
        plugins: [
            new UglifyJSPlugin({
                sourceMap: false
            }),
            new webpack.DefinePlugin({
                "process.env": {
                    "NODE_ENV": JSON.stringify("production")
                }
            }),
            new ExtractTextPlugin("styles.css")
        ]
    });
} else {
    config.entry.concat(["webpack-dev-server/client?http://localhost:8080/"]);
    config = merge(config, {
        plugins: [
            new webpack.NamedModulesPlugin()
        ]
    });
}

module.exports = config;
