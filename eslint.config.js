import js from '@eslint/js'
import configPrettier from 'eslint-config-prettier'
import pluginImport from 'eslint-plugin-import'
import pluginSolid from 'eslint-plugin-solid'
import pluginUnusedImport from 'eslint-plugin-unused-imports'
import globals from 'globals'

// eslint-disable-next-line import/no-unresolved
import typescriptEslint from 'typescript-eslint'

const configBase = typescriptEslint.config(js.configs.recommended, {
  plugins: {
    import: pluginImport,
    'unused-imports': pluginUnusedImport,
  },
  languageOptions: {
    globals: {
      ...globals.node,
    },
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  rules: {
    ...pluginImport.configs.recommended.rules,
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
})

const configTypescript = typescriptEslint.config(
  ...typescriptEslint.configs.recommended.map(config => ({
    ...config,
    ignores: ['**/*.js'],
  })),
  {
    files: ['**/*.ts?(x)'],
    settings: {
      ...pluginImport.configs.typescript.settings,
      'import/parsers': {
        '@typescript-eslint/parser': ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    rules: {
      ...pluginImport.configs.typescript.rules,
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
      ],
    },
  }
)

const configSolid = typescriptEslint.config({
  files: ['**/*.tsx'],
  plugins: {
    solid: pluginSolid,
  },
  rules: {
    ...pluginSolid.configs.typescript.rules,
  },
})

export default typescriptEslint.config(
  {
    ignores: ['dist'],
  },
  ...configBase,
  ...configTypescript,
  ...configSolid,
  configPrettier
)
