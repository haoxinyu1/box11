muban.短视2.二级.img = '.detail-pic&&.lazy&&data-src';
var rule = {
    title: '统一影视',
    模板:'短视2',
    host: 'https://www.tyys2.com',
	url: '/index.php/vod/type/id/fyclass/page/fypage.html',
    //filter_url:'/class/{{fl.class}}/id/{{fl.cateId}}/page/fypage/year/{{fl.year}}',
    filterable:1,//
    class_name:'电视剧&电影&综艺&动漫&短剧&体育',
    class_url:'1&2&4&3&41&5',
    detailUrl:'/index.php/vod/detail/id/fyid.html',
    searchUrl:'/index.php/vod/search.html?wd=**',
    推荐:'.border-box .public-list-box;.time-title&&Text;.lazy&&data-src;.public-list-prb&&Text;a&&href',
    double: false, // 推荐内容是否双层定位
    一级:'.border-box .public-list-box;.time-title&&Text;.lazy&&data-src;.public-list-prb&&Text;a&&href',
    搜索:'div.search-box;.thumb-txt&&Text;img&&data-src;.public-list-prb&&Text;a&&href',
    tab_rename:{'超清':'尤东风💠超清','（点击切换1080P）':'尤东风💠1080P','蓝光1':'尤东风💠蓝光1','蓝光2':'尤东风💠蓝光2','蓝光3':'尤东风💠蓝光3','蓝光4':'尤东风💠蓝光4','蓝光5':'尤东风💠蓝光5','备用1':'尤东风💠备用1','备用2':'尤东风💠备用2'},
    play_parse: true,
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
		} else {
			input
		}
	`,
    /*filter: 
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
	*/
}
