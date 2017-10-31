'use strict';

/*--定时任务--*/
var Schedule = require('node-schedule');
/*--获取价格--*/
var Price = require("./method/price.js");
/*--发送邮件--*/
var Mail = require('./method/mail.js');

Schedule.scheduleJob('* 1 * * * *', function() {
	Price.getProductPrice(function(priceMsgArr) {
		var mailDom = '';
		for (var i = 0; i < priceMsgArr.length; i++) {
			mailDom += '<p>' + priceMsgArr[i] + '</p>';
		}
		Mail.sendMail('商品价格推送', mailDom);
	});
});