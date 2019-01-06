const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isDevelopment ? 'app.js' : 'app.[contenthash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss?$/,
        exclude: /node_modules/,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: 'only',
              localIdentName: '[folder]_[local]_[hash:base64:10]',
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true,
      xhtml: true,
    }),
    new MiniCssExtractPlugin({
      filename: 'index.[contenthash].css',
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
};
