module.exports = {
    entry: './src/client/client.js',
    module: {
        rules: [
            {
                // js
                test: /\.(js|jsx)$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    output: {
        path: `${__dirname}/public`,
        publicPath: '/',
        filename: 'bundle.js',
    },
};
