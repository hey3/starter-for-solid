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
    'import/newline-after-import': [
      'error',
      {
        considerComments: true,
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
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
        '@typescript-eslint/consistent-type-imports': [
          'error',
          { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
        ],
        '@typescript-eslint/no-unused-vars': ['error'],
      },
    },
    {
      files: ['**'],
      extends: ['prettier'],
    },
  ],
}
