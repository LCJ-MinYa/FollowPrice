'use strict';

var schedule = require('node-schedule');
var request = require("request");
var cheerio = require("cheerio");

// schedule.scheduleJob('1 * * * * *', function() {
// 	console.log('测试打印输出', new Date());
// });

//请求商品价格
var req = function(url, id) {
	request(url, function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var $ = cheerio.load(body);
			console.log($('.J-p-' + id).text());
		} else {
			console.log('请求失败, error是' + error);
		}
	});
}

req('https://item.jd.com/16004933996.html', '16004933996');