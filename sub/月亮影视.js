var rule = {
	title: '月亮影视',
	host: 'https://www.woaimoon.net/',
        url:'/vodshow/fyfilter.html',
	//url: '/vodshow/fyclass/page/fypage.html',
	filterable: 1,//是否启用分类筛选,
	play_parse:true,
	filter_url: '{{fl.cateId}}/page/fypage/year/{{fl.year}}',
	filter: 
	{
        "1": [ {"key": "year","name": "年份","value": 
			    [
				 {"n": "全部","v": ""},{"n": "2024","v": "2024"},{"n": "2023","v": "2023"},{"n": "2022","v": "2022"},
				 {"n": "2021","v": "2021"},
				 {"n": "2020","v": "2020"},{"n": "2019","v": "2019"},{"n": "2018","v": "2018"},{"n": "2017","v": "2017"},
				 {"n": "2016","v": "2016"},{"n": "2015","v": "2015"},{"n": "2014","v": "2014"},{"n": "2013","v": "2013"},
				 {"n": "2012","v": "2012"},{"n": "2011","v": "2011"},{"n": "2010","v": "2010"}
			    ]
			  }
	       ],
        "2": [ {"key": "year","name": "年份","value": 
			     [
				 {"n": "全部","v": ""},{"n": "2024","v": "2024"},{"n": "2023","v": "2023"},{"n": "2022","v": "2022"},
				 {"n": "2021","v": "2021"},
				 {"n": "2020","v": "2020"},{"n": "2019","v": "2019"},{"n": "2018","v": "2018"},{"n": "2017","v": "2017"},
				 {"n": "2016","v": "2016"},{"n": "2015","v": "2015"},{"n": "2014","v": "2014"},{"n": "2013","v": "2013"},
				 {"n": "2012","v": "2012"},{"n": "2011","v": "2011"},{"n": "2010","v": "2010"}
			     ]
			   }
	        ],
        "3": [ {"key": "year","name": "年份","value": 
			     [
				 {"n": "全部","v": ""},{"n": "2024","v": "2024"},{"n": "2023","v": "2023"},{"n": "2022","v": "2022"},
				 {"n": "2021","v": "2021"},
				 {"n": "2020","v": "2020"},{"n": "2019","v": "2019"},{"n": "2018","v": "2018"},{"n": "2017","v": "2017"},
				 {"n": "2016","v": "2016"},{"n": "2015","v": "2015"},{"n": "2014","v": "2014"},{"n": "2013","v": "2013"},
				 {"n": "2012","v": "2012"},{"n": "2011","v": "2011"},{"n": "2010","v": "2010"}
			     ]
			   }
	        ],
        "4": [ {"key": "year","name": "年份","value": 
			     [
				 {"n": "全部","v": ""},{"n": "2024","v": "2024"},{"n": "2023","v": "2023"},{"n": "2022","v": "2022"},
				 {"n": "2021","v": "2021"},
				 {"n": "2020","v": "2020"},{"n": "2019","v": "2019"},{"n": "2018","v": "2018"},{"n": "2017","v": "2017"},
				 {"n": "2016","v": "2016"},{"n": "2015","v": "2015"},{"n": "2014","v": "2014"},{"n": "2013","v": "2013"},
				 {"n": "2012","v": "2012"},{"n": "2011","v": "2011"},{"n": "2010","v": "2010"}
			     ]
			    }
	         ]
    },
	filter_def: {
		1:{cateId:'1'},
		2:{cateId:'2'},
		3:{cateId:'3'},
		4:{cateId:'4'}
	},
	searchUrl: '/vodsearch/page/fypage/wd/**.html',
	searchable: 2,//是否启用全局搜索,
	headers: {//网站的请求头,完整支持所有的,常带ua和cookies
		'User-Agent': 'PC_UA',
	},
	class_parse: '.nav-channel a;a&&Text;a&&href;/(\\d+).html',
	lazy: `js:
		var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
		var url = html.url;
		if (html.encrypt == '1') {
			url = unescape(url)
		} else if (html.encrypt == '2') {
			url = unescape(base64Decode(url))
		}
		if (/\\.m3u8|\\.mp4/.test(url)) {
			input = {
				jx: 0,
				url: url,
				parse: 0
			}
		}else {
			input
		}
	`,
	limit: 6,
	double: true, // 推荐内容是否双层定位
	推荐: '.vodlist;*;*;*;*;*',
	一级: '.pack-ykpack;a&&title;.eclazy&&data-original;.pack-prb&&Text;a&&href',
	二级: {
		"title": ".fyy&&Text;.s-top-info-detail&&Text",
		"img": ".g-playicon&&img&&src",
		"desc": ".s-top-info-title span&&Text;;;.item-type&&Text;.item-actor:eq(2)&&Text",
		"content": ".ec-palytcji span&&Text",
		"tabs": ".swiper-wrapper&&a",
		"lists": ".content_playlist:eq(#id) li"
	},
	搜索: '.pack-packcover.returl.list-top-b;*;*;*;*',
}
