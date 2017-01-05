/**
 * Created by kakachan on 16/12/29.
 */


let _           = require('lodash');
let Joi         = require('joi');
const Promise = require('bluebird');
let JoiValidatePromise = Promise.promisify(Joi.validate);
let Commons = require('../../../middlewares/commons');
let ERR             = require('../../../libs/errors');
const logger  = require('../../../libs/logger');

let Repository = require('../../../service/resources/repository');

module.exports = router => {

    /**
     * http://localhost:9900/admin/repository/repository/list
     */
    router.get('/list', function *() {
        let req = this.request.query;
        let queryStr = req.queryStr || '';
        let u_id = req.u_id;
        let currentPage = req.currentPage || 0;
        let pageSize = req.pageSize || 10;

        let retJson = yield Repository.queryRepos(u_id, queryStr, currentPage, pageSize);
        Commons.formatAdminResp(this, 0, retJson);
    });
}