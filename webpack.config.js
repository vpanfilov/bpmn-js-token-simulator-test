const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlInlineScriptPlugin = require('html-inline-script-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HTMLInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin").default;


module.exports = (env, argv) => {

  const mode = argv.mode || 'development';

  const devtool = mode === 'development' ? 'eval-source-map' : 'source-map';

  return {
    mode,
    entry: './index.js',
    output: {
      filename: 'index.js'
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        inject: 'body',
        template: './index.html',
        inlineSource: '.(js|css)$' // embed all javascript and css inline
      }),
      new HtmlInlineScriptPlugin({
        scriptMatchPattern: [/[.]js$/],
      }),
      new HTMLInlineCSSWebpackPlugin()
    ],
    devtool,
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader"
          ]
        },
        {
          test: /\.bpmn$/,
          type: 'asset/source'
        }
      ]
    }
  };
};