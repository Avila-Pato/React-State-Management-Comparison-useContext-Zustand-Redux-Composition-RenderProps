import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tsParser from '@typescript-eslint/parser'; // Parser para TypeScript
import tsPlugin from '@typescript-eslint/eslint-plugin'; // Plugin para TypeScript

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022, // Asegúrate de usar una versión reciente de ECMAScript
      globals: globals.browser,
      parser: tsParser, // Usar el parser de TypeScript
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
        project: './tsconfig.json', // Referencia al archivo de configuración de TypeScript
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tsPlugin, // Añadir el plugin de TypeScript
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules, // Reglas recomendadas de TypeScript
      'react/jsx-no-target-blank': 'off', // Considerar habilitar la advertencia si es posible
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
];
