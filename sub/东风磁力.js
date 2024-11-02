var rule = {
	模板: '自动',
	title:'高清族',
	host:'https://www.hdzu.cc/',//https://www.y81s.com/
    homeUrl: 'https://www.hdzu.cc/?page=fypage',
	url: '/movie/map?class=fyclass&page=fypage',
	filter_url:'{{fy.cateId}}&{{fl.class}}&{{fl.year}}&{{fl.area}}&{{fy.by}}',
	searchUrl: 'movie/filter?act=title&wd=**',
	//searchUrl: '/?s=**',
	searchable:2,
	quickSearch:0,
	filterable:0,
	headers:{
		'User-Agent': 'PC_UA',
         	'Cookie':''
	},
	timeout:5000,
	class_name: '电影&电视剧',
	class_url:'1&5',
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
	推荐:'body&&ul li .media-left;img&&alt;img&&src;.pull-right&&Text;a&&href',
	一级:'body&&ul li .media-left;img&&alt;img&&src;.pull-right&&Text;a&&href',
	//下面的写法也正确
	/*一级: `js:
		pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
		var d = [];
		var html = request(input);
		var list = pdfa(html, 'body&&ul li .media-left');//定位到media-lef这里，下一级开始截取数
		list.forEach(it => {
			d.push({
				title: pdfh(it, 'img&&alt'),
				desc: pdfh(it, '.pull-right&&Textt') ,
				pic_url: pd(it, 'img&&src'), 
				url: pd(it, 'a&&href')
			});
		})
		setResult(d);
	`,*/
	二级:{
		title:"body&&.panel-body h1&&Text;body&&mt-10 p:eq(3)&&Text",
		img:"body&&.movie-pic img&&src",
		desc:'.mb-2&&p:eq(-4)&&Text;.mb-2&&p:eq(8)&&Text;.mb-2&&p:eq(5)&&Text;.mb-2&&p:eq(3) a&&Text;.col-md-8&&p:eq(1) a&&Text',//演员4 导演5
		content:'.topic-content&&p:eq(-3)&&Text',
		tabs:`js:
pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
TABS=[]
let d = pdfa(html, 'body&&tbody td a');
let tabsa = [];
let tabsq = [];
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
	TABS.push("尤东风💠电驴");
}
if (tabse === true){
	TABS.push("尤东风💠迅雷");
}
if (false && tabsa.length + tabsq.length > 1){
	TABS.push("選擇右側綫路");
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
let d = pdfa(html, 'body&&tbody');
let lista = [];
let listq = [];
let listm = [];
let liste = [];
d.forEach(function(it){
	let burl = pdfh(it, 'a&&href');
	let title = pdfh(it, 'a&&title');
	log('title >>>>>>>>>>>>>>>>>>>>>>>>>>' + title);
	log('burl >>>>>>>>>>>>>>>>>>>>>>>>>>' + burl);
	let loopresult =   burl;
    if (burl.startsWith("magnet")){
		listm.push(loopresult);
	}else if (burl.startsWith("thunder")){
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
	//搜索:`&content&&.entry-thumb-left;img&&src;.entry-rating&&Text;a&&href `,
filter:{
		"1":[{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"动作","v":"type=动作"},{"n":"剧情","v":"type=剧情"},{"n":"喜剧","v":"type=喜剧"},{"n":"惊悚","v":"type=惊悚"},{"n":"动作","v":"type=动作"},{"n":"爱情","v":"type=爱情"},{"n":"犯罪","v":"type=犯罪"},{"n":"恐怖","v":"type=恐怖"},{"n":"冒险","v":"type=冒险"},{"n":"悬疑","v":"type=悬疑"},{"n":"科幻","v":"type=科幻"},{"n":"家庭","v":"11"},{"n":"动画","v":"type=动画"},{"n":"动画","v":"13"},{"n":"战争","v":"type=战争"},{"n":"历史","v":"type=历史"},{"n":"传记","v":"type=传记"},{"n":"音乐","v":"type=音乐"},{"n":"歌舞","v":"type=歌舞"},{"n":"武侠","v":"type=武侠"},{"n":"西部","v":"type=西部"},{"n":"灾难","v":"type=灾难"},{"n":"古装","v":"type=古装"},{"n":"情色","v":"type=色情"},{"n":"同性","v":"type=同性"},{"n":"纪录片","v":"26"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"area=大陆"},{"n":"香港","v":"area=香港"},{"n":"台湾","v":"area=台湾"},{"n":"欧美","v":"area=欧美"},{"n":"美国","v":"area=美国"},{"n":"日本","v":"area=日本"},{"n":"韩国","v":"area=韩国"},{"n":"英国","v":"area=英国"},{"n":"法国","v":"area=法国"},{"n":"德国","v":"area=德国"},{"n":"印度","v":"area=印度"},{"n":"area=大陆","v":"11"},{"n":"巴西","v":"area=巴西"},{"n":"加拿大","v":"area=加拿大"},{"n":"俄罗斯","v":"area=俄罗斯"},{"n":"意大利","v":"area=意大利"},{"n":"丹麦","v":"area丹麦"},{"n":"爱尔兰","v":"area=爱尔兰"},{"n":"西班牙","v":"area=西班牙"},{"n":"澳大利亚","v":"area=澳大利亚"},{"n":"瑞典","v":"area=瑞典"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"year=2024"},{"n":"2023","v":"year=2023"},{"n":"2022","v":"year=2022"},{"n":"2021","v":"year=2021"},{"n":"2020","v":"year=2020"},{"n":"2010年代","v":"year=2010%2C2019"},{"n":"2010年代","v":"2000%2C2009"},{"n":"90年代","v":"year=1990%2C1999"},{"n":"80年代","v":"1980%2C1989"},{"n":"70年代","v":"year=1970%2C1979"},{"n":"60年代","v":"1960%2C1969"},{"n":"更早","v":"year=1%2C1959"}]},{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"热门","v":"sort=hotest"},{"n":"评分","v":"sort=rating"}]}],
		"5":[{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"动作","v":"type=动作"},{"n":"剧情","v":"type=剧情"},{"n":"喜剧","v":"type=喜剧"},{"n":"惊悚","v":"type=惊悚"},{"n":"动作","v":"type=动作"},{"n":"爱情","v":"type=爱情"},{"n":"犯罪","v":"type=犯罪"},{"n":"恐怖","v":"type=恐怖"},{"n":"冒险","v":"type=冒险"},{"n":"悬疑","v":"type=悬疑"},{"n":"科幻","v":"type=科幻"},{"n":"家庭","v":"11"},{"n":"动画","v":"type=动画"},{"n":"动画","v":"13"},{"n":"战争","v":"type=战争"},{"n":"历史","v":"type=历史"},{"n":"传记","v":"type=传记"},{"n":"音乐","v":"type=音乐"},{"n":"歌舞","v":"type=歌舞"},{"n":"武侠","v":"type=武侠"},{"n":"西部","v":"type=西部"},{"n":"灾难","v":"type=灾难"},{"n":"古装","v":"type=古装"},{"n":"情色","v":"type=色情"},{"n":"同性","v":"type=同性"},{"n":"纪录片","v":"26"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"area=大陆"},{"n":"香港","v":"area=香港"},{"n":"台湾","v":"area=台湾"},{"n":"欧美","v":"area=欧美"},{"n":"美国","v":"area=美国"},{"n":"日本","v":"area=日本"},{"n":"韩国","v":"area=韩国"},{"n":"英国","v":"area=英国"},{"n":"法国","v":"area=法国"},{"n":"德国","v":"area=德国"},{"n":"印度","v":"area=印度"},{"n":"area=大陆","v":"11"},{"n":"巴西","v":"area=巴西"},{"n":"加拿大","v":"area=加拿大"},{"n":"俄罗斯","v":"area=俄罗斯"},{"n":"意大利","v":"area=意大利"},{"n":"丹麦","v":"area丹麦"},{"n":"爱尔兰","v":"area=爱尔兰"},{"n":"西班牙","v":"area=西班牙"},{"n":"澳大利亚","v":"area=澳大利亚"},{"n":"瑞典","v":"area=瑞典"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2024","v":"year=2024"},{"n":"2023","v":"year=2023"},{"n":"2022","v":"year=2022"},{"n":"2021","v":"year=2021"},{"n":"2020","v":"year=2020"},{"n":"2010年代","v":"year=2010%2C2019"},{"n":"2010年代","v":"2000%2C2009"},{"n":"90年代","v":"year=1990%2C1999"},{"n":"80年代","v":"1980%2C1989"},{"n":"70年代","v":"year=1970%2C1979"},{"n":"60年代","v":"1960%2C1969"},{"n":"更早","v":"year=1%2C1959"}]},{"key":"by","name":"排序","value":[{"n":"全部","v":""},{"n":"热门","v":"sort=hotest"},{"n":"评分","v":"sort=rating"}]}]
	},
}
