//头部显示
let headeros = {
	headers1:'玻璃空间',
	hesders1_1:'产品详情'
};
let pps = document.getElementsByClassName('header_ppp')[0];
Vue.component('my-headerp1',{
template: '<p class="header_p1">{{headeros.headers1}}</p>'
});
Vue.component('my-headerp2',{
template: '<p class="header_p2">{{headeros.hesders1_1}}</p>'
});
pps.innerHTML = '<my-headerp1 id="headerp1"></my-headerp1> <my-headerp2 id="headerp2"></my-headerp2>'
let vm10_1 = new Vue({
	el: "#headerp1"
});
let vm10_2 = new Vue({
	el: "#headerp2"
});
let glasspacers = {
	glasspacersImg1:'img/banner04.jpg',
	glasspacersLi: {
		H4:'玻艺世界工坊，玻璃装饰行业的新贵',
		P1:'玻艺世界工坊，将全景百变科技融入到玻璃艺术当中，以时尚、个性、定制、艺术为诉求，让亿万消费者翘首企盼。',
		H5_1:'一个无与伦比的视觉效果！',
		H5_2:'一个前所未有的装饰理念！',
		H5_3:'一个百年不遇的赚钱机遇！',
		P2:'玻艺世界工坊，以百变效果领先市场，将动感、变幻、缩放、全景、高清、梦幻等多种效果融入玻璃艺术，晶莹剔透、流光溢彩，画面炫丽不失清雅，精致不失灵动，是高科技应用于成像领域的完美结晶。同时具有防砸、防炸、防晒、防紫外线、防冷、防噪音等真功夫，具有立体、全透、高清、高保真等特点，是现代家居装饰的理想选择，集观赏、装饰和收藏价值于一体，深受到广大消费者的青睐，广泛应用于宾馆、酒店、茶楼、KTV、桑拿浴所、酒吧、家庭等场所，发展空间异常广阔，潜在需求十分惊人！',
		P3:'玻艺世界工坊，融合国际先进的运营模式，按照婚纱影楼、装饰装潢、个性影像礼品、商务用品、旅游纪念品等领域的订单需求，精工制作超凡脱俗、独具品味的系列产品，提供专业、方便、快捷的特色服务，打造品味、品质的美好生活，引领时尚新生活！除此之外，玻艺世界工坊还引入了其他百变效果的玻璃，可以让一块普通玻璃实现千变万化的效果，想怎么变就怎么变，其成品流光溢彩、变幻瑰丽，应用在室内墙壁装饰、建筑外墙装饰玻璃、家庭屋内装修的门窗、移门、隔断、背景墙、壁饰、地面、天花、沐浴房等等，满足多种装饰需求。',
		P4:'玻艺世界工坊，拥有独家工艺，在市场占有领先优势。投资小、利润高，采用标准化、流程化制作，无需基础任何人都经营,可以在家创业、可以开设店面，还可以开办工厂，是创业的最佳途径！',
		p5:'玻艺世界工坊，推动传统玻璃市场全线升级，通过高科技加工，让一块传统玻璃身价陡增数十倍上百倍，每平方米可卖到数百元，购买者依然络绎不绝，甚至引发抢购风潮，成为2017年最独特的生意奇迹！'
	},
	glasspacersDiv: [
				{
				glasspacersName:'炫彩玻艺',
				h0:"炫彩玻艺： 炫彩的碰撞，生活的热情扑面而来！",
				p1:"既有绚丽的光线，又有精彩的色彩碰撞，亦幻亦真，独有的质感、微妙而丰富的变化，勾勒出现代时尚家居王子与公主身边一道绝妙美丽的风景线，生活的热情铺面而来。",
				img1:"img/cp_jczx_xcby01.jpg",
				img2:"img/cp_jczx_xcby02.jpg",
				img3:"img/cp_jczx_xcby03.jpg",
				img4:"img/cp_jczx_xcby04.jpg",
				img5:"img/cp_jczx_xcby05.jpg"
				},
				{
				glasspacersName:'百变玻艺',
				h0:"百变玻艺： 想变就变，想怎么变，就怎么变！",
				p1:"百变的风格，诉说着光与影的浪漫和传奇。让都市人把自然、和谐与美好带回家，在城市的混凝土围墙里，拥有一片属于自己的绚丽多彩的天空。",
				img1:"img/cp_jczx_bbby01.jpg",
				img2:"img/cp_jczx_bbby02.jpg",
				img3:"img/cp_jczx_bbby03.jpg",
				img4:"",
				img5:""
				},
				{
				glasspacersName:'质感玻艺',
				h0:"质感玻艺：远看色彩无限，近看质感超全，魔法的效果，动人无比！",
				p1:"将无限创意融入有限空间，用一抹轻盈的亮色，为居室或商务空间带来最为特别的装饰时尚，艳而不俗，巧夺天工，让华美的心情，如钻石般晶莹绽放。",
				img1:"img/cp_jczx_zgby01.jpg",
				img2:"img/cp_jczx_zgby02.jpg",
				img3:"img/cp_jczx_zgby03.jpg",
				img4:"",
				img5:""				
				},
				{
				glasspacersName:'水晶玻艺',
				h0:"水晶玻艺：如水晶般晶莹，如水晶般剔透，水晶之爱，永动我心！",
				p1:"可广泛应用于别墅、公寓、宾馆、酒店、KTV等场所，晶莹剔透、时尚多彩。细心的呵护与恰如其分的渲染，如神来之笔让平凡变神奇。",
				img1:"img/cp_jczx_sj1by01.jpg",
				img2:"img/cp_jczx_sj1by02.jpg",
				img3:"img/cp_jczx_sj1by03.jpg",
				img4:"",
				img5:""				
				},
				{
				glasspacersName:'4D玻艺',
				h0:"4D玻艺： 超级立体效果，栩栩如生，让想象成为现实！",
				p1:"可广泛应用于家装装饰画、工装装饰画、家庭隔断、会所隔断等多种场所，风格可现实、 可魔幻，可艺术，可写真……超级立体效果，栩栩如生，让想象成为现实！",
				img1:"img/cp_jczx_4dby01.jpg",
				img2:"img/cp_jczx_4dby02.jpg",
				img3:"img/cp_jczx_4dby03.jpg",
				img4:"",
				img5:""				
				},
				{
				glasspacersName:'全景玻艺',
				h0:"全景玻艺： 360°生活精彩展现，开启美好生活无限视角！",
				p1:"无接缝、无明显过度，画面整体，可应用于商场、超市、专卖店、售楼处、汽车4S店、 别墅豪宅等场所，大场景显示，大画面体现，气势恢宏，360°生活精彩体现，开始美好生活无限视角",
				img1:"img/cp_jczx_qj3by01.jpg",
				img2:"img/cp_jczx_qj3by02.jpg",
				img3:"img/cp_jczx_qj3by03.jpg",
				img4:"",
				img5:""				
				},
				{
				glasspacersName:'冰晶玻艺',
				h0:"冰晶玻艺： 冰裂般的美丽，触动心灵的美好，诱惑你的视觉！",
				p1:"无接缝、无明显过度，画面整体，可应用于商场、超市、专卖店、售楼处、汽车4S店、 别墅豪宅等场所，大场景显示，大画面体现，气势恢宏，360°生活精彩体现，开始美好生活无限视角",
				img1:"img/cp_jczx_bjby01.jpg",
				img2:"img/cp_jczx_bjby02.jpg",
				img3:"img/cp_jczx_bjby03.jpg",
				img4:"",
				img5:""				
				},
				{
				glasspacersName:'纹理玻艺',
				h0:"纹理玻艺： 每一道纹理，都是时尚的触角，都是个性的彰显！",
				p1:"具有与生俱来的贵族气息，可以将饱含激情的设计和独特环境氛围的商务或家居空间完美结合起来，赋予装饰空间更多的灵性与智慧。",
				img1:"img/cp_jczx_wlby01.jpg",
				img2:"img/cp_jczx_wlby02.jpg",
				img3:"img/cp_jczx_wlby03.jpg",
				img4:"img/cp_jczx_wlby04.jpg",
				img5:"img/cp_jczx_wlby05.jpg"				
				},
				{
				glasspacersName:'写真玻艺',
				h0:"写真玻艺： 完美展现美好系列，永久保护，历久弥新！",
				p1:"万能的写真魔法工艺，从客厅门，阳台门、卧室门、书房门到衣柜门、橱柜门，从背景墙到桌面，更强调和突出人性化、空间化的整体性设计风格，个性、精致、典雅、而又紧跟时尚潮流...",
				img1:"img/cp_jczx_xzby01.jpg",
				img2:"img/cp_jczx_xzby02.jpg",
				img3:"img/cp_jczx_xzby03.jpg",
				img4:"img/cp_jczx_xzby04.jpg",
				img5:"img/cp_jczx_xzby05.jpg"				
				},
				{
				glasspacersName:'裂纹工艺',
				h0:"裂纹工艺： 看似破裂，却拥有独有的美丽，这份美丽，为你而来！",
				p1:"可与不同装饰风格的家居、环境氛围浑然一体、相得益彰，磅礴而大气的装饰语言与宁静致远的淡定心境完美融合，溢满恬然之美、和谐之美。",
				img1:"img/cp_jczx_lwby01.jpg",
				img2:"img/cp_jczx_lwby02.jpg",
				img3:"img/cp_jczx_lwby03.jpg",
				img4:"",
				img5:""				
				}				
	]
};
let Img10_1 = Vue.extend({
template: '<img class="img12" v-bind:src="glasspacers.glasspacersImg1"/>'
});
let h410_1 = Vue.extend({
	template:'<h4>{{glasspacers.glasspacersLi.H4}}</h4>'
});
let h510_1 = Vue.extend({
	template:'<h5>{{glasspacers.glasspacersLi.H5_1}}</h5>'
});
let h510_2 = Vue.extend({
	template:'<h5>{{glasspacers.glasspacersLi.H5_2}}</h5>'
});
let h510_3 = Vue.extend({
	template:'<h5>{{glasspacers.glasspacersLi.H5_3}}</h5>'
});
let p10_1 = Vue.extend({
	template:'<p>{{glasspacers.glasspacersLi.P1}}</p>'
});
let p10_2 = Vue.extend({
	template:'<p>{{glasspacers.glasspacersLi.P2}}</p>'
});
let p10_3 = Vue.extend({
	template:'<p>{{glasspacers.glasspacersLi.P3}}</p>'
});
let p10_4 = Vue.extend({
	template:'<p>{{glasspacers.glasspacersLi.P4}}</p>'
});
let p10_5 = Vue.extend({
	template:'<p>{{glasspacers.glasspacersLi.P5}}</p>'
});
let div10_1 = Vue.extend({
	template:'<div class="particulars_li project_div"><child5></child5><child6></child6><child7></child7><child8></child8><child9></child9><child10></child10><child11></child11><child12></child12><child13></child13></div>',
	components: {
		'child5': h410_1,
    	'child6': p10_1,
    	'child7': p10_2,
    	'child8': p10_3,
    	'child9': p10_4,
    	'child10': p10_5,
    	'child11': h510_1,
    	'child12': h510_2,
    	'child13': h510_3
	}
});
let ul10_1 = Vue.extend({
	template:'<ul><li v-for="glasspacersx in glasspacers.glasspacersDiv"><div class="project_xdiv">{{glasspacersx.glasspacersName}}</div><div class="particulars_li project_xli"><h4>{{glasspacersx.h0}}</h4><p>{{glasspacersx.p1}}</p><img v-bind:src="glasspacersx.img1"/><img v-bind:src="glasspacersx.img2"/><img v-bind:src="glasspacersx.img3"/><img v-bind:src="glasspacersx.img4"/><img v-bind:src="glasspacersx.img5"/></div></li></ul>'
});
let div10_2 = Vue.extend({
	template:'<div class="project_x"><child4></child4></div>',
	components: {
		'child4': ul10_1
	}　
});
Vue.component('my-glasspacers1',{
     template: '<div class="particulars"><child1></child1><child2></child2><child3></child3></div>',
     components: {
    // <my-component> 将只在父模板可用
    'child1': Img10_1,
    'child2': div10_1,
    'child3': div10_2
   }
});
let vm10_3 = new Vue({
	el: "#glasspacer"
});