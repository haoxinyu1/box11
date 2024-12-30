import { Crypto,_} from 'assets://js/lib/cat.js';
let siteUrl = 'http://118.25.18.217:6632';
let siteKey = '';
let siteType = 0;
let cookies = '';
let headers = {
    'User-Agent': 'okhttp/3.12.1',
    'Content-Type': 'application/json;'
};
let key = ['TFLYWVJ5EG5YB1PLZLVVMGVLBGRIDCSW', 'nj6E5K4yYYT5W4ScJ3J3rJ2zrzcJkpTk'];

async function request(reqUrl){
    let res = await req(reqUrl, {
        method: 'get',
        headers: headers,
    });
    return res.content;
}

async function init(cfg) {
    siteKey = cfg.skey;
    siteType = cfg.stype;
    initHost();
}

async function home(filter) {
    let res = await request(`${siteUrl}/api/v3/drama/getCategory?orderBy=type_id`);
    //console.log(res);
    let data = JSON.parse(res).data;
    let dy = {
        "class": "类型",
        "area": "地区",
        "lang": "语言",
        "year": "年份",
        "letter": "字母",
        "by": "排序",
        "sort": "排序",
    };
    let filters = {};
    let classes = [];
    _.forEach(data, item => {
        let jsontype_extend = JSON.parse(item["converUrl"]);
        classes.push({
            type_id: item['id'],
            type_name: item['name']
        });
        filters[item['id']] = [];
        for (let key in dy) {
            if (jsontype_extend[key]) {
                let values = jsontype_extend[key].split(',');
                filters[item['id']].push({
                    key: key,
                    name: dy[key],
                    value: _.map(values, v => {
                        return {
                            n: v,
                            v: v
                        }
                    })
                });
            }
        }
    })
    return JSON.stringify({
        class: classes,
        filters: filters,
    });
}

async function homeVod() {
    let res = await request(`${siteUrl}/api/ex/v3/security/tag/list`);
    let data = JSON.parse(res).data;
    let result = aes(aes(data, key[0]), key[1], 'decrypt', true);
    let videos = _.map(result[0]['carousels'], item => {
        return {
            vod_id: item['link'].split("id=")[1],
            vod_name: item["title"],
            vod_pic: item["cover"],
            vod_remarks: item['sort'],
        };
    })
    return JSON.stringify({
        list: videos,
    });
}

async function category(tid, pg, filter, extend) {
    let param = '';
    if (extend['area']) {
        param = param + "vodArea=" + extend['area'] + "&";
    }
    if (extend['class']) {
        param = param + "vodClass=" + extend['class'] + "&";
    }
    if (extend['lang']) {
        param = param + "vodLang=" + extend['lang'] + "&";
    }
    if (extend['year']) {
        param = param + "vodYear=" + extend['year'] + "&";
    }
    param = param + "pagesize=20&typeId1=" +tid + "&page=" + pg;
    let path = aes(aes(param, key[1], 'encrypt'), key[0], 'encrypt', true);
    let res = await request(`${siteUrl}/api/ex/v3/security/drama/list?query=${path}`);
    let data = JSON.parse(res).data;
    data = aes(aes(data, key[0]), key[1], 'decrypt', true)['list'];
    let videos = _.map(data, item => {
        return {
            vod_id: item['id'],
            vod_name: item['name'],
            vod_pic: item['coverImage']['path'],
            vod_year: item['year'],
            vod_remarks: item['remark'],
        };
    });
    return JSON.stringify({
        list: videos,
        page: pg,
        pagecount: 999,
    });
}

async function detail(id) {
    let res = await request(`${siteUrl}/api/v3/drama/getDetail?id=${id}`);
    //console.log(res);
    let data = JSON.parse(res).data;
    let vod = {
        'vod_name': data.name,
        'vod_pic':  data.Image,
        'vod_area': data.area,
        'type_name': data.clazz,
        'vod_actor': data.actor,
        'vod_director': data.director,
        'vod_content': '尤东风友情提醒🔺勿信广告，避免受骗🔺' + data.brief,
    }
    let play = []
    let names = []
    let plays = {}
    _.forEach(data['videos'], item => {
        if(names.indexOf(item['sourceCn']) == -1) {
            plays[item['source']] = [];
            names.push(item['sourceCn']);
        }
        let url = `vodPlayFrom=${item['source']}&playUrl=${item['path']}`
        if(item['path'] && (item['path'].includes('m3u8') || item['path'].includes('mp4') || item['path'].includes('flv'))) {
            url = item['path']
        }
        plays[item['source']].push(item['titleOld'] + '$' + url);
    });
    //console.log(names);
    //console.log(plays);
    _.forEach(plays, (item, key) => {
        play.push(item.join('#'));
    })
    vod.vod_play_url = play.join('$$$');
    vod.vod_play_from = '尤东风💠' + names.join('$$$尤东风💠');
    return JSON.stringify({
        list: [vod],
    });
}
//console.log(await detail('105275'));

async function play(flag, id) {
    let url = id;
    if(id.includes('vodPlayFrom')) {
        let path = aes(aes(id, key[1], 'encrypt'), key[0], 'encrypt', true);
        let res = await request(`${siteUrl}/api/ex/v3/security/videoUsableUrl?query=${path}`);
        let data = JSON.parse(res).data;
        //console.log(data);
        url = aes(aes(data, key[0]), key[1], 'decrypt', true)['playUrl']
        //console.log(url);
        if (url.includes('.jpg') || url.includes('.jpeg') || url.includes('.png')) {
            const js2Base = await js2Proxy(true, siteType, siteKey, 'm3u8/', {});
            url = js2Base + base64Encode(url);
        }
    }
    return JSON.stringify({
        parse: 0,
        url: url,
    });
}

async function search(wd, quick, pg = 1) {
    let param = `pagesize=20&page=${pg}&searchKeys=${wd}`;
    let path = aes(aes(param, key[1], 'encrypt'), key[0], 'encrypt', true);
    let res = await request(`${siteUrl}/api/ex/v3/security/drama/list?query=${path}`);
    let data = JSON.parse(res).data;
    data = aes(aes(data, key[0]), key[1], 'decrypt', true)['list'];
    let videos = _.map(data, item => {
        return {
            vod_id: item['id'],
            vod_name: item['name'],
            vod_pic: item['coverImage']['path'],
            vod_year: item['year'],
            vod_remarks: item['remark'],
        };
    });
    return JSON.stringify({
        list: videos
    });
}

async function proxy(segments, headers) {
    let what = segments[0];
    let url = base64Decode(segments[1]);
    if (what == 'm3u8') {
        let data = await request(url);
        // 处理M3U8文件内容
        let lines = data.trim().split('\n');
        lines = lines.map((string, index) => {
            if (!string.startsWith('#EXT') && !/^(http|https):\/\//.test(string)) {
                return `${durl}${string.startsWith('/') ? '' : '/'}${string}`;
            }
            return string;
        });
        // 返回修改后的内容
        return [200, "application/vnd.apple.mpegurl", lines.join('\n')];
    }
    return JSON.stringify({
        code: 500,
        content: '',
    });
}

function base64Encode(text) {
    return Crypto.enc.Base64.stringify(Crypto.enc.Utf8.parse(text));
}

function base64Decode(text) {
    return Crypto.enc.Utf8.stringify(Crypto.enc.Base64.parse(text));
}

async function initHost() {
    try {
        let res = await request('https://www.shijue.pro/token.txt');
        siteUrl = JSON.parse(res).domain;
    } catch (e) {
        console.log('initHost error', e);
    }
}
function aes(word, key, mode = 'decrypt', bool = false) {
    // 将字符串转换为字节数组，并处理key长度以匹配AES要求（通常是16, 24或32字节）
    const secretKey = Crypto.enc.Utf8.parse(key);
    
    if (mode === 'decrypt') {
        // 解码Base64编码的字符串
        const base64Word = Crypto.enc.Base64.parse(word);
        const cipherParams = Crypto.lib.CipherParams.create({ ciphertext: base64Word });
        
        // 使用AES ECB模式进行解密
        const decrypted = Crypto.AES.decrypt(cipherParams, secretKey, { mode: Crypto.mode.ECB, padding: Crypto.pad.Pkcs7 });
        let result = decrypted.toString(Crypto.enc.Utf8);
        
        if (bool) {
            result = JSON.parse(result);
        }
        return result;
    } else if (mode === 'encrypt') {
        // 对word进行AES加密前先转为CryptoJS word数组
        const source = Crypto.enc.Utf8.parse(word);
        
        // 使用AES ECB模式进行加密
        const encrypted = Crypto.AES.encrypt(source, secretKey, { mode: Crypto.mode.ECB, padding: Crypto.pad.Pkcs7 });
        let result = encrypted.ciphertext.toString(Crypto.enc.Base64);
        
        if (bool) {
            result = encodeURIComponent(result);
        }
        return result;
    }
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
        proxy: proxy,
    };
}
