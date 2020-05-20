module.exports = {
  'no-restricted-syntax': [
    'error',
    'ForInStatement',
    'LabeledStatement',
    'WithStatement',
  ],
  'no-param-reassign': ['error', {props: false}],
  'no-cond-assign': ['error', 'except-parens'],
  'no-bitwise': ['error', {
    int32Hint: true,
    allow: [
      '>>>',
    ],
  }],
  'no-plusplus': 'off',
  'no-shadow': 'off',
  'no-unused-expressions': 'off',
  'func-names': ['error', 'as-needed'],
  'consistent-return': 'off',
};
