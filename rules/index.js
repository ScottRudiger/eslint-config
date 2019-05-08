/* eslint-disable global-require */
module.exports = {
  overrides: require('./test-overrides'),
  rules: Object.assign(
    require('./best-practices'),
    require('./imports'),
    require('./jsdoc'),
    require('./styles'),
  ),
};
