var rule = {
	title:'MP4电影[磁]',
	host:'https://www.keymp4.com/',//https://domp4.icu
	//hostJs:'print(HOST);let html=request(HOST,{headers:{"User-Agent":PC_UA}});let src = jsp.pdfh(html,"center&&h1:eq(0)&&a&&href");print(src);HOST=src',
    homeUrl: '/',
	url: '/list/fyclass-fypage.html?',
	//filter_url:'{{fl.class}}',
	filter:{
	},
	searchUrl: '/search/#wd=**&p=1;post',
	searchable:2,
	quickSearch:0,
	filterable:0,
	headers:{
		'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0',
         	'Cookie':'3487_3911_117.126.25.11=1; Hm_lvt_8dc94199be986ec48b015d911aeab6f4=1729133671; HMACCOUNT=33D4E13EE6987D40; 3487_3588_117.126.25.11=1; 3487_3913_117.126.25.11=1; 3487_3698_117.126.25.11=1; 3487_3602_117.126.25.11=1; 3487_3919_117.126.25.11=1; 3487_3859_117.126.25.11=1; 3487_3921_117.126.25.11=1; 3487_3923_117.126.25.11=1; 3487_3602_117.126.25.138=1; 3487_3698_117.126.25.138=1; 3487_3911_117.126.25.138=1; 3487_3921_117.126.25.138=1; 3487_3588_117.126.25.138=1; Hm_lpvt_8dc94199be986ec48b015d911aeab6f4=1729135203; beitouviews_3487=iNciyHhvniEs302enrbIImSwDrigkPQ5IV1GqtLVfXIbctFeMGquvobEbCJYU13zEYkQk0co9NzyXA8%252FcQWSY7nBcYzuQYVwmIjIjEkSK9ytFHwalxfYC3NidMv%252BUn%252FDnqbVNMN5fYND2U%252B0Jki4f%252BzgEAxIUInGkW1QVgbLYdALkZxZH7UG1vlHnpMTNjWw9zH3Tt2nyMdPgJzpP9bM4BqmYq9stLXYR86bGyT3KU0lOYydtu8uSB%252B9wn%252BBFC6E%252FVU3QaAXMDX8KActsGIJlNTrPinITgmecVCTy08RFr%252FNyAMUMJBDR8jE4wGftsjFk5LZh8rnPGZoKr6qBJGaxZ8Kox0qR41FdJJ6BIbF3m%252BA6nguO2muoj3S6XMNUGp%252FDAOdy0h6sO84o2RjTRtcVsgnr5BuImYDWQTJzNPSos1HNGbA3BHIboPkBkf%252BLCAixIbv8UQ3YIaOGR%252F39IfPw6zc%252F1TntmjM51mm5dVD8tT64nPthcjhqbXlPCAWIWhYRMXYrd5b%252FD0MF22e618I03pmRgsBfaP%252BPL9Qa75uX5nrr1RMeX5TcOdnhw2wzGOS9EAxrRvhaGSAbyKGyGSIHcywhDuqDwcuhNbDwHdUyWqs5%252Fz9MHFlPP1v1xaDjwlU9WlTSvTcN0ZT53N1AoMZp8rwqo8KZ56E6asjQ%252FsyZ1s%253D'
	},
	timeout:5000,
	class_name: '电视剧&动作片&科幻片&爱情片&喜剧片&恐怖片&战争片&剧情片&纪录片&动画片',
	class_url: '10&1&2&3&4&5&6&7&8&9',
	//class_parse: '.nav ul li:gt(0):lt(11);a&&Text;a&&href;.*/(.*?).html',
	play_parse:true,
	play_json:[{
		re:'*',
		json:{
			parse:0,
			jx:0
		}
	}],
	lazy:'',
	limit:6,
	推荐:'div.index_update ul li;a&&Text;;b&&Text;a&&href',
	一级:'div#list_all ul li;img.lazy&&alt;img.lazy&&data-original;span.update_time&&Text;a&&href',
	二级:{
		title:"div.article-header h1&&Text",
		img:"div.article-header div.pic img&&src",
		desc:'div.article-header div.text&&Text',
		content:'div.article-related.info p&&Text',
		tabs:`js:
pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
TABS=[]
let d = pdfa(html, 'body&&.url-left');
let tabsm = false;
let tabse = false;
d.forEach(function(it) {
	let burl = pdfh(it, 'a&&href');
	if (burl.startsWith("magnet")){
		tabsm = true;
	}else if (burl.startsWith("ed2k")){
		tabse = true;
	}
});
if (tabsm === true){
	TABS.push("尤东风💠磁力");
}
if (tabse === true){
	TABS.push("尤东风💠电驴");
}

log('mp4us TABS >>>>>>>>>>>>>>>>>>' + TABS);
`,
		lists:`js:
log(TABS);
pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
LISTS = [];
let d = pdfa(html, 'body&&.url-left');
let listm = [];
let liste = [];
d.forEach(function(it){
	let burl = pdfh(it, 'a&&href');
	let title = pdfh(it, 'title');
	log('title >>>>>>>>>>>>>>>>>>>>>>>>>>' + title);
	log('burl >>>>>>>>>>>>>>>>>>>>>>>>>>' + burl);
	let loopresult = burl;
    if (burl.startsWith("magnet")){
		listm.push(loopresult);
	}else if (burl.startsWith("ed2k")){
		liste.push(loopresult);
	}
});
if (listm.length>0){
	LISTS.push(listm.reverse());
}
if (liste.length>0){
	LISTS.push(liste.slice());
}

`,

 },
	搜索:`js:
pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
if (rule_fetch_params.headers.Cookie.startsWith("http")){
	rule_fetch_params.headers.Cookie=fetch(rule_fetch_params.headers.Cookie);
	let cookie = rule_fetch_params.headers.Cookie;
	setItem(RULE_CK, cookie);
};
log('mp4us seach cookie>>>>>>>>>>>>>' + rule_fetch_params.headers.Cookie);
let _fetch_params = JSON.parse(JSON.stringify(rule_fetch_params));
//log("mp4us search params>>>>>>>>>>>>>>>" + JSON.stringify(_fetch_params));
let search_html = request( HOST + '/search/' + encodeURIComponent(KEY) + '-1.html', _fetch_params)
//log("mp4us search result>>>>>>>>>>>>>>>" + search_html);
let d=[];
//'div#list_all li;img.lazy&&alt;img.lazy&&src;div.text_info h2&&Text;a&&href;p.info&&Text',
let dlist = pdfa(search_html, 'div#list_all li');
dlist.forEach(function(it){
	let title = pdfh(it, 'img&&alt');
	if (title.includes(KEY)){
		if (searchObj.quick === true){
			title = KEY;
		}
		let img = pd(it, 'img&&src', HOST);
		let content = pdfh(it, 'div.text_info h2&&Text');
		let desc = pdfh(it, 'p.info&&Text');
		let url = pd(it, 'a&&href', HOST);
		d.push({
			title:title,
			img:img,
			content:content,
			desc:desc,
			url:url
			})
	}
});
setResult(d);
`,

}
