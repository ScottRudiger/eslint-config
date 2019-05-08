module.exports = {
  overrides: [{
    files: ['*.test.js', '*.spec.js'],
    rules: {
      'prefer-rest-params': 'off',
      'no-proto': 'off',
      'require-jsdoc': 'off',
      'func-names': 'off',
      'no-await-in-loop': 'off',
      'class-methods-use-this': 'off',
      'no-sparse-arrays': 'off',
    },
  }],
};
