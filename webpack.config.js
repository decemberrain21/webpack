var dotenv = require('dotenv').config({path: './config.d/defaults.env'});
var config = {
   entry: './main.js',
	
   output: {
      path:__dirname + '/',
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: process.env.PORT,
      historyApiFallback: true,      
      proxy: {

        '/api': {
          target: process.env.API_BASEURL,
          secure: false,
          changeOrigin: true
        }
      }
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}
module.exports = config;