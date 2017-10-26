const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    js: ['babel-polyfill', './src/index.jsx'],
  },
  devtool: 'source-map',
  output: {
    path: __dirname,
    filename: 'dist/bundle.js',
  },
  devServer: {
    inline: true,
    port: 8000,
    contentBase: './dist',
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        loaders: [{
          loader: 'babel-loader',
          query: {
            presets: [['env', {
              targets: {
                browsers: ['last 2 versions'],
              },
            }], 'react', 'stage-1'],
          },
        }],
      },
      {
        test: /\.global\.css$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }],
      },
      {
        test: /\.scss$/,
        exclude: [/node_modules/],
        loaders: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /^((?!\.global).)*\.css$/,
        exclude: [/node_modules/],
        loaders: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Quick gym',
      template: './src/index.html',
      filename: 'dist/index.html',
    }),
  ],
};
