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
        }]
    ];

    api.cache(true);

    return {
        presets,
        plugins,
    };
};