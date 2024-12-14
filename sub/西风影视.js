var rule={
title:'星空影院',
host:'https://www.2000xk.com/',
url:'/hd/fyclass/by/time/page/fypage.html',
filterable:1,
//filter_url:'/class/{{fl.class}}/page/fypage/year/{{fl.year}}',
class_name:'电视剧&电影&动漫&综艺&短剧',
class_url:'dianshiju&dianying&dongman&zongyi&duanju',
filter: {},
searchUrl:'vod/search.html?wd=**&submit=',
searchable:2,//是否启用全局搜索,
quickSearch:0,//是否启用快速搜索,
filterable:0,//是否启用分类筛选,
play_parse:true,
lazy:`js:
  let html = request(input);
  let hconf = html.match(/r player_.*?=(.*?)</)[1];
  let json = JSON5.parse(hconf);
  let url = json.url;
  if (json.encrypt == '1') {
    url = unescape(url);
  } else if (json.encrypt == '2') {
    url = unescape(base64Decode(url));
  }
  if (/\\.(m3u8|mp4|m4a|mp3)/.test(url)) {
    input = {
      parse: 0,
      jx: 0,
      url: url,
    };
  } else {
    input;
  }`,
limit:6,
推荐:'*',
double:true, // 推荐内容是否双层定位
一级:'body&&.stui-vodlist__box;a&&title;a&&data-original;.text-right&&Text;a&&href',
二级:{
        "title": "body&&.stui-content__detail h1&&Text;p.data:eq(1)&&Text",
        "img": "img.lazyload&&data-original",
        "desc": ".stui-content__detail p.data:eq(1)&&Text;.stui-content__detail p.data:eq(4)&&Text",
        "content": ".detail-sketch&&Text",
        "tabs": ".stui-pannel__head h3",
        "lists": ".stui-content__playlist:eq(#id) li"
    },
搜索:'body&&.stui-vodlist__media;a&&title;a&&data-original;.text-muted&&Text;a&&href',
tab_remove:['电视剧频道','本周热门电视剧'],
tab_rename:{'百度云':'尤东风💠百度云','腾讯云':'尤东风💠腾讯云','优酷云':'尤东风💠优酷云','微软云':'尤东风💠微软云','乐视云':'尤东风💠乐视云','搜狐云':'尤东风💠搜狐云','字节云':'尤东风💠字节云','阿里云':'尤东风💠阿里云','西瓜云':'尤东风💠西瓜云','小米云':'尤东风💠小米云','滴滴云':'尤东风💠滴滴云','哔哩云':'尤东风💠哔哩云','新浪云':'尤东风💠新浪云','京东云':'尤东风💠京东云'},
}
