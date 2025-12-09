var rule = {
    title: '天狗追剧',
    模板:'首图',
    host: 'http://www.jlspyy.com.cn/',   
    url: '/zixun/fyclass-fypage.html',
    class_name: '国产剧&电视剧&动作片&电影&动漫&综艺',
    class_url: '14&2&7&1&3&4',
    searchable: 2,
    quickSearch: 0,
    filterable: 0,
    headers: {
        'User-Agent': 'MOBILE_UA',
    },
    limit: 6,
    double: true,
    一级: 'div.stui-vodlist__box;a&&title;a&&data-original;.pic-text&&Text;a&&href',
    二级: {
        "title": "h1&&Text",
        "img": "img&&data-original",
		"desc": ".stui-content__detail p:eq(0)&&Text;.stui-content__detail p:eq(1)&&Text;.stui-content__detail p:eq(2)&&Text",
		"content": ".content&&Text",
		"tabs": ".nav-tabs li a",
		"lists": ".stui-content__playlist:eq(#id) li"
    },
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
    tab_rename:{'暴风云播':'尤东风💠暴风云','天堂云播':'尤东风💠天堂云'},
    搜索: '#searchList li;*;*;*;*',
}
