muban.首图.二级.title = '.stui-content__detail h3&&Text;.stui-content__detail p:eq(0)&&Text';
muban.首图.二级.desc = '.stui-content__detail p:eq(3)&&a:eq(1)&&Text;.stui-content__detail p:eq(1)&&Text;.stui-content__detail p:eq(2)&&Text';
muban.首图.二级.content = '.stui-content__detail p:eq(4)&&Text';
muban.首图.二级.tabs = '.stui-pannel__head';
muban.首图.二级.lists = '.stui-content__playlist:eq(#id)li a';
var rule={
模板:'首图',
title:'全网影视',
host:'https://www.91qkw.com/',
url:'type/fyclass-fypage.html',
filterable:1,
class_name:'电视剧&电影&综艺&动漫&短剧',
class_url:'2&1&3&4&28',
searchUrl:'/search/**----------fypage---.html',
searchable:2,
quickSearch:1,
filterable:0,
limit:6,
一级:'li.stui-vodlist__item;h4&&Text;.lazyload&&data-original;.pic-text&&Text;a&&href',
搜索:'li.stui-vodlist__item;h4&&Text;.lazyload&&data-original;.pic-text&&Text;a&&href',
}
