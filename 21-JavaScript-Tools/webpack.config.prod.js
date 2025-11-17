const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "assets", "scripts"),
    publicPath: "assets/scripts/",
  },
  devtool: "cheap-source-map",
  // 아래 devServer 내용은 별도로 설정할 필요가 없는 기본값임
  //   devServer: {
  //     contentBase: "./",
  //   },
};
