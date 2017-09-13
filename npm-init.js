// adapted from https://nodesource.com/blog/eleven-npm-tricks-that-will-knock-your-wombat-socks-off

const name = require('path').basename(process.cwd())

module.exports = {
  name,
  version: '1.0.0',
  author: 'Bonnie Schulkin',
  scripts: {
    preinstall: 'cp /Users/bonnie/.eslintrc .',
    test: 'export NODE_ENV=test && mocha',
  },
  devDependencies: {
    ajv: '^5.2.2',
    eslint: '^4.6.1',
    'eslint-config-airbnb': '^15.1.0',
    'eslint-plugin-import': '^2.7.0',
    'eslint-plugin-jsx-a11y': '^5.1.1',
    'eslint-plugin-react': '^7.3.0',
  },
}
