//  @ts-check
import { tanstackConfig } from '@tanstack/eslint-config';
import perfectionist from 'eslint-plugin-perfectionist';

export default [
  ...tanstackConfig,
  {
    rules: {
      'import/order': 'off', // perfectionist will handle this
      'sort-imports': 'off', // perfectionist will handle this
    },
  },
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    ...perfectionist.configs['recommended-natural'],
    rules: {
      ...perfectionist.configs['recommended-natural'].rules,
      'perfectionist/sort-objects': 'off',
    },
  },
];
