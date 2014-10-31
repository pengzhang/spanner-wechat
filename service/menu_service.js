/**
 * Created by zp on 14-10-31.
 */
var wx_secrect = require('../config/wx_secrect');
var config = require('../config/config.js')
var API = require('wechat').API;
var api = new API(wx_secrect.app_id, wx_secrect.app_secret);



function createMenu(callback){
    api.createMenu(config.menu, function(err,result){
        if(err){
            callback('menu init failure:' + err)
        }else{
            if(result.errmsg === 'ok'){
                callback('menu init ok')
            }else{
                callback('menu init failure' + result)
            }
        }
    });
}


exports.createMenu = createMenu;