const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  publicPath: process.env.NODE_ENV === 'production' ? '/static/dist/' : 'http://localhost:8080',
  outputDir: '../backend/static/dist',

  pages: {
    home: {
      entry: "./src/pages/home/main.js",
      template: "public/index.html",
      filename: "../../templates/home/index.html",
      chunk: ['chunk-vendors', 'chunk-common', 'home']
    },
    about_us: {
      entry: "./src/pages/about_us/main.js",
      template: "public/index.html",
      filename: "../../templates/about_us/index.html",
      chunk: ['chunk-vendors', 'chunk-common', 'about_us']
    },
    contact: {
      entry: "./src/pages/contact/main.js",
      template: "public/index.html",
      filename: "../../templates/contact/index.html",
      chunk: ['chunk-vendors', 'chunk-common', 'contact']
    }
  },

  devServer: {
    devMiddleware: {
      writeToDisk: filePath => filePath.endsWith("index.html"),
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      publicPath: 'http://localhost:8080',
    },
    hot: 'only',
  }
})
