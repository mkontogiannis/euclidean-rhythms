var join = require('path').join;

module.exports = {
	entry: join(__dirname, 'src', 'index'),
	output: {
		path: join(__dirname, 'dist'),
		libraryTarget: 'umd',
		library: 'euclideanRhythms'
	}
};
