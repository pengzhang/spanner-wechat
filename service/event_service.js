/**
 * Created by zp on 14-10-31.
 */

var config = require('../config/config.js')

/**
 * 处理关注
 *
 * 卡车帮
 * 图文混合返回信息
 *
 * @param callback
 */
function subscribe(callback){

    callback(config.subscribe);

}

/**
 * 处理取消关注
 * @param callback
 */
function unsubscribe(callback){

}


exports.subscribe = subscribe