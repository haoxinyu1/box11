var rule = {
	title:'磁力天堂',
	host:'https://www.clgod.xyz/',
    homeUrl: '',
	url: '/fyclass/index_fypage.html[/fyclass/]',
	filter:{
	},
	searchUrl: 'https://s.clgod.xyz/e/search/#show=title%2Cstars&keyboard=**;post', 
	searchable:2,
	quickSearch:0,
	filterable:0,
	headers:{
		'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0',
         	'Cookie':''
	},
	timeout:5000,
	class_name: '电视剧&电影',
	class_url: 'tv&movie',
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
	推荐:'.container-xl&&li:has(img);img&&alt;img&&src;.num&&Text;a&&href',
		一级:`js:
pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
let d = [];		
let html = request(input);
let list = pdfa(html, 'body&&.listauto:has(img)');
list.forEach(it => {
	d.push({
		title: pdfh(it, 'img&&alt'),
		desc: pdfh(it, '.num&&Text') + '分/' + pdfh(it, 'body&&.listauto span:eq(1)&&Text'),
		pic_url: pd(it, 'img&&src'),
		url: pd(it, 'a&&href')
	});
})
setResult(d);
`,
	二级:{
		title:"div.container-fluid h1&&Text",
		img:".padd&&picture img&&src",
		desc:'.padd&&.pminfo span:eq(-5)&&Text',
		content:'.textc&&Text',
		tabs:`js:
pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
TABS=[]
let d = pdfa(html, 'body&&.list-inline li');
let tabsm = false;
let tabse = false;
d.forEach(function(it) {
	let burl = pdfh(it, 'a&&href');
	if (burl.startsWith("magnet")){
		tabsm = true;
	}else if (burl.startsWith("thunder")){
		tabse = true;
	}
});
if (tabsm === true){
	TABS.push("尤东风💠磁力");
}
if (tabse === true){
	TABS.push("尤东风💠迅雷");
}
log('mp4us TABS >>>>>>>>>>>>>>>>>>' + TABS);
`,
		lists:`js:
log(TABS);
pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
LISTS = [];
let d = pdfa(html, 'body&&.list-inline li');
let listm = [];
let liste = [];
d.forEach(function(it){
	let burl = pdfh(it, 'a&&href');
	let title = pdfh(it, '.na&&Text');
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
	LISTS.push(liste.reverse());
}
`,
 },
	搜索:`body&&.listauto;b&&Text;img&&data-src;.r&&Text;a&&href`,
}
