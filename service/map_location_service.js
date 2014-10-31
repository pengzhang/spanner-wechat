/**
 * Created by zp on 14-10-31.
 */

var request = require('request');


function get_address(location,callback){
    var url = 'http://apis.map.qq.com/ws/geocoder/v1/?location='+location+'&key=C26BZ-OLJWV-KQJPS-ULFNN-7NN4Q-VEBAO&get_poi=0';
    request.get(url,function(err,resp,body){
        if(err){
            console.log(err)
        }
        callback(JSON.parse(body).result.address);
    })
}

exports.get_address = get_address