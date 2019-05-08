module.exports = {
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
};
