module.exports = {
  env: {
    node: true,
    mocha: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  extends: ['airbnb-base'],
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
  rules: {
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'object-curly-spacing': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'object-curly-newline': ['error', {
      multiline: true,
      consistent: true,
    }],
    'import/no-extraneous-dependencies': ['error', {DevDependencies: true}],
    'import/no-cycle': 'off',
    'require-jsdoc': ['error'],
    'valid-jsdoc': ['error', {
      prefer: {
        return: 'returns',
        arg: 'param',
        argument: 'param',
      },
      preferType: {
        boolean: 'Boolean',
        number: 'Number',
        object: 'Object',
        string: 'String',
      },
      requireReturnType: true,
    }],
    'max-len': ['error', 100, 2, {
      ignoreUrls: true,
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'function-paren-newline': ['error', 'consistent'],
    'no-param-reassign': ['error', {props: false}],
    'no-bitwise': ['error', {
      int32Hint: true,
      allow: [
        '>>>',
      ],
    }],
    'operator-linebreak': ['error', 'after', {
      overrides: {
        '=': 'none',
        '?': 'before',
        ':': 'before',
      },
    }],
    'no-plusplus': 'off',
    'no-shadow': 'off',
    'no-unused-expressions': 'off',
    'func-names': ['error', 'as-needed'],
    'no-nested-ternary': 'off',
    curly: ['error', 'multi', 'consistent'],
    'no-confusing-arrow': 'off',
    'consistent-return': 'off',
    'nonblock-statement-body-position': ['error', 'any'],
    'lines-between-class-members': 'off',
  },
};
