var path = require('path')
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry:  {
		index:'./public/js/index.js',
		admin:'./public/js/admin.js'
	  },
  output: {
    path: path.resolve(__dirname, './public/dist'),
    publicPath: '/Launcher/public/dist/',
    filename: '[name].bundle.js'
  },
  plugins: [
	 new CleanWebpackPlugin(['./public/dist']),
     new HtmlWebpackPlugin({
       title: 'Output Management'
     }),
	 new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
   ],
   resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
    }
   },
   module: {
     rules: [
	   {
        test: /\.vue$/,
        use: [
           'vue-loader'
         ]
       },
	   {
        test: /\.html$/,
        use: [
           'vue-html-loader'
         ]
       },
       {
         test: /\.css$/,
         use: [
           'style-loader', 'css-loader'
         ]
       },
       {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader'
         ]
       },
       {
         test: /\.(woff|woff2|eot|ttf|otf)$/,
         use: [
           'file-loader'
         ]
       }
     ]
   }
}
