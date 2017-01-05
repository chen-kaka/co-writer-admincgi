/**
 * Created by kakachan on 16/12/16.
 */

module.exports = {
    formatResp,
    formatAdminResp
}

/**
 * 格式化输出
 * @param ctx
 * @param errCode
 * @param ret
 */
function formatResp(ctx, errCode, ret) {
    let errMsg = ret;

    if(errCode == 0){
        errMsg = 'succ.';
        let retMsg = {
            "err_code": 0,
            "err_msg": "success",
            "data": ret
        };
        console.log("===formatResp: " + JSON.stringify(retMsg));
        ctx.rsp = retMsg;
        return;
    }
    let retMsg = {
        "err_code": errCode,
        "err_msg": ret
    };
    console.log("===formatResp: " + JSON.stringify(retMsg));
    ctx.rsp = retMsg;
}

/**
 * 格式化输出
 * @param ctx
 * @param errCode
 * @param ret
 */
function formatAdminResp(ctx, errCode, ret) {
    let errMsg = ret;

    if(errCode == 0){
        errMsg = 'succ.';
        console.log("===formatResp: " + JSON.stringify(ret));
        ctx.rsp = ret;
        return;
    }
    let retMsg = {
        "success": false,
        "err_msg": ret
    };
    console.log("===formatResp: " + JSON.stringify(retMsg));
    ctx.rsp = retMsg;
}