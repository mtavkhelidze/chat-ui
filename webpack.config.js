const path = require("path");

const pkg = require("./package.json");

const webpack = require("webpack");
const merge = require("webpack-merge");

const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const template = "./src/assets/index.html";

const isProduction = () => process.env.NODE_ENV === "production";

const sassOptions = {
    data: "@import \"theme\"; @import \"bootstrap/scss/bootstrap.scss\";",
    includePaths: [
        path.resolve(__dirname, "./src"),
        path.resolve(__dirname, "./node_modules")
    ]
};

const styleLoaders = (prod) => {
    let l = [];
    if (!prod) {
        l = l.concat([
            {
                loader: "style-loader"
            }
        ]);
    }
    l = l.concat([
        {
            loader: "css-loader", options: {
                minimize: prod
            }
        },
        {
            loader: "sass-loader", options: sassOptions
        }
    ]);
    return l;
};

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
        extensions: [ ".ts", ".tsx", ".js", ".json", ".scss" ]

    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "file-loader?[name].[ext]",
            },
            {
                test: /\.scss$/,
                use: isProduction()
                    ? ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: styleLoaders(true)
                    })
                    : styleLoaders(false)
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
    config.entry.concat([ "webpack-dev-server/client?http://localhost:8080/" ]);
    config = merge(config, {
        plugins: [
            new webpack.NamedModulesPlugin()
        ]
    });
}

module.exports = config;
