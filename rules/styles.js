module.exports = {
  'object-curly-spacing': ['error', 'never'],
  'arrow-parens': ['error', 'as-needed'],
  'object-curly-newline': ['error', {
    multiline: true,
    consistent: true,
  }],
  'max-len': ['error', 111, 2, {
    ignoreUrls: true,
    ignoreComments: true,
    ignoreRegExpLiterals: true,
    ignoreStrings: true,
    ignoreTemplateLiterals: true,
  }],
  'function-paren-newline': ['error', 'consistent'],
  'operator-linebreak': ['error', 'after', {
    overrides: {
      '=': 'none',
      '?': 'before',
      ':': 'before',
    },
  }],
  curly: ['error', 'multi', 'consistent'],
  'nonblock-statement-body-position': ['error', 'any'],
  'no-nested-ternary': 'off',
  'no-confusing-arrow': 'off',
  'lines-between-class-members': 'off',
};
