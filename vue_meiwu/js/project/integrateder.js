//头部显示
var headeros = {
	headers1:'集成墙饰',
	hesders1_1:'产品详情'
};
var pps = document.getElementsByClassName('header_ppp')[0];
Vue.component('my-headerp1',{
template: '<p class="header_p1">{{headeros.headers1}}</p>'
});
Vue.component('my-headerp2',{
template: '<p class="header_p2">{{headeros.hesders1_1}}</p>'
});
pps.innerHTML = '<my-headerp1 id="headerp1"></my-headerp1> <my-headerp2 id="headerp2"></my-headerp2>'
var vm8_1 = new Vue({
	el: "#headerp1"
});
var vm8_2 = new Vue({
	el: "#headerp2"
});
var integrateders = {
	integratedersImg1:'img/banner04.jpg',
	integratedersLi: {
		H4:'新奇特快智能养生快装',
		P1:'新奇特快智能养生快装，是美屋定制的核心产品，快装墙板对于大部分人来说还是很陌生，传统的墙面装饰还停留在刷漆和贴壁纸两种选择，这两种方式的工程量都特别大，而且一旦出现破损都必须整体翻新。而新奇特快智能养生快装墙板将墙面装饰标准化，通过拼接的方式安装，基本上施工时间只需1天即可完成。花色风格选择多，可以根据个人喜好随意搭配，翻新修补更换都极其方便。这种设计简可以轻松地更换搭配，不需因为工程繁琐而放弃更新。',
		H5_1:'新奇特快智能养生装饰，打造快装行业5.0解决方案',
		H5_2:'多种功能，健康养生、装修养生两不误！',
		H5_3:'创新软件，个性定制，完美效果抢先看！',
		H5_4:'方便快捷，应用全面，工装、商装、家装无所不能！',
		H5_5:'快速施工，效果出众，一步到位，完工入住，工期缩短一半以上！',
		P2:'快装5.0系统填补了装饰建材行业最大“痛点”——墙面和室内吊顶手工化落后装修模式。快装5.0系统具备七个特点，也是最大优势。5.0是一个系统，我们提供墙面、吊顶、背景墙、门、窗、地板等装饰整套解决方案。开发的平板、造型板、艺术线条、门、窗等都是镶嵌式的模块系统，无需繁杂工序，让装修回归极简。',
		P3:'采用最新养生科技与装修装饰相结合，服务现代家庭养生需求，打造最新潮的养生装饰画体系，让爱家在靓丽的同时，更健康起来！',
		P4:'依托美屋定制系统，3D全景模拟装饰效果，填补了传统经营模式的的想象空白、看不到效果的问题。墙艺定制，一步到位，决绝效果误差不闹心。',
		p5:'美屋定制整体解决方案，可全面装修家庭、别墅、商场、写字楼、宾馆、酒店、KTV、电影院、健身房、度假村、休闲会所、银行、学校、医院…卓越品质无人可比！',
		p6:'美屋定制系统，一站式定制服务，省时省事省开支，装修，“省”人一筹！',
		img1:'img/1_141913_3.jpg'
	},
	integratedersDiv: [
				{
				integratedersName:'音乐魔画墙',
				h0:"隐形音乐魔画墙：会唱歌会隐形的墙",
				p1:"梦幻隐形系列，是当今世界上一种新型高科技装饰材料，用隐形幻彩涂料，运用各种不同材质，在特置的灯光下，呈现出艳丽的色彩。",
				img1:"img/cp_jczx_yyyx01.jpg",
				img2:"img/cp_jczx_yyyx02.jpg",
				img3:"img/cp_jczx_yyyx03.jpg",
				img4:"img/cp_jczx_yyyx04.jpg",
				img5:"img/cp_jczx_yyyx05.jpg"
				},
				{
				integratedersName:'有氧石材板',
				h0:"有氧石材板：会呼吸的石材",
				p1:"采用人造大理石、仿造大理石等材料，结合独特技术，拥有同原生态大理石一样的纹理、光滑度、紧密度、柔滑度……实现传统板材的装修效果。",
				img1:"img/cp_jczx_yysc01.jpg",
				img2:"img/cp_jczx_yysc02.jpg",
				img3:"img/cp_jczx_yysc03.jpg",
				img4:"img/cp_jczx_yysc04.jpg",
				img5:"img/cp_jczx_yysc05.jpg"
				},
				{
				integratedersName:'魔法墙艺',
				h0:"魔法墙艺：有七十二般变化的神奇墙衣",
				p1:"以历经亿万年形成的稀土矿物质为原材料，可以根据装修要求，作出各种造型和图案，在保证健康的同时，满足现代人对个性装修的需求。",
				img1:"img/cp_jczx_mfqy01.jpg",
				img2:"img/cp_jczx_mfqy02.jpg",
				img3:"img/cp_jczx_mfqy03.jpg",
				img4:"img/cp_jczx_mfqy04.jpg",
				img5:"img/cp_jczx_mfqy05.jpg"				
				},
				{
				integratedersName:'养生集成板',
				h0:"养生集成板：大自然的墙板",
				p1:"全新的竹木纤维化概念产品为中国国民带来全新的高端环保、健康、安全、低碳、0甲醛、0辐射、3D立体解决方案。",
				img1:"img/cp_jczx_ysjc01.jpg",
				img2:"img/cp_jczx_ysjc02.jpg",
				img3:"img/cp_jczx_ysjc03.jpg",
				img4:"img/cp_jczx_ysjc04.jpg",
				img5:"img/cp_jczx_ysjc05.jpg"				
				},
				{
				integratedersName:'翡翠玉石墙',
				h0:"翡翠玉石墙： 近乎真翠的玉石材料",
				p1:"采用现代科技，近乎100%翡翠效果，拥有同天然翡翠近乎完全相同的质感和触感及光学折射效果，装饰爱家，如同进入了神奇的水晶宫殿，加之翡翠拥有聚财旺家的寓意，更符合现代人的需求。",
				img1:"img/cp_jczx_fcys01.jpg",
				img2:"img/cp_jczx_fcys02.jpg",
				img3:"img/cp_jczx_fcys03.jpg",
				img4:"img/cp_jczx_fcys04.jpg",
				img5:"img/cp_jczx_fcys05.jpg"				
				},
				{
				integratedersName:'仿玉背景墙',
				h0:"仿玉背景墙：仿真玉材料科技",
				p1:"仿玉背景墙具有净化空气、节能环保，其色泽柔和、纹理均匀、细致、有光泽，更兼具耐酸、耐碱、防紫外线、防老化、抗水防潮等功能。墙饰色彩丰富、图案细腻、逼真度高，产品经久耐用，不会产生后期龟裂现象。仿玉背景墙能够让装饰空间具有强烈的拉伸感，提升家居空间的观赏性和时尚感，让生活更环保、健康、有品位。",
				img1:"img/cp_jczx_fybj01.jpg",
				img2:"img/cp_jczx_fybj02.jpg",
				img3:"img/cp_jczx_fybj03.jpg",
				img4:"img/cp_jczx_fybj04.jpg",
				img5:"img/cp_jczx_fybj05.jpg"				
				},
				{
				integratedersName:'冰晶玻艺坊',
				h0:"冰晶玻艺坊： 艺术玻艺新高度",
				p1:"依托独有技术，利用现代工艺，采用超前影像技术，高分辨率显示效果，近乎完美的细节复制，栩栩如生，开创中国艺术玻璃的新高度，完美的艺术体现，超全的艺术风格，让中国大众尽享定制级理想生活。",
				img1:"img/cp_jczx_bjby01.jpg",
				img2:"img/cp_jczx_bjby02.jpg",
				img3:"img/cp_jczx_bjby03.jpg",
				img4:"img/cp_jczx_bjby04.jpg",
				img5:"img/cp_jczx_bjby05.jpg"				
				},
				{
				integratedersName:'神奇冰晶画',
				h0:"神奇冰晶画：完美冰晶玻璃画艺",
				p1:"神奇冰晶画以百变效果领先市场，将动感、变幻、缩放、全景、高清、梦幻等多种效果融入玻璃艺术，晶莹剔透、流光溢彩，画面炫丽不失清雅，精致不失灵动，是高科技应用于成像领域的完美结晶。",
				img1:"img/cp_jczx_sqbj01.jpg",
				img2:"img/cp_jczx_sqbj02.jpg",
				img3:"img/cp_jczx_sqbj03.jpg",
				img4:"img/cp_jczx_sqbj04.jpg",
				img5:"img/cp_jczx_sqbj05.jpg"				
				},
				{
				integratedersName:'炫彩魔幻墙',
				h0:"炫彩魔幻墙： 炫彩光波随时改变",
				p1:"独有的魔幻技术，将一幅幅科技感强、形象逼真、生动活泼的图案，让普通的墙面，变得丰满、形象、生动、栩栩如生，不开灯时和普通的白墙无异，开灯时呈现出魔幻般的效果，身临其境，如太空漫步。",
				img1:"img/101.png",
				img2:"img/102.png",
				img3:"img/103.png",
				img4:"img/104.png",
				img5:"img/105.png"				
				},
				{
				integratedersName:'9D定制空间',
				h0:"9D定制空间：如在墙里一般",
				p1:"独有的成像技术，将普通的墙面，打造成科技感强、形象逼真、生动活泼的墙面，打造成立体式、动感的、变化的、逼真的虚似与现实影像，让科技普及化，艺术生活化，品位高端化。",
				img1:"img/cp_jczx_9ddz01.jpg",
				img2:"img/cp_jczx_9ddz02.jpg",
				img3:"img/cp_jczx_9ddz03.jpg",
				img4:"img/cp_jczx_9ddz04.jpg",
				img5:"img/cp_jczx_9ddz05.jpg"				
				}				
	]
};
var Img8_1 = Vue.extend({
template: '<img class="img12" v-bind:src="integrateders.integratedersImg1"/>'
});
var h48_1 = Vue.extend({
	template:'<h4>{{integrateders.integratedersLi.H4}}</h4>'
});
var h58_1 = Vue.extend({
	template:'<h5>{{integrateders.integratedersLi.H5_1}}</h5>'
});
var h58_2 = Vue.extend({
	template:'<h5>{{integrateders.integratedersLi.H5_2}}</h5>'
});
var h58_3 = Vue.extend({
	template:'<h5>{{integrateders.integratedersLi.H5_3}}</h5>'
});
var h58_4 = Vue.extend({
	template:'<h5>{{integrateders.integratedersLi.H5_4}}</h5>'
});
var h58_5 = Vue.extend({
	template:'<h5>{{integrateders.integratedersLi.H5_5}}</h5>'
});
var p8_1 = Vue.extend({
	template:'<p>{{integrateders.integratedersLi.P1}}</p>'
});
var p8_2 = Vue.extend({
	template:'<p>{{integrateders.integratedersLi.P2}}</p>'
});
var p8_3 = Vue.extend({
	template:'<p>{{integrateders.integratedersLi.P3}}</p>'
});
var p8_4 = Vue.extend({
	template:'<p>{{integrateders.integratedersLi.P4}}</p>'
});
var p8_5 = Vue.extend({
	template:'<p>{{integrateders.integratedersLi.P5}}</p>'
});
var p8_6 = Vue.extend({
	template:'<p>{{integrateders.integratedersLi.P6}}</p>'
});
var Img8_2 = Vue.extend({
	template:'<img v-bind:src="integrateders.integratedersLi.img1" />'
});
var div8_1 = Vue.extend({
	template:'<div class="particulars_li project_div"><child5></child5><child6></child6><child7></child7><child8></child8><child9></child9><child10></child10><child11></child11><child12></child12><child13></child13><child14></child14><child15></child15><child16></child16><child17></child17></div>',
	components: {
		'child5': h48_1,
    	'child6': p8_1,
    	'child7': h58_1,
    	'child8': p8_2,
    	'child9': Img8_2,
    	'child10': h58_2,
    	'child11': p8_3,
    	'child12': h58_3,
    	'child13': p8_4,
    	'child14': h58_4,
    	'child15': p8_5,
    	'child16': h58_5,
    	'child17': p8_6
	}
});
var ul8_1 = Vue.extend({
	template:'<ul><li v-for="integratedersx in integrateders.integratedersDiv"><div class="project_xdiv">{{integratedersx.integratedersName}}</div><div class="particulars_li project_xli"><h4>{{integratedersx.h0}}</h4><p>{{integratedersx.p1}}</p><img v-bind:src="integratedersx.img1"/><img v-bind:src="integratedersx.img2"/><img v-bind:src="integratedersx.img3"/><img v-bind:src="integratedersx.img4"/><img v-bind:src="integratedersx.img5"/></div></li></ul>'
});
var div8_2 = Vue.extend({
	template:'<div class="project_x"><child4></child4></div>',
	components: {
		'child4': ul8_1
	}　
});
Vue.component('my-integrateders1',{
     template: '<div class="particulars"><child1></child1><child2></child2><child3></child3></div>',
     components: {
    // <my-component> 将只在父模板可用
    'child1': Img8_1,
    'child2': div8_1,
    'child3': div8_2
   }
});
var vm8_3 = new Vue({
	el: "#integrateder"
});