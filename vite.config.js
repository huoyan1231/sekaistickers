import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 9000,
    },
    build: {
      // 如果自己分片的话，就会生成37个文件
      // chunkSizeWarningLimit: 1000,
       rollupOptions: {
         output: {
           manualChunks(id) {
             if (id.includes('node_modules')) {
               return id.toString().split('node_modules/')[1].split('/')[0].toString();
             }
           }
         }
       }
      // 不分片的话只有10个，但是有几个文件很大，打包时候会有提示，这里限制2M吧，如果再由超出提示就用上面那个
      // chunkSizeWarningLimit: 2048,
    }
})
