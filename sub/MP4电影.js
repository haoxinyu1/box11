var rule = {
	title:'MP4电影[磁]',
	host:'https://www.xlmp4.com/',//https://domp4.icu永久域名
	//hostJs:'print(HOST);let html=request(HOST,{headers:{"User-Agent":PC_UA}});let src = jsp.pdfh(html,"center h1 a&&href");print(src);HOST=src',
    homeUrl: '/',
	url: '/list/fyclass-fypage.html',
	//https://www.xlmp4.cc/list/1-1.html
	//filter_url:'{{fl.class}}',
	filter:{
	},
	searchUrl: '/search/**-1.html',
	searchable:2,
	quickSearch:0,
	filterable:0,
	headers:{
		'User-Agent': 'PC_UA',
         	'Cookie':''
	},
	timeout:5000,
	class_name: '电视剧&动作片&科幻片&爱情片&喜剧片&恐怖片&战争片&剧情片&纪录片&动画片',
	class_url: '10&1&2&3&4&5&6&7&8&9',
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
let d = pdfa(html, 'ul.down-list&&li');
let tabsa = [];
let tabsq = [];
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
	TABS.push("磁力");
}
if (tabse === true){
	TABS.push("電驢");
}
let tmpIndex;
tmpIndex=1;
tabsa.forEach(function(it){
	TABS.push(it + tmpIndex);
	tmpIndex = tmpIndex + 1;
});
tmpIndex=1;
tabsq.forEach(function(it){
	TABS.push(it + tmpIndex);
	tmpIndex = tmpIndex + 1;
});
log('mp4us TABS >>>>>>>>>>>>>>>>>>' + TABS);
`,
		lists:`js:
log(TABS);
pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
LISTS = [];
let d = pdfa(html, 'ul.down-list&&li');
let lista = [];
let listq = [];
let listm = [];
let liste = [];
d.forEach(function(it){
	let burl = pdfh(it, 'a&&href');
	let title = pdfh(it, 'a&&Text');
	log('dygang title >>>>>>>>>>>>>>>>>>>>>>>>>>' + title);
	log('dygang burl >>>>>>>>>>>>>>>>>>>>>>>>>>' + burl);
	let loopresult = title + '$' + burl;
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
	LISTS.push(liste.reverse());
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
	let title = pdfh(it, 'img.lazy&&alt');
	if (title.includes(KEY)){
		if (searchObj.quick === true){
			title = KEY;
		}
		let img = pd(it, 'img.lazy&&src', HOST);
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
