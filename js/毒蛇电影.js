var rule = {
    //定义获取图片地址域名变量
    img_host: '',

    author: '小可乐/2509/第二版',
    title: '毒舌影视',
    类型: '影视',
    host: 'https://www.dushe9.app',
    hostJs: '',
    headers: {'User-Agent': 'MOBILE_UA'},
    编码: 'utf-8',
    timeout: 5000,

    homeUrl: '/',
    url: '/show/fyclass-fyfilter-fypage.html',
    filter_url: '{{fl.class}}-{{fl.area}}-{{fl.lang}}-{{fl.year}}-{{fl.by}}',
    searchUrl: '/search?k=**&page=fypage&t=',
    detailUrl: '',

    limit: 9,
    double: false,
    class_name: '电影&剧集&综艺&动漫&短剧',
    class_url: '1&2&4&3&6',

    预处理: $js.toString(() => {
        const sha1ToUint8ArrayLatin1 = str => {
            if (typeof str !== 'string') {
                return null;
            }
            try {
                let latin1Str = CryptoJS.SHA1(str).toString(CryptoJS.enc.Latin1);
                let u8Array = Uint8Array.from(latin1Str, char => char.charCodeAt(0));
                return u8Array;
            } catch (e) {
                return null;
            }
        }
        let hashPre = request(HOST)?.match(/a0_0x2a54\s*=\s*\['([^']+)'/)?.[1]?.trim() ?? '';
        if (hashPre != '' && hashPre != getItem('hashpre')) {
            setItem('tgcookie', '');
            setItem('hashpre', '');
            let hashIdx = parseInt('0x' + hashPre[0], 16);
            if (Number.isInteger(hashIdx) && hashIdx >= 0 && hashIdx <= 18) {
                let cookieFound = false;
                let maxLoop = 100000;
                for (let i = 0; i < maxLoop && !cookieFound; i++) {
                    let hashInput = `${hashPre}${i}`;
                    let sha1Arr = sha1ToUint8ArrayLatin1(hashInput);
                    if (sha1Arr && sha1Arr[hashIdx] === 0xb0 && sha1Arr[hashIdx + 1] === 0x0b) {
                        let defendCookie = `cdndefend_js_cookie=${hashInput}`;
                        setItem('hashpre', hashPre);
                        setItem('tgcookie', defendCookie);
                        cookieFound = true;
                    }
                }
            }
        }
        if (getItem('tgcookie')) {
            rule_fetch_params.headers['cookie'] = getItem('tgcookie');
        }
        let khtml = fetch(HOST, {
            headers: rule_fetch_params.headers
        });
        let tValue = khtml.match(/<input[^>]*name="t"[^>]*value="([^"]*)"/i);
        if (tValue && tValue[1]) {
            rule.searchUrl = rule.searchUrl + encodeURIComponent(tValue[1]);
        }
        let scripts = pdfa(khtml, 'script');
        let img_script = scripts.find((it) => pdfh(it, 'script&&src').includes('rdul.js'));
        if (img_script) {
            let img_url = img_script.match(/src="(.*?)"/)[1];
            let img_html = fetch(img_url);
            rule.img_host = img_html.match(/'(.*?)'/)[1];
            rule.图片替换 = HOST + '=>' + rule.img_host;
        }
    }),

    推荐: '*',
    一级: '.module-item;.v-item-title:eq(1)&&Text;img:eq(-1)&&data-original;span:eq(-1)&&Text;a&&href',
    搜索: $js.toString(() => {
        let t = pdfh(fetch(input), 'input:eq(0)&&value');
        input = input.split('?')[0];
        let surl = `${input}?k=${KEY}&page=${MY_PAGE}&t=${t}`;
        let khtml = fetch(surl);
        VODS = [];
        let klists = pdfa(khtml, '.search-result-item');
        klists.forEach((it) => {
            VODS.push({
                vod_name: pdfh(it, 'img&&alt'),
                vod_pic: pd(it, 'img&&data-original', rule.img_host),
                vod_remarks: pdfh(it, '.search-result-item-header&&Text'),
                vod_id: pdfh(it, 'a&&href')
            });
        });
    }),
    二级: {
        title: '.detail-title&&strong:eq(1)&&Text;.detail-tags&&Text',
        img: '.detail-pic&&img&&data-original',
        desc: '.detail-info-row-main:eq(-2)&&Text;.detail-tags-item:eq(0)&&Text;.detail-tags-item:eq(1)&&Text;.detail-info-row-main:eq(1)&&Text;.detail-info-row-main:eq(0)&&Text',
        content: '.detail-desc&&Text',
        tabs: '.source-item',
        tab_text: 'span:eq(-1)&&Text',
        lists: '.episode-list:eq(#id)&&a',
        list_text: 'body&&Text',
        list_url: 'a&&href',
    },

    tab_remove: ['4K(高峰不卡)'],
    tab_rename:{'超清1':'尤东风💠超清','FF线路':'尤东风💠非凡','腾讯加速':'尤东风💠腾讯','蓝光加速':'尤东风💠蓝光'},
    play_parse: true,
    lazy: $js.toString(() => {
        let kurl = input;
        let khtml = request(kurl);
        if (/dujia/.test(khtml)) {
            kurl = khtml.split("PPPP = '")[1].split("';")[0];
            const key = CryptoJS.enc.Utf8.parse('Isu7fOAvI6!&IKpAbVdhf&^F');
            const dataObj = {
                ciphertext: CryptoJS.enc.Base64.parse(kurl)
            };
            const decrypted = CryptoJS.AES.decrypt(dataObj, key, {
                mode: CryptoJS.mode.ECB,
                padding: CryptoJS.pad.Pkcs7
            });
            kurl = decrypted.toString(CryptoJS.enc.Utf8);
        } else {
            kurl = khtml.split('src: "')[1].split('",')[0];
        }
        input = {
            jx: 0,
            parse: 0,
            url: kurl,
            header: rule.headers
        };
    }),
    filter:{
        "1":[
            {"key":"类型","name":"类型","value":[
             {"n":"全部","v":""},{"n":"Netflix","v":"NETFLIX"},{"n":"剧情","v":"剧情"},{"n":"喜剧","v":"喜剧"},{"n":"动作","v":"动作"},
             {"n":"爱情","v":"爱情"},{"n":"恐怖","v":"恐怖"},{"n":"惊悚","v":"惊悚"},{"n":"犯罪","v":"犯罪"},{"n":"科幻","v":"科幻"},
             {"n":"悬疑","v":"悬疑"},{"n":"奇幻","v":"奇幻"},{"n":"冒险","v":"冒险"},{"n":"战争","v":"战争"},{"n":"历史","v":"历史"},
             {"n":"古装","v":"古装"},{"n":"家庭","v":"家庭"},{"n":"传记","v":"传记"},{"n":"武侠","v":"武侠"},{"n":"歌舞","v":"歌舞"},
             {"n":"短片","v":"短片"},{"n":"动画","v":"动画"},{"n":"儿童","v":"儿童"},{"n":"职场","v":"职场"}]},
            {"key":"地区","name":"地区","value":[
             {"n":"全部","v":""},{"n":"大陆","v":"中国大陆"},{"n":"香港","v":"中国香港"},{"n":"台湾","v":"中国台湾"},{"n":"美国","v":"美国"},
             {"n":"日本","v":"日本"},{"n":"韩国","v":"韩国"},{"n":"英国","v":"英国"},{"n":"法国","v":"法国"},{"n":"德国","v":"德国"},
             {"n":"印度","v":"印度"},{"n":"泰国","v":"泰国"},{"n":"丹麦","v":"丹麦"},{"n":"瑞典","v":"瑞典"},{"n":"巴西","v":"巴西"},
             {"n":"加拿大","v":"加拿大"},{"n":"俄罗斯","v":"俄罗斯"},{"n":"意大利","v":"意大利"},{"n":"比利时","v":"比利时"},
             {"n":"爱尔兰","v":"爱尔兰"},{"n":"西班牙","v":"西班牙"},{"n":"澳大利亚","v":"澳大利亚"},{"n":"其他","v":"其他"}]},
            {"key":"语言","name":"语言","value":[
             {"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"粤语","v":"粤语"},{"n":"英语","v":"英语"},{"n":"日语","v":"日语"},
             {"n":"韩语","v":"韩语"},{"n":"法语","v":"法语"},{"n":"其他","v":"其他"}]},
           {"key":"年份","name":"年份","value":[
            {"n":"全部","v":""},{"n":"2025","v":"2025"},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},
            {"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"10年代","v":"2010_2019"},{"n":"00年代","v":"2000_2009"},
            {"n":"90年代","v":"1990_1999"},{"n":"80年代","v":"1980_1989"},{"n":"更早","v":"0_1979"}]},
           {"key":"排序","name":"排序","value":[{"n":"综合","v":""},{"n":"最新","v":"2"},{"n":"最热","v":"3"},{"n":"评分","v":"4"}]}],
        "2":[
           {"key":"类型","name":"类型","value":[
            {"n":"全部","v":""},{"n":"Netflix","v":"Netflix"},{"n":"剧情","v":"剧情"},{"n":"爱情","v":"爱情"},{"n":"喜剧","v":"喜剧"},
            {"n":"犯罪","v":"犯罪"},{"n":"悬疑","v":"悬疑"},{"n":"古装","v":"古装"},{"n":"动作","v":"动作"},{"n":"家庭","v":"家庭"},
            {"n":"惊悚","v":"惊悚"},{"n":"奇幻","v":"奇幻"},{"n":"美剧","v":"美剧"},{"n":"科幻","v":"科幻"},{"n":"历史","v":"历史"},
            {"n":"战争","v":"战争"},{"n":"韩剧","v":"韩剧"},{"n":"武侠","v":"武侠"},{"n":"言情","v":"言情"},{"n":"恐怖","v":"恐怖"},
            {"n":"冒险","v":"冒险"},{"n":"都市","v":"都市"},{"n":"职场","v":"职场"}]},
           {"key":"地区","name":"地区","value":[
            {"n":"地区","v":""},{"n":"大陆","v":"中国大陆"},{"n":"香港","v":"中国香港"},{"n":"韩国","v":"韩国"},{"n":"美国","v":"美国"},
            {"n":"日本","v":"日本"},{"n":"法国","v":"法国"},{"n":"英国","v":"英国"},{"n":"德国","v":"德国"},{"n":"台湾","v":"中国台湾"},
            {"n":"泰国","v":"泰国"},{"n":"印度","v":"印度"},{"n":"其他","v":"其他"}]},
           {"key":"语言","name":"语言","value":[
            {"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"粤语","v":"粤语"},{"n":"英语","v":"英语"},{"n":"日语","v":"日语"},
            {"n":"韩语","v":"韩语"},{"n":"法语","v":"法语"},{"n":"其他","v":"其他"}]},
           {"key":"年份","name":"年份","value":[
            {"n":"全部","v":""},{"n":"2025","v":"2025"},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},
            {"n":"2020","v":"2020"},{"n":"10年代","v":"2010_2019"},{"n":"00年代","v":"2000_2009"},{"n":"90年代","v":"1990_1999"},
            {"n":"80年代","v":"1980_1989"},{"n":"更早","v":"0_1979"}]},
           {"key":"排序","name":"排序","value":[
            {"n":"综合","v":""},{"n":"最新","v":"2"},{"n":"最热","v":"3"},{"n":"评分","v":"4"}]}],
        "3":[
           {"key":"类型","name":"类型","value":[
            {"n":"全部","v":""},{"n":"Netflix","v":"Netflix"},{"n":"动态漫画","v":"动态漫画"},{"n":"剧情","v":"剧情"},{"n":"动画","v":"动画"},
            {"n":"喜剧","v":"喜剧"},{"n":"冒险","v":"冒险"},{"n":"动作","v":"动作"},{"n":"奇幻","v":"奇幻"},{"n":"科幻","v":"科幻"},
            {"n":"儿童","v":"儿童"},{"n":"搞笑","v":"搞笑"},{"n":"爱情","v":"爱情"},{"n":"家庭","v":"家庭"},{"n":"短片","v":"短片"},
            {"n":"热血","v":"热血"},{"n":"益智","v":"益智"},{"n":"悬疑","v":"悬疑"},{"n":"经典","v":"经典"},{"n":"校园","v":"校园"},
            {"n":"Anime","v":"Anime"},{"n":"运动","v":"运动"},{"n":"亲子","v":"亲子"},{"n":"青春","v":"青春"},{"n":"恋爱","v":"恋爱"},
            {"n":"武侠","v":"武侠"},{"n":"惊悚","v":"惊悚"}]},
           {"key":"地区","name":"地区","value":[
            {"n":"全部","v":""},{"n":"日本","v":"日本"},{"n":"大陆","v":"中国大陆"},{"n":"台湾","v":"中国台湾"},{"n":"美国","v":"美国"},
            {"n":"香港","v":"中国香港"},{"n":"韩国","v":"韩国"},{"n":"英国","v":"英国"},{"n":"法国","v":"法国"},{"n":"德国","v":"德国"},
            {"n":"印度","v":"印度"},{"n":"泰国","v":"泰国"},{"n":"丹麦","v":"丹麦"},{"n":"瑞典","v":"瑞典"},{"n":"巴西","v":"巴西"},
            {"n":"加拿大","v":"加拿大"},{"n":"俄罗斯","v":"俄罗斯"},{"n":"意大利","v":"意大利"},{"n":"比利时","v":"比利时"},
            {"n":"爱尔兰","v":"爱尔兰"},{"n":"西班牙","v":"西班牙"},{"n":"澳大利亚","v":"澳大利亚"},{"n":"其他","v":"其他"}]},
           {"key":"语言","name":"语言","value":[
            {"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"粤语","v":"粤语"},{"n":"英语","v":"英语"},{"n":"日语","v":"日语"},
            {"n":"韩语","v":"韩语"},{"n":"法语","v":"法语"},{"n":"其他","v":"其他"}]},
           {"key":"年份","name":"年份","value":[
            {"n":"全部","v":""},{"n":"2025","v":"2025"},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},
            {"n":"2020","v":"2020"},{"n":"10年代","v":"2010_2019"},{"n":"00年代","v":"2000_2009"},{"n":"90年代","v":"1990_1999"},
            {"n":"80年代","v":"1980_1989"},{"n":"更早","v":"0_1979"}]},
           {"key":"排序","name":"排序","value":[
            {"n":"综合","v":""},{"n":"最新","v":"2"},{"n":"最热","v":"3"},{"n":"评分","v":"4"}]}],
        "4":[{
           "key":"类型","name":"类型","value":[
            {"n":"全部","v":""},{"n":"纪录","v":"纪录"},{"n":"真人秀","v":"真人秀"},{"n":"记录","v":"记录"},{"n":"脱口秀","v":"脱口秀"},
            {"n":"剧情","v":"剧情"},{"n":"历史","v":"历史"},{"n":"喜剧","v":"喜剧"},{"n":"传记","v":"传记"},{"n":"相声","v":"相声"},
            {"n":"节目","v":"节目"},{"n":"歌舞","v":"歌舞"},{"n":"冒险","v":"冒险"},{"n":"运动","v":"运动"},{"n":"Season","v":"Season"},
            {"n":"犯罪","v":"犯罪"},{"n":"短片","v":"短片"},{"n":"搞笑","v":"搞笑"},{"n":"晚会","v":"晚会"}]},
           {"key":"地区","name":"地区","value":[
            {"n":"全部","v":""},{"n":"大陆","v":"中国大陆"},{"n":"香港","v":"中国香港"},{"n":"台湾","v":"中国台湾"},{"n":"美国","v":"美国"},
            {"n":"日本","v":"日本"},{"n":"韩国","v":"韩国"},{"n":"其他","v":"其他"}]},
           {"key":"语言","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"粤语","v":"粤语"},{"n":"英语","v":"英语"},
            {"n":"日语","v":"日语"},{"n":"韩语","v":"韩语"},{"n":"法语","v":"法语"},{"n":"其他","v":"其他"}]},
           {"key":"年份","name":"年份","value":[{"n":"全部","v":""},{"n":"2025","v":"2025"},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},
            {"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"10年代","v":"2010_2019"},{"n":"00年代","v":"2000_2009"},
            {"n":"90年代","v":"1990_1999"},{"n":"80年代","v":"1980_1989"},{"n":"更早","v":"0_1979"}]},
           {"key":"排序","name":"排序","value":[{"n":"综合","v":""},{"n":"最新","v":"2"},{"n":"最热","v":"3"},{"n":"评分","v":"4"}]}],
        "6":[
           {"key":"类型","name":"类型","value":[
            {"n":"类型","v":""},{"n":"逆袭","v":"逆袭"},{"n":"甜宠","v":"甜宠"},{"n":"虐恋","v":"虐恋"},{"n":"穿越","v":"穿越"},
            {"n":"重生","v":"重生"},{"n":"剧情","v":"剧情"},{"n":"科幻","v":"科幻"},{"n":"武侠","v":"武侠"},{"n":"爱情","v":"爱情"},
            {"n":"动作","v":"动作"},{"n":"战争","v":"战争"},{"n":"冒险","v":"冒险"},{"n":"其它","v":"其它"}]},
           {"key":"排序","name":"排序","value":[{"n":"综合","v":""},{"n":"最新","v":"2"},{"n":"最热","v":"3"}]}]},
}
