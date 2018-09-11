import webpack from 'webpack';
import merge from 'webpack-merge';

import baseConfig from './webpack.config.base';
import { config } from './gulp/constants/config';
// import InterpolateHtmlPlugin from 'react-dev-utils/InterpolateHtmlPlugin';

export default merge.smart(baseConfig, {
	entry: {
		index: [
			'react-hot-loader/patch',
			// 'react-dev-utils/webpackHotDevClient', // 404出る...
			`./${config.app}/${config.script}/index.js`
		]
	},
	devtool: 'cheap-module-source-map',
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.LoaderOptionsPlugin({ debug: true })
	]
});
