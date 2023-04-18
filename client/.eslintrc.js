module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint/eslint-plugin'],
  rules: {
    semi: [2, 'never'],
    quotes: [2, 'single'],
    'max-len': [2, { code: 120 }],
    '@typescript-eslint/no-unused-vars': ['warn', { caughtErrors: 'none' }],
    'react/prop-types': ['warn'],
    '@typescript-eslint/ban-ts-comment': ['off'],
    'react/no-unknown-property': ['off'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    // 'prettier/prettier': [
    //   'error',
    //   {
    //     singleQuote: true,
    //     semi: false,
    //     printWidth: 120,
    //   },
    // ],
  },
}
