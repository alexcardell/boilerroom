module.exports = {
    semi: true,
    tabWidth: 4,
    trailingComma: 'es5',
    singleQuote: true,
    printWidth: 80,
    overrides: [{
        files: ["*.{ya,y}ml"],
        options: {
            tabWidth: 2,
        }
    }]
};
