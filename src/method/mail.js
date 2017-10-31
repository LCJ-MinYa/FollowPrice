'use strict';

/*--发送邮件--*/
var Nodemailer = require('nodemailer');
/*--基本配置--*/
var Config = require('../config/config.js');

var smtpTransport = Nodemailer.createTransport(Config.MAIL);

/**
 * [sendMail 发送邮件]
 * @param {String} subject：发送的主题
 * @param {String} html：发送的 html 内容
 */
var sendMail = function(subject, html) {
	var mailOptions = {
		from: '希希里岸 <xlzzslzy@163.com>',
		to: ['1049468118@qq.com', '546749982@qq.com'],
		subject: subject,
		html: html
	};

	smtpTransport.sendMail(mailOptions, function(error, response) {
		if (error) {
			console.log(error);
		} else {
			console.log('Message sent: ' + response);
		}
		smtpTransport.close();
	});
};

module.exports = {
	sendMail
}