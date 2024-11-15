import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "../static/frontend", // Djangoの静的ファイルディレクトリ
    emptyOutDir: true, // 古いファイルをクリア
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name].js", // メインファイル
        chunkFileNames: "assets/[name].js", // チャンクファイル
        assetFileNames: "assets/[name].[ext]", // その他のリソース（CSS, 画像など）
      },
    },
  },
  server: {
    proxy: {
      "/api": "http://127.0.0.1:8000", // DjangoのAPIエンドポイント
    },
  },
});
