import { fileURLToPath, URL } from 'url'
// import viteCompression from 'vite-plugin-compression'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        // viteCompression({
        //     deleteOriginFile: true
        // })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        host: true
    }
})
