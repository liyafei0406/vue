//头部显示
var headeros = {
	headers1:'市场分析',
	hesders1_1:'市场内容'
};
var pps = document.getElementsByClassName('header_ppp')[0];
Vue.component('my-headerp1',{
template: '<p class="header_p1">{{headeros.headers1}}</p>'
});
Vue.component('my-headerp2',{
template: '<p class="header_p2">{{headeros.hesders1_1}}</p>'
});
pps.innerHTML = '<my-headerp1 id="headerp1"></my-headerp1> <my-headerp2 id="headerp2"></my-headerp2>'
var vm4_1 = new Vue({
	el: "#headerp1"
});
var vm4_2 = new Vue({
	el: "#headerp2"
});
var analysisers = {
	analysisersImg1:'img/banner05.jpg',
	analysisersLi: {
		H4:'创业就业首选装修   一个永不落幕的黄金市场',
		P1:'不管经济形势怎么变，不管生活条件怎么提高改善，装修，永远是离不了的行业。据统计，在自主创业群体中，20%开餐饮，70%搞建筑装修，而在就业群体中，装修更是热门行业。传统外出打工，不是跑销售，就是进工厂，真正赚钱的，还是装饰行业。普通白领一月工资5000元，而装修工人月薪轻松过万。未来，不管是就业，还是创业，只有做个有思想的装修工，开个有特色的装饰店，才能真正的实现财富人生。',
		H5_1:'个性定制哪家强？ 美屋定制，当仁不让！',
		P2:'美屋定制一站式装饰装修解决方案，不是在卖设备，也不是在卖产品，更不是在卖软件，而是卖创意生活，以一种生活方式，用定制时尚来引领潮流。美屋定制，以创新打破常规，与众不同的采用新型艺术创作方式，个性创意，别出心裁，无限变化，精彩纷呈，让人心迷不限。',
		P3:'美屋定制品牌，在业内率先推出了主题定制、高端定制、专属定制模式，客户可以根据个人爱好，选择自己钟爱的艺术图案或创意构思，定制在墙板、天花、隔断、屏风、玄关、吊顶等任何空间上，这种独特的创意定制服务，迎合了这个时代的时尚主流，满足现代人消费追求的独特性、私属性。',
		H5_2:'新房装修，旧房翻新，工装改装，商装定制，市场空间大，赚钱机会多！',
		P4:'做生意的都明白这样一个道理：抢先一步，才能赚的盆满钵满。对于装修“定制时代“的到来，犹豫就等于失去，市场有多大，数字来说话！装饰市场，年产值上万亿，一个小县城，一年也有几千万的产值；',
		P5:'中国当前每年新增建筑面积超20亿平方米，居全球首位，按墙面面积是建筑面积3.5倍计算，就是70亿平方米，且这个数字还正以年均20%以上的增速不断扩大。',
		P6:'按当前国人每平方米装修投入330元计算，则国人每年用于装修的总投入就已经高达2.35万亿元，且年均增速继续高企在30%以上，五年后这个市场规模将高达近5万亿元。',
		img1:'img/1_143407_1.jpg',
		img2:'img/1_143421_1.jpg'
	},
	analysisersDiv: [
				{
				analysisersName:'市场前景',
				h0:"做有刚性需求的生意，做有追求的生意",
				h1:"",
				p1:"传统家装行业浑身痛点，它已经不是一个被称之为心塞的行业，而是让你累觉不爱到怒奔的行业，每个角度的用户体验都没有舒适感可言。正是由于家装的产业链条过长、牵涉环节过多、建筑装饰无论设计、施工、选材，还是监理、验收，其复杂性和专业化，导致家装行业难以被标准化，市场呼吁一种可以快速完成的整体家装模式出现。",
				h2:"旧房翻新市场：美屋定制让旧房变新房！",
				p2:"旧房重新做装饰的眼下非常多，尤其是住了五到十年的房子，需要重新装饰一下，需要对原有的墙面地面、家居等进行重新装饰，据调查统计，每年需要进行二次装饰的房子日益增加，前几年的装修风格已经不能适应现在人们的审美需求，重新装饰的日益增多，使得重新装饰的市场日益加大！",
				img1:"img/1_143407_1.jpg",
				h3:"老房美容市场：美屋定制让老房变花样！",
				p3:"三分装修，七分美容，中国已经进入“家居美容时代”，“轻装修，重装饰”的理念已经深入人心，更成为现代人布置生活空间的重要原则，一个美好、温馨、舒适、有品味的家，需要各种各样有装饰性、实用性、观赏性的创意饰品来装扮，办公室、店堂、商场更是如此，有专业调查机构调查显示：75%的以上的人会加大自己居室装饰方面的投入；70%的人觉得居室装饰首先要体现自己的风格、品味；65%的人表示家居装饰最能点缀家居情趣和展示品味。",
				h4:"新房全案装饰：美屋定制让新房更温馨！",
				p4:"婚庆产业正逐渐成长为一个新的朝阳产业，婚庆消费市场的婚纱礼服、婚纱摄影、婚礼服务、婚宴、珠宝首饰等行业的发展日趋成熟，并与新婚消费的其它行业如家电、家具、床上用品、室内装修、房地产、汽车、银行保险等40多个关联行业，逐步形成令人瞩目的婚庆产业链，充满了巨大潜在商机。目前每对新人花销大约在8-20万元之间，以平均每对10万元的花费用在新房装饰计算，2015年中国结婚登记对数为1224.71万对新人登记结婚，可测算出因结婚产生的消费总额约达1.22万亿元，占国内生产总值的近2.34%。可见婚姻市场的新房装修是多么大的一块蛋糕！",
				img2:"",
				img3:"img/1_143421_1.jpg",
				h5:"",
				p5:"",
				img4:"",
				h6:"",
				p6:""
				},
				{
				analysisersName:'市场应用',
				h0:"新房装修，旧房改造，工装翻新……",
				h1:"",
				p1:"多年以来，家装市场上墙面装饰几乎选择的都是乳胶漆、瓷砖等传统涂料，形成墙体普遍的单调、无个性。美屋定制系统的出现，个性化定制技术，想怎么设计爱家，就怎么设计爱家，无不显示出主人与众不同的装饰风格和非凡品位，必定会在人们心中创造一种新的流行趋势。",
				h2:"工装市场：更新换代 快人一步",
				p2:"目前，为了提升档次，前宾馆、酒店、KTV、茶艺馆以及很多办公室、写字楼纷纷进行装修。美屋定制系统，设计个性化，材料健康化，品质国际化，风格奢华化，价格大众化，非常适合这些地方装修需求。据调查显示，安徽某区域内的4座县城，美屋定制系统的代理商已经占据了当地60%的市场份额。",
				img1:"img/1_141821_1.jpg",
				h3:"装饰公司：个性装潢 领先行业",
				p3:"美屋定制系统，以全新的定制模式，开启中国人的定制装修时代，给传统装修公司带来了新的创意和思路，提高了居室的整体装饰效果，显示与众不同的装修风格，成为竞争激烈市场中的“弄潮儿”。同时，个性化的装修定制，以完美的装饰效果，可以带来亲戚、朋友、邻居、同事等更多的潜在客户，满足不同的客户得到不同的个性需求。",
				h4:"建材经销商：微利时代  就此终结",
				p4:"目前市场上各种装修材料品牌越来越多，不管是传统的玻璃、地板，还是新型的养生集成板，都会由于市场竞争越来越激烈，带来的同质化竞争，没有特殊的优势。其结果就是惨淡经营，提前进入微利时代。而美屋定制系统的出现，不仅给各经销商原有销售带来新的竞争利器，帮助经销商占领市场，带来新的利润空间，终结了让投资商无望的“微利市场”。",
				img2:"img/1_141841_1.jpg",
				img3:"img/1_141909_1.jpg",
				h5:"农村市场：蓝海市场 全新起航",
				p5:"中国农村消费是未来中国经济的另一个大引擎，近年的家电下乡、汽车下乡说明了这点。农村装修消费处于中、低档水平，装修建材普遍品质低劣，且无任何个性，但农村消费者追求高档、品味的生活需求并不比城市人少。据调查，我国有8亿多农民，每户至少要翻修三次住房，由此可见在将来，农村市场的装修需求必将水涨船高。",
				img4:"img/1_141956_1.jpg",
				h6:"",
				p6:""
				},
				{
				analysisersName:'成功案例',
				h0:"完美案例成功复制   用事实说话的生意才叫商机",
				h1:"",
				p1:"",
				h2:"陈经理   38岁   装饰公司施工现场负责人 ",
				p2:"以前，我公司承接装修项目一次都不敢太多，主要是精装修多，工期长，工人难得招。自从与“美屋定制整体解决方案”合作后，一个房几天就可搞定，效率快，效果好，深爱广大房欢迎，我们也省去不少麻烦，而且一点不耽误赚钱。现在，就是来再多的活我们也来者不拒。",
				img1:"img/006.jpg",
				h3:"",
				p3:"",
				h4:"郑新元   66岁   退休老师",
				p4:"儿子要闪婚，可一个月的时间哪够装房子，朋友向我推荐“美屋定制整体解决方案”，嘿，别说，从设计到完工一个星期搞定，而且室内无异味，立马就可拎包入住。这下可好了，房子大问题解决了，我们能腾出大量时间筹备婚礼其他事情了。",
				img2:"img/007.jpg",
				img3:"",
				h5:"刘小娟   35岁   全职太太",
				p5:"为了生二胎特意换了个大房子，按常理，装得三个月，完工后得放半年散味，这样一算差不多一年的时间就费了。可孩子等不及了，老公为此事着急上火，跑了几家装修公司，最终选择了“美屋定制整体解决方案”。你绝对想象不到的快捷省心，对，就十天，从设计到完工，全部都是按照我们的要求和风格，而且环保无异味，快得像魔术，真是太神奇了。说实在的，“美屋定制整体解决方案”真心不错。",
				img4:"img/008.jpg",
				h6:"",
				p6:""
				}				
	]
};
var Img4_1 = Vue.extend({
template: '<img class="img12" v-bind:src="analysisers.analysisersImg1"/>'
});
var h44_1 = Vue.extend({
	template:'<h4>{{analysisers.analysisersLi.H4}}</h4>'
});
var h54_1 = Vue.extend({
	template:'<h5>{{analysisers.analysisersLi.H5_1}}</h5>'
});
var h54_2 = Vue.extend({
	template:'<h5>{{analysisers.analysisersLi.H5_2}}</h5>'
});
var p4_1 = Vue.extend({
	template:'<p>{{analysisers.analysisersLi.P1}}</p>'
});
var p4_2 = Vue.extend({
	template:'<p>{{analysisers.analysisersLi.P2}}</p>'
});
var p4_3 = Vue.extend({
	template:'<p>{{analysisers.analysisersLi.P3}}</p>'
});
var p4_4 = Vue.extend({
	template:'<p>{{analysisers.analysisersLi.P4}}</p>'
});
var p4_5 = Vue.extend({
	template:'<p>{{analysisers.analysisersLi.P5}}</p>'
});
var p4_6 = Vue.extend({
	template:'<p>{{analysisers.analysisersLi.P6}}</p>'
});
var Img4_2 = Vue.extend({
	template:'<img v-bind:src="analysisers.analysisersLi.img1" />'
});
var Img4_3 = Vue.extend({
	template:'<img v-bind:src="analysisers.analysisersLi.img2" />'
});
var div4_1 = Vue.extend({
	template:'<div class="particulars_li project_div"><child5></child5><child6></child6><child7></child7><child8></child8><child9></child9><child10></child10><child11></child11><child12></child12><child13></child13><child14></child14><child15></child15></div>',
	components: {
		'child5': h44_1,
    	'child6': p4_1,
    	'child7': h54_1,
    	'child8': p4_2,
    	'child9': p4_3,
    	'child10': Img4_2,
    	'child11': h54_2,
    	'child12': p4_4,
    	'child13': p4_5,
    	'child14': p4_6,
    	'child15': Img4_3    	
	}
});
var ul4_1 = Vue.extend({
	template:'<ul><li v-for="analysisersx in analysisers.analysisersDiv"><div class="project_xdiv">{{analysisersx.analysisersName}}</div><div class="particulars_li project_xli"><h4>{{analysisersx.h0}}</h4><h5>{{analysisersx.h1}}</h5><p>{{analysisersx.p1}}</p><img v-bind:src="analysisersx.img1"/><h5>{{analysisersx.h2}}</h5><p>{{analysisersx.p2}}</p><img v-bind:src="analysisersx.img2"/><h5>{{analysisersx.h3}}</h5><p>{{analysisersx.p3}}</p><img v-bind:src="analysisersx.img3"/><h5>{{analysisersx.h4}}</h5><p>{{analysisersx.p4}}</p><img v-bind:src="analysisersx.img4"/><h5>{{analysisersx.h5}}</h5><p>{{analysisersx.p5}}</p><h5>{{analysisersx.h6}}</h5><p>{{analysisersx.p6}}</p></div></li></ul>'
});
var div4_2 = Vue.extend({
	template:'<div class="project_x"><child4></child4></div>',
	components: {
		'child4': ul4_1
	}　
});
Vue.component('my-analysisers1',{
     template: '<div class="particulars"><child1></child1><child2></child2><child3></child3></div>',
     components: {
    // <my-component> 将只在父模板可用
    'child1': Img4_1,
    'child2': div4_1,
    'child3': div4_2
   }
});
var vm4_3 = new Vue({
	el: "#analysiser"
});
//根据QueryString参数名称获取值
function getQueryStringByName(name) {
    var result = location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
    if (result == null || result.length < 1) {
        return "";
    };
    return result[1];
};
//document.ready = function() {
		var numb2 = decodeURI(getQueryStringByName('numb2'));
//		console.log(typeof numb2);
		var projecters_xx = document.querySelectorAll('.project_x li');
		var projecters_div = document.getElementsByClassName('project_div')[0];
		var projecters_xli = document.getElementsByClassName('project_xli');
		if(numb2 === '0') {
		   projecters_div.style.display = 'none';	
		 	for(var i = 0; i < projecters_xx.length; i ++) {
		 		projecters_xli[i].style.display = 'none';
		 	};
		 	projecters_xli[numb2].style.display = 'block';
		}else if(numb2 === '1') {
			 projecters_div.style.display = 'none';	
		 	for(var i = 0; i < projecters_xx.length; i ++) {
		 		projecters_xli[i].style.display = 'none';
		 	};
		 	projecters_xli[numb2].style.display = 'block';
		}else if(numb2 === '2') {
			 projecters_div.style.display = 'none';	
		 	for(var i = 0; i < projecters_xx.length; i ++) {
		 		projecters_xli[i].style.display = 'none';
		 	};
		 	projecters_xli[numb2].style.display = 'block';
		};
//};