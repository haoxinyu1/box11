muban.首图.二级.title = 'h1&&Text;.fed-col-xs6:eq(0)&&Text';
muban.首图.二级.desc = '.fed-col-xs12:eq(1)&&Text;.fed-col-xs12:eq(2)&&Text';
muban.首图.二级.content = '.fed-part-esan&&Text';
var rule={
模板:'首图',
title:'花姐影院',
host:'http://iyiwang.com/',
//url:'/index.php/vod/show/id/fyclass/fyfilter.html',//list/2.html
url:'list/fyclass-fypage.html',
filterable:1,
//filter_url:'letter/{{fl.letter}}/page/fypage/year/{{fl.year}}',
class_name:'电视剧&国产剧&韩国剧&泰国剧&海外剧&电影&纪录片&动作片&战争片&科幻片&综艺&动漫',
class_url:'2&13&16&29&30&1&25&5&9&7&3&4',
searchUrl:'search.php?searchword=**',
searchable:2,
quickSearch:1,
filterable:0,
play_parse: true,
/*一lazy: $js.toString(() => {
        pdfh = jsp.pdfh;pdfa = jsp.pdfa;
        var html = pdfa(html, '<p>&&script');
        var url = request(html).match(/var now="(.*?)";/)[1];
        input = {
            jx: 0,
            url: url,
            parse: 0
        };
    }),*/
limit:6,
//推荐:'li.fed-list-item;*;*;*;*',
//double:true, // 推荐内容是否双层定位
一级:'li.fed-list-item;.fed-list-title&&Text;.fed-list-pics&&data-original;.fed-list-remarks&&Text;a&&href',
/*二级:{
	  "title":".fed-deta-content h1&&Text;.fed-deta-content ul li:eq(2)&&Text",//.fed-deta-content&&.fed-part-rows li:eq(2)&&Text
      "img":".fed-list-pics&&data-original",
	  "desc":".fed-deta-content ul li:eq(0)&&Text;.fed-deta-content ul li:eq(3)&&Text;.fed-deta-content ul li:eq(5)&&Text", 
	  "content": ".fed-part-esan&&Text",
	  "tabs":"ul.nav-tabs&&li a",
	  "lists":".myui-content__list:eq(#id)li a"
	 },*/
搜索:'li.fed-list-item;.fed-list-title&&Text;.fed-list-pics&&data-original;.fed-list-remarks&&Text;a&&href',
tab_rename:{'优酷视频':'尤东风💠优酷','腾讯视频':'尤东风💠腾讯','六号线':'尤东风💠量子'},
}
