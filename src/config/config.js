'use strict';
/**
 * config
 */
module.exports = {
	PRICE: [{
		url: 'https://item.com/4466792.html',
		price: 2199,
		name: 'AMD 1700x'
	}, {
		url: 'https://detail.tmall.com/item.htm?spm=a220m.1000858.1000725.5.5b78c68dNhpHPJ&id=539149452153&skuId=3473275584567&user_id=1660731674&cat_id=2&is_b=1&rn=34c5c80bdf38e6bd010977fa179638c8',
		price: 1299,
		name: 'AOC 31.5寸2K显示器'
	}],
	MAIL: {
		service: '163',
		secureConnection: true,
		port: 465,
		auth: {
			user: 'xlzzslzy@163.com',
			pass: '******'
		}
	},
	JD: 'https://p.3.cn/prices/mgets?skuIds=',
	TMALL: 'https://mdskip.taobao.com/core/initItemDetail.htm?itemId=',
	TMALL_REFERER: 'https://detail.tmall.com/item.htm?id=',
}