module.exports = {
    coverageDirectory: 'reports/coverage/jest',
    moduleDirectories: ['src', 'node_modules'],
    setupFiles: ['./jest.setup.js'],
    testPathIgnorePatterns: [
        'build',
    ],
};
