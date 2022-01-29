module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    //'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'implicit-arrow-linebreak': 'off',
    'operator-linebreak': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'object-curly-newline': 'off',
    'import/prefer-default-export': 'off',
  },
};
