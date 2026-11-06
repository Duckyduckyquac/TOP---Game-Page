const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production', // Change to 'production' for build, maintain at 'development' while still coding
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, 
  },
  devtool: 'eval-source-map',
  devServer: {
    static: './dist',
    watchFiles: ['./src/template.html'], // Tells webpack-dev-server to reload if your HTML template changes
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html', // Points to your source HTML file
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], // Injects CSS into the DOM inside <style> tags
      },
      {
        test: /\.html$/i,
        loader: 'html-loader', // Allows HTML files to process <img> src attributes correctly
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource', // Webpack 5 built-in asset handling for images
      },
    ],
  },
};