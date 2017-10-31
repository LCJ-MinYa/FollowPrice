'use strict';

/*--请求方法--*/
var Request = require("request");
/*--基本配置--*/
var Config = require('../config/config.js');

/**
 * [parseURI 解析URL，可获得相关参数]
 * @description [url中拼接的参数在params中]
 * @param  {[string]} url [需要解析的url，node中必选]
 * @return {[object]} [对象返回url中的相关参数信息]
 */
var parseURI = function(url) {
	var query = {};
	var urlArr = url.split('?');
	if (urlArr.length > 1) {
		var queryArr = urlArr[1].split('&');
		for (var i = 0; i < queryArr.length; i++) {
			var someKeyValue = queryArr[i].split('=');
			query[someKeyValue[0]] = someKeyValue[1];
		}
	}
	return query;
}

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
			var parseJson = parseURI(Config.PRICE[i].url);
			var productId = parseJson.id;
			var skuId = parseJson.skuId;
			console.log(skuId);
			var options = {
				url: Config.TMALL + productId,
				headers: {
					'referer': Config.TMALL_REFERER + productId
				}
			}
			Request(options, function(error, response, body) {
				var data = JSON.parse(body);
				var priceInfo = data.defaultModel.itemPriceResultDO.priceInfo;
				console.log(priceInfo);
				for (var j in priceInfo) {
					console.log(j);
					if (j == skuId) {
						if (priceInfo[j].promotionList && priceInfo[j].promotionList.length != 0) {
							console.log(priceInfo[j].promotionList[0].price, '--------');
						} else {
							console.log(priceInfo[j].price, '++++++++++');
						}
					} else {
						console.log('skuid不相等');
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