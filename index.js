const rules = require('./rules');

module.exports = Object.assign(
  {
    env: {
      node: true,
      mocha: true,
    },
    parserOptions: {
      ecmaVersion: 2018,
    },
    extends: ['airbnb-base'],
  },
  rules,
);
