/**
 * Created by zp on 14-10-31.
 */

var request = require('request');
var config = require('../config/config.js')

/**
 * 调用soso map 获取逆坐标信息
 * @type {request|exports}
 */
function get_address(location,callback){
    var url = 'http://apis.map.qq.com/ws/geocoder/v1/?location='+location+'&key='+config.soso_map.key+'&get_poi=0';
    request.get(url,function(err,resp,body){
        if(err){
            console.log(err)
        }
        console.log(JSON.parse(body).result);
        callback(
            JSON.parse(body).result.address,
            JSON.parse(body).result.address_component.province,
            JSON.parse(body).result.address_component.city,
            JSON.parse(body).result.address_component.district
        );
    })
}
exports.get_address = get_address