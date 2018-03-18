'use strict';

/**
 * Webpack configuration base class
 */
const fs = require('fs');
const path = require('path');

const npmBase = path.join(__dirname, '../../node_modules');
const webpack = require('webpack');
const packageJSON = require('./../../package.json');

class WebpackBaseConfig {

	constructor() {
		this._config = {};
	}

	/**
	* Get the list of included packages
	* @return {Array} List of included packages
	*/
	get includedPackages() {
		return [].map((pkg) => fs.realpathSync(path.join(npmBase, pkg)));
	}

	/**
	* Set the config data.
	* This will always return a new config
	* @param {Object} data Keys to assign
	* @return {Object}
	*/
	set config(data) {
		this._config = Object.assign({}, this.defaultSettings, data);
	}

	/**
	* Get the global config
	* @param {Object} config Final webpack config
	*/
	get config() {
		return this._config;
	}

	/**
	* Get the environment name
	* @return {String} The current environment
	*/
	get env() {
		return 'dev';
	}

	/**
	* Get the absolute path to src directory
	* @return {String}
	*/
	get srcPathAbsolute() {
		return path.resolve('./app');
	}

	/**
	* Get the absolute path to tests directory
	* @return {String}
	*/
	get testPathAbsolute() {
		return path.resolve('./test');
	}

	/**
	* Get the npm dependencies
	* @return {Array}
	*/
	npmDependencies(excludes = ['font-awesome']) {
		const dependencies = Object.keys(packageJSON.dependencies);
		let index = -1;
		excludes.map((dependencyToBeExcluded) => {
			index = dependencies.indexOf(dependencyToBeExcluded);
			if (index >= 0) {
				dependencies.splice(index, 1);
			}

			return dependencyToBeExcluded;
		});
		return dependencies;
	}

	/**
	* Get the default settings
	* @return {Object}
	*/
	get defaultSettings() {
		return {
			context: this.srcPathAbsolute,
			devtool: 'eval',
			devServer: {
				contentBase: './app/',
				publicPath: '/assets/',
				historyApiFallback: true,
				hot: true,
				inline: true,
				port: 8000
			},
			entry: {
				app: ['./index.jsx'],
				vendor: this.npmDependencies()
			},
			module: {
				rules: [
					{
						test: /\.(js|jsx)$/,
						enforce: 'pre',
						include: this.srcPathAbsolute,
						loader: 'eslint-loader'
					},
					{
						test: /\.min\.css$/,
						use: [
							'style-loader',
							'css-loader'
						]
					},
					{
						test: /^.((?!min).)*\.css$/,
						use: [
							'style-loader',
							'css-loader?modules&importLoaders=1&localIdentName=[path]_[name]_[local]_[hash:base64:5]'
						]
					},
					{
						test: /\.(sass|scss)$/,
						use: [
							'style-loader',
							'css-loader?modules&importLoaders=1&localIdentName=[path]_[name]_[local]_[hash:base64:5]',
							'sass-loader'
						]
					},
					{
						test: /\.less$/,
						use: [
							'style-loader',
							'css-loader?modules&importLoaders=1&localIdentName=[path]_[name]_[local]_[hash:base64:5]',
							'less'
						]
					},
					{
						test: /\.styl$/,
						use: [
							'style-loader',
							'css-loader?modules&importLoaders=1&localIdentName=[path]_[name]_[local]_[hash:base64:5]',
							'stylus'
						]
					},
					{
						test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
						use: 'url-loader?limit=10000&mimetype=image/svg+xml'
					},
					{
						test: /\.(png|jpg|gif|mp4|ogg|jpeg)$/,
						use: 'url-loader?limit=10000!image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
					},
					{
						test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
						loader: 'url-loader?limit=10000&mimetype=application/font-woff'
					},
					{
						test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
						loader: 'url-loader?limit=10000&mimetype=application/font-woff'
					},
					{
						test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
						loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
					},
					{
						test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
						loader: 'file-loader'
					},
					{
						test: /\.json$/,
						use: 'json-loader'
					},
					{
						test: /\.(js|jsx)$/,
						include: [].concat(
							this.includedPackages,
							[this.srcPathAbsolute]
						),
						use: ['babel-loader']
					}
				]
			},
			output: {
				path: path.resolve('./build'),
				filename: 'bundle.js',
				publicPath: 'http://localhost:8000/assets/'
			},
			plugins: [
				new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' })
			],
			resolve: {
				alias: {
					actions: `${this.srcPathAbsolute}/actions/`,
					components: `${this.srcPathAbsolute}/components/`,
					config: `${this.srcPathAbsolute}/config/${this.env}.js`,
					constants: `${this.srcPathAbsolute}/constants/`,
					containers: `${this.srcPathAbsolute}/containers/`,
					globals: `${this.srcPathAbsolute}/globals/`,
					fonts: `${this.srcPathAbsolute}/globals/fonts/`,
					images: `${this.srcPathAbsolute}/globals/images/`,
					styles: `${this.srcPathAbsolute}/globals/styles/`,
					providers: `${this.srcPathAbsolute}/providers/`,
					reducers: `${this.srcPathAbsolute}/reducers/`,
					router: `${this.srcPathAbsolute}/router/`,
					store: `${this.srcPathAbsolute}/store/`,
					util: `${this.srcPathAbsolute}/util/`
				},
				extensions: ['.js', '.jsx'],
				modules: [
					this.srcPathAbsolute,
					'node_modules'
				]
			}
		};
	}
}

module.exports = WebpackBaseConfig;
