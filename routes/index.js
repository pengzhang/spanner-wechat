var express = require('express');
var router = express.Router();
var fs = require('fs');

var menu = require('../service/menu_service.js')
var map_location = require('../service/map_location_service.js')
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

var pg = require('pg');
var config = require('../config/config.js');
var qn = require('qn');


/* GET home page. */
router.get('/', function (req, res) {
    res.render('index');
});

router.post('/lng_register', multipartMiddleware, function (req, res) {
    console.log(req.body)
    console.log(req.files.pic0.path)

    var qn_client = qn.create({
        accessKey: 'ayT8wRpjb09c68rDU-dcIuo0zrzlFOePIoM4X249',
        secretKey: 'Wza81AUMwGxJT1ASZGuHPOYLpUgxa7x7eSCuy9gU',
        bucket: 'spanner',
        domain: 'http://spanner.qiniudn.com'
    });
    qn_client.upload(fs.createReadStream(req.files.pic0.path), function (err, result) {
        console.log(result);
        var conString = "postgres://" + config.pg.username + ":" + config.pg.password + "@" + config.pg.server + "/" + config.pg.database;
        var pg_client = new pg.Client(conString);
        pg_client.connect();
        var sql = 'insert into lng_register (lng_name,district,address,coords,mobile,pic,linker,linker_mobile,referee,referee_mobile,swiping,facilities,lng_type,investors) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)'
        pg_client.query(sql, [req.body.lng_name, req.body.district, req.body.address, req.body.coords, req.body.mobile, result.url, req.body.linker, req.body.linker_mobile, req.body.referee, req.body.referee_moible, req.body.swiping, req.body.facilities, req.body.lng_type, req.body.investors]);
    });

    res.render('ok');
});

router.get('/init', function (req, res) {

    fs.exists('./init_lock', function (exists) {
        if (exists) {
            res.send('卡车帮微信系统已初始化,如果需要重新初始化,请联系系统管理员,删除init.lock文件')
        } else {
            menu.createMenu(function (data) {
                console.log(data);
            })
            fs.writeFile('./init_lock', 'init ok', {encoding: 'utf-8', flag: 'w'}, function (err) {
                if (err) {
                    console.log(err);
                    res.send('生成初始化锁定文件出错,请重新执行初始化.');
                } else {
                    res.send('卡车帮微信系统已初始化完毕');
                }
            });
        }

    })
});


/**
 * 获取逆坐标信息
 * 请求方式
 * /map-location?location=231.23232,232.434
 */
router.get('/map-location', function (req, res) {

    map_location.get_address(req.query.location, function (addr, province, city, district) {
        res.send(addr + ',' + province + ',' + city + ',' + district);
    })

});

module.exports = router;
