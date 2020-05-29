module.exports={
	pages:{
		index:{
			entry:'src/pages/index/main.js',
			template:'public/index.html',
			filename:'index.html',
			title:'Index Page'
    },
    about:{
			entry: 'src/pages/about/main.js',
			template: 'public/about.html',
			filename:'about.html',
			title:'about'
		},
		page1:{
			entry: 'src/pages/page1/main.js',
			template: 'public/page1.html',
			filename:'page1.html',
			title:'page1'
		},
		page2:{
			entry: 'src/pages/page2/main.js',
			template: 'public/page2.html',
			filename:'page2.html',
			title:'page2'
		}
	},
  configureWebpack:{
    resolve:{
      alias:{
        'assets':'@/assets'
      }
    }
  }
}
