const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: path.resolve('./src/BraveEngine.js'),
	output: {
		filename: 'braveengine.min.js',
		path: path.resolve('./dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
				include: path.resolve("./src")
			}
		]
	},
	plugins: [
		new UglifyJsPlugin()
	]
}