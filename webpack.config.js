var path = require('path')
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry:  {
		index:'./public/js/index.js',
        login:'./public/js/login.js',
        sysmenu:'./public/js/sysmenu.js',
		admin:'./public/js/admin.js',
        common:'./public/js/common.js'
        // vendor: ['vue', 'vue-bus', 'axios','jquery']
	  },
  output: {
    path: path.resolve(__dirname, './public/dist/'),
    publicPath: '/php-oss-demo/public/dist/',
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
  },
  plugins: [
	 new CleanWebpackPlugin(['./public/dist/']),
     // new webpack.ProvidePlugin({
     //     names: ['vendor'],
     // }),
     new HtmlWebpackPlugin({
       title: 'Output Management'
     }),
	 new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
      // new webpack.optimize.CommonsChunkPlugin({
      //     name:['jquery','vue'],//对应入口文件的jquery(单独抽离)
      //     filename:'[name].bundle.js',//抽离到哪里
      //     minChunks:2//抽离几个文件
      // }),//优化
   ],
    externals: {
        // vue: 'Vue',
    },
   resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js', // 'vue/dist/vue.common.js' for webpack 1

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
