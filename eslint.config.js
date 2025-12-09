import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.jest  // Добавляем Jest globals
      }
    },
    rules: {
      'no-unused-vars': 'warn'
    }
  },
  {
    ignores: ['node_modules/**', 'coverage/**']
  }
];
