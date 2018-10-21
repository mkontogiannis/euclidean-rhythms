import { join } from 'path';

const include = join(__dirname, 'src');

export default {
	entry: './src/index',
	output: {
		path: join(__dirname, 'dist'),
		libraryTarget: 'umd',
		library: 'euclideanRhythms'
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.js$/, 
				loader: 'babel-loader', 
				include,
				query: {
					presets: ['@babel/preset-env']
				}
			},
			{
				test: /\.json$/, 
				loader: 'json-loader', 
				include
			}
		]
	}
};
