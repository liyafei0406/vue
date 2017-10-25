//头部显示
var headeros = {
	headers1:'新闻详情',
	hesders1_1:'详情介绍'
};
var pps = document.getElementsByClassName('header_ppp')[0];
Vue.component('my-headerp1',{
template: '<p class="header_p1">{{headeros.headers1}}</p>'
});
Vue.component('my-headerp2',{
template: '<p class="header_p2">{{headeros.hesders1_1}}</p>'
});
pps.innerHTML = '<my-headerp1 id="headerp1"></my-headerp1> <my-headerp2 id="headerp2"></my-headerp2>'
var vm7_1 = new Vue({
	el: "#headerp1"
});
var vm7_2 = new Vue({
	el: "#headerp2"
});
var newsdetailers = {
	newsdetailersImg1:'img/banner01.jpg',
	newsdetailersLi: {
		H4:'热烈祝贺创意快装工场在全球小企业股权交易中心挂牌',
		P1:'2017年6月8日，创意快装工场发展史上一个具有里程碑意义的日子——集团公司在全球中小企业股权交易中心挂牌。这也是继创意快装工场上海股权托管交易中心挂牌后，又一次重新定制装修装饰行业标杆企业标准。创意快装工场积蓄了多年的力量，在全球中小企业股权交易中心挂牌挂牌，随着挂牌的锣声的敲响，创意快装工场上了一个新的阶段，一个更高的阶段。5月份公司B轮融成功融资1.6亿，为本次挂牌提供了重要的助推力量。企业的成功挂牌，不仅展示了企业的发展实力，更预示着企业在未来发展之路上，将借助资本的力量取得更大的飞跃。',
		H5_1:'宋庄创意工场，大型创业孵化平台',
		H5_2:'创意工场孵化品牌项目：',
		P2:'2017年是创意快装工场繁花似锦的一年，这一年创意快装工场在赶超梦想的路上，不断超越自我，挑战新高；这一年创意快装工场在项目研发的过程中，不断推陈出新，延伸触角；这一年，创意快装工场在发展规划的蓝图上，不断打破陈腐，长远布局。创意快装工场，在国家科技部、中国技术市场协会、中国发明协会、中国扶贫开发协会、大专院校的支持下，由创意快装工场总部联合“中国创业就业扶助工程”、“渠道（中国）联盟”共同成立的一个专注于文化创意产业、创新工匠、艺术收藏、VR智能的投资、孵化、管理和运营平台，经过十多年发展，己发展成为集技术研发、项目孵化、品牌管理、项目推广、创业培训、创业指导等多功能于一体的高端创意产业服务基地。',
		P3:'创意快装工场，以“科技兴国、创新强国”为使命，以“帮扶大众创业、助推万众创新”为宗旨，以“弘扬工匠精神，创新工匠产业”为目标。整合多方资源，联合行业专家，发行2亿文化创意产业基金，以“资源+专家+资金”三位一体，打造中国好项目超级平台，在将自有项目发展壮大的同时，依托强大资金、媒体、渠道、团队等资源优势，发现新项目，投资新项目，帮扶小项目，壮大好项目，通过产品研发、项目路演、股权投资、品牌策划、模式创新、渠道建设、市场运营等手段，为好项目提供全方位的品牌运营服务，让每个项目功能独特、应用广泛、走向市场，服务大众，取得可观的经济效益和品牌效益。丰硕的成绩，获得了社会各界的一致认可。本次集团公司全球中小企业股权交易中心成功挂牌，不仅是对创意工场的认可，更是对多年来集团公司始终坚持“实业兴国、创意强国”理念的一次肯定。展望未来，创意快装工场信心百倍，相信在社会各界的指导和支持下，有全体员工高度的使命感和责任感，借助资本的力量，产学研相结合，一定能为国家、为社会、为客户、为员工作出更大的贡献！',
		img1:'img/xianggang04.jpg', 
		img2:'img/xianggang08.jpg'
	},
	newsdetailersUl:[
			{newsdetailersImg:'img/icon04.png',newsdetailerszuo:'编辑：',newsdetailersnei:'创意工场'},
			{newsdetailersImg:'img/icon01.png',newsdetailerszuo:'阅读：',newsdetailersnei:'200次'},
			{newsdetailersImg:'img/icon03.png',newsdetailerszuo:'发布：',newsdetailersnei:'2017-05-06'},
	],
	newsdetailerspan1:'第一篇',
	newsdetailerspan2:'热烈祝贺创意快装工场在全球小企业股权交易中心挂牌'
};
var Img7_1 = Vue.extend({
template: '<img class="img1" v-bind:src="newsdetailers.newsdetailersImg1"/>'
});
var h47_1 = Vue.extend({
	template:'<h4>{{newsdetailers.newsdetailersLi.H4}}</h4>'
});
var ul7_1 = Vue.extend({
	template:'<ul><li v-for="newsdetailersx in newsdetailers.newsdetailersUl"><img v-bind:src="newsdetailersx.newsdetailersImg" />{{newsdetailersx.newsdetailerszuo}}<span>{{newsdetailersx.newsdetailersnei}}</span></li></ul>'
});
var p7_1 = Vue.extend({
	template:'<p>{{newsdetailers.newsdetailersLi.P1}}</p>'
});
var p7_2 = Vue.extend({
	template:'<p>{{newsdetailers.newsdetailersLi.P2}}</p>'
});
var p7_3 = Vue.extend({
	template:'<p>{{newsdetailers.newsdetailersLi.P3}}</p>'
});
var Img7_2 = Vue.extend({
	template:'<img class="img2" v-bind:src="newsdetailers.newsdetailersLi.img1" />'
});
var Img7_3 = Vue.extend({
	template:'<img class="img2" v-bind:src="newsdetailers.newsdetailersLi.img2" />'
});
var div7_1 = Vue.extend({
	template:'<div class="particulars_li"><child8></child8><child9></child9><child10></child10><child11></child11><child12></child12><child13></child13><child14></child14></div>',
	components: {
		'child8': h47_1,
    	'child9': ul7_1,
    	'child10': p7_1,
    	'child11': Img7_2,
    	'child12': p7_2,
    	'child13': Img7_3,
    	'child14': p7_3 	
	}
});
var hr7_1 = Vue.extend({
	template:'<hr style="clear: both; border: none; border-bottom: 1px solid #dfdfdf;"/>'
});
var span7_1 = Vue.extend({
	template:'<span>{{newsdetailers.newsdetailerspan1}}</span>'
});
var div7_2 = Vue.extend({
	template:'<div class="particulars_tb particulars_top">上一篇：<child6></child6></div>',
	components: {
		'child6': span7_1
	}　
});
var span7_2 = Vue.extend({
	template:'<span>{{newsdetailers.newsdetailerspan2}}</span>'
});
var div7_3 = Vue.extend({
	template:'<div class="particulars_tb particulars_bottom">下一篇：<child7></child7></div>',
	components: {
		'child7': span7_2
	}　
});
Vue.component('my-newsdetailers1',{
     template: '<div class="particulars"><child1></child1><child2></child2><child3></child3><child4></child4><child5></child5></div>',
     components: {
    // <my-component> 将只在父模板可用
    'child1': Img7_1,
    'child2': div7_1,
    'child3': hr7_1,
    'child4': div7_2,
    'child5': div7_3
   }
});
var vm7_3 = new Vue({
	el: "#newsdetailer"
});
window.onload = function() {
	   	//上一篇
	   	var particulars_top = document.querySelector('.particulars_top span');
	   	var particulars_bottom = document.querySelector('.particulars_bottom span');
	   	particulars_top.onclick = function() {
//	   		console.log(particulars_top.innerHTML);
	   		if(particulars_top.innerHTML == '第一篇') {
	   			alert('第一篇');
	   			return false;
	   		}else {
	   			window.location.href = 'news_details.html';
	   		};
	   	};
	   //下一篇
	   particulars_bottom.onclick = function() {
	   	if(particulars_bottom.innerHTML == '最后一篇') {
	   		alert('最后一篇');
	   		return false;
	   	}else{
	   		window.location.href = 'news_details.html';
	   	};
	   };
};