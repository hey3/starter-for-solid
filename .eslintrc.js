module.exports = {
  root: true,
  env: {
    node: true,
    es2022: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: ['node_modules/*', '!.storybook'],
  extends: ['eslint:recommended'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      env: {
        browser: true,
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:solid/typescript',
        'plugin:jsx-a11y/recommended',
        'plugin:tailwindcss/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'eslint-config-prettier',
      ],
      plugins: ['unused-imports'],
      rules: {
        'import/export': 'off',
        'import/order': [
          'error',
          {
            groups: ['builtin', 'external', 'internal', 'parent', 'index', 'object', 'type'],
            alphabetize: { order: 'asc', caseInsensitive: true },
          },
        ],
        'unused-imports/no-unused-imports': 'error',
        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/explicit-function-return-type': [
          'warn',
          {
            allowExpressions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
          },
        ],
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx'],
        paths: ['node_modules/', 'node_modules/@types'],
      },
    },
  },
}
