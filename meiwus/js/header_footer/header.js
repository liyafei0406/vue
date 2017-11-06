//头部组件
var Img1 = Vue.extend({
template: "<img class='header_i1' src='img/logo.png'/>"
});
//var locals = false;

 Vue.component('my-header',{
     template: '<div class="header"><child1></child1></div>',
     components: {
    // <my-component> 将只在父模板可用
    'child1': Img1
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

