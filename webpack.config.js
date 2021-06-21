


// const path = require('path');

// module.exports = {
//   entry: './src/js/index.js',
//   output: {
//     path: path.resolve(__dirname, 'dist/assets'),
//     filename: 'bundle.js', 
//   },
//   devServer: {
//     contentBase: path.resolve(__dirname, 'dist'),
//     publicPath: '/assets/',
//     open:true
//   },
//   module: {
//     rules: [{
//       test: /\.js$/,
//       exclude: /node_modules/,
//       use: {
//         loader: 'babel-loader',
//         options: {
//           presets: ['@babel/preset-env']
//         }
//       }
//     },
//     {
//       test:/\.s[ac]ss$/i,
//       use:['style-loader', 'css-loader', 'sass-loader'],
//     }
//   ]
//   }
// };



const path = require('path');

module.exports={
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module:{
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    {
      test:/\.s[ac]ss$/i,
      use:['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
    },
  ],
  },
  devServer:{
    contentBase:'dist',
    port:3000,
    open:true,
    publicPath: '/assets/',
  }
};