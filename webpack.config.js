module.exports={
	entry:'./build/App.js',//入口文件
	output:{//出口文件
		publicPath:'',
		filename:'bundle.js'//输出的文件
	},
	module:{
		loaders:[{
			test:/\.js$/,//通过入口处理匹配的所有的js文件
			exclude:'/node_modules/',
			loader:'babel-loader?presets[]=es2015&presets[]=react'//通过jsx-loader加载器进行文件代码的解析操作
		}]
	}
}