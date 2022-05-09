module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-use-before-define': ['error', { functions: true, classes: true }],
    'no-var': 'error',
    'prefer-const': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '_next' }]
  }
};
