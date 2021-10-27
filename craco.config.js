// craco.config.js

module.exports = {
    style: {
        postcss: {
            plugins: [
                require('postcss-import'),
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        },
        css: {
            loader: 'css-loader',
            options: {
                importLoaders: 1,
                modules: true,
            },
        },
        sass: {
            loader: 'sass-loader',
            options: {
                sourceMap: true,
                additionalData: require.resolve('./src/styles/index.scss')
            },
        },
        eslint: {
            enable: true /* (default value) */,
            mode: "extends" /* (default value) */ || "file",
            configure: (eslintConfig, { env, paths }) => { return eslintConfig; },
            pluginOptions: (eslintOptions, { env, paths }) => { return eslintOptions; }
        },
    },
}
