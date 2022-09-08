/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'semi': [2, 'never'],
    'quotes': [2, 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],
    'arrow-spacing': [2, {
      'before': true,
      'after': true
    }],
    'comma-spacing': [2, {
      'before': false,
      'after': true
    }],
    'comma-style': [2, 'last'],
    'eqeqeq': ['error', 'always', { 'null': 'ignore' }],
    'indent': [2, 2, {
      'SwitchCase': 1
    }],
    'key-spacing': [2, {
      'beforeColon': false,
      'afterColon': true
    }],
    'keyword-spacing': [2, {
      'before': true,
      'after': true
    }],
    'no-implied-eval': 2,
    'no-multiple-empty-lines': [2, {
      'max': 1
    }],
    'no-trailing-spaces': 2,
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': [2, 'never'],
    'object-curly-spacing': [2, 'always', {
      objectsInObjects: false
    }],
    'array-bracket-spacing': [2, 'never'],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
  }
}
