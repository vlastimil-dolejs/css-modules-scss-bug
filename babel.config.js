module.exports = function (api) {
    const presets = [
        ["@babel/env", {
            corejs: 3.22,
            useBuiltIns: "entry"
        }],
        "@babel/react"
    ];

    const plugins = [
        ["@dr.pogodin/react-css-modules", {
            "exclude": "node_modules",
            "generateScopedName": "[path][name]__[local]",
            "filetypes": {
                ".scss": {
                    "syntax": "postcss-scss"
                }
            }
        }],
        "@babel/plugin-transform-runtime",
    ];

    api.cache(true);

    return {
        presets,
        plugins,
        shouldPrintComment: function(comment) {
            // Keep JSON5 magic comments used for Webpack hints
            if ((/^\s?webpack[A-Z][A-Za-z]+:/).exec(comment)) {
                return true;
            }
            return false;
        }
    };
};