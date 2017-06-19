const path = require('path');

const webpack = require('webpack');

module.exports = {
	devtool: 'cheap-module-source-map',

	entry: { 
		app: './src/js/cards.js', 
		vendors: './src/js/vendors.js' 
	}

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		publicPath: '/',
		sourceMapFilename: '[name].map'
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader'
			},
			{
				test: /\.scss$/,
	            use: [
					"style-loader",
					"css-loader",
					"sass-loader"
		        ]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			}
		]
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],

	devServer: {
		hot: true, // Tell the dev-server we're using HMR
		contentBase: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	}
}

