const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  console.log('Webpack configuration is loading...');
  console.log('Environment:', env);
  console.log('Arguments:', argv);

  const isDev = argv.mode === 'development';
  console.log('Is Development Mode:', isDev);

  const styleLoader = isDev ? 'style-loader' : MiniCssExtractPlugin.loader;

  return {
    mode: isDev ? 'development' : 'production',
    devtool: isDev ? 'inline-source-map' : false,
    entry: {
      main: path.resolve(__dirname, './src/index.tsx'),
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      assetModuleFilename: 'assets/[hash][ext][query]',
      filename: '[name].bundle[hash].js',
      clean: true,
    },
    devServer: {
      static: path.join(__dirname, 'dist'),
      port: 5500,
      hot: true,
      open: true,
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.(ts|tsx)$/,
          use: ['ts-loader'],
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(gif|ttf|eot|svg|png)$/,
          type: 'asset/resource',
        },
        {
          test: /\.html$/,
          use: ['html-loader'],
        },
        {
          test: /\.(s[ac]|c)ss$/i,
          use: [styleLoader, 'css-loader', 'postcss-loader', 'sass-loader'],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        },
      ],
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
      aliasFields: ['browser'],
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      modules: ['node_modules', 'bower_components', 'shared', '/shared/vendor/modules'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Development',
        template: './public/index.html',
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
      }),
    ],
  };
};
