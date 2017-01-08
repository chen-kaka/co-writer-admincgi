/**
 * Created by kakachan on 17/01/06.
 */

'use strict';

let mongoose = require('mongoose');
let Schema   = require('mongoose').Schema;
let ObjectId = mongoose.Schema.Types.ObjectId;
let Mixed    = mongoose.Schema.Types.Mixed;

//管理后台用户信息
module.exports = {
    schema: {
        username: { type: String, index:true, unique: true}, //用户登录ID
        password: {type: String}, //密码
        name: { type: String }, //用户姓名
        sex: { type: Number },  //性别 0 未知 1 男 2 女
        email: { type: String }, //email
        create_at: {type: Date, default: Date.now}, //创建时间
    },
    options: {
        collection: 'admin_user'
    }
};