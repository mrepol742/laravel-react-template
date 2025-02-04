import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss', 
                'resources/js/app.js',
                'resources/react/index.jsx',
            ],
            refresh: true,
        }),
        react(),
    ],
      build: {
        outDir: 'public/build',
        chunkSizeWarningLimit: 800,
        minify: 'terser',
        sourcemap: false,
        terserOptions: {
            compress: {
                drop_console: true,
            },
        },
        rollupOptions: {
            output: {
                entryFileNames: 'assets/[hash].js',
                chunkFileNames: 'assets/[hash].js',
                assetFileNames: 'assets/[hash].[ext]',
                manualChunks(id) {
                    // this thing fixes issues with vite build minif of sentry
                    if (id.includes('node_modules') && !id.includes('sentry')) {
                        return id.toString().split('node_modules/')[1].split('/')[0]
                    }
                },
            },
        },
    },
     server: {
        cors: {
            origin: ['http://127.0.0.1:8000', 'http://localhost:8000'],
            credentials: true,
        },
    },
});
