# @scottrudiger/eslint-config
An `eslint` config with my subjective tastes, built atop `eslint-config-airbnb-base.`

Feel free to try it out. Maybe you'll like it!

## Usage

Install it (and peer dependencies):

`npm install --save-dev @scottrudiger/eslint-config eslint eslint-plugin-import`

Use it:

(in `.eslintrc.js`)
```js
module.exports = {
  extends: '@scottrudiger'
};
```

(in `.eslintrc.yaml` or `.eslintrc.yml`)
```yml
extends: @scottrudiger
```

(in `.eslintrc.json` or `.eslintrc`)
```json
{
  "extends": "@scottrudiger"
}
```

(in `package.json`)
```json
{
  "eslintConfig": {"extends": "@scottrudiger"}
}
```
