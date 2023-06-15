/*
 * @Author: Eric Hua (T&T) Eric.Hua@tntsupermarket.com
 * @Date: 2023-06-14 14:19:01
 * @LastEditors: Eric Hua (T&T) Eric.Hua@tntsupermarket.com
 * @LastEditTime: 2023-06-15 16:28:49
 * @FilePath: \React_Vite_template\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{port: 3001}
})
