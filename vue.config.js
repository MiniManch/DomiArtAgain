const { defineConfig } = require('@vue/cli-service');
const dotenv = require('dotenv');

dotenv.config();

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: process.env.VUE_APP_BACKEND_URL, 
        changeOrigin: true,
      },
    },
  },
});
