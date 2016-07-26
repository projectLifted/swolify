
module.exports = {
	entry: [
		//  'webpack-dev-server/client?http://localhost:8080'
		, './app/index.js'
	]
	, module: {
		loaders: [
			{
				test: /\.js/
				, exclude: /node_modules/
				, loader: 'babel'
			}
			, {
				test: /\.css/
				, exclude: /node_modules/
				, loader: 'style-loader!css-loader'
			},
      {
        test: /\.scss$/,
        loaders: [ 'style', 'css', 'sass' ]
      },
			{
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
    }
		]
	}
	, resolve: {
		extensions: ['', '.js', '.jsx']
	}
	, output: {
		path: __dirname + '/dist'
		, publicPath: '/'
		, filename: 'bundle.js'
	}
	, devServer: {
		contentBase: './dist'
		, historyApiFallback: true
		, stats: {
			colors: true
		}
	}
};
