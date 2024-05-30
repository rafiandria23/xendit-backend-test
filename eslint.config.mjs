import globals from 'globals';
import pluginJs from '@eslint/js';
import tsEslint from 'typescript-eslint';

export default [
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tsEslint.configs.recommended,
  {
    ignores: ['dist'],
  },
  {
    rules: {
      '@typescript-eslint/no-var-requires': ['off'],
    },
  },
];
