module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  ignorePatterns: ['node_modules', 'postcss.config.js'],
  rules: {
    'dot-notation': 'off',
    'arrow-body-style': 'off',
    'no-console': 'off',
    'react/forbid-prop-types': 'off',
  },
};
