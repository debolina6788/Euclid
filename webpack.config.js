const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  resolve: {
		alias: {
			Components: path.resolve(__dirname, './src/components/'),
      Reducers: path.resolve(__dirname, './src/reducers/'),
		},
	},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    liveReload: false,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      },
      {
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
      {
				test: /\.scss$/,
				use: ['style-loader', 'css-loader','sass-loader'],
			},
      {
				test: /(?<!(.*)-email)\.(png|svg|jpg|gif)$/,
				use: [{
					loader: 'file-loader',
				}],
			}
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') })]
};
