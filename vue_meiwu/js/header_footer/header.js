//头部组件
let Img1 = Vue.extend({
template: "<img class='header_i1' src='img/logo.png'/>"
});
//var locals = false;
let Img2 = Vue.extend({
template: '<img v-on:click="local" class="header_i2" style="top: 2.3%" src="img/IMG_0597.PNG"/>',
methods: {
		local() {
			vm2.locals1 = true;
			vm3.locals2 = true;	
		}
	}
});
//搜索框的获取
let worder = '';
let input1 = Vue.extend({
template: '<input v-model="worder" type="text" placeholder="请输入新闻关键字" class="word"/>'
});
//导航栏的显示隐藏
let button1 = Vue.extend({
template: '<button v-on:click="worders" class="btnsss" ><img src="img/search.png"/><span>搜索</span></button>',
methods: {
		worders() {
			if(worder == "") {
				alert("请输入搜索关键字！");
				return false;
			}else {
				window.location.href = 'new.html?word='+worder+'';
			};
		}
	}
});
let seek1 = Vue.extend({
template: '<div class="seek"><child4></child4><child5></child5></div>',
 components: {
    // <my-component> 将只在父模板可用
    'child4': input1,
    'child5': button1
   }
});
let ppp1 = Vue.extend({
template: '<div class="header_ppp"></div>'
});
 Vue.component('my-header',{
     template: '<div class="header"><child1></child1><child2></child2><child6></child6><child3></child3></div>',
     components: {
    // <my-component> 将只在父模板可用
    'child1': Img1,
    'child2': Img2,
    'child6': ppp1,
    'child3': seek1
   }
});
let vm1 = new Vue({
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
		headers01() {
			vm2.locals1 = false;
			vm3.locals2 = false;
		}
	}
});
let vm2 = new Vue({
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
let navers = [
				{id:'icon1',catalogue: 'index.html',names:'首页'},
				{id:'icon2',catalogue: 'new.html',names:'新闻资讯'},
				{id:'icon3',catalogue: 'project.html',names:'产品系列'},
				{id:'icon4',catalogue: 'project_introduction.html',names:'项目介绍'},
				{id:'icon5',catalogue: 'market_analysis.html',names:'市场分析'},
				{id:'icon6',catalogue: 'about_cooperation.html',names:'诚约合作'},
				{id:'icon7',catalogue: 'about_us.html',names:'关于我们'}
			 ];
let ul1 = Vue.extend({
template: "<ul><li v-for='naver in navers'><a v-bind:href='naver.catalogue'><div class='ico1' v-bind:class='naver.id'></div><span>{{naver.names}}</span></a></li></ul>"
});
Vue.component('my-head02',{
     template: '<div v-on:click="headers02" class="header_xl"><child1></child1></div>',
      components: {
    // <my-component> 将只在父模板可用
    'child1': ul1
   },
    methods: {
		headers02() {
			vm2.locals1 = false;
			vm3.locals2 = false;
		}
	}
});
let vm3 = new Vue({
	el: "#headers02",
	data: {locals2: false}
});