var majorProjects1 = {
	projects1_1: "project.html",
	imgs1: "img/rightjt.png",
	projectsbiao: "产品中心",
	projects1_2: [
				{projectsite:'integrated_wall.html',projectsImg:'img/ztb01.jpg',projectsName:'创艺养生墙',projectsContent:'倡导精致生活方式，打造理想居住空间'},
				{projectsite:'magic_painting.html',projectsImg:'img/ztb02.jpg',projectsName:'魔画科技',projectsContent:'三重功力魔画，一幅画价值千金'},
				{projectsite:'glass_space.html',projectsImg:'img/ztb03.jpg',projectsName:'玻璃空间',projectsContent:'超炫艺术玻璃，普通玻璃华丽变身'}	
	]
};
var img3 = Vue.extend({
template: '<img style="width: 5%;" class="more" v-bind:src="majorProjects1.imgs1" alt="图片错误"/>'
});
var a2 = Vue.extend({
template: '<a v-bind:href="majorProjects1.projects1_1">{{majorProjects1.projectsbiao}}<child5></child5></a>',
 components: {
    'child5': img3
   }
});
var p2 = Vue.extend({
template: '<p class="in_h"><child4></child4></p>',
 components: {
    'child4': a2
   }
});
var hr2 = Vue.extend({
template: '<hr style="clear: both; border: none; border-bottom: 1px solid #dfdfdf; margin-bottom: 10px;" />'
});
var ul4 = Vue.extend({
template: "<ul><li v-for='projects2 in majorProjects1.projects1_2'><a v-bind:href='projects2.projectsite'><img v-bind:src='projects2.projectsImg'/><div class='project_hp'><h2>{{projects2.projectsName}}</h2><p>{{projects2.projectsContent}}</p></div></a></li></ul>"
});
Vue.component('my-projects1',{
     template: '<div class="brand"><child1></child1><child2></child2><child3></child3></div>',
      components: {
    'child1': p2,
    'child2': hr2,
    'child3': ul4
    
   }
});
var vm6 = new Vue({
	el: "#majorProjects"
});