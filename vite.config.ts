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
  base:"/site",
  server:{
    port:4000,
    open:true,
    cors:true,
    // https:true,
    proxy:{
      "/api":{
        target:"https://vib888.com",
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
