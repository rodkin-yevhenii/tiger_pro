module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true
  },
  extends: ['eslint:recommended', 'prettier', 'plugin:react/recommended'],
  globals: {
    jQuery: 'readonly'
  },
  ignorePatterns: ['**/libs/*.js'],
  rules: {
    'no-console': 1,
    'no-unused-vars': 0,
    "react/react-in-jsx-scope": 0,
    "react/display-name": 0,
    "react/prop-types": 0
  }
}
