import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import {
  AntDesignVueResolver,
  ElementPlusResolver,
} from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import postCssPxToRem from "postcss-pxtorem";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
        ElementPlusResolver(),
      ],
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    // 预处理器配置项
    preprocessorOptions: {
      less: {
        math: "always",
      },
    },
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
        postCssPxToRem({
          // 自适应，px -> rem转换
          rootValue: 16,
          propList: ["*"], // 需要转换的属性，这里选择全部都进行转换
          selectorBlackList: [], // 要忽略的选择器并保留为px
          exclude: /node_modules/, // 忽略报文件转换rem
        }),
      ],
    },
  }
});
