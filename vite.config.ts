import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages などサブパスで公開する場合は base を "/リポジトリ名/" に変更
export default defineConfig({
  plugins: [react()],
  base: "./",
});
