var rule = {
    title:'荐片',
    host:'http://api2.rinhome.com',
    homeUrl:'https://yjpapipxblwdohpakljwg.hxhzs.com/api/tag/hand?code=unknown601193cf375db73d&channel=wandoujia',//网站的首页链接,用于分类获取和推荐获取
	url:'/api/crumb/list?area=0&category_id=fyclass&page=fypage&type=0&limit=24&fyfilter',
    class_name:'电影&电视剧&动漫&综艺&全部',
    class_url:'1&2&3&4&0',
    detailUrl:'/api/node/detail?channel=wandoujia&token=&id=fyid',//二级详情拼接链接(json格式用)
    searchUrl:'/api/video/search?key=**&page=fypage',
    searchable:2,
    quickSearch:0,
    filterable:1,
    filter:{'0': [{'key': 'year', 'name': '年代', 'value': [{'n': '全部', 'v': '0'}, {'n': '2023', 'v': '153'}, {'n': '2022', 'v': '101'}, {'n': '2021', 'v': '118'}, {'n': '2020', 'v': '16'}, {'n': '2019', 'v': '7'}, {'n': '2018', 'v': '2'}, {'n': '2017', 'v': '3'}, {'n': '2016', 'v': '22'}]}, {'key': 'sort', 'name': '排序', 'value': [{'n': '热门', 'v': 'hot'}, {'n': '评分', 'v': 'rating'}, {'n': '更新', 'v': 'update'}]}], '1': [{'key': 'year', 'name': '年代', 'value': [{'n': '全部', 'v': '0'}, {'n': '2023', 'v': '153'}, {'n': '2022', 'v': '101'}, {'n': '2021', 'v': '118'}, {'n': '2020', 'v': '16'}, {'n': '2019', 'v': '7'}, {'n': '2018', 'v': '2'}, {'n': '2017', 'v': '3'}, {'n': '2016', 'v': '22'}]}, {'key': 'sort', 'name': '排序', 'value': [{'n': '热门', 'v': 'hot'}, {'n': '评分', 'v': 'rating'}, {'n': '更新', 'v': 'update'}]}], '2': [{'key': 'year', 'name': '年代', 'value': [{'n': '全部', 'v': '0'}, {'n': '2023', 'v': '153'}, {'n': '2022', 'v': '101'}, {'n': '2021', 'v': '118'}, {'n': '2020', 'v': '16'}, {'n': '2019', 'v': '7'}, {'n': '2018', 'v': '2'}, {'n': '2017', 'v': '3'}, {'n': '2016', 'v': '22'}]}, {'key': 'sort', 'name': '排序', 'value': [{'n': '热门', 'v': 'hot'}, {'n': '评分', 'v': 'rating'}, {'n': '更新', 'v': 'update'}]}], '3': [{'key': 'year', 'name': '年代', 'value': [{'n': '全部', 'v': '0'}, {'n': '2023', 'v': '153'}, {'n': '2022', 'v': '101'}, {'n': '2021', 'v': '118'}, {'n': '2020', 'v': '16'}, {'n': '2019', 'v': '7'}, {'n': '2018', 'v': '2'}, {'n': '2017', 'v': '3'}, {'n': '2016', 'v': '22'}]}, {'key': 'sort', 'name': '排序', 'value': [{'n': '热门', 'v': 'hot'}, {'n': '评分', 'v': 'rating'}, {'n': '更新', 'v': 'update'}]}], '4': [{'key': 'year', 'name': '年代', 'value': [{'n': '全部', 'v': '0'}, {'n': '2023', 'v': '153'}, {'n': '2022', 'v': '101'}, {'n': '2021', 'v': '118'}, {'n': '2020', 'v': '16'}, {'n': '2019', 'v': '7'}, {'n': '2018', 'v': '2'}, {'n': '2017', 'v': '3'}, {'n': '2016', 'v': '22'}]}, {'key': 'sort', 'name': '排序', 'value': [{'n': '热门', 'v': 'hot'}, {'n': '评分', 'v': 'rating'}, {'n': '更新', 'v': 'update'}]}]},
    filter_url:'sort={{fl.sort or "hot"}}&year={{fl.year or "0"}}',
    headers:{
		'User-Agent':'jianpian-android/350',
		'JPAUTH':'y261ow7kF2dtzlxh1GS9EB8nbTxNmaK/QQIAjctlKiEv'
	},
    timeout:5000,
    limit:8,
    play_parse:true,
    play_json:[{
      re:'*',
      json:{
          parse:0,
          jx:0
      }
    }],
    lazy:'',
    // double:true,
    图片来源:'@Referer=www.jianpianapp.com@User-Agent=jianpian-version353',
	// 推荐:'json:data;room;*;cover;*;*',
	推荐:'json:.video;*;*;*;*',
	一级:'json:data;title;path;playlist.title;id',
    二级:{
    title:'data.title',
    desc:';data.description;data.id',
    img:'data.thumbnail',
    content:'data.thumbnail',
    is_json:1,
    tabs:'js:TABS=[];if(html.data.have_ftp_ur == 1){TABS.push("尤东风💠超清版")}if(html.data.have_m3u8_ur == 1){TABS.push("尤东风💠普清版")}',
    lists:'js:log(TABS);LISTS=[];TABS.forEach(function(tab){if(/超清版/.test(tab)){let ftp=html.data.new_ftp_list;let d=ftp.map(function(it){return it.title+"$"+(/m3u8/.test(it.url)?play_url+it.url:"tvbox-xg:"+it.url)});LISTS.push(d)}else if(/普清版/.test(tab)){let m3u=html.data.new_m3u8_list;let d=m3u.map(function(it){return it.title+"$"+(/m3u8/.test(it.url)?play_url+it.url:"tvbox-xg:"+it.url)});LISTS.push(d)}});',
    },
    搜索:'json:data;*;thumbnail;mask;*',
}
