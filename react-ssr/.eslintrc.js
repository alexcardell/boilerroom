module.exports = {
    extends: [
        'airbnb',
        'plugin:flowtype/recommended',
        'plugin:prettier/recommended',
        'plugin:react/recommended',
        'prettier',
        'prettier/react',
    ],
    env: {
        browser: true,
        node: true,
        jest: true,
    },
    rules: {
        'react/jsx-filename-extension': 'off',
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true,
            },
        ],
        'react/prop-types': 0,
        'react/require-default-props': 0,
        'react/default-props-match-prop-types': 0,
    },
    settings: {
        'import/resolver': 'webpack',
    },
};
