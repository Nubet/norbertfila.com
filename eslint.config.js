import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import nextPlugin from '@next/eslint-plugin-next'
import importPlugin from 'eslint-plugin-import'

const architectureZones = [
  {
    target: './src/entities',
    from: './src/{app,features,shared,server}',
  },
  {
    target: './src/features',
    from: './src/{app,server}',
  },
  {
    target: './src/shared',
    from: './src/{app,server}',
  },
]

export default [
  {
    ignores: ['dist', 'node_modules', '.next', 'client-projects', 'next-env.d.ts'],
  },
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
    },
    plugins: {
      '@next/next': nextPlugin,
      import: importPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'import/no-restricted-paths': ['warn', { zones: architectureZones }],
    },
  },
  {
    files: ['src/app/**/*.{ts,tsx}'],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
  ...tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
]
