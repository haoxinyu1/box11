//import { Crypto, load, _ } from 'https://ghp.ci/https://raw.githubusercontent.com/LuckySe7ens/tvbox_config/164a5d3bbad9e3c076893bad6150bac1a8b823cc/open//lib/cat.js';
import { Crypto,_} from 'assets://js/lib/cat.js';
let siteUrl ='https://www.360kan.com';
let siteKey = '';
let siteType = 0;
let headers = {
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
    'Referer': siteUrl + '/'
};

async function request(reqUrl, postData, post) {

    let res = await req(reqUrl, {
        method: post ? 'post' : 'get',
        headers: headers,
        data: postData || {},
        postType: post ? 'form' : '',
    });

    let content = res.content;
    return content;
}

async function init(cfg) {
    siteKey = cfg.skey;
    siteType = cfg.stype;
    if (cfg.ext) {
        siteUrl = cfg.ext;
    }
}

async function home(filter) {
    let classes = [
    {
        type_id: '2',
        type_name: '电视剧',
    },{
        type_id: '1',
        type_name: '电影',
    },{
        type_id: '3',
        type_name: '综艺',
    },{
        type_id: '4',
        type_name: '动漫',
    }];
    let filterObj = genFilterObj();
    return JSON.stringify({
        class: classes,
        filters: filterObj
    });
}

async function homeVod() {
}

async function category(tid, pg, filter, ext) {
    if (!pg) pg = 1;
    if (pg <= 0) pg = 1;
    let url = `https://api.web.360kan.com/v1/filter/list?catid=${tid}&rank=rankhot&cat=${ext['cat']||''}&year=${ext['year']||''}&area=${ext['area']||''}&act=&size=35`
    let res = JSON.parse(await request(url)).data  
    let videos = _.map(res.movies, n => {
        return {
            vod_id: tid + '_' + n.id,
            vod_name: n.title,
            vod_pic: 'https:' + n.cdncover,
            vod_remarks: n.upinfo
        }
    })
    return JSON.stringify({
        list: videos,
        page: pg,
        total: res.total,
        limit: 35
    });
}

async function detail(id) {
    try {
        let tid = id.split('_')[0];
        let pid = id.split('_')[1];
        let url = `https://api.web.360kan.com/v1/detail?cat=${tid}&id=${pid}&site=`
        let res = JSON.parse(await request(url)).data;
        const video = {
            vod_name: res.title,
            vod_pic: res.cdncover,
            vod_play_from: '尤东风💠' + res.playlink_sites.join('$$$尤东风💠'),
            //vod_play_url: playUrls.join('$$$'),
            vod_content: '尤东风友情提醒🔺勿信广告，避免受骗🔺' + res.description,  
            vod_director: res.director.join(' '),
            vod_actor: res.actor.join(' '),
        };
        let playUrls = [];
        for(const name of res.playlink_sites) {
            if(res.allepidetail) {
                if(res.allepidetail[name]) {
                    let str = _.map(res.allepidetail[name], item => {
                        return item.playlink_num + '$' + item.url;
                    }).join('#');
                    playUrls.push(str);
                } else {
                    url = url + name;
                    res = JSON.parse(await request(url)).data;
                    playUrls.push(_.map(res.allepidetail[name], item => {
                        return item.playlink_num + '$' + item.url;
                    }).join('#'));
                }
            } else if(res.playlinksdetail[name]) {
                playUrls.push('播放$'+res.playlinksdetail[name].default_url);
            }
        };
        video.vod_play_url = playUrls.join('$$$');
        const list = [video];
        const result = { list };
        return JSON.stringify(result);
    } catch (e) {
    console.log('err', e);
    }
    return video;
    //return null;
}
async function search(wd, quick, pg) {
    let url = `https://api.so.360kan.com/index?force_v=1&kw=${encodeURIComponent(wd)}&v_ap=1&tab=all`;
    const res = JSON.parse(await request(url)).data;

    let videos = _.map(res.longData.rows, (n) => {
        return {
            vod_id: n.cat_id + '_' + n.en_id,
            vod_name: n.titleTxt,
            vod_pic: n.cover,
            vod_remarks: n.coverInfo.txt,
        };
    });
    return JSON.stringify({
        list: videos,
    });
}

async function play(flag, id, flags) {
    let playUrl = await xmjiexi(id);
    return JSON.stringify({
        parse: 0, 
        url: playUrl,
        header: {
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
            "Origin": 'https://jx.xmflv.com',
        }
    });
}
function genFilterObj() {
    return {
        '2': [{'key': 'cat', 'name': '类型', 'value': [{'n': '全部', 'v': ''}, {'n': '言情', 'v': '言情'}, {'n': '剧情', 'v': '剧情'}, 
             {'n': '伦理', 'v': '伦理'}, {'n': '喜剧', 'v': '喜剧'}, {'n': '悬疑', 'v': '悬疑'}, {'n': '都市', 'v': '都市'},
             {'n': '偶像', 'v': '偶像'},{'n': '古装', 'v': '古装'},{'n': '军事', 'v': '军事'}, {'n': '警匪', 'v': '警匪'}, 
             {'n': '历史', 'v': '历史'}, {'n': '励志', 'v': '励志'}, {'n': '神话', 'v': '神话'}, {'n': '谍战', 'v': '谍战'},
             {'n': '青春', 'v': '青春'},{'n': '家庭', 'v': '家庭'}, {'n': '动作', 'v': '动作'}, {'n': '情景', 'v': '情景'}, 
             {'n': '武侠', 'v': '武侠'},{'n': '科幻', 'v': '科幻'},{'n': '其他', 'v': '其他'}]}, 
            {'key': 'area', 'name': '地区', 'value': [{'n': '全部', 'v': ''}, {'n': '内地', 'v': '内地'}, {'n': '香港', 'v': '香港'}, 
            {'n': '台湾', 'v': '台湾'}, {'n': '美国', 'v': '美国'}, {'n': '韩国', 'v': '韩国'},{'n': '日本', 'v': '日本'}]}, 
            {'key': 'year', 'name': '年份', 'value': [{'n': '全部', 'v': ''}, {'n': '2024', 'v': '2024'},{'n': '2023', 'v': '2023'}, 
            {'n': '2022', 'v': '2022'}, {'n': '2021', 'v': '2021'}, {'n': '2020', 'v': '2020'}, {'n': '2019', 'v': '2019'}, 
            {'n': '2018', 'v': '2018'}, {'n': '2017', 'v': '2017'}, {'n': '2016', 'v': '2016'}, {'n': '2015', 'v': '2015'}, 
            {'n': '2014', 'v': '2014'}, {'n': '2013', 'v': '2013'}, {'n': '2012', 'v': '2012'}, {'n': '2011', 'v': '2011'}, 
            {'n': '2010', 'v': '2010'}]}
        ], 
        '1': [{'key': 'cat', 'name': '类型', 'value': [{'n': '全部', 'v': '2'}, {'n': '喜剧', 'v': '喜剧'}, {'n': '爱情', 'v': '爱情'},
              {'n': '动作', 'v': '动作'}, {'n': '恐怖', 'v': '恐怖'}, {'n': '科幻', 'v': '科幻'}, {'n': '剧情', 'v': '剧情'},
              {'n': '犯罪', 'v': '犯罪'}, {'n': '奇幻', 'v': '奇幻'}, {'n': '战争', 'v': '战争'}, {'n': '悬疑', 'v': '悬疑'},
              {'n': '动画', 'v': '动画'},{'n': '文艺', 'v': '文艺'},{'n': '纪录', 'v': '纪录'},{'n': '传记', 'v': '传记'},
              {'n': '歌舞', 'v': '歌舞'},{'n': '古装', 'v': '古装'},{'n': '历史', 'v': '历史'},{'n': '惊悚', 'v': '惊悚'},
              {'n': '伦理', 'v': '伦理'},{'n': '其他', 'v': '其他'}]}, 
             {'key': 'area', 'name': '地区', 'value': [{'n': '全部', 'v': ''}, {'n': '内地', 'v': '内地'}, {'n': '台湾', 'v': '台湾'}, 
             {'n': '香港', 'v': '香港'}, {'n': '韩国', 'v': '韩国'}, {'n': '日本', 'v': '日本'}, {'n': '美国', 'v': '美国'}, 
             {'n': '泰国', 'v': '泰国'}, {'n': '英国', 'v': '英国'}, {'n': '新加坡', 'v': '新加坡'}, {'n': '其他', 'v': '其他'}]},
             {'key': 'year', 'name': '年份', 'value': [{'n': '全部', 'v': ''},{'n': '2024', 'v': '2024'}, {'n': '2023', 'v': '2023'}, 
             {'n': '2022', 'v': '2022'}, {'n': '2021', 'v': '2021'}, {'n': '2020', 'v': '2020'}, {'n': '2019', 'v': '2019'}, 
             {'n': '2018', 'v': '2018'}, {'n': '2017', 'v': '2017'}, {'n': '2016', 'v': '2016'}, {'n': '2015', 'v': '2015'}, 
             {'n': '2014', 'v': '2014'}, {'n': '2013', 'v': '2013'}, {'n': '2012', 'v': '2012'}, {'n': '2011', 'v': '2011'}, 
             {'n': '2010', 'v': '2010'}, {'n': '2009', 'v': '2009'}, {'n': '2008', 'v': '2008'}, {'n': '2006', 'v': '2006'}, 
             {'n': '2005', 'v': '2005'}]}
        ]
    };
}
async function xmjiexi(url) {
    let t=new Date().getTime();
    let encData = sign(Crypto.MD5(t+url).toString().toLowerCase());
    let res = JSON.parse((await req('http://124.223.52.167:8088/jiexi', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            "wap": "1",
            "time": String(t),
            "url": url,
            "key": encData,
        },
        postType: ''
    })).content);
    let playUrl = aesDecode(res.url, res.aes_key, res.aes_iv);
    //console.log(playUrl);
    return playUrl;
 }
 //aes解密
 function aesDecode(str, keyStr, ivStr) {
    const key = Crypto.enc.Utf8.parse(keyStr);
    var bytes = Crypto.AES.decrypt(str, key, {
        iv: Crypto.enc.Utf8.parse(ivStr),
        mode: Crypto.mode.CBC,
        padding: Crypto.pad.Pkcs7
    });
    return bytes.toString(Crypto.enc.Utf8);
 }
 function sign(a) {
    var b = Crypto.MD5(a);
    //console.log(b.toString())
    var c = Crypto.enc.Utf8.parse(b);
    var d = Crypto.enc.Utf8.parse('3cccf88181408f19');
    var e = Crypto.AES.encrypt(a, c, {
        iv: d,
        mode: Crypto.mode.CBC,
        padding: Crypto.pad.ZeroPadding
    });
    return e.toString()
 }
 function base64Decode(text) {
    return Crypto.enc.Utf8.stringify(Crypto.enc.Base64.parse(text));
}

export function __jsEvalReturn() {
    return {
        init: init,
        home: home,
        homeVod: homeVod,
        category: category,
        detail: detail,
        play: play,
        search: search,
    };
}
