var rule = {
    title: '360影视[官]',
    host: 'https://www.360kan.com',
    homeUrl: 'https://api.web.360kan.com/v1/rank?cat=2&size=9',
    detailUrl: 'https://api.web.360kan.com/v1/detail?cat=fyclass&id=fyid',
    searchUrl: 'https://api.so.360kan.com/index?force_v=1&kw=**&from=&pageno=fypage&v_ap=1&tab=all',
    url: 'https://api.web.360kan.com/v1/fyfilter&size=35&pageno=fypage&callback=',
    filterable: 1,
    filter_url: 'filter/list?catid=fyclass&rank={{fl.排序}}&cat={{fl.类型}}&year={{fl.年代}}&area={{fl.地区}}',
    filter: "H4sIAAAAAAAAA+2YS08jRxCA/4vPHGbMvrK3/IJcor1Eq4gDUqIlbLQhkVYrJINt1jYPA8vLa2MgYJtlMdhAiD1e4z8z3TP+Fxm7Xu0oGs2BQBRx81fVXV3V3VNV7XcxO/b8u3exV5NvY89jXrOjyouxsdj0xE+TJv82MfXr5HDgdCBW6eN+8nggDiA2O4bSrZLK1lCKQDov09TJNOoQeF7u2O2WaB4A6fTcqk5soQ6BbdbWVLtDNgHYZrYm6yHwvNy51z2heQA8r/JebCKwL5kd18mSLwCsmz/1ttZIB2DE5210JL4B8Lyt937WoXkA7Kdzorqb5CcA6dwv+/5ZA3UIbLO+5GfKZBOAfckf+Ye8LwCsW1lQ+QvSAbDNZE7PfySbAOJL1VtdYF+GwDbT126Hzg9h9uVACxdOlRpqyZELxxzpwi2kg/Fk/KjWL8jCbquuit1+taBb5zgCYXSEyjd0+4Y3ZAgc9GUjGEFBA/Dh3KyIDoF0/b1PokNgm9sVXTolmwCy3qa53qY5z19sig6B9+HmT9EhsG65oZwq6QAiH077yu0cGodDHOVw4lb8EcqGPw35uMjHTXlc5HFTbovcNuWWyC1Dbn/F8uCnIX8m8mem/KnIn5ryJyJ/Ysofi/yxKZd4bTNeW+K1zXhtidc247UlLtuMy5K4LDMuS+KyzLgsicuSuHTxSm9/Qs3UzPdvJyfejJy6XllXTl5OnXn01HUp4ffWvGRd7+yjtTcT069+eD0jSw2HuK3c6JCpiZnJX0ZGqfy2qnT985Qx6ufXP07PDBx7ORaL31aJ8o8TUhYQopSM0BQXUvbCykI/2VWtecoSAGxz7lol82QTIFIKXyi6ziLpADj2elUtUdlDiJL6Va6pettcvobAWbBS9s93KQsC8HqN5aBI0noAHPvuut6pUOxDMLdNnV0rp05LDmFEHdYwJNO6QBkfQQpj1b2hm4gQqZm4uyIGcFdFLKwYhRWxsOIXVqj0VkPl9tXuATc8xA9l56Hs/OfKzvitlZ1UU+UPvVqCPgtm/qJKe67jyAhh9ne17J1yKQHgbzWRlakIkrw+q2VuAAHYr7Oe38iQUwBmIk3tGYk0APZ2Y09fcbIE4HmFj+4XfikASE65dNurnFOGwL7MLakSvYQQjHzTPyRfECSHXasGrwfAulZLZ6iMIvC+NNZUqkf7AsBZtfvBn6dyiGC+ys7odYVgFBG9WZAiMgD5AC6Mlx5AlBebf/W716EYEHhes+t36WwRWLde1zkqsQj/j1dZ2AvqtBZcD9IB3EuSGeaPR7eVPwJP/ANODQBRGpdBaQ5uduXSKNXA/EXWN2Q2As/u5FW6RVMBojSFYV+WWljvF6gMIETJcHrlWBpwBNbNLXqZJukAWHfR0SnKcAjsS7ujk7Q1CDxv/0AVqQNFMNpPL8sxAMi1cKTpReCr7VyoOmU/BLaZ6gXfPdkE4AzQWw1WoQwAEOWBoRMn4icC60L+y/KKOV2gTIUQ0rjLvM8V4zEAILqyzvENBojSzntHN1JNEOQhtGg82AD+Vk+zdPTCUsP+UN2mMYKZRnzz4mtRI5Du2xeigt9Gj+ttnoz85zcikjfOktf5MPrfoCm6k3wclkv/scl/aNPvvU2XeG0z3n+3fQ9A4rXMeC2J1zLjtSReS+IdeQYg3FeBnv0LfL9z7fwYAAA=",
    filter_def: {},
    headers: {
        'User-Agent': 'MOBILE_UA'
    },
    timeout: 5000,
    class_name: '电视剧&电影&综艺&动漫',
    class_url: '2&1&3&4',
    limit: 5,
    multi: 1,
    searchable: 2,
    play_parse: true,
    lazy: 'js:input=input.split("?")[0];log(input);',
    // 疑似t4专用的
    // lazy:'js:input={parse: 1, playUrl: "", jx: 1, url: input.split("?")[0]}',
    // 手动调用解析请求json的url,此lazy不方便
    // lazy:'js:input="https://cache.json.icu/home/api?type=ys&uid=292796&key=fnoryABDEFJNPQV269&url="+input.split("?")[0];log(input);let html=JSON.parse(request(input));log(html);input=html.url||input',
    推荐: 'json:data;title;cover;comment;cat+ent_id;description',
    一级: 'json:data.movies;title;cover;pubdate;id;description',
    二级: '',
    二级: $js.toString(() => {
        let html = JSON.parse(fetch(input, fetch_params));
        let data = html.data;
        let tilte = data.title;
        let img = data.cdncover;
        let vod_type = data.moviecategory.join(",");
        let area = data.area.join(",");
        let director = data.director.join(",");
        let actor = data.actor.join(",");
        let content = data.description;
        let base_vod = {
            vod_id: input,
            vod_name: tilte,
            type_name: vod_type,
            vod_actor: actor,
            vod_director: director,
            vod_content: '尤东风友情提醒🔺勿信广告，避免受骗🔺'+content,
            vod_remarks: area,
            vod_pic: urljoin2(input, img)
        };
        let delta = 50;
        let vod_play = {};
        let sites = data.playlink_sites;
        sites.forEach(function (site) {
            let playList = "";
            let vodItems = [];
            print(data)
            if (data.allupinfo) {
                let total = parseInt(data.allupinfo[site]);
                print(total)
                for (let j = 1; j < total; j += delta) {
                    let end = Math.min(total, j + delta - 1);
                    print(end)
                    let url2 = buildUrl(input, { start: j, end: end, site: site });
                    let vod_data = JSON.parse(fetch(url2), fetch_params).data;
                    if (vod_data != null) {
                        if (vod_data.allepidetail) {
                            vod_data = vod_data.allepidetail[site];
                            vod_data.forEach(function (item, index) {
                                vodItems.push((item.playlink_num || "") + "$" + urlDeal(item.url || ""))
                            })
                        } else {
                            vod_data = vod_data.defaultepisode;
                            vod_data.forEach(function (item, index) {
                                vodItems.push((item.period || "") + (item.name || "") + "$" + urlDeal(item.url) || "")
                            })
                        }
                    }
                }
            } else {
                let item = data.playlinksdetail[site];
                vodItems.push((item.sort || "") + "$" + urlDeal(item.default_url || ""))
            } if (vodItems.length > 0) {
                playList = vodItems.join("#")
            } if (playList.length < 1) {
                return
            } vod_play[site] = playList
        });
        let tabs = Object.keys(vod_play);
        let playUrls = []; for (let id in tabs) {
            print("id:" + id); playUrls.push(vod_play[tabs[id]])
        } if (tabs.length > 0) {
            let vod_play_from = tabs.join("$$$"); let vod_play_url = playUrls.join("$$$");
            base_vod.vod_play_from = vod_play_from;
            base_vod.vod_play_url = vod_play_url
        }
        VOD = base_vod;
    }),
    搜索: 'json:data.longData.rows;titleTxt||titlealias;cover;cat_name;cat_id+en_id;description',
}
