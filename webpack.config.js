const path = require ('path');
module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "/dist/js"),
		filename: "bundle.js",
		publicPath: "js"
	},
	devServer: {
		inline:true,
		contentBase: "./dist",
		port:3000
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader', 
					options: {
						presets:['env','react'],
						plugins: ['transform-object-rest-spread']
					}
				}		
			}
		]
	}
};
