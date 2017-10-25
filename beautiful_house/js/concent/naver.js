var navers1 = [
				{catalogue: 'new.html',imgs:'img/dao01.jpg',names:'新闻资讯'},
				{catalogue: 'project.html',imgs:'img/dao02.jpg',names:'产品系列'},
				{catalogue: 'project_introduction.html',imgs:'img/dao03.jpg',names:'项目介绍'},
				{catalogue: 'market_analysis.html',imgs:'img/dao04.jpg',names:'市场分析'},
				{catalogue: 'about_cooperation.html',imgs:'img/dao05.jpg',names:'诚约合作'},
				{catalogue: 'about_us.html',imgs:'img/dao06.jpg',names:'关于我们'}
			 ];
var ul2 = Vue.extend({
template: "<ul><li v-for='naver1 in navers1'><a v-bind:href='naver1.catalogue'><img v-bind:src='naver1.imgs'/><h5>{{naver1.names}}</h5></a></li></ul>"
});
Vue.component('my-naver1',{
     template: '<div class="navs"><child1></child1></div>',
      components: {
    // <my-component> 将只在父模板可用
    'child1': ul2
   }
});
var vm4 = new Vue({
	el: "#naver"
});