var rule = {
    模板: '自动',
    title: '网飞啦',
    host: 'https://www.wangfei.la',
    //url: '/vod-show-id-fyclass-page-fypage.html',
    url:'/vod-show-id/fyfilter.html',
    filter_url:'{{fl.cateId}}-letter-{{fl.letter}}-page-fypage-year-{{fl.year}}',
    class_parse: '.navbar-items&&li;a&&Text;a&&href;/vod-type-id-(.*?).html',//vod-type-id-(.*?).html
    searchUrl: '/vod-search-page-fypage-wd-**.html',
	tab_rename:{'M':'尤东风💠M','L':'尤东风💠L','D':'尤东风💠D','W':'尤东风💠W','Y':'尤东风💠Y'},
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
				{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},
				{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},
				{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},
				{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},
				{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"}
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
			   },
			   {"key":"letter","name":"字母","value":
			    [
				{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},
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
				{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},
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
				{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},
				{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},
				{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},
				{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},
				{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"}
				]
			   }	
	         ],
		"6": [ {"key": "year","name": "年份","value": 
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
				{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},
				{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},
				{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},
				{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},
				{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"}
				]
			   }	
	         ],
		"7": [ {"key": "year","name": "年份","value": 
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
				{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},
				{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},
				{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},
				{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},
				{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"}
				]
			   }	
	         ],
		"10": [ {"key": "year","name": "年份","value": 
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
				{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},
				{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},
				{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},
				{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},
				{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"}
				]
			   }	
	         ],
		"11": [ {"key": "year","name": "年份","value": 
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
				{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},
				{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},
				{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},
				{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},
				{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"}
				]
			   }	
	         ],
		"13": [ {"key": "year","name": "年份","value": 
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
				{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},
				{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},
				{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},
				{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},
				{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"}
				]
			   }	
	         ],
		"14": [ {"key": "year","name": "年份","value": 
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
				{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},
				{"n":"F","v":"F"},{"n":"G","v":"G"},{"n":"H","v":"H"},{"n":"I","v":"I"},{"n":"J","v":"J"},{"n":"K","v":"K"},
				{"n":"L","v":"L"},{"n":"M","v":"M"},{"n":"N","v":"N"},{"n":"O","v":"O"},{"n":"P","v":"P"},{"n":"Q","v":"Q"},
				{"n":"R","v":"R"},{"n":"S","v":"S"},{"n":"T","v":"T"},{"n":"U","v":"U"},{"n":"V","v":"V"},{"n":"W","v":"W"},
				{"n":"X","v":"X"},{"n":"Y","v":"Y"},{"n":"Z","v":"Z"}
				]
			   }	
	         ],
		"25": [ {"key": "year","name": "年份","value": 
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
				{"n":"全部","v":""},{"n":"A","v":"A"},{"n":"B","v":"B"},{"n":"C","v":"C"},{"n":"D","v":"D"},{"n":"E","v":"E"},
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
		4:{cateId:'4'},
		6:{cateId:'6'},
		7:{cateId:'7'},
		10:{cateId:'10'},
		11:{cateId:'11'},
		13:{cateId:'13'},
		14:{cateId:'14'},
		25:{cateId:'25'}
	},
}
