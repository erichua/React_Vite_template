import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
const resolve = (dir: string) => path.join(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: { //dev server port
        port: 3001,
        //open the page in the browser
        open: './',
        proxy: {
            '/api': {
                target: 'http://jsonplaceholder.typicode.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    },
    resolve: {
        alias: {
            '@': resolve('./src'),
            '@components': resolve('src/components'),
            '@entries': resolve('src/entries'),
            '@api': resolve('src/api'),
            '@pages': resolve('src/pages'),
            '@routers': resolve('src/routes'),
            '@libs': resolve('src/libs')
        }
    }
})
