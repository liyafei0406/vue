//头部显示
let headeros = {
	headers1:'关于我们',
	hesders1_1:'公司内容'
};
let pps = document.getElementsByClassName('header_ppp')[0];
Vue.component('my-headerp1',{
template: '<p class="header_p1">{{headeros.headers1}}</p>'
});
Vue.component('my-headerp2',{
template: '<p class="header_p2">{{headeros.hesders1_1}}</p>'
});
pps.innerHTML = '<my-headerp1 id="headerp1"></my-headerp1> <my-headerp2 id="headerp2"></my-headerp2>'
let vm6_1 = new Vue({
	el: "#headerp1"
});
let vm6_2 = new Vue({
	el: "#headerp2"
});
let aboutUsers = {
	aboutUsersImg1:'img/banner02.jpg',
	aboutUsersLi: {
		H4:'宋庄创意工场，开启美屋定制快装时代',
		P1:'宋庄镇政府以党的十八届六中全会精神为指导，以建设“文化宋庄、人才宋庄、科技宋庄、生态宋庄、和谐宋庄”为发展目标。由创意总部基地、中国技术市场成果转化基地、中关村可信贸易区、渠道（中国）联盟发起文化创意产业基金、弘扬创新工匠精神，在国家科技部、中国技术市场协会、中国发明协会、中国扶贫开发协会、大专院校的支持下，多位行业大伽共同成立中国?宋庄创意工场。致力于将中国宋庄创意工场打造成具有创意工场总部、创意工场街、创意产业园三位一体的 “中国创意特区”文化创意产业示范基地。为建设世界文化名镇，打造中国文化硅谷的伟大目标贡献一份力量。',
		H5_1:'宋庄创意工场，大型创业孵化平台',
		H5_2:'创意工场孵化品牌项目：',
		P2:'中国 • 宋庄创意工场，整合多个方面的资源和力量，成立书画艺术名家联盟，发起文化创意产业基金，搭建文化创意产业服务平台，着力实现 “以文化引爆，以创新引领，以资本助力，以实业立足，大力发展创意经济”的发展策略， 经过十多年发展，己发展成为集技术研发、项目孵化、品牌管理、项目推广、创业培训、创业指导等多功能于一体的高端创意产业服务平台。先后推出了百余项科研成果，在智能环保、礼品定制、4D影像、创意装饰、新型建材、养生科技等创意类项目的研发和推广中取得了重大突破，拥有百项国家专利，旗下拥有数十个配套工厂、4个产业基地和数十个成功孵化的品牌项目，园区业务涉及创意孵化、项目孵化、产业运营、创业扶持、产业推广等多个方面，受到了央视数十个栏目的报道、多位国家领导人接见、被评为最具投资价值的创意产业基地、中国创意产业孵化基地，创业带动就业人数超过100万人，创业工程全国范围产生的经济价值达数十亿元。',
		P3:'中国 • 宋庄创意工场，以“科技兴国、创新强国”为使命，以“帮扶大众创业、助推万众创新”为宗旨，以“弘扬工匠精神，创新工匠产业”为目标。聚焦文化创意产业，研发前沿技术、转化创新成果、培训专业人才，致力于打造一个集创意工场总部、创意工场街、创意产业园、创新工匠村、创意养生酒店五位一体的创意产业示范基地。',
		P4:'中国 • 宋庄创意工场，整合多方资源，联合行业专家，发行2亿文化创意产业基金，以“资源+专家+资金”三位一体，打造中国好项目超级平台，在将自有项目发展壮大的同时，依托强大资金、媒体、渠道、团队等资源优势，发现新项目，投资新项目，帮扶小项目，壮大好项目，通过产品研发、项目路演、股权投资、品牌策划、模式创新、渠道建设、市场运营等手段，为好项目提供全方位的品牌运营服务，让每个项目功能独特、应用广泛、走向市场，服务大众，取得可观的经济效益和品牌效益。',
		img1:'img/001.jpg',
		img2:'img/002.jpg',
		img3:'img/mwlogo.jpg'
	},
	aboutUsersDiv: [
				{
				aboutUsersName:'荣誉资质',
				h0:"14年品质保障 达到国际先进水平",
				h1:"企业荣誉证书",
				p1:"宋庄创意工场，拥有数十人的专业研发团队，依托中国技术市场协会和清华、北大等高校资源和技术研发优势，已经拥有百余项国家专利和相关检测报告，在行业内屈指可数，用实力说话，用事实证明，选背靠宋庄创意工场，大实力，大平台。",
				h2:"检查报告证书",
				p2:"",
				img1:"img/1_092350_1.jpg",
				h3:"",
				p3:"",
				h4:"专业研发 专利无数",
				p4:"中国 • 宋庄创意工场，由是在国家科技部、中国技术市场协会、北京市文化创意产业中心及科研院所等部门的大力支持下于2003年成立的，历经14年，园区已经成功孵化数十个创意品牌项目，拥有百余项国家专利，沉淀和培育出一支由专家、学者、工程师、研究生、导师、设计师等专业人才组成的强大研发团队，确保平台的产品创新力及前瞻性，成为行业领先的核心竞争力！",
				img2:"img/1_093726_2.jpg",
				h5:"",
				p5:"",
				img3:"",
				h6:"",
				p6:"",
				img4:"img/mwzlzs.jpg"
				},
				{
				aboutUsersName:'媒体聚焦',
				h0:"创意领航   赞誉不断",
				h1:"",
				p1:"中国·宋庄创意工场创意产业十多年专注创业、创新，受到了央视栏目《财富故事会》、《乡约》、《乡土》、《走近科学》、《聚焦三农》、《经济信息联播》、《东方时空》、《科技博览》、《百科探密》、《创意中国星》、《第一时间》、《享誉中华》、《创新无限》《生财有道》和各地方卫视栏目《创富英雄》、《天下故事会》、《牛群冒号》、《成功》、《人在他乡》、《我的创业故事》及人民网、光明日报、市场报、中华工商时报、市场信息报、知音、商界、大众投资、新浪、搜狐、网易、腾讯等等上千个媒体给予了广泛报道！",
				h2:"",
				p2:"",
				img1:"img/1_095115_2.jpg",
				h3:"",
				p3:"",
				h4:"",
				p4:"",
				img2:"img/1_095115_3.jpg",
				h5:"",
				p5:"",
				img3:"img/1_095115_4.jpg",
				img4:"",
				h6:"",
				p6:""
				},
				{
				aboutUsersName:'平台实力',
				h0:"实力工厂，业内翘楚",
				h1:"1、实力厂家规模，保障您货源不断",
				p1:"美屋定制是以“创意装饰、个性定制”为主题的一站式产品+设计+施工一体化快装解决方案，通过工业化、标准化、模块化的设计的三大生产模式，保证了产品工艺高质量，设计高水平，同时以工业化生产模式降低成本，模块化设计使产品可塑性更强，标准化使产品拥有无限可能性的组合变化，为消费者提供了一个创意魔法般的多样的装饰效果。美屋定制系列产品以积木式的安装为消费者的个性装饰需求提供了无限的想象空间，安装更简单、周期更快更短，独创的卡扣式安装方式，让产品更易调换如同把装修方案装在口袋里一样，想搬就搬。美屋定制装饰效果好、无毒环保、节能隔音、安装快捷、随心更换，并取得国家多项新型专利、外观专利等一批专利证书，成为集成装修、魔画科技、玻艺空间三位一体的整体家装个性定制服务商。",
				h2:"",
				p2:"",
				img1:"img/1_100442_1.jpg",
				h3:"2、专业的服务团队，为您成功保驾护航",
				p3:"美屋定制，汇聚了新型建材、创意装饰、智能科技等数十个项目，其中包括魔法墙艺师、神奇冰晶画、养生集成板、有氧石材板、梦幻隐形墙、9D定制空间、仿玉背景墙、冰晶玻艺坊、翡翠玉石屋、炫彩魔幻墙等十大系列项目，以“新奇特快、多省好美”为特色组成全新的智能养生装饰系统，从吊顶到地面，从墙面到装饰，从创意到功能，在整体装饰装修的基础上，实行个性化私人定制、创意完美演绎，打造“智能、环保、养生、创意”的整屋定制空间解决方案，以打造快装行业5.0整体解决方案而荣耀登顶。",
				h4:"3、超强的研发实力，专利荣誉上满墙",
				p4:"",
				img2:"img/1_101127_1.jpg",
				h5:"",
				p5:"",
				img3:"",
				img4:"img/1_100502_1.jpg",
				h6:"",
				p6:""
				}				
	]
};
let Img6_1 = Vue.extend({
template: '<img class="img12" v-bind:src="aboutUsers.aboutUsersImg1"/>'
});
let h46_1 = Vue.extend({
	template:'<h4>{{aboutUsers.aboutUsersLi.H4}}</h4>'
});
let h56_1 = Vue.extend({
	template:'<h5>{{aboutUsers.aboutUsersLi.H5_1}}</h5>'
});
let h56_2 = Vue.extend({
	template:'<h5>{{aboutUsers.aboutUsersLi.H5_2}}</h5>'
});
let p6_1 = Vue.extend({
	template:'<p>{{aboutUsers.aboutUsersLi.P1}}</p>'
});
let p6_2 = Vue.extend({
	template:'<p>{{aboutUsers.aboutUsersLi.P2}}</p>'
});
let p6_3 = Vue.extend({
	template:'<p>{{aboutUsers.aboutUsersLi.P3}}</p>'
});
let p6_4 = Vue.extend({
	template:'<p>{{aboutUsers.aboutUsersLi.P4}}</p>'
});
let Img6_2 = Vue.extend({
	template:'<img v-bind:src="aboutUsers.aboutUsersLi.img1" />'
});
let Img6_3 = Vue.extend({
	template:'<img v-bind:src="aboutUsers.aboutUsersLi.img2" />'
});
let Img6_4 = Vue.extend({
	template:'<img v-bind:src="aboutUsers.aboutUsersLi.img3" />'
});
let div6_1 = Vue.extend({
	template:'<div class="particulars_li project_div"><child5></child5><child6></child6><child7></child7><child8></child8><child9></child9><child10></child10><child11></child11><child12></child12><child13></child13><child14></child14></div>',
	components: {
		'child5': h46_1,
    	'child6': p6_1,
    	'child7': Img6_2,
    	'child8': p6_2,
    	'child9': Img6_3,
    	'child10': h56_1,
    	'child11': p6_3,
    	'child12': p6_4,
    	'child13': h56_2,
    	'child14': Img6_4  	
	}
});
let ul6_1 = Vue.extend({
	template:'<ul><li v-for="aboutUsersx in aboutUsers.aboutUsersDiv"><div class="project_xdiv">{{aboutUsersx.aboutUsersName}}</div><div class="particulars_li project_xli"><h4>{{aboutUsersx.h0}}</h4><h5>{{aboutUsersx.h1}}</h5><p>{{aboutUsersx.p1}}</p><img v-bind:src="aboutUsersx.img1"/><h5>{{aboutUsersx.h2}}</h5><p>{{aboutUsersx.p2}}</p><img v-bind:src="aboutUsersx.img2"/><h5>{{aboutUsersx.h3}}</h5><p>{{aboutUsersx.p3}}</p><img v-bind:src="aboutUsersx.img3"/><h5>{{aboutUsersx.h4}}</h5><p>{{aboutUsersx.p4}}</p><img v-bind:src="aboutUsersx.img4"/><h5>{{aboutUsersx.h5}}</h5><p>{{aboutUsersx.p5}}</p><h5>{{aboutUsersx.h6}}</h5><p>{{aboutUsersx.p6}}</p></div></li></ul>'
});
let div6_2 = Vue.extend({
	template:'<div class="project_x"><child4></child4></div>',
	components: {
		'child4': ul6_1
	}　
});
Vue.component('my-aboutusers1',{
     template: '<div class="particulars"><child1></child1><child2></child2><child3></child3></div>',
     components: {
    // <my-component> 将只在父模板可用
    'child1': Img6_1,
    'child2': div6_1,
    'child3': div6_2
   }
});
let vm6_3 = new Vue({
	el: "#aboutuser"
});