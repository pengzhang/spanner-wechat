/**
 * Created by Administrator on 2014/11/12.
 */

var pg = require('pg');
var config = require('../config/config.js');

function pg_client() {
    var conString = "postgres://" + config.pg.username + ":" + config.pg.password + "@" + config.pg.server + "/" + config.pg.database;
    var client = new pg.Client(conString);
    client.connect();
    return client;
}

exports.pg_client = pg_client;
