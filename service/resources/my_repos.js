/**
 * Created by kakachan on 16/12/15.
 */

let _           = require('lodash');
let Joi         = require('joi');
let Commons = require('../../middlewares/commons');
let ERR             = require('../../libs/errors');
const logger  = require('../../libs/logger');

let mongo = require('../../libs/mongo');
let Repository = mongo.model('repository');

module.exports = {
    queryList
}

function *queryList() {
    
    let retJson = [
        {
            "id": "41",
            "update": "10230",
            "nickname": "Victor Hugo",
            "name": "Les Misérables",
            "avatar": "http://b.hiphotos.baidu.com/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=764a9e12d933c895b2739029b07a1895/d52a2834349b033b22db155f15ce36d3d439bde0.jpg",
            "text": "十九世纪的巴黎，贫苦的冉·阿让为了挨饿的孩子去偷面包，结果被饱食终日的法官判处19年的苦役。" +
            "出狱后，走投无路的冉·阿让被好心的米里哀主教收留过夜，却偷走了主教的银器潜逃，后被警察捉回。主教声称银器是送给他的，" +
            "使冉·阿让免于被捕。主教的言行感化了冉·阿让，他化名马德兰，从此洗心革面奋发向上，十年后成为成功的商人并当上市长。",
            "original_pic": "http://b.hiphotos.baidu.com/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=b5515b21a4c27d1eb12b33967abcc60b/21a4462309f79052f94caebb0cf3d7ca7acbd5e0.jpg",
            "created_at": "1004709434",
            "tags": "世界名著",
            "last_update": "1104709434",
            "likes": 1024
        },
        {
            "id": "42",
            "update": "34340",
            "nickname": "Ernest Miller Hemingway",
            "name": "The Sun Also Rises",
            "avatar": "http://l3rwta.bay.livefilestore.com/y1pDoWQdpCU300yRdlH1zlcN0wMtPOjvT_eDlOjpqAmQtOOJ9x0hO6YKZPe02pkjMIGSPblsyiO7YwDhwz3V0lvX6wMeIRn3Ik_?PARTNER=WRITER",
            "text": "美国青年巴恩斯在第一次世界大战中脊椎受伤，失去性能力，战后在巴黎任记者时与英国人阿施利夫人相爱，" +
            "夫人一味追求享乐，而他只能借酒浇愁。两人和一帮男女朋友去西班牙潘普洛纳参加斗牛节，追求精神刺激。" +
            "夫人拒绝了犹太青年科恩的苦苦追求，却迷上了年仅十九岁的斗牛士罗梅罗。然而，在相处了一段日子以后，" +
            "由于双方年龄实在悬殊，而阿施利夫人又不忍心毁掉纯洁青年的前程，这段恋情黯然告终。夫人最终回到了巴恩斯身边，" +
            "尽管双方都清楚，彼此永远也不能真正地结合在一起。",
            "original_pic": "http://imgsrc.baidu.com/forum/w%3D580/sign=b46f3bcb53da81cb4ee683c56266d0a4/11f65efbb2fb43167423a94522a4462309f7d368.jpg",
            "created_at": "1304708544",
            "tags": "世界名著",
            "last_update": "1334709434",
            "likes": 31234
        }
    ];

    return retJson;
}