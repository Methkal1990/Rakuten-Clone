const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['@babel/polyfill', path.resolve(__dirname, './src/index.js')],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpe?g|png|svg)$/,
        use: 'file-loader',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
  },
  devServer: {
    compress: true,
    disableHostCheck: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
    })
  ],
};
