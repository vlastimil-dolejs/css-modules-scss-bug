const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
    return {
        output: {
            filename: `test.js`,
            library: 'Test',
            libraryTarget: 'umd',
            umdNamedDefine: true,
            clean: true
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            configFile: "./babel.config.js",
                            envName: argv.mode
                        }
                    }
                },
                {
                    test: /\.s?css$/,
                    exclude: /node_modules/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                                modules: {
                                    localIdentName: "[path][name]__[local]",
                                },
                                importLoaders: 2, // to include postcss-loader and sass-loader
                                sourceMap: true,
                            }
                        },
                        "postcss-loader",
                        "sass-loader"
                    ]
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: `test.css`,
                ignoreOrder: true
            }),
        ],
    };
};
