'use strict';

/*--定时任务--*/
var Schedule = require('node-schedule');
/*--获取价格--*/
var Price = require("./method/price.js");
/*--发送邮件--*/
var Mail = require('./method/mail.js');

Price.getProductPrice();

// Schedule.scheduleJob('1 * * * * *', function() {
// 	console.log('测试打印输出', new Date());
// });

// Mail.sendMail('测试发邮件', '<p>Hello world!</p>');