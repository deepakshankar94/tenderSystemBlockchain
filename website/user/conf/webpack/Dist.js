'use strict';

/**
 * Dist configuration. Used to build the
 * final output when running npm run dist.
 */
const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const WebpackBaseConfig = require('./Base');

class WebpackDistConfig extends WebpackBaseConfig {

	constructor() {
		super();
		this.config = {
			cache: false,
			devtool: 'source-map',
			output: {
				path: path.resolve('./build/assets'),
				filename: 'bundle_[hash].js',
				publicPath: './assets/'
			},
			plugins: [
				new webpack.DefinePlugin({
					'process.env.NODE_ENV': '"production"'
				}),
				new webpack.optimize.DedupePlugin(),
				new webpack.optimize.AggressiveMergingPlugin(),
				new webpack.optimize.UglifyJsPlugin({
					sourceMap: true
				}),
				new webpack.NoErrorsPlugin(),
				new webpack.LoaderOptionsPlugin({
					minimize: true,
					options: {
						debug: false,
						postcss: () => ([])
					}
				}),
				new webpack.optimize.CommonsChunkPlugin({
					name: 'vendor',
					filename: 'vendor.bundle_[hash].js'
				}),
				function updateHashValues() {
					const buildPath = path.resolve('./build');
					this.plugin('done', (statsData) => {
						const stats = statsData.toJson();
						if (!stats.errors.length) {
							const htmlFileName = 'base.html';
							const vendorBundle = 'http://localhost:8000/assets/vendor.bundle.js';
							const appBundle = 'http://localhost:8000/assets/bundle.js';

							const html = fs.readFileSync(`${buildPath}/${htmlFileName}`, 'utf8');
							const htmlOutput = html.replace(vendorBundle, `assets/vendor.bundle_${stats.hash}.js`)
								.replace(appBundle, `assets/bundle_${stats.hash}.js`);

							fs.writeFileSync(`${buildPath}/${htmlFileName}`, htmlOutput);

							const indexFileName = 'index.php';
							const indexFileContent = fs.readFileSync(`${buildPath}/${indexFileName}`, 'utf8');
							const indexFileOutput = indexFileContent.replace('../../', '../');

							fs.writeFileSync(`${buildPath}/${indexFileName}`, indexFileOutput);
						}
					});
				}
			]
		};

		// Deactivate hot-reloading if we run dist build on the dev server
		this.config.devServer.hot = false;
	}

	/**
	* Get the environment name
	* @return {String} The current environment
	*/
	get env() {
		return 'dist';
	}
}

module.exports = WebpackDistConfig;
