const path = require("path");
const webpack = require("webpack");
const ChunkManifestPlugin = require("chunk-manifest-webpack-plugin");
const WebpackChunkHash = require("webpack-chunk-hash");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');

module.exports = {

	entry: { 
		app: './src/js/cards.js', 
		vendor: './src/js/vendor.js' 
	}

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[chunkhash].js',
		chunkFilename: "[name].[chunkhash].js"
		sourceMapFilename: '[name].map'
	},

	plugins: [
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false
		}),
		new webpack.optimize.UglifyJsPlugin({
			beautify: false,
			mangle: {
				screw_ie8: true,
				keep_fnames: true
			},
			compress: {
				screw_ie8: true
			},
			comments: false
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: ["vendor", "manifest"], // vendor libs + extracted manifest
			minChunks: Infinity,
	    }),
		new webpack.HashedModuleIdsPlugin(),
		new WebpackChunkHash(),
	    new ChunkManifestPlugin({
			filename: "chunk-manifest.json",
			manifestVariable: "webpackManifest"
		}),
		new HtmlWebpackPlugin(),
		new InlineManifestWebpackPlugin({
			name: 'webpackManifest'
		})
	]
}