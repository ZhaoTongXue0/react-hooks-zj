import { defineConfig } from 'dumi';

const packages = require('./packages/hooks/package.json');

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'react-hooks-zj',
  },
});
