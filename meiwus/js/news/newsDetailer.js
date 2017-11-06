////头部显示
//var headeros = {
//	headers1:'新闻详情',
//	hesders1_1:'详情介绍'
//};
//var pps = document.getElementsByClassName('header_ppp')[0];
//Vue.component('my-headerp1',{
//template: '<p class="header_p1">{{headeros.headers1}}</p>'
//});
//Vue.component('my-headerp2',{
//template: '<p class="header_p2">{{headeros.hesders1_1}}</p>'
//});
//pps.innerHTML = '<my-headerp1 id="headerp1"></my-headerp1> <my-headerp2 id="headerp2"></my-headerp2>'
//var vm7_1 = new Vue({
//	el: "#headerp1"
//});
//var vm7_2 = new Vue({
//	el: "#headerp2"
//});
var newsdetailers = {
	newsdetailersImg1:'img/banner01.jpg',
	newsdetailersUl:[
			{newsdetailersImg:'img/icon01.png',newsdetailerszuo:'阅读：'},
			{newsdetailersImg:'img/icon03.png',newsdetailerszuo:'发布：'},
	]
};
var Img7_1 = Vue.extend({
template: '<img class="img1" v-bind:src="newsdetailers.newsdetailersImg1"/>'
});
var h47_1 = Vue.extend({
	template:'<h4></h4>'
});
var ul7_1 = Vue.extend({
	template:'<ul><li v-for="newsdetailersx in newsdetailers.newsdetailersUl"><img v-bind:src="newsdetailersx.newsdetailersImg" />{{newsdetailersx.newsdetailerszuo}}<span></span></li></ul>'
});
var p7_1 = Vue.extend({
	template:'<p></p>'
});
var p7_2 = Vue.extend({
	template:'<p></p>'
});
var p7_3 = Vue.extend({
	template:'<p></p>'
});
var p7_4 = Vue.extend({
	template:'<p></p>'
});
var p7_5 = Vue.extend({
	template:'<p></p>'
});
var p7_6 = Vue.extend({
	template:'<p></p>'
});
var Img7_2 = Vue.extend({
	template:'<img class="img2" src="" />'
});
var Img7_3 = Vue.extend({
	template:'<img class="img2" src="" />'
});
var div7_1 = Vue.extend({
	template:'<div class="particulars_li"><child8></child8><child9></child9><child10></child10><child11></child11><child12></child12><child13></child13><child14></child14><child15></child15><child16></child16><child17></child17></div>',
	components: {
		'child8': h47_1,
    	'child9': ul7_1,
    	'child10': p7_1,
    	'child11': p7_2,
    	'child12': Img7_2,
    	'child13': p7_3,
    	'child14': p7_4,
    	'child15': Img7_3,
    	'child16': p7_5,
    	'child17': p7_6
	}
});
var hr7_1 = Vue.extend({
	template:'<hr style="clear: both; border: none; border-bottom: 1px solid #dfdfdf;"/>'
});
var span7_1 = Vue.extend({
	template:'<span></span>'
});
var div7_2 = Vue.extend({
	template:'<div class="particulars_tb particulars_top">上一条：<child6></child6></div>',
	components: {
		'child6': span7_1
	}　
});
var span7_2 = Vue.extend({
	template:'<span></span>'
});
var div7_3 = Vue.extend({
	template:'<div class="particulars_tb particulars_bottom">下一条：<child7></child7></div>',
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
