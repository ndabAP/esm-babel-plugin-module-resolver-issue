// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },

  env: {
    browser: true,
    mocha: true
  },

  extends: ['standard', 'plugin:node/recommended', 'plugin:security/recommended'],
  plugins: [
    'html',
    'security'
  ],

  rules: {
    'security/detect-unsafe-regex': 0,
    'security/detect-object-injection': 0,
    'no-empty-pattern': 0,
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': 0,
    'node/no-unsupported-features': 0,
    'node/no-unsupported-features/es-syntax': 0,
    'node/no-deprecated-api': 1
  }
}
