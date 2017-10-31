'use strict';

/*--请求方法--*/
var Request = require("request");
/*--基本配置--*/
var Config = require('../config/config.js');

/**
 * [getJDProductId 获取JD商品ID]
 * @return {String} ID: 商品ID
 */
var getJDProductId = function(str) {
	var temp = str.split('.com/', 2);
	var content = temp[1].split('.html', 2);
	return content[0];
}

/**
 * [getProductPrice 获取商品价格]
 * @param {String} url：商品的url链接
 * @param {number} price：期望达到的价格，达到该价格发送邮件通知
 * @return {[object]} [JSON Object]
 */
var getProductPrice = function() {
	for (var i = 0; i < Config.PRICE.length; i++) {
		//JD商品
		if (Config.PRICE[i].url.indexOf('jd.com') > -1) {
			var productId = getJDProductId(Config.PRICE[i].url);
			Request(Config.JD + productId, function(error, response, body) {
				if (!error && response.statusCode == 200) {
					console.log(JSON.parse(body)[0].p);
				} else {
					console.log('请求JD商品' + Config.PRICE[i].name + '失败', error);
				}
			});
			continue;
		}

		//TMALL商品
		if (Config.PRICE[i].url.indexOf('tmall.com') > -1) {
			var options = {
				url: 'https://mdskip.taobao.com/core/initItemDetail.htm?itemId=541799568460',
				headers: {
					'referer': 'https://detail.tmall.com/item.htm?id=541799568460'
				}
			}
			Request(options, function(error, response, body) {
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
			continue;
		}

		console.log('暂不支持非京东，天猫商品');
	}
}

module.exports = {
	getProductPrice
}