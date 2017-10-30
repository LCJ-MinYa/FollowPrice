'use strict';

var schedule = require('node-schedule');
var request = require("request");

// schedule.scheduleJob('1 * * * * *', function() {
// 	console.log('测试打印输出', new Date());
// });

//请求商品价格
var req = function(url) {
	// request(url, function(error, response, body) {
	// 	if (!error && response.statusCode == 200) {
	// 		console.log(JSON.parse(body)[0].op);
	// 	} else {
	// 		console.log('请求失败, error是' + error);
	// 	}
	// });

	var options = {
		url: 'https://mdskip.taobao.com/core/initItemDetail.htm?itemId=541799568460',
		headers: {
			'referer': 'https://detail.tmall.com/item.htm?id=541799568460'
		}
	}
	request(options, function(error, response, body) {
		var data = JSON.parse(body);
		var priceInfo = data.defaultModel.itemPriceResultDO.priceInfo;
		for (var i in priceInfo) {
			if (priceInfo[i].promotionList && priceInfo[i].promotionList.length != 0) {
				console.log(priceInfo[i].promotionList[0].price);
			} else {
				console.log(priceInfo[i].price);
			}
		}
	})
}
req();
// req('http://p.3.cn/prices/mgets?type=1&skuIds=1951426058');