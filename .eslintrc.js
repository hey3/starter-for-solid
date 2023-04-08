module.exports = {
  root: true,
  env: {
    node: true,
    es2022: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: ['node_modules/*', '!.storybook', 'dist'],
  extends: ['eslint:recommended', 'plugin:import/recommended', 'plugin:storybook/recommended'],
  plugins: ['unused-imports'],
  rules: {
    'import/export': 'off',
    'import/newline-after-import': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    'unused-imports/no-unused-imports': 'error',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx'],
        paths: ['node_modules/', 'node_modules/@types'],
      },
    },
  },
  overrides: [
    {
      files: ['**/*.jsx'],
      extends: ['plugin:solid/recommended'],
    },
    {
      files: ['**/*.tsx'],
      extends: ['plugin:solid/typescript'],
    },
    {
      files: ['**/*.[jt]sx'],
      env: {
        browser: true,
      },
      extends: ['plugin:jsx-a11y/recommended'],
    },
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/typescript'],
      rules: {
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
    {
      files: ['**'],
      extends: ['prettier'],
    },
  ],
}
