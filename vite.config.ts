import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from "path"
import * as path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve :{
    alias:{
      "@":resolve(__dirname,"src")
    }
  },
  // base:"/site",
  base:'/',
  server:{
    port:4000,
    open:true,
    cors:true,
    // https:true,
    proxy:{
      "/api":{
        target:"https://links-rs365.pages.dev",
        changeOrigin:true,
        secure: false,
      },
      "/addons":{
        target:"https://vib888.com",
        changeOrigin:true,
        secure: false,
      }
    }
  }
})
