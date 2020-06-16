module.exports = {
    testMatch : [
        '**/test/**/*.spec.js',
        '**/test/**/*.spec.jsx',
        '**/test/**/*.spec.ts',
        '**/test/**/*.spec.tsx'
    ],
    coverageReporters : [
        'text-summary',
        'text',
        'lcov'
    ],
    collectCoverageFrom : [
        'src/**/*.ts'
    ],
    testEnvironment : 'node'
}
