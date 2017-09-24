//头部显示
let headeros = {
	headers1:'诚约合作',
	hesders1_1:'合作内容'
};
let pps = document.getElementsByClassName('header_ppp')[0];
Vue.component('my-headerp1',{
template: '<p class="header_p1">{{headeros.headers1}}</p>'
});
Vue.component('my-headerp2',{
template: '<p class="header_p2">{{headeros.hesders1_1}}</p>'
});
pps.innerHTML = '<my-headerp1 id="headerp1"></my-headerp1> <my-headerp2 id="headerp2"></my-headerp2>'
let vm5_1 = new Vue({
	el: "#headerp1"
});
let vm5_2 = new Vue({
	el: "#headerp2"
});
let cooperationers = {
	cooperationersImg1:'img/banner06.jpg',
	cooperationersLi: {
		H4:'请仔细阅读   这是成为“财富新贵”的必经之路',
		P1:'为将美屋定制品牌迅速在全国范围内铺开市场，现面向全国诚征合作商、代理商。您可以根据自身的创业资金、人脉资源、技术能力等方面的优劣势分析，选择最适合的合作方式，以确保最快速的投资回报。具体合作事宜，您可致电免费热线：400-709-0668 咨询，或是 点击这里 给我们留言申请。',
		H5_1:'合作条件',
		P2:'如果你有积极上进的心态、勇往直前不畏摔倒的勇气、激情进取的决心，并勤劳实在、有恒心有耐心，欢迎你对我们的详细了解，若你是后者而最终选择了独一无二的商机——美屋定制全屋定制，这将是你我的幸运，必将开拓一片天地！',
		P3:'1、良好的信誉基础，认同“美屋定制”的品牌理念和发展目标，看好“美屋定制整体解决方案”的前景，愿与总部携手，共同开拓中国市场。',
		P4:'2、接受总部的培训，遵守总部的经营管理规范，具有良好的为顾客提供服务的意识，自觉维护“美屋定制 ”的品牌声誉。',
		P5:'3、具有一定的创业条件及相应的启动资金。',
		P6:'4、具有独立承担民事责任能力的自然人或企业法人。',
		img1:'img/1_141913_8.jpg',
		img2:'img/009.jpg'
	},
	cooperationersDiv: [
				{
				cooperationersName:'合作方式',
				h0:"美屋定制，中国装饰界的好项目",
				h1:"前店后厂模式",
				p1:"在家开个直营店，前店后厂，双重模式，即时获利步步为赢。直接面向消费者，既卖产品，又能接受定制。美屋定制独门生意，一个小店就可以垄断一大片区域，顾客排队上门，想不赚都不行！",
				h2:"个性定制模式",
				p2:"通过设立小站点、代理处、网络预定等形式，接收消费者装修房屋的个性定制，按需制作，瞄准高端市场。个人定制利润空间大，多渠道接收定制，收入相当可观。",
				img1:"img/1_150253_1.jpg",
				h3:"店面升级模式",
				p3:"本身自己已有装饰店面的，可引入美屋定制的任何一种产品或技术，增加一种全新的盈利点，让你与其它装饰店面迅速区别开来，以特色抢占市场，做到人无我有，人有我奇，不愁生意不火爆。",
				h4:"产品销售模式",
				p4:"既可做批发，又可做零售，双重优势，双重获利。通过独特工艺制作成各类美屋定制系列批发给装饰公司，各类大小工程商；也可以自己开个经销店，直接面向消费者，产品为王，制胜终端。美屋定制，独门生意，一个小店就可以垄断一大片区域，顾客排队上门，想不赚都不行！",
				h5:"联合经营模式",
				p5:"可与装饰公司、建材公司、房地产开发商、影楼、工艺礼品店等装饰行业的周边销售商或客户，强强联手，展开深度合作，向他们提供更大的实利空间，形成利益共享，风险共担，实现财富共赢之道。",
				img2:"img/1_150307_1.jpg",
				img3:'',
				img4:'',
				h6:"O2O两店模式及小区开发模式",
				p6:"1.采用未来十年都流行o2o模式，线上线下同时运作，开一店送一店，共享海量产品套餐、拥有低价产品货源，做全国0库存生意。2.刚开盘或装修的小区，对美屋定制的需求量额外大，专门运作小区市场，盈利也非常快，公司制作了全套小区促销展示工具，业务经理协同支持，让小区开发一次性签单一百个！"
				},
				{
				cooperationersName:'合作申请',
				h0:"抓住致富机会   从留言咨询开始",
				h1:"",
				p1:"诚邀您与我们一起开拓庞大的装饰装修市场，缔造更多创富传奇！期待您的真诚合作，请认真填写下表，我们的创业顾问会在两个工作日内与您联系洽谈，谢谢！当然，不论我们能否携手合作，都得感谢您对我们美屋定制品牌的关注，期待您提出宝贵意见或建议！",
				h2:"欢迎各位有识志士到总部考察学习！",
				p2:"公司数千平米展示，万平米办公面积！2016年重点扶持100家代理商，打造样板市场，巨额广告扶持，高额现金补贴，你还等什么！商机稍纵即逝，财富就在自己手中！机会只有一次，不是你的就是别人的！",
				img1:"",
				h3:"好消息",
				p3:"在8月31日前，通过点击咨询提交免费获取资料即可获得签约特惠大礼包一份，亲临总部考察亦可获精美礼品一份！详情请致电：400-709-0668 咨询。",
				h4:"",
				p4:"",
				h5:"五步走，轻松加盟",
				p5:"",
				img2:"img/jiamen.png",
				img3:'',
				img4:'',
				h6:"",
				p6:""
				},
				{
				cooperationersName:'联系我们',
				h0:"专注创业服务14年  专业值得信赖",
				h1:"",
				p1:"",
				h2:"",
				p2:"",
				img1:"img/hotimg.gif",
				h3:"",
				p3:"",
				h4:"",
				p4:"",
				h5:"",
				p5:"",
				img2:"img/address.gif",
				img3:'',
				img4:'',
				h6:"",
				p6:""
				}				
	]
};
let Img5_1 = Vue.extend({
template: '<img class="img12" v-bind:src="cooperationers.cooperationersImg1"/>'
});
let h45_1 = Vue.extend({
	template:'<h4>{{cooperationers.cooperationersLi.H4}}</h4>'
});
let h55_1 = Vue.extend({
	template:'<h5>{{cooperationers.cooperationersLi.H5_1}}</h5>'
});
let p5_1 = Vue.extend({
	template:'<p>{{cooperationers.cooperationersLi.P1}}</p>'
});
let p5_2 = Vue.extend({
	template:'<p>{{cooperationers.cooperationersLi.P2}}</p>'
});
let p5_3 = Vue.extend({
	template:'<p>{{cooperationers.cooperationersLi.P3}}</p>'
});
let p5_4 = Vue.extend({
	template:'<p>{{cooperationers.cooperationersLi.P4}}</p>'
});
let p5_5 = Vue.extend({
	template:'<p>{{cooperationers.cooperationersLi.P5}}</p>'
});
let p5_6 = Vue.extend({
	template:'<p>{{cooperationers.cooperationersLi.P6}}</p>'
});
let Img5_2 = Vue.extend({
	template:'<img v-bind:src="cooperationers.cooperationersLi.img1" />'
});
let Img5_3 = Vue.extend({
	template:'<img v-bind:src="cooperationers.cooperationersLi.img2" />'
});
let div5_1 = Vue.extend({
	template:'<div class="particulars_li project_div"><child5></child5><child6></child6><child7></child7><child8></child8><child9></child9><child10></child10><child11></child11><child12></child12><child13></child13><child14></child14></div>',
	components: {
		'child5': h45_1,
    	'child6': p5_1,
    	'child7': Img5_2,
    	'child8': h55_1,
    	'child9': p5_2,
    	'child10': p5_3,
    	'child11': p5_4,
    	'child12': p5_5,
    	'child13': p5_6,
    	'child14': Img5_3    	
	}
});
let ul5_1 = Vue.extend({
	template:'<ul><li v-for="cooperationersx in cooperationers.cooperationersDiv"><div class="project_xdiv">{{cooperationersx.cooperationersName}}</div><div class="particulars_li project_xli"><h4>{{cooperationersx.h0}}</h4><h5>{{cooperationersx.h1}}</h5><p>{{cooperationersx.p1}}</p><img v-bind:src="cooperationersx.img1"/><h5>{{cooperationersx.h2}}</h5><p>{{cooperationersx.p2}}</p><img v-bind:src="cooperationersx.img2"/><h5>{{cooperationersx.h3}}</h5><p>{{cooperationersx.p3}}</p><img v-bind:src="cooperationersx.img3"/><h5>{{cooperationersx.h4}}</h5><p>{{cooperationersx.p4}}</p><img v-bind:src="cooperationersx.img4"/><h5>{{cooperationersx.h5}}</h5><p>{{cooperationersx.p5}}</p><h5>{{cooperationersx.h6}}</h5><p>{{cooperationersx.p6}}</p></div></li></ul>'
});
let div5_2 = Vue.extend({
	template:'<div class="project_x"><child4></child4></div>',
	components: {
		'child4': ul5_1
	}　
});
Vue.component('my-cooperationers1',{
     template: '<div class="particulars"><child1></child1><child2></child2><child3></child3></div>',
     components: {
    // <my-component> 将只在父模板可用
    'child1': Img5_1,
    'child2': div5_1,
    'child3': div5_2
   }
});
let vm5_3 = new Vue({
	el: "#cooperationer"
});