'use strict';
/**
 * config
 */
module.exports = {
	PRICE: [{
		url: 'https://item.jd.com/4466792.html',
		price: 2199,
		name: 'AMD 1700x'
	}, {
		url: 'https://detail.tmall.com/item.htm?spm=a220m.1000858.1000725.5.5b78c68dNhpHPJ&id=539149452153&skuId=3473275584567&user_id=1660731674&cat_id=2&is_b=1&rn=34c5c80bdf38e6bd010977fa179638c8',
		price: 1299,
		name: 'AOC 31.5寸2K显示器'
	}, {
		url: 'https://item.jd.com/3844997.html',
		price: 999,
		name: '十铨(Team) 冥神系列 DDR4 3000 16G(8GBx2) 台式机内存 红色'
	}, {
		url: 'https://item.jd.com/3934375.html',
		price: 3599,
		name: '容声(Ronshen) 456升 十字对开门多门冰箱'
	}, {
		url: 'https://item.jd.com/4609652.html',
		price: 2399,
		name: '小米（MI）小米电视4A 标准版 55英寸'
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