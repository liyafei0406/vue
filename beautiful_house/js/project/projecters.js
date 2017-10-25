////头部显示
//var headeros = {
//	headers1:'产品系列',
//	hesders1_1:'产品介绍'
//};
//var pps = document.getElementsByClassName('header_ppp')[0];
//Vue.component('my-headerp1',{
//template: '<p class="header_p1">{{headeros.headers1}}</p>'
//});
//Vue.component('my-headerp2',{
//template: '<p class="header_p2">{{headeros.hesders1_1}}</p>'
//});
//pps.innerHTML = '<my-headerp1 id="headerp1"></my-headerp1> <my-headerp2 id="headerp2"></my-headerp2>'
//var vm2_1 = new Vue({
//	el: "#headerp1"
//});
//var vm2_2 = new Vue({
//	el: "#headerp2"
//});
var projecterss = {
	projectersImg1:'img/banner04.jpg',
	projectersDao:'产品系列',
	projectersDaoy:'PRODUCT',
	projectersLi: {
		projectersH4:'创艺养生墙饰+魔画科技+玻艺空间',
		projectersH5_1:'设计个性化 —— 智能软件，一键生成理想的效果图',
		projectersH5_2:'材料环保化 —— 集成材料，一步装成理想空间',
		projectersH5_3:'功能智能化 —— 功能丰富，智能控制，打造智能、养生空间',
		projectersH5_4:'施工拼装化 —— 快速施工，效果出众，一步到位，完工入住，工期缩短一半以上',
		projectersP1:'中国 • 宋庄创意工场点线面结合，全产业链运营，用全新商业模式托起创业平台！总部从一个项目到一个系列，从一个系列到一个产业。全部采用点线面结合的方式，实施“艺术+科技+创意”的全新产业链运营模式，运用020互联网定制服务平台，数十个配套工厂、百余项国家专利，打造出365 天永不落幕的装饰行业四新展，全球未来空间科技馆，不断地推出系列化创意、装饰、建材、影像、广告、礼品类的全新创意装饰产业项目。走艺术生活化，生活艺术化路线，将艺术、创意、科技进行完美的结合，融入到生活的方方面面，打造智能、环保、养生、创意、定制空间。',
		projectersP2:'美屋定制整体解决方案，开发出了智能化装修定制系统，自动生成装修效果图，3D全景模拟呈现，快速，便捷，直观：1.通过对装饰空间拍照，建立“换肤”模板；2.输入房间的尺寸数据，选择喜欢的风格，就可直接在生成装修效果图；3.换墙体验，一步到位，省去大量往返测试的时间成本、金钱成本。4.传统效果图3天完工，收费至少5000起，美屋定制整体解决方案半小时完成，收费不过100元！',
		projectersP3:'美屋定制整体解决方案，专业化的集成装饰材料，将环保材料纤维板与高分子膜采用先进生产工艺真空状态下一次性热压贴合技术成型，无胶无粘合，真正实现无毒无害、零甲醛、零VOC、除醛抗菌、吸湿控温、防火阻燃、耐磨耐擦的特点，是真正的健康、0污染装修材料。产品不含甲醛、苯、VOC等有害气体，符合国家环保标准和欧洲标准，装修后无毒无味无污染，可马上入住，是真正的绿色环保产品。拥有众多系列，百余款花色产品，中式传统、现代简约、欧式典雅，风格多样。还可以根据客户需求进行私人订制，满足个性化需求。采用高科技混压纤维材料，保温隔热效果显著，防潮、防霉、防腐，防虫蛀，阻燃达B1级，耐侯性，抗老化，不变形，性能优良。材料表面经过特殊抗污处理，不易吸附油烟及灰尘，清洁时只需直接用湿布擦洗，省时更省力。产品耐候性强，20年不退色不老化。',
		projectersP4:'抵抗雾霾、净化空气、防火防水、隔音保温、释放负氧离子、分解二手烟、夏季智能驱蚊,自主开发智能空间APP系统，在手机上就可以控制家里、办公室的灯光、窗户、空调、音响……等设备，一键操作，抢先迈入智能家居新时代。',
		projectersP5:'美屋定制整体解决方案，一站式定制服务，省时省事省开支，装修，“省”人一筹！将十道工序整合成一道工序，魔法拼装，无需一点一点刷墙、也无需一块一块贴墙纸，半个月的活，一天搞定！节约时间成本！美屋定制整体解决方案直接跳开找建材、找工人的繁琐程序，一站式服务到家，只需选好风格样式，直接安排工人上门安装，10件事变成一件事，没那么多麻烦！省去了到建材市场购买材料的步骤，没有中间的价差，而且无需像传统装修那样空屋通风散气几个月，还要过渡期安置费用，尤其是工装，耽误一天就是成千上万的开支，美屋定制整体解决方案，省了材料费，省了工钱，省了时间，节约一大笔开支！',
		projectersLimg1:'img/1_135808_1.jpg',
		projectersLimg2:'img/1_135841_1.jpg',
		projectersLimg3:'img/1_141913_3.jpg'
	},
	projectersDiv: [
			{projectersite:'integrated_wall.html',projectersName:'创艺养生墙'},
			{projectersite:'magic_painting.html',projectersName:'魔画科技'},
			{projectersite:'glass_space.html',projectersName:'玻璃空间'}
	]
};
var Img2_1 = Vue.extend({
template: '<img class="img12" v-bind:src="projecterss.projectersImg1"/>'
});
var h42_1 = Vue.extend({
	template:'<h4>{{projecterss.projectersLi.projectersH4}}</h4>'
});
var h52_1 = Vue.extend({
	template:'<h5>{{projecterss.projectersLi.projectersH5_1}}</h5>'
});
var h52_2 = Vue.extend({
	template:'<h5>{{projecterss.projectersLi.projectersH5_2}}</h5>'
});
var h52_3 = Vue.extend({
	template:'<h5>{{projecterss.projectersLi.projectersH5_3}}</h5>'
});
var h52_4 = Vue.extend({
	template:'<h5>{{projecterss.projectersLi.projectersH5_4}}</h5>'
});
var p2_1 = Vue.extend({
	template:'<p>{{projecterss.projectersLi.projectersP1}}</p>'
});
var p2_2 = Vue.extend({
	template:'<p>{{projecterss.projectersLi.projectersP2}}</p>'
});
var p2_3 = Vue.extend({
	template:'<p>{{projecterss.projectersLi.projectersP3}}</p>'
});
var p2_4 = Vue.extend({
	template:'<p>{{projecterss.projectersLi.projectersP4}}</p>'
});
var p2_5 = Vue.extend({
	template:'<p>{{projecterss.projectersLi.projectersP5}}</p>'
});
var Img2_2 = Vue.extend({
	template:'<img v-bind:src="projecterss.projectersLi.projectersLimg1" />'
});
var Img2_3 = Vue.extend({
	template:'<img v-bind:src="projecterss.projectersLi.projectersLimg2" />'
});
var Img2_4 = Vue.extend({
	template:'<img v-bind:src="projecterss.projectersLi.projectersLimg3" />'
});
var div2_1 = Vue.extend({
	template:'<div class="particulars_li"><child5></child5><child6></child6><child7></child7><child8></child8><child9></child9><child10></child10><child11></child11><child12></child12><child13></child13><child14></child14><child15></child15><child16></child16><child17></child17></div>',
	components: {
		'child5': h42_1,
		'child6': p2_1,
    	'child7': h52_1,
    	'child8': p2_2,
    	'child9': Img2_2,
    	'child10': h52_2,
    	'child11': p2_3,
    	'child12': Img2_3,
    	'child13': h52_3,
    	'child14': p2_4,
    	'child15': Img2_4,
    	'child16': h52_4,
    	'child17': p2_5
	}
});
var ul2_1 = Vue.extend({
	template:'<ul><li v-for="projectersx in projecterss.projectersDiv"><a v-bind:href="projectersx.projectersite"><div class="project_xdiv">{{projectersx.projectersName}}</div></li></a></ul>'
});
var div2_2 = Vue.extend({
	template:'<div class="project_x"><child4></child4></div>',
	components: {
		'child4': ul2_1
	}　
});
var div2_3 = Vue.extend({
	template:'<div class="dao_title"><div class="div_dao">{{projecterss.projectersDao}}<span>{{projecterss.projectersDaoy}}</span></div></div>'
});
Vue.component('my-projecters1',{
     template: '<div class="particulars"><child1></child1><child18></child18><child2></child2><child3></child3></div>',
     components: {
    // <my-component> 将只在父模板可用
    'child1': Img2_1,
    'child18': div2_3,
    'child2': div2_2,
    'child3': div2_1
   }
});
var vm2_3 = new Vue({
	el: "#projecters"
});