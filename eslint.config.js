import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import { defineConfig } from 'eslint/config'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
export default defineConfig([
  {
    ignores: [
      '**/node_modules/**', // 忽略所有node_modules
      'dist/**', // 忽略dist目录
      'build/**', // 忽略build目录
      'coverage/**', // 忽略测试覆盖率报告
      '*.config.js', // 忽略所有配置文件
      '**/*.min.js' // 忽略所有压缩文件
    ]
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
    plugins: { js, prettier: prettierPlugin },
    extends: ['js/recommended', prettierConfig],
    rules: { semi: 'off', 'prettier/prettier': 'error' }
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } }
  },
  tseslint.configs.recommended,
  pluginVue.configs['flat/essential'],
  {
    files: ['**/*.vue'],
    languageOptions: { parserOptions: { parser: tseslint.parser } }
  }
])
