const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // starting point
  output: {
    path: path.resolve(__dirname, "dist"), // where bundle goes
    filename: "bundle.js",
    clean: true, // clears old builds
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // handle .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // so imports work without extensions
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // base html
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"), // serve static files
    },
    port: 3000,
    hot: true,
    open: true,
  },
  mode: "development",
};
