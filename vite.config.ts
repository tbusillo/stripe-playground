/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
//@ts-ignore
import postcss from './postcss.config.js';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import remarkToc from 'remark-toc';
import remarkMdx from 'remark-mdx';
import remarkImages from 'remark-images';
import remarkGithub from 'remark-github';
import remarkFrontmatter from 'remark-frontmatter';
import remarkCodeFrontmatter from 'remark-code-frontmatter';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlugCustomId from 'rehype-slug-custom-id';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig(async (ConfigEnv) => {
  const mdx = await import('@mdx-js/rollup');
  const env = loadEnv(ConfigEnv.mode, process.cwd(), '');
  return {
    root: './',
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/test/setup.ts',
      coverage: {
        reporter: ['text', 'json', 'html']
      }
    },
    optimizeDeps: {
      include: ['react/jsx-runtime']
    },
    define: {
      __APP_ENV__: env['APP_ENV']
    },
    envDir: './.env',
    server: {
      open: './index.html',
      port: env['VITE_PORT'] as unknown as number | 3000,
      watch: {
        ignored: ['!**/node_modules/your-package-name/**']
      }
    },
    css: {
      postcss
    },
    build: {
      commonjsOptions: {
        include: [/linked-dep/, /node_modules/]
      }
    },
    resolve: {
      alias: {
        '@': './src'
      }
    },
    plugins: [
      react(),
      mdx.default({
        remarkPlugins: [
          remarkGfm,
          remarkToc,
          remarkMdx,
          remarkImages,
          remarkGithub,
          remarkFrontmatter,
          remarkCodeFrontmatter
        ],
        rehypePlugins: [
          rehypeAutolinkHeadings,
          rehypeExternalLinks,
          rehypeSlugCustomId,
          rehypeSlug
        ]
      }),
      tsconfigPaths(),
      eslintPlugin()
    ]
  };
});
