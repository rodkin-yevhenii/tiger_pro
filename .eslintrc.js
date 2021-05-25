module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true
  },
  extends: ['eslint:recommended', 'prettier'],
  globals: {
    jQuery: 'readonly'
  },
  ignorePatterns: ['**/libs/*.js'],
  rules: {
    'no-console': 1,
    'no-unused-vars': 0
  }
}
