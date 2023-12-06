module.exports = {
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.scss$': 'identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
};
