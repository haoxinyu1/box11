var rule = {
  title: '嘀哩嘀哩',
  host: 'http://www.dilidili23.com',
  //url: '/index.php/vod/show/id/fyclass/page/fypage.html',
  url: '/index.php/vod/show/id/fyfilter.html',//fyclass
  //https://www.dilidili23.com/index.php/vod/show/id/2/letter/A/page/3/year/2023.html
  filter_url:'{{fl.cateId}}/letter/{{fl.letter}}/page/fypage/year/{{fl.year}}/',
  searchUrl: '/index.php/vod/search/page/fypage/wd/**.html',
  //class_name: '电视剧&电影&综艺&动漫',
  //class_url: '3&2&4&1',
  searchable: 2,
  quickSearch: 0,
  filterable: 0,
  headers: {
    'User-Agent': 'MOBILE_UA',
  },
  class_parse: '.navbar-items li:gt(1):lt(6);a&&Text;a&&href;/(\\d+).html',
  play_parse: true,
  lazy: '',
  limit: 6,
  推荐: '.tab-list.active;a.module-poster-item.module-item;.module-poster-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href',
  double: true,
  一级: 'body a.module-poster-item.module-item;a&&title;.lazyload&&data-original;.module-item-note&&Text;a&&href',
  二级: {
    title: 'h1&&Text;.module-info-tag&&Text',
    img: '.lazyload&&data-original',
    desc: '.module-info-item:eq(1)&&Text;.module-info-item:eq(2)&&Text;.module-info-item:eq(3)&&Text',
    content: '.module-info-introduction&&Text',
    tabs: '.module-tab-item',
    lists: '.module-play-list:eq(#id) a',
  },
  搜索: 'body .module-item;.module-card-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href;.module-info-item-content&&Text',
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
			  },
			  {   "key":"letter","name":"字母","value":
			    [
				{"n":"字母","v":"字母"},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},
				{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},
				{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},
				{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},
				{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"}
				]
			  }	
	       ],
        "2": [ {"key": "year","name": "年份","value": 
			     [
				 {"n":"全部","v":""},{"n": "2024","v": "2024"},{"n": "2023","v": "2023"},{"n": "2022","v": "2022"},
				 {"n": "2021","v": "2021"},
				 {"n": "2020","v": "2020"},{"n": "2019","v": "2019"},{"n": "2018","v": "2018"},{"n": "2017","v": "2017"},
				 {"n": "2016","v": "2016"},{"n": "2015","v": "2015"},{"n": "2014","v": "2014"},{"n": "2013","v": "2013"},
				 {"n": "2012","v": "2012"},{"n": "2011","v": "2011"},{"n": "2010","v": "2010"}
			     ]
			   },
			   {"key":"letter","name":"字母","value":
			    [
				{"n":"全部","v":"字母"},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},
				{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},
				{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},
				{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},
				{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"}
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
			   },
			    {"key":"letter","name":"字母","value":
			    [
				{"n":"全部","v":"字母"},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},
				{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},
				{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},
				{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},
				{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"}
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
			    },
			   {"key":"letter","name":"字母","value":
			    [
				{"n":"全部","v":"字母"},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},
				{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},
				{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},
				{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},
				{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"}
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
}
