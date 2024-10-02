var rule = {
    模板: '自动',
    title: 'bt磁力',
    host: 'https://www.bttt11.com/',
	headers: {'User-Agent': 'MOBILE_UA'},
	url: 'html/page-fyclass-(fypage-1).html',
	class_name: '国产剧&亚太剧&欧美电影&日韩电影&港台电影&大陆电影&亚太电影&纪录片&欧美剧&日韩剧&港台剧&动漫&综艺',
	class_url: '9&10&1&2&3&4&5&13&6&7&8&11&12',
	searchUrl: '/e/search/#show=title,newstext&keyboard=**&searchtype=影视搜索;post',
    一级: '.ul-imgtxt2 li ;font&&Text;img&&src;span&&Text;a&&href',
    二级: {
        "title": "h1&&Text;.info&&Text",
        "img": ".txt img&&src",
        "desc": ".txt p:eq(3)&&Text;.txt p:eq(4)&&Text;.txt p:eq(5)&&Text;.txt p:eq(6)&&Text;.txt p:eq(7)&&Text;.txt p:eq(8)&&Text",
        "content": ".txt p:eq(27)&&Text",
        tabs:'js:TABS = ["尤东风💠磁力"]',
		lists:`js:
		log(TABS);
		pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
		LISTS = [];
				var d = pdfa(html, '.m-text1&&.bot p a');
				d = d.map(function(it) {
					var title = pdfh(it, 'a[href^=magnet]&&Text');
					var burl = pd(it, 'a[href^=magnet]&&href');
					return title + '$' + burl
				});
				LISTS.push(d)
		`, 
        },
}
