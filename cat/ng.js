import { Crypto,load, _ } from 'assets://js/lib/cat.js';
let siteUrl = 'https://www.wwgz.cn';
let siteKey = '';
let siteType = 0;
let headers = {
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
    'Referer': siteUrl + '/'
};
let PARSE_URL = 'https://vip.wwgz.cn:5200/nmplay/webcloud/relay.php';

let jxUrl = ['https://api.cnmcom.com/webcloud/nma.php?url=','https://api.cnmcom.com/webcloud/nmb.php?url=', 'https://api.cnmcom.com/webcloud/nmc.php?vid=', 'https://vip.wwgz.cn:5200/nmplay/webcloud/m3u8.php?url='];
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
    const html = (await req(PARSE_URL, {
        method: 'get',
        headers: {
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
            'Referer': siteUrl + '/',
        }
    })).content;
    //console.log('html', html);
    const url = html.match(/src = '(.*?)' \+ videoUrl;/);
    jxUrl[0] = url[1];
}

async function home(filter) {
    let classes = [
    {
        type_id: '2',
        type_name: '剧集',
    },{
        type_id: '1',
        type_name: '电影',
    },{
        type_id: '3',
        type_name: '综艺',
    },{
        type_id: '4',
        type_name: '动漫',
    },{
        type_id: '26',
        type_name: '短剧',
    }];
    let filterObj = genFilterObj();
    return JSON.stringify({
        class: classes,
        filters: filterObj
    });
}

async function homeVod() {
    let url = siteUrl;
    let videos = await getVideos(url);
    return JSON.stringify({
        list: videos,
    });
}

async function category(tid, pg, filter, ext) {
    if (!pg) pg = 1;
    if (pg <= 0) pg = 1;

    let id = ext['id'] || tid;
    let year = ext['year'] || '';
    let area = ext['area'] || '';
    let url = siteUrl + '/index.php?m=vod-list-id-'+id+'-pg-'+pg+'-order--by-time-class-0-year-'+year+'-letter--area-'+area+'-lang-.html';
    
    let videos = await getVideos(url);
    return JSON.stringify({
        list: videos,
        page: pg,
    });
}

async function detail(id) {
    try {
        const html = await request(siteUrl + id);
        let $ = load(html);
        let name = $('.page-bd h1').text();
        let vodpic = $('.page-hd a img').attr('src');
        //let pic = $('.page-hd a img').src
        let content = $('.detail-con p').text();
        let director = _.map($('.desc_item:eq(2) font a'), (n) => {
            return $(n).text();
        }).join(' ');
        let actor = _.map($('.desc_item:eq(1) font a'), (n) => {
            return $(n).text();
        }).join(' ');
        let playFrom = $('.hd > ul > li > a').text();
        if (playFrom.indexOf('云播') >= 0) {
            playFrom = '尤东风💠云播';
        } else {
            playFrom = '尤东风💠在线';
        }
        let play1Url = siteUrl + $('.greenBtn').attr('href');
        //('play1Url', play1Url);
        let html2 = await request(play1Url);
        let nameUrls = html2.split("mac_url='")[1].split("';")[0];
        
        const video = {
            vod_play_from: playFrom,
            vod_play_url: nameUrls,
            vod_name: name,
            vod_pic: vodpic,
            vod_content: '尤东风友情提醒🔺勿信广告，避免受骗🔺' + content,
            vod_director: director,
            vod_actor: actor,
        };
        const list = [video];
        const result = { list };
        return JSON.stringify(result);
    } catch (e) {
    console.log('err', e);
    }
    return null;
    //return video;
}
async function search(wd, quick, pg) {
    let url = siteUrl + '/index.php?m=vod-search';
    const html = await request(url, {wd: wd}, true);
    const $ = load(html);
    const cards = $('#data_list  li')
    let videos = _.map(cards, (n) => {
        let id = $($(n).find('a')[0]).attr('href');
        let name = $($(n).find('a > span')[0]).text();
        let pic = $($(n).find('img')[0]).attr('src');
        let remarks = $($(n).find('font')[0]).text().trim();
        return {
            vod_id: id,
            vod_name: name,
            vod_pic: pic,
            vod_remarks: remarks,
        };
    });
    return JSON.stringify({
        list: videos,
    });
}

async function play(flag, id, flags) {
    let playUrl = id;
    if (flag === '尤东风💠云播') {
        playUrl = jxUrl[3] + id;
    } else {
        playUrl = jxUrl[0] + id;
    }
    const html = (await req(playUrl, {
        method: 'get',
        headers: {
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
            'Referer': PARSE_URL + '?',
        }
    })).content;
    //const html = await request(playUrl);
    const $ = load(html);
    for(const n of $('script')) {
        if($(n).text().indexOf("url: '") >= 0) {
            let url = $(n).text().split("url: '")[1].split("'")[0];
            if(url) {
                playUrl = url;
            }
            return JSON.stringify({
                parse: 0,
                url: playUrl,
            });
        }
        if($(n).text().indexOf("var url='") >= 0) {
            let url = $(n).text().split("var url='")[1].split("';")[0];
            if(url) {
                playUrl = url;
            }
            return JSON.stringify({
                parse: 0,
                url: playUrl,
            });
        }
    }
    return JSON.stringify({
        parse: 1,
        url: playUrl,
    });
}

function genFilterObj() {
    return {
        '1': [{'key': 'id', 'name': '类型', 'value': [{'n': '全部类型', 'v': '1'}, {'n': '动作', 'v': '5'}, {'n': '喜剧', 'v': '6'}, {'n': '爱情', 'v': '7'}, {'n': '科幻', 'v': '8'}, {'n': '恐怖', 'v': '9'}, {'n': '剧情', 'v': '10'}, {'n': '战争', 'v': '11'},{'n': '惊悚', 'v': '16'},{'n': '奇幻', 'v': '17'}]}, 
            {'key': 'area', 'name': '地区', 'value': [{'n': '全部地区', 'v': ''}, {'n': '大陆', 'v': '大陆'}, {'n': '香港', 'v': '香港'}, {'n': '台湾', 'v': '台湾'}, {'n': '美国', 'v': '美国'}, {'n': '韩国', 'v': '韩国'},{'n': '日本', 'v': '日本'}]}, 
            {'key': 'year', 'name': '年份', 'value': [{'n': '全部年份', 'v': ''}, {'n': '2024', 'v': '2024'}, {'n': '2023', 'v': '2023'}, {'n': '2022', 'v': '2022'}, {'n': '2021', 'v': '2021'}, {'n': '2020', 'v': '2020'}, {'n': '2019', 'v': '2019'}, {'n': '2018', 'v': '2018'}, {'n': '2017', 'v': '2017'}, {'n': '2016', 'v': '2016'}, {'n': '2015', 'v': '2015'}, {'n': '2014', 'v': '2014'}, {'n': '2013', 'v': '2013'}, {'n': '2012', 'v': '2012'}, {'n': '2011', 'v': '2011'}, {'n': '2010', 'v': '2010'}]}
        ], 
        '2': [{'key': 'id', 'name': '类型', 'value': [{'n': '全部类型', 'v': '2'}, {'n': '国产剧', 'v': '12'}, {'n': '港台剧', 'v': '13'},{'n': '日韩剧', 'v': '14'}, {'n': '欧美剧', 'v': '15'}]}, 
            {'key': 'area', 'name': '地区', 'value': [{'n': '全部地区', 'v': ''}, {'n': '大陆', 'v': '大陆'}, {'n': '台湾', 'v': '台湾'}, {'n': '香港', 'v': '香港'}, {'n': '韩国', 'v': '韩国'}, {'n': '日本', 'v': '日本'}, {'n': '美国', 'v': '美国'}, {'n': '泰国', 'v': '泰国'}, {'n': '英国', 'v': '英国'}, {'n': '新加坡', 'v': '新加坡'}, {'n': '其他', 'v': '其他'}]},
            {'key': 'year', 'name': '年份', 'value': [{'n': '全部年份', 'v': ''}, {'n': '2024', 'v': '2024'},{'n': '2023', 'v': '2023'}, {'n': '2022', 'v': '2022'}, {'n': '2021', 'v': '2021'}, {'n': '2020', 'v': '2020'}, {'n': '2019', 'v': '2019'}, {'n': '2018', 'v': '2018'}, {'n': '2017', 'v': '2017'}, {'n': '2016', 'v': '2016'}, {'n': '2015', 'v': '2015'}, {'n': '2014', 'v': '2014'}, {'n': '2013', 'v': '2013'}, {'n': '2012', 'v': '2012'}, {'n': '2011', 'v': '2011'}, {'n': '2010', 'v': '2010'}, {'n': '2009', 'v': '2009'}, {'n': '2008', 'v': '2008'}, {'n': '2006', 'v': '2006'}, {'n': '2005', 'v': '2005'}]}
        ]
    };
}

async function getRecommend(url) {
    const html = await request(url);
    const $ = load(html);
    const cards = $('ul.list_06 li')
    let videos = _.map(cards, (n) => {
        let id = $($(n).find('a')[0]).attr('href');
        let name = $($(n).find('a')[0]).attr('title');
        let pic = $($(n).find('img')[0]).attr('src');
        let remarks = $($(n).find('font')[0]).text().trim().replaceAll('0.0', '');
        return {
            vod_id: id,
            vod_name: name,
            vod_pic: pic,
            vod_remarks: remarks,
        };
    });
    return videos;
}

async function getVideos(url) {
    const html = await request(url);
    const $ = load(html);
    const cards = $('ul.resize_list li')
    let videos = _.map(cards, (n) => {
        let id = $($(n).find('a')[0]).attr('href');
        let name = $($(n).find('a')[0]).attr('title');
        let pic = $($(n).find('img')[0]).attr('src');
        let remarks = $(n).find('span.sBottom').text().trim();
        return {
            vod_id: id,
            vod_name: name,
            vod_pic: pic,
            vod_remarks: remarks,
        };
    });
    return videos;
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
