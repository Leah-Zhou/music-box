const path = require('path');

module.exports={
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
    filename: 'bundle.js'
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env',
            {
              "targets": "> 0.25%, not dead"
            }
          ]
          }
        }
      },
    {
      test:/\.s[ac]ss$/i,
      use:['style-loader', 'css-loader', 'sass-loader'],
    },
  ],
  },
  devServer:{
    contentBase:path.resolve(__dirname, 'dist'),
    port:3000,
    open:true,
    publicPath: '/assets/',
  }
};