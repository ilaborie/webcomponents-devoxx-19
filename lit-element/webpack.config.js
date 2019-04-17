const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const dist = path.resolve(__dirname, "dist");

module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  watch: true,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          configFile: "tsconfig.json"
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "LitElement Code",
      template: "index.html"
    }),
    new CopyWebpackPlugin(
      [
        'assets/*.png',
        'assets/*.jpg',
        'assets/*.svg'
      ])
  ],
  output: {
    filename: "bundle.js",
    path: dist
  },
  devServer: {
    contentBase: dist,
    compress: true,
    port: 8080
  }
};
