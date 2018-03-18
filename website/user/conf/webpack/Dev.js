'use strict';

/**
 * Default dev server configuration.
 */
const webpack = require('webpack');
const WebpackBaseConfig = require('./Base');

class WebpackDevConfig extends WebpackBaseConfig {

	constructor() {
		super();
		this.config = {
			devtool: 'cheap-source-map',
			entry: {
				app: [
					'webpack-dev-server/client?http://0.0.0.0:8000/',
					'webpack/hot/only-dev-server',
					'./index.jsx'
				],
				vendor: this.npmDependencies()
			},
			plugins: [
				new webpack.HotModuleReplacementPlugin(),
				new webpack.NoErrorsPlugin(),
				new webpack.LoaderOptionsPlugin({
					options: {
						debug: false,
						postcss: () => ([])
					}
				}),
				new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' })
			]
		};
	}
}

module.exports = WebpackDevConfig;
