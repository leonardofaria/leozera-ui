module.exports = {
  rootDir: 'lib',
  coverageDirectory: '../coverage',
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  setupFiles: [
    '<rootDir>/shims.js',
    '<rootDir>/jest.setup.js',
  ],
}
