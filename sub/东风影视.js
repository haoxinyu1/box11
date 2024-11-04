var rule ={
    //模板: '自动',
    title: '03影院',
    host: 'https://www.03yy.live/', 
    url:'/type/indexfyclass-fypage.html',
    class_name:"大陆剧&韩国剧&香港剧&台湾剧&泰国剧&欧美剧&日本剧&动作片&战争片&爱情片&科幻片&恐怖片&喜剧片&剧情片&电视剧&电影&综艺&动漫",
    class_url:"13&26&14&46&47&27&16&5&9&6&7&8&10&12&2&1&3&4",
    searchable: 2,
    filterable: 1,
    searchUrl: '/search.php?searchword=**',
    lazy: `js:
        pdfh = jsp.pdfh;
        var html = request(input);
        var ohtml = pdfh(html, '.player_1&&Html');
        let baseurl = /now=base64decode\("([^"]+)"\);/;
        let matchurl = ohtml.match(baseurl)[1];
        url =unescape(base64Decode(matchurl));
    `,
    一级: 'body&&.Pic-list ul;a&&title;img&&src;span&&Text;a&&href',
    二级: {
    "title": "h2&&Text;.m-content ul&&Text",
    "img": ".m-bigbox div a img&&src",
    "desc": ".m-content ul li:eq(0)&&Text;.m-content ul li:eq(1)&&Text;.m-content ul li:eq(2)&&Text",
    "content": ".m-intro ul&&Text",
     tabs:'ul#playlist li',
     lists:'.play_list ul:eq(#id)&&li a'
   },
   搜索: 'json:list;name;pic;;id',
   tab_rename:{'高清在线':'尤东风💠高清在线','普通线路2':'尤东风💠普通线路2','普通线路4':'尤东风💠普通线路4'},
}

