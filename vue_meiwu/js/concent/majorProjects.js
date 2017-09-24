let majorProjects1 = {
	projects1_1: "project.html",
	imgs1: "img/rightjt.png",
	projectsbiao: "产品中心",
	projects1_2: [
				{projectsite:'integrated_wall.html',projectsImg:'img/ztb01.jpg',projectsName:'集成墙饰'},
				{projectsite:'magic_painting.html',projectsImg:'img/ztb02.jpg',projectsName:'魔画科技'},
				{projectsite:'glass_space.html',projectsImg:'img/ztb01.jpg',projectsName:'玻璃空间'}	
	]
};
let img3 = Vue.extend({
template: '<img style="width: 5%;" class="more" v-bind:src="majorProjects1.imgs1" alt="图片错误"/>'
});
let a2 = Vue.extend({
template: '<a v-bind:href="majorProjects1.projects1_1">{{majorProjects1.projectsbiao}}<child5></child5></a>',
 components: {
    'child5': img3
   }
});
let p2 = Vue.extend({
template: '<p class="in_h"><child4></child4></p>',
 components: {
    'child4': a2
   }
});
let hr2 = Vue.extend({
template: '<hr style="clear: both; border: none; border-bottom: 1px solid #dfdfdf; margin-bottom: 10px;" />'
});
let ul4 = Vue.extend({
template: "<ul><li v-for='projects2 in majorProjects1.projects1_2'><a v-bind:href='projects2.projectsite'><img v-bind:src='projects2.projectsImg'/><h2>{{projects2.projectsName}}</h2></a></li></ul>"
});
Vue.component('my-projects1',{
     template: '<div class="brand"><child1></child1><child2></child2><child3></child3></div>',
      components: {
    'child1': p2,
    'child2': hr2,
    'child3': ul4
    
   }
});
let vm6 = new Vue({
	el: "#majorProjects"
});