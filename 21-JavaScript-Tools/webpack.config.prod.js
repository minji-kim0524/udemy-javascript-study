const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/app.js",
  output: {
    filename: "[contenthash].js",
    path: path.resolve(__dirname, "assets", "scripts"),
    publicPath: "assets/scripts/",
  },
  devtool: "cheap-source-map",
  // 아래 devServer 내용은 별도로 설정할 필요가 없는 기본값임
  //   devServer: {
  //     contentBase: "./",
  //   },
  plugins: [new CleanPlugin(), CleanWebpackPlugin()],
};
