//头部组件
var Img1 = Vue.extend({
template: "<img class='header_i1' src='img/logo.png'/>"
});
//var locals = false;
var Img2 = Vue.extend({
template: '<img v-on:click="local" class="header_i2" style="top: 0.3%" src="img/IMG_0597.PNG"/>',
methods: {
		local: function() {
			vm2.locals1 = true;
			vm3.locals2 = true;	
		}
	}
});
var ppp1 = Vue.extend({
template: '<div class="header_ppp"></div>'
});
 Vue.component('my-header',{
     template: '<div class="header"><child1></child1><child2></child2><child6></child6></div>',
     components: {
    // <my-component> 将只在父模板可用
    'child1': Img1,
    'child2': Img2,
    'child6': ppp1
   }
});
var vm1 = new Vue({
	el: "#headers"
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
Vue.component('my-head01',{
     template: '<div v-on:click="headers01" class="header_l1"></div>',
    methods: {
		headers01: function() {
			vm2.locals1 = false;
			vm3.locals2 = false;
		}
	}
});
var vm2 = new Vue({
	el: "#headers01",
	data: {locals1: false},
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
var navers = [
				{id:'icon1',catalogue: 'index.html',names:'首页'},
				{id:'icon2',catalogue: 'new.html',names:'新闻资讯'},
				{id:'icon3',catalogue: 'project.html',names:'产品系列'},
				{id:'icon4',catalogue: 'project_introduction.html',names:'项目介绍'},
				{id:'icon5',catalogue: 'market_analysis.html',names:'市场分析'},
				{id:'icon6',catalogue: 'about_cooperation.html',names:'诚约合作'},
				{id:'icon7',catalogue: 'about_us.html',names:'关于我们'}
			 ];
var ul1 = Vue.extend({
template: "<ul><li v-for='naver in navers'><a v-bind:href='naver.catalogue'><div class='ico1' v-bind:class='naver.id'></div><span>{{naver.names}}</span></a></li></ul>"
});
Vue.component('my-head02',{
     template: '<div v-on:click="headers02" class="header_xl"><child1></child1></div>',
      components: {
    // <my-component> 将只在父模板可用
    'child1': ul1
   },
    methods: {
		headers02: function() {
			vm2.locals1 = false;
			vm3.locals2 = false;
		}
	}
});
var vm3 = new Vue({
	el: "#headers02",
	data: {locals2: false}
});