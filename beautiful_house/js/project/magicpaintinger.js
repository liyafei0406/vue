////头部显示
//var headeros = {
//	headers1:'魔画科技',
//	hesders1_1:'产品详情'
//};
//var pps = document.getElementsByClassName('header_ppp')[0];
//Vue.component('my-headerp1',{
//template: '<p class="header_p1">{{headeros.headers1}}</p>'
//});
//Vue.component('my-headerp2',{
//template: '<p class="header_p2">{{headeros.hesders1_1}}</p>'
//});
//pps.innerHTML = '<my-headerp1 id="headerp1"></my-headerp1> <my-headerp2 id="headerp2"></my-headerp2>'
//var vm9_1 = new Vue({
//	el: "#headerp1"
//});
//var vm9_2 = new Vue({
//	el: "#headerp2"
//});
var magicpaintingers = {
	magicpaintingersImg1:'img/banner04.jpg',
	magicpaintingersDao:'魔画科技',
	magicpaintingersDaoy:'GFSH',
	magicpaintingersLi: {
		H4:'魔画世界工场，“金”爆2017年财富冲击波',
		P1:'魔画世界工场吹响“高科技装饰画”集结号，其研发的全新装饰画，具有传统装饰画不可比拟的优势，个性、时尚、新奇、炫变、高雅，一经面世就受到市场的热烈追捧，而且工艺简单，所有产品只需一台电脑及专用设备即可，有无电脑和制作经验均可快速学会，其他任何产品都无法比拟！',
		H5_1:'一个划时代的影像科技',
		H5_2:'一个引爆全球的装饰传奇',
		H5_3:'一个钱途无量的创富机遇！',
		P2:'独具一格的“养生画坊、4D画坊、创艺画坊”，更以其与众不同的神奇科技，美轮美奂的视觉效果，成为当今装饰画市场炙手可热的明星产品。神奇养生画技术、4D技术是目前国内领先的创新科技，可用来制作各种婚纱照片、个性影像、商务礼品、旅游用品，可装饰、可送礼、可收藏，其独有立体、炫变感、恒久保存、新奇感等特色让人过目不忘，无论是居家，还是商务都能强烈吸引人们的眼球！成为装饰画界的一大奇观！',
		P3:'魔画世界工场新型装饰画，每个项目都能独立办厂，只要掌握其中一种技术就能征服家居、商务两大核心市场，多个项目可拆分、可组合、可整合，成功达到“一厂多专、一机多能”的小本创业奇迹，以独具魅力的奇画世界笑傲市场，为广大顾客提供方便、快捷的特色服务，为广大消费者提供时尚个性品味新生活！',
		img1:'img/014.jpg',
		img2:'img/1_220734_1.jpg',
		img3:'img/1_144426_1.jpg'
	},
	magicpaintingersDiv: [
				{
				magicpaintingersName:'功夫神画坊',
				h0:"功夫神画坊——三重功力，是画，是音响，还是健康器",
				p1:"功夫神画坊，专业经营各类养生画系列，个性、新奇、时尚，可以满足现代人养生需求、送礼需求、装饰需求、音响需求、商务需求等各种需求，既有各种制作好的产品系列，也可以按照客户要求进行个性定制，是颠覆传统装饰画的高科技产品。",
				img1:"img/cp_jczx_gfsh01.jpg",
				img2:"img/cp_jczx_gfsh02.jpg",
				img3:"img/cp_jczx_gfsh03.jpg",
				img4:"img/cp_jczx_gfsh04.jpg",
				img5:"img/cp_jczx_gfsh05.jpg"
				},
				{
				magicpaintingersName:'4D魔画坊',
				h0:"4D魔画坊——裸眼3D再升级，引爆流行神画",
				p1:"4D魔画坊，其视觉立体、动感、炫变、缩放、全景、高清、梦幻般的效果，人物呼之欲出，景物生动逼真，美不胜收的奇特风景、以假乱真的3D特效和声控、音频等结合，让人犹如身临其境，那种强烈的视觉冲击力，给人一种全新的视觉享受！个性、时尚、新奇，让你的相册变得有声有色、炫彩斑斓，魔力十足。",
				img1:"img/cp_jczx_4dmh01.jpg",
				img2:"img/cp_jczx_4dmh02.jpg",
				img3:"img/cp_jczx_4dmh03.jpg",
				img4:"img/cp_jczx_4dmh04.jpg",
				img5:"img/cp_jczx_4dmh05.jpg"
				},
				{
				magicpaintingersName:'创意魔画坊',
				h0:"创意魔画坊——普通礼品华丽转身创意礼品",
				p1:"创意魔画坊，采用独有的异型印画机，是超新颖、超感性、超火热的时尚产物，以其新颖的外观、创意的设计,以及可以为每一位消费者量身打造独一无二个性礼品的个性化定制服务。",
				img1:"img/cp_jczx_cymh01.jpg",
				img2:"img/cp_jczx_cymh02.jpg",
				img3:"img/cp_jczx_cymh03.jpg",
				img4:"img/cp_jczx_cymh04.jpg",
				img5:"img/cp_jczx_cymh05.jpg"				
				}
	]
};
var Img9_1 = Vue.extend({
template: '<img class="img12" v-bind:src="magicpaintingers.magicpaintingersImg1"/>'
});
var h49_1 = Vue.extend({
	template:'<h4>{{magicpaintingers.magicpaintingersLi.H4}}</h4>'
});
var h59_1 = Vue.extend({
	template:'<h5>{{magicpaintingers.magicpaintingersLi.H5_1}}</h5>'
});
var h59_2 = Vue.extend({
	template:'<h5>{{magicpaintingers.magicpaintingersLi.H5_2}}</h5>'
});
var h59_3 = Vue.extend({
	template:'<h5>{{magicpaintingers.magicpaintingersLi.H5_3}}</h5>'
});
var p9_1 = Vue.extend({
	template:'<p>{{magicpaintingers.magicpaintingersLi.P1}}</p>'
});
var p9_2 = Vue.extend({
	template:'<p>{{magicpaintingers.magicpaintingersLi.P2}}</p>'
});
var p9_3 = Vue.extend({
	template:'<p>{{magicpaintingers.magicpaintingersLi.P3}}</p>'
});
var Img9_2 = Vue.extend({
	template:'<img v-bind:src="magicpaintingers.magicpaintingersLi.img1" />'
});
var Img9_3 = Vue.extend({
	template:'<img v-bind:src="magicpaintingers.magicpaintingersLi.img2" />'
});
var Img9_4 = Vue.extend({
	template:'<img v-bind:src="magicpaintingers.magicpaintingersLi.img3" />'
});
var div9_1 = Vue.extend({
	template:'<div class="particulars_li project_div"><child5></child5><child6></child6><child7></child7><child8></child8><child9></child9><child10></child10><child11></child11><child12></child12><child13></child13><child14></child14></div>',
	components: {
		'child5': h49_1,
    	'child6': Img9_2,
    	'child7': p9_1,
    	'child8': p9_2,
    	'child9': Img9_3,
    	'child10': p9_3,
    	'child11': Img9_4,
    	'child12': h59_1,
    	'child13': h59_2,
    	'child14': h59_3
	}
});
var ul9_1 = Vue.extend({
	template:'<ul><li v-for="magicpaintingersx in magicpaintingers.magicpaintingersDiv"><div class="project_xdiv">{{magicpaintingersx.magicpaintingersName}}</div><div class="particulars_li project_xli"><h4>{{magicpaintingersx.h0}}</h4><p>{{magicpaintingersx.p1}}</p><img v-bind:src="magicpaintingersx.img1"/><img v-bind:src="magicpaintingersx.img2"/><img v-bind:src="magicpaintingersx.img3"/><img v-bind:src="magicpaintingersx.img4"/><img v-bind:src="magicpaintingersx.img5"/></div></li></ul>'
});
var div9_2 = Vue.extend({
	template:'<div class="project_x"><child4></child4></div>',
	components: {
		'child4': ul9_1
	}　
});
var div9_3 = Vue.extend({
	template:'<div class="dao_title"><div class="div_dao">{{magicpaintingers.magicpaintingersDao}}<span>{{magicpaintingers.magicpaintingersDaoy}}</span></div></div>'
});
Vue.component('my-magicpaintingers1',{
     template: '<div class="particulars"><child1></child1><child15></child15><child2></child2><child3></child3></div>',
     components: {
    // <my-component> 将只在父模板可用
    'child1': Img9_1,
    'child15': div9_3,
    'child2': div9_2,
    'child3': div9_1
   }
});
var vm9_3 = new Vue({
	el: "#magicpaintinger"
});