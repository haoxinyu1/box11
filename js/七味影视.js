var rule = { 
    title: "七味",
    host: "https://www.qn63.com//",
	hostJs:'print(HOST);let html=request(HOST,{headers:{"User-Agent":PC_UA}});let src=jsp.pdfh(html,".content ul li:eq(-4)&&a&&href");print(src);HOST=src',
    headers:{ 'User-Agent': PC_UA, 'Referer': '', 'content-type': 'application/x-www-form-urlencoded', 'Cookie': ''},
    homeUrl:"",
    url: "/ms/fyclassfyfilter.html",
    searchUrl: "/vod/search/page/fypage/wd/**.html",
    filterable: 1,
    filter: {
    "1":[
    {
    "key":"class",
    "name":"剧情",
    "value":[
    {"n":"全部","v":""},
    {"n": "喜剧", "v": "/class/喜剧"},
    {"n": "爱情", "v": "/class/爱情"},
    {"n": "动作", "v": "/class/动作"},
    {"n": "科幻", "v": "/class/科幻"},
    {"n": "剧情", "v": "/class/剧情"},
    {"n": "运动", "v": "/class/运动"},
    {"n": "悬疑", "v": "/class/悬疑"},
    {"n": "犯罪", "v": "/class/犯罪"},
    {"n": "惊悚", "v": "/class/惊悚"},
    {"n": "冒险", "v": "/class/冒险"},
    {"n": "音乐", "v": "/class/音乐"},
    {"n": "历史", "v": "/class/历史"},
    {"n": "奇幻", "v": "/class/奇幻"},
    {"n": "恐怖", "v": "/class/恐怖"},
    {"n": "战争", "v": "/class/战争"},
    {"n": "传记", "v": "/class/传记"},
    {"n": "歌舞", "v": "/class/歌舞"},
    {"n": "武侠", "v": "/class/武侠"},
    {"n": "情色", "v": "/class/情色"},
    {"n": "灾难", "v": "/class/灾难"},
    {"n": "西部", "v": "/class/西部"},
    {"n": "古装", "v": "/class/古装"},
    {"n": "同性", "v": "/class/同性"},
    {"n": "家庭", "v": "/class/家庭"},
    {"n": "纪录", "v": "/class/纪录"},
    {"n": "短片", "v": "/class/短片"},
    {"n": "儿童", "v": "/class/儿童"},
    {"n": "丧尸", "v": "/class/丧尸"},
    {"n": "青春", "v": "/class/青春"},
    {"n": "励志", "v": "/class/励志"},
    {"n": "人性", "v": "/class/人性"},
    {"n": "美食", "v": "/class/美食"},
    {"n": "女性", "v": "/class/女性"},
    {"n": "治愈", "v": "/class/治愈"},
    {"n": "校园", "v": "/class/校园"},
    {"n": "文艺", "v": "/class/文艺"},
    {"n": "穿越", "v": "/class/穿越"}
    ]
    },
    {
    "key":"area",
    "name":"地区",
    "value":[
    {"n":"全部","v":""},
    {"n": "大陆", "v": "/area/大陆"},
    {"n": "美国", "v": "/area/美国"},
    {"n": "香港", "v": "/area/香港"},
    {"n": "台湾", "v": "/area/台湾"},
    {"n": "日本", "v": "/area/日本"},
    {"n": "韩国", "v": "/area/韩国"},
    {"n": "英国", "v": "/area/英国"},
    {"n": "法国", "v": "/area/法国"},
    {"n": "德国", "v": "/area/德国"},
    {"n": "意大利", "v": "/area/意大利"},
    {"n": "西班牙", "v": "/area/西班牙"},
    {"n": "印度", "v": "/area/印度"},
    {"n": "泰国", "v": "/area/泰国"},
    {"n": "俄罗斯", "v": "/area/俄罗斯"},
    {"n": "伊朗", "v": "/area/伊朗"},
    {"n": "加拿大", "v": "/area/加拿大"},
    {"n": "澳大利亚", "v": "/area/澳大利亚"},
    {"n": "爱尔兰", "v": "/area/爱尔兰"},
    {"n": "瑞典", "v": "/area/瑞典"},
    {"n": "巴西", "v": "/area/巴西"},
    {"n": "墨西哥", "v": "/area/墨西哥"},
    {"n": "丹麦", "v": "/area/丹麦"},
    {"n": "匈牙利", "v": "/area/匈牙利"},
    {"n": "土耳其", "v": "/area/土耳其"},
    {"n": "印度尼西亚", "v": "/area/印度尼西亚"},
    {"n": "利比亚", "v": "/area/利比亚"},
    {"n": "哥伦比亚", "v": "/area/哥伦比亚"},
    {"n": "比利时", "v": "/area/比利时"},
    {"n": "荷兰", "v": "/area/荷兰"},
    {"n": "芬兰", "v": "/area/芬兰"},
    {"n": "玻利维亚", "v": "/area/玻利维亚"},
    {"n": "奥地利", "v": "/area/奥地利"},
    {"n": "黎巴嫩", "v": "/area/黎巴嫩"},
    {"n": "菲律宾", "v": "/area/菲律宾"},
    {"n": "以色列", "v": "/area/以色列"},
    {"n": "马来西亚", "v": "/area/马来西亚"}
    ]
    },
    {
    "key":"actor",
    "name":"明星",
    "value":[
    {"n":"全部","v":""},
    {"n": "吴镇宇", "v": "/actor/吴镇宇"},
    {"n": "黄百鸣", "v": "/actor/黄百鸣"},
    {"n": "任达华", "v": "/actor/任达华"},
    {"n": "吴耀汉", "v": "/actor/吴耀汉"},
    {"n": "邓超", "v": "/actor/邓超"},
    {"n": "成龙", "v": "/actor/成龙"},
    {"n": "林正英", "v": "/actor/林正英"},
    {"n": "张家辉", "v": "/actor/张家辉"},
    {"n": "梁朝伟", "v": "/actor/梁朝伟"},
    {"n": "徐峥", "v": "/actor/徐峥"},
    {"n": "邹兆龙", "v": "/actor/邹兆龙"},
    {"n": "刘德华", "v": "/actor/刘德华"},
    {"n": "周星驰", "v": "/actor/周星驰"},
    {"n": "林青霞", "v": "/actor/林青霞"},
    {"n": "周润发", "v": "/actor/周润发"},
    {"n": "李连杰", "v": "/actor/李连杰"},
    {"n": "甄子丹", "v": "/actor/甄子丹"},
    {"n": "古天乐", "v": "/actor/古天乐"},
    {"n": "洪金宝", "v": "/actor/洪金宝"},
    {"n": "黄晓明", "v": "/actor/黄晓明"},
    {"n": "郑伊健", "v": "/actor/郑伊健"},
    {"n": "张国荣", "v": "/actor/张国荣"},
    {"n": "许冠杰", "v": "/actor/许冠杰"},
    {"n": "许冠英", "v": "/actor/许冠英"},
    {"n": "许冠文", "v": "/actor/许冠文"},
    {"n": "吴孟达", "v": "/actor/吴孟达"},
    {"n": "午马", "v": "/actor/午马"},
    {"n": "张学友", "v": "/actor/张学友"},
    {"n": "巩俐", "v": "/actor/巩俐"},
    {"n": "徐少强", "v": "/actor/徐少强"},
    {"n": "李嘉欣", "v": "/actor/李嘉欣"},
    {"n": "张敏", "v": "/actor/张敏"},
    {"n": "梅艳芳", "v": "/actor/梅艳芳"},
    {"n": "关之琳", "v": "/actor/关之琳"},
    {"n": "黎姿", "v": "/actor/黎姿"},
    {"n": "邱淑贞", "v": "/actor/邱淑贞"},
    {"n": "王祖贤", "v": "/actor/王祖贤"},
    {"n": "李丽珍", "v": "/actor/李丽珍"},
    {"n": "陈宝莲", "v": "/actor/陈宝莲"},
    {"n": "莱昂纳多·迪卡普里奥", "v": "/actor/莱昂纳多·迪卡普里奥"},
    {"n": "威尔·史密斯", "v": "/actor/威尔·史密斯"},
    {"n": "杰森·斯坦森", "v": "/actor/杰森·斯坦森"},
    {"n": "汤姆·克鲁斯", "v": "/actor/汤姆·克鲁斯"},
    {"n": "布拉德·皮特", "v": "/actor/布拉德·皮特"},
    {"n": "范·迪塞尔", "v": "/actor/范·迪塞尔"},
    {"n": "阿德里安·布罗迪", "v": "/actor/阿德里安·布罗迪"},
    {"n": "尼古拉斯·凯奇", "v": "/actor/尼古拉斯·凯奇"},
    {"n": "西尔维斯特·史泰龙", "v": "/actor/西尔维斯特·史泰龙"},
    {"n": "克里斯·埃文斯", "v": "/actor/克里斯·埃文斯"},
    {"n": "金·凯瑞", "v": "/actor/金·凯瑞"},
    {"n": "阿米尔·汗", "v": "/actor/阿米尔·汗"},
    {"n": "李钟硕", "v": "/actor/李钟硕"},
    {"n": "宋慧乔", "v": "/actor/宋慧乔"},
    {"n": "玄彬", "v": "/actor/玄彬"},
    {"n": "安圣基", "v": "/actor/安圣基"},
    {"n": "宋康昊", "v": "/actor/宋康昊"},
    {"n": "崔岷植", "v": "/actor/崔岷植"},
    {"n": "河正宇", "v": "/actor/河正宇"},
    {"n": "薛景求", "v": "/actor/薛景求"},
    {"n": "李秉宪", "v": "/actor/李秉宪"},
    {"n": "黄政民", "v": "/actor/黄政民"},
    {"n": "李政宰", "v": "/actor/李政宰"},
    {"n": "刘亚仁", "v": "/actor/刘亚仁"},
    {"n": "孔刘", "v": "/actor/孔刘"},
    {"n": "金允石", "v": "/actor/金允石"}
    ]
    },
    {
    "key":"director",
    "name":"导演",
    "value":[
    {"n":"全部","v":""},
    {"n": "冯小刚", "v": "/director/冯小刚"},
    {"n": "张艺谋", "v": "/director/张艺谋"},
    {"n": "吴宇森", "v": "/director/吴宇森"},
    {"n": "陈凯歌", "v": "/director/陈凯歌"},
    {"n": "徐克", "v": "/director/徐克"},
    {"n": "王家卫", "v": "/director/王家卫"},
    {"n": "姜文", "v": "/director/姜文"},
    {"n": "周星驰", "v": "/director/周星驰"},
    {"n": "李安", "v": "/director/李安"},
    {"n": "温子仁", "v": "/director/温子仁"},
    {"n": "刘镇伟", "v": "/director/刘镇伟"},
    {"n": "王晶", "v": "/director/王晶"},
    {"n": "史蒂文·斯皮尔伯格", "v": "/director/史蒂文·斯皮尔伯格"},
    {"n": "詹姆斯·卡梅隆", "v": "/director/詹姆斯·卡梅隆"},
    {"n": "雷德利·斯科特", "v": "/director/雷德利·斯科特"},
    {"n": "克里斯托弗·诺兰", "v": "/director/克里斯托弗·诺兰"},
    {"n": "迈克尔·贝", "v": "/director/迈克尔·贝"},
    {"n": "扎克·施奈德", "v": "/director/扎克·施奈德"},
    {"n": "吕克·贝松", "v": "/director/吕克·贝松"}
    ]
    },
    {
    "key":"year",
    "name":"年份",
    "value":[
    {"n":"全部","v":""},
    {"n": "2025", "v": "/year/2025"},
    {"n": "2024", "v": "/year/2024"},
    {"n": "2023", "v": "/year/2023"},
    {"n": "2022", "v": "/year/2022"},
    {"n": "2021", "v": "/year/2021"},
    {"n": "2020", "v": "/year/2020"},
    {"n": "2019", "v": "/year/2019"},
    {"n": "2018", "v": "/year/2018"},
    {"n": "2017", "v": "/year/2017"},
    {"n": "2016", "v": "/year/2016"},
    {"n": "2015", "v": "/year/2015"},
    {"n": "2014", "v": "/year/2014"},
    {"n": "2013", "v": "/year/2013"},
    {"n": "2012", "v": "/year/2012"},
    {"n": "2011", "v": "/year/2011"},
    {"n": "2010", "v": "/year/2010"},
    {"n": "2009", "v": "/year/2009"},
    {"n": "2008", "v": "/year/2008"},
    {"n": "2007", "v": "/year/2007"},
    {"n": "2006", "v": "/year/2006"},
    {"n": "2005", "v": "/year/2005"},
    {"n": "2004", "v": "/year/2004"},
    {"n": "2003", "v": "/year/2003"},
    {"n": "2002", "v": "/year/2002"},
    {"n": "2001", "v": "/year/2001"},
    {"n": "2000", "v": "/year/2000"},
    {"n": "90年代", "v": "/year/90年代"},
    {"n": "80年代", "v": "/year/80年代"},
    {"n": "更早", "v": "/year/更早"}
    ]
    },
    {
    "key":"by",
    "name":"排序",
    "value":[
    {"n":"全部","v":""},
    {"n":"时间","v":"/by/time"},
    {"n":"人气","v":"/by/hits"},
    {"n":"评分","v":"/by/score"}
    ]
    }
    ],
    "2":[
    {
    "key":"class",
    "name":"剧情",
    "value":[
    {"n":"全部","v":""},
    {"n": "喜剧", "v": "/class/喜剧"},
    {"n": "爱情", "v": "/class/爱情"},
    {"n": "动作", "v": "/class/动作"},
    {"n": "科幻", "v": "/class/科幻"},
    {"n": "剧情", "v": "/class/剧情"},
    {"n": "运动", "v": "/class/运动"},
    {"n": "悬疑", "v": "/class/悬疑"},
    {"n": "犯罪", "v": "/class/犯罪"},
    {"n": "惊悚", "v": "/class/惊悚"},
    {"n": "冒险", "v": "/class/冒险"},
    {"n": "音乐", "v": "/class/音乐"},
    {"n": "历史", "v": "/class/历史"},
    {"n": "奇幻", "v": "/class/奇幻"},
    {"n": "恐怖", "v": "/class/恐怖"},
    {"n": "战争", "v": "/class/战争"},
    {"n": "传记", "v": "/class/传记"},
    {"n": "歌舞", "v": "/class/歌舞"},
    {"n": "武侠", "v": "/class/武侠"},
    {"n": "情色", "v": "/class/情色"},
    {"n": "灾难", "v": "/class/灾难"},
    {"n": "西部", "v": "/class/西部"},
    {"n": "古装", "v": "/class/古装"},
    {"n": "同性", "v": "/class/同性"},
    {"n": "家庭", "v": "/class/家庭"},
    {"n": "纪录", "v": "/class/纪录"},
    {"n": "短片", "v": "/class/短片"},
    {"n": "儿童", "v": "/class/儿童"},
    {"n": "丧尸", "v": "/class/丧尸"},
    {"n": "青春", "v": "/class/青春"},
    {"n": "励志", "v": "/class/励志"},
    {"n": "人性", "v": "/class/人性"},
    {"n": "美食", "v": "/class/美食"},
    {"n": "女性", "v": "/class/女性"},
    {"n": "治愈", "v": "/class/治愈"},
    {"n": "校园", "v": "/class/校园"},
    {"n": "文艺", "v": "/class/文艺"},
    {"n": "穿越", "v": "/class/穿越"}
    ]
    },
    {
    "key":"area",
    "name":"地区",
    "value":[
    {"n":"全部","v":""},
    {"n": "大陆", "v": "/area/大陆"},
    {"n": "美国", "v": "/area/美国"},
    {"n": "香港", "v": "/area/香港"},
    {"n": "台湾", "v": "/area/台湾"},
    {"n": "日本", "v": "/area/日本"},
    {"n": "韩国", "v": "/area/韩国"},
    {"n": "英国", "v": "/area/英国"},
    {"n": "法国", "v": "/area/法国"},
    {"n": "德国", "v": "/area/德国"},
    {"n": "意大利", "v": "/area/意大利"},
    {"n": "西班牙", "v": "/area/西班牙"},
    {"n": "印度", "v": "/area/印度"},
    {"n": "泰国", "v": "/area/泰国"},
    {"n": "俄罗斯", "v": "/area/俄罗斯"},
    {"n": "伊朗", "v": "/area/伊朗"},
    {"n": "加拿大", "v": "/area/加拿大"},
    {"n": "澳大利亚", "v": "/area/澳大利亚"},
    {"n": "爱尔兰", "v": "/area/爱尔兰"},
    {"n": "瑞典", "v": "/area/瑞典"},
    {"n": "巴西", "v": "/area/巴西"},
    {"n": "墨西哥", "v": "/area/墨西哥"},
    {"n": "丹麦", "v": "/area/丹麦"},
    {"n": "匈牙利", "v": "/area/匈牙利"},
    {"n": "土耳其", "v": "/area/土耳其"},
    {"n": "印度尼西亚", "v": "/area/印度尼西亚"},
    {"n": "利比亚", "v": "/area/利比亚"},
    {"n": "哥伦比亚", "v": "/area/哥伦比亚"},
    {"n": "比利时", "v": "/area/比利时"},
    {"n": "荷兰", "v": "/area/荷兰"},
    {"n": "芬兰", "v": "/area/芬兰"},
    {"n": "玻利维亚", "v": "/area/玻利维亚"},
    {"n": "奥地利", "v": "/area/奥地利"},
    {"n": "黎巴嫩", "v": "/area/黎巴嫩"},
    {"n": "菲律宾", "v": "/area/菲律宾"},
    {"n": "以色列", "v": "/area/以色列"}

    ]
    },

    {
    "key":"actor",
    "name":"演员",
    "value":[
    {"n":"全部","v":""},
    {"n": "王宝强", "v": "/actor/王宝强"},
    {"n": "胡歌", "v": "/actor/胡歌"},
    {"n": "霍建华", "v": "/actor/霍建华"},
    {"n": "赵丽颖", "v": "/actor/赵丽颖"},
    {"n": "刘涛", "v": "/actor/刘涛"},
    {"n": "刘诗诗", "v": "/actor/刘诗诗"},
    {"n": "陈伟霆", "v": "/actor/陈伟霆"},
    {"n": "吴奇隆", "v": "/actor/吴奇隆"},
    {"n": "陆毅", "v": "/actor/陆毅"},
    {"n": "唐嫣", "v": "/actor/唐嫣"},
    {"n": "关晓彤", "v": "/actor/关晓彤"},
    {"n": "孙俪", "v": "/actor/孙俪"},
    {"n": "李易峰", "v": "/actor/李易峰"},
    {"n": "张翰", "v": "/actor/张翰"},
    {"n": "李晨", "v": "/actor/李晨"},
    {"n": "范冰冰", "v": "/actor/范冰冰"},
    {"n": "林心如", "v": "/actor/林心如"},
    {"n": "文章", "v": "/actor/文章"},
    {"n": "马伊琍", "v": "/actor/马伊琍"},
    {"n": "佟大为", "v": "/actor/佟大为"},
    {"n": "孙红雷", "v": "/actor/孙红雷"},
    {"n": "陈建斌", "v": "/actor/陈建斌"},
    {"n": "李小璐", "v": "/actor/李小璐"}
    ]
    },
    {
    "key":"director",
    "name":"演员",
    "value":[
    {"n":"全部","v":""},
    {"n": "张纪中", "v": "/director/张纪中"},
    {"n": "李少红", "v": "/director/李少红"},
    {"n": "刘江", "v": "/director/刘江"},
    {"n": "孔笙", "v": "/director/孔笙"},
    {"n": "张黎", "v": "/director/张黎"},
    {"n": "康洪雷", "v": "/director/康洪雷"},
    {"n": "高希希", "v": "/director/高希希"},
    {"n": "胡玫", "v": "/director/胡玫"},
    {"n": "赵宝刚", "v": "/director/赵宝刚"},
    {"n": "郑晓龙", "v": "/director/郑晓龙"}
    ]
    },
    {
    "key":"year",
    "name":"年份",
    "value":[
    {"n":"全部","v":""},
    {"n": "2025", "v": "/year/2025"},
    {"n": "2024", "v": "/year/2024"},
    {"n": "2023", "v": "/year/2023"},
    {"n": "2022", "v": "/year/2022"},
    {"n": "2021", "v": "/year/2021"},
    {"n": "2020", "v": "/year/2020"},
    {"n": "2019", "v": "/year/2019"},
    {"n": "2018", "v": "/year/2018"},
    {"n": "2017", "v": "/year/2017"},
    {"n": "2016", "v": "/year/2016"},
    {"n": "2015", "v": "/year/2015"},
    {"n": "2014", "v": "/year/2014"},
    {"n": "2013", "v": "/year/2013"},
    {"n": "2012", "v": "/year/2012"},
    {"n": "2011", "v": "/year/2011"},
    {"n": "2010", "v": "/year/2010"},
    {"n": "2009", "v": "/year/2009"},
    {"n": "2008", "v": "/year/2008"},
    {"n": "2007", "v": "/year/2007"},
    {"n": "2006", "v": "/year/2006"},
    {"n": "2005", "v": "/year/2005"},
    {"n": "2004", "v": "/year/2004"},
    {"n": "2003", "v": "/year/2003"},
    {"n": "2002", "v": "/year/2002"},
    {"n": "2001", "v": "/year/2001"},
    {"n": "2000", "v": "/year/2000"},
    {"n": "90年代", "v": "/year/90年代"},
    {"n": "80年代", "v": "/year/80年代"},
    {"n": "更早", "v": "/year/更早"}
    ]
    },
    {
    "key":"by",
    "name":"排序",
    "value":[
    {"n":"全部","v":""},
    {"n":"时间","v":"/by/time"},
    {"n":"人气","v":"/by/hits"},
    {"n":"评分","v":"/by/score"}
    ]
    }
    ],
    "cartoon":[
    {
    "key":"area",
    "name":"地区",
    "value":[
    {"n":"全部","v":""},
    {"n":"内地","v":"/area/大陆"},
    {"n":"台湾","v":"/area/台湾"},
    {"n":"香港","v":"/area/香港"},
    {"n":"日本","v":"/area/日本"},
    {"n":"美国","v":"/area/美国"},
    {"n":"英国","v":"/area/英国"},
    {"n":"韩国","v":"/area/韩国"}
    ]
    },
    {
    "key":"class",
    "name":"剧情",
    "value":[
    {"n":"全部","v":""},
    {"n": "喜剧", "v": "/class/喜剧"},
    {"n": "爱情", "v": "/class/爱情"},
    {"n": "动作", "v": "/class/动作"},
    {"n": "科幻", "v": "/class/科幻"},
    {"n": "剧情", "v": "/class/剧情"},
    {"n": "运动", "v": "/class/运动"},
    {"n": "悬疑", "v": "/class/悬疑"},
    {"n": "犯罪", "v": "/class/犯罪"},
    {"n": "惊悚", "v": "/class/惊悚"},
    {"n": "冒险", "v": "/class/冒险"},
    {"n": "音乐", "v": "/class/音乐"},
    {"n": "历史", "v": "/class/历史"},
    {"n": "奇幻", "v": "/class/奇幻"},
    {"n": "恐怖", "v": "/class/恐怖"},
    {"n": "战争", "v": "/class/战争"},
    {"n": "传记", "v": "/class/传记"},
    {"n": "歌舞", "v": "/class/歌舞"},
    {"n": "武侠", "v": "/class/武侠"},
    {"n": "情色", "v": "/class/情色"},
    {"n": "灾难", "v": "/class/灾难"},
    {"n": "西部", "v": "/class/西部"},
    {"n": "古装", "v": "/class/古装"},
    {"n": "同性", "v": "/class/同性"},
    {"n": "家庭", "v": "/class/家庭"},
    {"n": "纪录", "v": "/class/纪录"},
    {"n": "短片", "v": "/class/短片"},
    {"n": "儿童", "v": "/class/儿童"}
    ]
    },
    {
    "key":"year",
    "name":"年份",
    "value":[
    {"n":"全部","v":""},
    {"n": "2025", "v": "/year/2025"},
    {"n": "2024", "v": "/year/2024"},
    {"n": "2023", "v": "/year/2023"},
    {"n": "2022", "v": "/year/2022"},
    {"n": "2021", "v": "/year/2021"},
    {"n": "2020", "v": "/year/2020"},
    {"n": "2019", "v": "/year/2019"},
    {"n": "2018", "v": "/year/2018"},
    {"n": "2017", "v": "/year/2017"},
    {"n": "2016", "v": "/year/2016"},
    {"n": "2015", "v": "/year/2015"},
    {"n": "2014", "v": "/year/2014"},
    {"n": "2013", "v": "/year/2013"},
    {"n": "2012", "v": "/year/2012"},
    {"n": "2011", "v": "/year/2011"},
    {"n": "2010", "v": "/year/2010"},
    {"n": "2009", "v": "/year/2009"},
    {"n": "2008", "v": "/year/2008"},
    {"n": "2007", "v": "/year/2007"},
    {"n": "2006", "v": "/year/2006"},
    {"n": "2005", "v": "/year/2005"},
    {"n": "2004", "v": "/year/2004"},
    {"n": "2003", "v": "/year/2003"},
    {"n": "2002", "v": "/year/2002"},
    {"n": "2001", "v": "/year/2001"},
    {"n": "2000", "v": "/year/2000"},
    {"n": "90年代", "v": "/year/90年代"},
    {"n": "80年代", "v": "/year/80年代"},
    {"n": "更早", "v": "/year/更早"}
    ]
    },
    {
    "key":"by",
    "name":"排序",
    "value":[
    {"n":"全部","v":""},
    {"n":"时间","v":"/by/time"},
    {"n":"人气","v":"/by/hits"},
    {"n":"评分","v":"/by/score"}
    ]
    }
    ],
    "variety":[
    
    {
    "key":"area",
    "name":"地区",
    "value":[
    {"n":"全部","v":""},
    {"n":"国产","v":"/area/大陆"},
    {"n":"日本","v":"/area/日本"},
    {"n":"美国","v":"/area/美国"},
    {"n":"台湾","v":"/area/台湾"},
    {"n":"香港","v":"/area/香港"}
    ]
    },
    {
    "key":"year",
    "name":"年份",
    "value":[
    {"n": "2025", "v": "/year/2025"},
    {"n": "2024", "v": "/year/2024"},
    {"n": "2023", "v": "/year/2023"},
    {"n": "2022", "v": "/year/2022"},
    {"n": "2021", "v": "/year/2021"},
    {"n": "2020", "v": "/year/2020"},
    {"n": "2019", "v": "/year/2019"},
    {"n": "2018", "v": "/year/2018"},
    {"n": "2017", "v": "/year/2017"},
    {"n": "2016", "v": "/year/2016"},
    {"n": "2015", "v": "/year/2015"},
    {"n": "2014", "v": "/year/2014"},
    {"n": "2013", "v": "/year/2013"},
    {"n": "2012", "v": "/year/2012"},
    {"n": "2011", "v": "/year/2011"},
    {"n": "2010", "v": "/year/2010"},
    {"n": "2009", "v": "/year/2009"},
    {"n": "2008", "v": "/year/2008"},
    {"n": "2007", "v": "/year/2007"},
    {"n": "2006", "v": "/year/2006"},
    {"n": "2005", "v": "/year/2005"},
    {"n": "2004", "v": "/year/2004"},
    {"n": "2003", "v": "/year/2003"},
    {"n": "2002", "v": "/year/2002"},
    {"n": "2001", "v": "/year/2001"},
    {"n": "2000", "v": "/year/2000"},
    {"n": "90年代", "v": "/year/90年代"},
    {"n": "80年代", "v": "/year/80年代"},
    {"n": "更早", "v": "/year/更早"}
    ]
    },
    {
    "key":"by",
    "name":"排序",
    "value":[
    {"n":"全部","v":""},
    {"n":"全部","v":""},
    {"n":"时间","v":"/by/time"},
    {"n":"人气","v":"/by/hits"},
    {"n":"评分","v":"/by/score"}

    ]
    }
    ]
    },
    filter_def:{
    1:{cateId:'1'},
    2:{cateId:'2'},
    variety:{cateId:'variety'},
    cartoon:{cateId:'cartoon'}

    },

    filter_url: "-{{fl.area}}-{{fl.by}}-{{fl.class}}-{{fl.lang}}----fypage---{{fl.year}}",
    //ms/2-{{fl.area}}-{{fl.by}}-{{fl.class}}-{{fl.lang}}----fypage---{{fl.year}}.html
    timeout: 5000,
    //class_parse: ".nav ul li:gt(0):lt(10);a&&Text;a&&href;/(\\d+).html",
    class_name:'电影&电视剧&动漫&综艺',//静态分类名称拼接
    class_url:'1&2&3&4',//静态分类标识拼接
    cate_exclude:'短剧|网址',
    lazy: "",
    double: false,
    推荐: "*",
    一级:  "body&&.li-img a;a&&title;img&&src;.bottom2&&Text;a&&href",
    二级: `js:
        let khtml = request(input);
        VOD = {};
        VOD.vod_id = input;
        VOD.vod_name = pdfh(khtml, 'h1&&Text');
        VOD.vod_pic = pdfh(khtml, '.row img&&src');
        VOD.type_name = pdfh(khtml, '.main-ui-meta div:eq(4)&&Text');
        VOD.vod_remarks = pdfh(khtml, '.main-ui-meta div:eq(8)&&Text');
        VOD.vod_year = pdfh(khtml, '.main-ui-meta div:eq(7)&&Text');
        VOD.vod_area = pdfh(khtml, '.main-ui-meta div:eq(6)&&Text');
        VOD.vod_director = pdfh(khtml, '.main-ui-meta div:eq(1)&&Text');
        VOD.vod_actor = pdfh(khtml, '.text-overflow&&Text');
        VOD.vod_content = pdfh(khtml, '.sqjj_a&&Text');

        let ktabs = [];
        let zx_tabs = pdfa(khtml, '.py-tabs li');
        if (zx_tabs.length !== 0) {
            zx_tabs.map((it) => {
                return ktabs.push('在线-' + pdfh(it, 'body&&Text'))
            })
        };
        let xz_tabs = pdfa(khtml, '.nav-tabs:eq(0) li');
        if (xz_tabs.length !== 0) {
            xz_tabs.map((it) => {
                return ktabs.push('磁力-' + pdfh(it, 'body--small&&Text'))
            })
        };
        VOD.vod_play_from = ktabs.join('$$$');

        let klists = [];
        let zx_plists = pdfa(khtml, '.bd .player');
        let xz_plists = pdfa(khtml, '.tab-content:eq(0) li');
        let i = 0;
        let j = 0;
        ktabs.forEach((tab) => {
            if (/在线/.test(tab)) {
                let zx_plist = pdfa(zx_plists[i], 'a').map((it) => {
                    return pdfh(it, 'a&&Text') + '$' + pd(it, 'a&&href', input)
                });
                i++;
                zx_plist = zx_plist.join('#');
                klists.push(zx_plist)
            } else if (/磁力/.test(tab)) {
                let xz_plist = pdfa(xz_plists[j], 'a').map((it) => {
                    return pdfh(it, 'a&&title') + '$' + pdfh(it, 'a&&href')
                });
                j++;
                xz_plist = xz_plist.join('#');
                klists.push(xz_plist)
            }
        });
        VOD.vod_play_url = klists.join('$$$')
        `,
    搜索: "body&&.module-item;.module-card-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href;.module-info-item-content&&Text",
}
