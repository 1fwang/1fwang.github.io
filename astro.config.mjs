import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({site:'https://1fwang.github.io',trailingSlash:'always',vite:{plugins:[tailwindcss()]},redirects:{'/about/':'/','/resume/':'/cv/'}});
