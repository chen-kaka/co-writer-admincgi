/**
 * Created by kakachan on 17/1/6.
 */


let _           = require('lodash');
let Joi         = require('joi');
const Promise = require('bluebird');
let JoiValidatePromise = Promise.promisify(Joi.validate);
let Commons = require('../../../middlewares/commons');
let ERR             = require('../../../libs/errors');
const logger  = require('../../../libs/logger');

let AdminUser = require('../../../service/admin/admin_user');

module.exports = router => {

    /**
     * http://localhost:9900/admin/user/login/login
     */
    router.post('/login', function *() {
        let req = this.request.body;

        logger.info("req body is:" + JSON.stringify(req));

        let username = req.username;
        let password = req.password;

        let login = yield AdminUser.login(username, password);
        if(login){
            const now = new Date();
            now.setDate(now.getDate() + 1);
            this.cookies.set('user_session', now.getTime());
            this.cookies.set('user_name', username);

            Commons.formatAdminResp(this, 0, {
                success: true,
                message: "登录成功"
            });
        }else{
            Commons.formatAdminResp(this, -1, {
                success: false,
                message: "登录失败"
            });
        }
    });

    /**
     * http://localhost:9900/admin/user/login/logout
     */
    router.post('/logout', function *() {
        this.cookies.set('user_session', '');
        this.cookies.set('user_name','');
        Commons.formatAdminResp(this, 0, {
            success: true,
            message: "退出成功"
        });
    });

    /**
     * http://localhost:9900/admin/user/login/userInfo
     */
    router.get('/userInfo', function *() {
        const response = {
            success: this.cookies.get('user_session')&&this.cookies.get('user_session') > new Date().getTime() ? true :false,
            username: this.cookies.get('user_name')||'',
            message: ""
        };
        Commons.formatAdminResp(this, 0, response);
    });
}