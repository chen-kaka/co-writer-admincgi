/**
 * Created by kakachan on 16/12/15.
 */

let mongo = require('../../libs/mongo');
let AdminUser = mongo.model('admin_user');

module.exports = {
    login,
    createUser
}

function *login(username, password) {

    let userInfo = yield AdminUser.find({
        username
    }).exec();

    if(userInfo.length > 0 && userInfo[0].password == password){
        return true;
    }

    return false;
}

function *createUser(userInfo) {
    let retInfo = yield User.create(userInfo);
    return retInfo;
}