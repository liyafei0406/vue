 //新闻详情
var newers = {
	newersImg1:'img/news.gif',
	newersDao:'新闻资讯',
	newersDaoy:'NEWS'
	
}
//var headeros = {
//	headers1:'新闻资讯',
//	hesders1_1:'公司新闻'
//};
var Img1_1 = Vue.extend({
template: '<img class="news_img1" v-bind:src="newers.newersImg1"/>'
});
var div1_1 = Vue.extend({
	template:'<div class="dao_title"><div class="div_dao">{{newers.newersDao}}<span>{{newers.newersDaoy}}</span></div></div>'
});
var div1_2 = Vue.extend({
	template:'<div class="news_centre"></div>'
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