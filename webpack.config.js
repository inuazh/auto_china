const config = {
	mode: 'production',
	entry: {
		index: './src/js/index.js',  // Точка входа для index.js
		catalog: './src/js/catalog.js',  // Точка входа для catalog.js
		card: './src/js/card.js'  // Точка входа для catalog.js
	},
	output: {
		filename: '[name].bundle.js',  // [name] будет заменён на 'index' и 'catalog'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],  // Обработка CSS файлов
			},
		],
	},
};

module.exports = config;
