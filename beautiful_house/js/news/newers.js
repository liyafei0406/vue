 //新闻详情
var newers = {
	newersImg1:'img/news.gif',
	newersDao:'新闻资讯',
	newersDaoy:'NEWS',
	newers1Site:'news_details.html',
	newers1H5:'中国将成为继美之后全球第二大安防市场',
	newers1P:'2017年6月8日，创意快装工场发展史上一个具有里程碑意义的日子——集团公司在全球中小企业股权交易中心挂牌。这也是继创意快装工场上海股权托管交易中心挂牌后，又一次重新定制装修装饰行业标杆企业标准。创意快装工场积蓄了多年的力量，在全球中小企业股权交易中心挂牌挂牌，随着挂牌的锣声的敲响，创意快装工场上了一个新的阶段，一个更高的阶段。5月份公司B轮融成功融资1.6亿，为本次挂牌提供了重要的助推力量。企业的成功挂牌，不仅展示了企业的发展实力，更预示着企业在未来发展之路上，将借助资本的力量取得更大的飞跃。',
	newers1Img2:'img/1_172457_1_lit.jpg'
}
//var headeros = {
//	headers1:'新闻资讯',
//	hesders1_1:'公司新闻'
//};
var centreH5 = newers.newers1H5.substring(0,10);
var centreP = newers.newers1P.substring(0,20);
var Img1_1 = Vue.extend({
template: '<img class="news_img1" v-bind:src="newers.newersImg1"/>'
});
var div1_1 = Vue.extend({
	template:'<div class="dao_title"><div class="div_dao">{{newers.newersDao}}<span>{{newers.newersDaoy}}</span></div></div>'
});
var ul1_1 = Vue.extend({
	template:'<ul><li class="ls" v-for="a in 10"><a v-bind:href="newers.newers1Site"><div class="centre_d1"><img v-bind:src="newers.newers1Img2" /></div><div class="centre_d2"><h5>{{centreH5}}...</h5><p class="centre_p3">{{centreP}}...</p></div></a></li></ul>'
});
var div1_2 = Vue.extend({
	template:'<div class="news_centre"><child4></child4></div>',
	 components: {
    // <my-component> 将只在父模板可用
    'child4':ul1_1 
   }
});
 Vue.component('my-newers1',{
     template: '<div class="news"><child1></child1><child2></child2><child3></child3></div>',
     components: {
    // <my-component> 将只在父模板可用
    'child1': Img1_1,
    'child2': div1_1,
    'child3': div1_2
   }
});
var vm1_1 = new Vue({
	el: "#newers"
//	data: {locals: false},
//	methods: {
//		worders() {
//			if(this.worder == "") {
//				alert("请输入搜索关键字！");
//			}else {
//				window.location.href = 'new.html?word='+this.worder+'';
//			};
//		}
//	}
});
//var pps = document.getElementsByClassName('header_ppp')[0];
//Vue.component('my-headerp1',{
//template: '<p class="header_p1">{{headeros.headers1}}</p>'
//});
//Vue.component('my-headerp2',{
//template: '<p class="header_p2">{{headeros.hesders1_1}}</p>'
//});
//pps.innerHTML = '<my-headerp1 id="headerp1"></my-headerp1> <my-headerp2 id="headerp2"></my-headerp2>'
//var vm1_3 = new Vue({
//	el: "#headerp1"
//});
//var vm1_4 = new Vue({
//	el: "#headerp2"
//});