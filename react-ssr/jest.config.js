module.exports = {
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    coverageDirectory: 'coverage/jest',
    // coverageThreshold: {
    //     global: { branches: 100, functions: 100, lines: 100, statements: 100 },
    // },
    moduleDirectories: ['src', 'node_modules'],
    setupFiles: ['./src/client/__tests__/jest.setup.js'],
    testPathIgnorePatterns: ['.src/client/__tests__/jest.setup.js'],
};
