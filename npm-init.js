// adapted from https://nodesource.com/blog/eleven-npm-tricks-that-will-knock-your-wombat-socks-off
const fs = require('fs');

const ESLINTRC_SOURCE = '/Users/bonnie/.eslintrc'
const ESLINTRC_DEST = './.eslintrc'

if (!fs.existsSync(ESLINTRC_SOURCE)) {
  console.error('ERROR: could not find source .eslintrc file: ', ESLINTRC_SOURCE);
  process.exit()
}

const data = fs.readFileSync(ESLINTRC_SOURCE, 'utf-8');
fs.writeFileSync(ESLINTRC_DEST, data);

module.exports = {
  author: 'Bonnie Schulkin',
  scripts: {
    test: 'export NODE_ENV=test; mocha',
  },
  devDependencies: {
    eslint: '^4.6.1',
    'eslint-config-airbnb': '^15.1.0',
    'eslint-plugin-import': '^2.7.0',
    'eslint-plugin-jsx-a11y': '^5.1.1',
    'eslint-plugin-react': '^7.3.0',
    chai: '^3.5.0',
    mocha: '^3.1.2',
  },
}
