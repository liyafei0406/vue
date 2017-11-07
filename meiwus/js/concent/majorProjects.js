var majorProjects1 = {
	projectsbiao: "环保保障",
	projects1_2: [
				{projectsite:'system.html?numb1=0',projectsImg:'img/at1.png',projectsName:'环保保障',projectsContent:'环保不达标 全额退款'},
				{projectsite:'system.html?numb1=0',projectsImg:'img/at1.png',projectsName:'智能保障',projectsContent:'家居智能化 安全便捷'},
				{projectsite:'system.html?numb1=0',projectsImg:'img/at1.png',projectsName:'质量保障',projectsContent:'质量不合格 砸掉重做'},
				{projectsite:'system.html?numb1=0',projectsImg:'img/at1.png',projectsName:'设计保障',projectsContent:'设计个性化 确保品质'},
				{projectsite:'system.html?numb1=0',projectsImg:'img/at1.png',projectsName:'4A保障',projectsContent:'省钱·省心·省力·省时'},
				{projectsite:'system.html?numb1=0',projectsImg:'img/at1.png',projectsName:'产品保障',projectsContent:'产品保正品 集团采购'},
				{projectsite:'system.html?numb1=0',projectsImg:'img/at1.png',projectsName:'软装保障',projectsContent:'软装艺术化 点亮生活'},
				{projectsite:'system.html?numb1=0',projectsImg:'img/at1.png',projectsName:'服务保障',projectsContent:'水电隐工程 保修十年'}	
	]
};
var a2 = Vue.extend({
template: '<a>{{majorProjects1.projectsbiao}}</a>'
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