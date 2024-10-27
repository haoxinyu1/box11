// 筛选页功能关闭中
muban.mxone5.二级.title = 'h1&&Text;.video-info-main&&Text';
muban.mxone5.二级.desc = '.video-info-items:eq(6)&&Text;;;.video-info-actor:eq(1)&&Text;.video-info-actor:eq(0)&&Text';
muban.mxone5.二级.content = '.vod_content span&&Text';
muban.mxone5.二级.tabs = '.module-tab-items&&.tab-item';
var rule = {
    title: '子子影视',
    模板: 'mxone5',
    host: 'https://www.ziziys.com',
    url: '/list/fyclass/page/fypage.html',
    class_name: '国产剧&日韩剧&美剧&战争片&武侠古装&记录片&电视剧&电影&动漫',
    class_url: '13&15&14&26&28&29&2&1&3',
    class_parse: '',
    lazy: `js:
		var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
		var url = html.url;
		if (html.encrypt == "1") {
			url = unescape(url)
		} else if (html.encrypt == "2") {
			url = unescape(base64Decode(url))
		}
		if (/m3u8|mp4/.test(url)) {
			input = url
		} else {
			input
		}
	`,
    searchUrl: '/index.php/ajax/suggest?mid=1&wd=**&limit=50',
    detailUrl: '/vdetail/fyid.html', //非必填,二级详情拼接链接
    搜索: 'json:list;name;pic;;id',
    tab_rename:{'高速':'尤东风💠高速','4K②':'尤东风💠在线②','4K③':'尤东风💠在线③'},
}
