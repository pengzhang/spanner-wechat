/**
 * Created by zp on 14-10-30.
 */

var wx_secrect = require('../config/wx_secrect');
var API = require('wechat').API;
var api = new API(wx_secrect.app_id, wx_secrect.app_secret);

function  aaa () {
    api.uploadImage("/Users/zp/Downloads/08-030154_320.jpg", function (err,data) {
        console.log(data)
    })
}

aaa()