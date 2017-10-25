var featurers = {
	featurers1: "project_introduction.html?numb1=0",
	featurersbiao: "产品优势",
	imgs1: "img/rightjt.png",
	imgs2: "img/leftjt.png",
	featurers2_1: "project.html",
	featurers2_2: [
		{featurersImg:'img/art09.png',featurersName:'智能家居',featurersDetails:'植入美屋定制智能家电控制系统，可通过手机远程操控家中所有电器；'},
		{featurersImg:'img/art08.png',featurersName:'个性定制',featurersDetails:'所有板材表面图案、花式均可随意定制，一板起订，满足主题家装的个性需求；'},
		{featurersImg:'img/art07.png',featurersName:'省工省料',featurersDetails:'相比传统建材，更轻、更薄、更美观，装修成本大大降低，省时省工，更省钱；'},
		{featurersImg:'img/art06.png',featurersName:'安装便捷',featurersDetails:'独特的即扣式安装方法，无需任何技术经验，即学即会，安装简单快速；'},
		{featurersImg:'img/art05.png',featurersName:'抗压耐磨',featurersDetails:'美屋定制系列板材抗压性能好，抗压耐磨性强，一次安装，百年崭新；'},
		{featurersImg:'img/art04.png',featurersName:'防水防油',featurersDetails:'独特的UV加固表层，光滑透亮，防水、防油、易清洁，油渍、污渍一擦就没；'},
		{featurersImg:'img/art03.png',featurersName:'防火阻燃',featurersDetails:'所有板材均采用防火阻燃材料，耐高温、无火苗，能有效预防和控制灾情；'},
		{featurersImg:'img/art02.png',featurersName:'健康养生',featurersDetails:'独创的养生功能涂层，能有效吸收二手烟，释放负氧离子，改善室内空气质量；'},
		{featurersImg:'img/art01.png',featurersName:'绿色环保',featurersDetails:'采用纯天然环保材料，无甲醛、无异味，当天安装好，当天即可入住；'}
	]
};
var img6 = Vue.extend({
template: '<img style="width: 5%;" class="more" v-bind:src="featurers.imgs1" alt="图片错误"/>'
});
var a5 = Vue.extend({
template: '<a v-bind:href="featurers.featurers1">{{featurers.featurersbiao}}<child5></child5></a>',
 components: {
    'child5': img6
   }
});
var p6 = Vue.extend({
template: '<p class="in_h"><child4></child4></p>',
 components: {
    'child4': a5
   }
});
var hr6 = Vue.extend({
template: '<hr style="clear: both; border: none; border-bottom: 1px solid #dfdfdf; margin-bottom: 10px;" />'
});
var ul7 = Vue.extend({
template: "<ul><li v-for='featurerser in featurers.featurers2_2'><a v-bind:href='featurers.featurers2_1'><img v-bind:src='featurerser.featurersImg'/><div class='feature_dl'><p>{{featurerser.featurersName}}</p><p>{{featurerser.featurersDetails}}</p></div></a></li></ul>"
});
var img7 = Vue.extend({
template: '<img class="brand_i01" v-bind:src="featurers.imgs2" alt="图片错误"/>'
});

var div3 = Vue.extend({
template: '<div></div>'
});
var img8 = Vue.extend({
template: '<img class="brand_i02" v-bind:src="featurers.imgs1" alt="图片错误"/>'
});
var div2 = Vue.extend({
template: '<div class="brand_lr"><child7></child7><child8 v-for="item101 in featurers.featurers2_2.length"></child8><child9></child9></div>',
 components: {
    'child7': img7,
    'child8': div3,
    'child9': img8
   }
});
Vue.component('my-feature1',{
     template: '<div class="feature"><child1></child1><child2></child2><child3></child3><child6></child6></div>',
      components: {
    'child1': p6,
    'child2': hr6,
    'child3': ul7,
    'child6': div2
    
   }
});
var vm10 = new Vue({
	el: "#featurer"
});