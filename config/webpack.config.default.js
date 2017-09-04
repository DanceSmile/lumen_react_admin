module.exports =  {
     test: /\.mod$/,
     use: [
        require.resolve('style-loader'),
        {
        loader: 'css-loader?modules',
        options: {
            importLoaders: 1,
            modules: true
        },
        },
        {
        loader: require.resolve('postcss-loader'),
        options: {
            // Necessary for external CSS imports to work
            // https://github.com/facebookincubator/create-react-app/issues/2677
            ident: 'postcss',
            plugins: () => [
            require('postcss-flexbugs-fixes'),
            autoprefixer({
                browsers: [
                '>1%',
                'last 4 versions',
                'Firefox ESR',
                'not ie < 9', // React doesn't support IE8 anyway
                ],
                flexbox: 'no-2009',
            }),
            ],
        },
        },
        {
            loader: require.resolve('less-loader'),
            options: {
                modifyVars: { "@primary-color": "#404040" },
            },
        }
    ]
}