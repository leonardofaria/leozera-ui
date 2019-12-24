module.exports = {
  rootDir: 'lib',
  coverageDirectory: '../coverage',
  collectCoverage: true,
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  setupFiles: [
    '<rootDir>/shims.js',
    '<rootDir>/jest.setup.js',
  ],
};
