var navers1 = [
				{catalogue: 'new.html',imgs:'img/ico_02.png',names:'环保保障'},
				{catalogue: 'project.html',imgs:'img/ico_03.png',names:'环保案例'},
				{catalogue: 'project_introduction.html',imgs:'img/ico_04.png',names:'环保材料'},
				{catalogue: 'market_analysis.html',imgs:'img/ico_05.png',names:'智能家居'},
				{catalogue: 'about_cooperation.html',imgs:'img/ico_06.png',names:'体验生活'},
				{catalogue: 'about_us.html',imgs:'img/ico_07.png',names:'品牌文化'}
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