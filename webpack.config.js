const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = function(_env, argv) {
  const isProduction = argv.mode === 'production';
  const isDevelopment = !isProduction;

  return {
    devtool: isDevelopment && 'cheap-module-source-map',
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
      publicPath: '/',
    },
    externals: {
      photoshop: 'commonjs2 photoshop',
      uxp: 'commonjs2 uxp',
    },
    resolve: {
      modules: [path.resolve(__dirname, 'node_modules')],
      extensions: ['.ts', '.tsx', '.js', 'jsx', '.css'],
    },
    module: {
      rules: [
        {
          test: /\.(jsx?|tsx?)$/,
          resolve: {
            extensions: ['.js', 'jsx', '.ts', '.tsx'],
          },
          exclude: /(node_modules)/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                cacheCompression: false,
                envName: isProduction ? 'production' : 'development',
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new CopyPlugin(['plugin'], {
        copyUnmodified: true,
      }),
    ],
  };
};
