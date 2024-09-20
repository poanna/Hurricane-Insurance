module.exports = {
  root: true,
  extends: [
    'sure/javascript.js',
    'plugin:cypress/recommended',
    'plugin:json/recommended',
  ],
  env: {
    browser: true,
    node: true,
    es2021: true,
    'cypress/globals': true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['cypress', 'prettier'],
  overrides: [
    {
      files: ['cypress/plugins/index.js'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'global-require': 'off',
      },
    },
  ],
};
