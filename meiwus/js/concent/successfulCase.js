var successfulCases = {
	successfulCasesbiao: "六大风格",
	successfulCases2: [
		{successfulCasesite:'mainstream_style.html?numb3=0',successfulCasesImg:'img/hg01.jpg',successfulCasesName:'格调·生活—现代风格',successfulCasesDetails:'适合人群：都市白领，简约主义 85后--90后'},
		{successfulCasesite:'mainstream_style.html?numb3=1',successfulCasesImg:'img/hg02.jpg',successfulCasesName:'休闲·生活—北欧风格',successfulCasesDetails:'适合人群：崇尚自然、追求简洁人性化的生活方式 80后--90后'},
		{successfulCasesite:'mainstream_style.html?numb3=2',successfulCasesImg:'img/hg03.jpg',successfulCasesName:'浪漫·生活—美式风格',successfulCasesDetails:'适合人群：追求舒适、自由不喜约束的人士 75后--85后'},
		{successfulCasesite:'mainstream_style.html?numb3=3',successfulCasesImg:'img/hg04.jpg',successfulCasesName:'禅意·生活—新中式风格',successfulCasesDetails:'适合人群：性格沉稳，喜爱中国传统文化的成功人士 70后--85后'},
		{successfulCasesite:'mainstream_style.html?numb3=4',successfulCasesImg:'img/hg05.jpg',successfulCasesName:'尊享·生活—新古典风格',successfulCasesDetails:'适合人群：追求文化感，崇尚华贵典雅的成功人士 70后--80后'},
		{successfulCasesite:'mainstream_style.html?numb3=5',successfulCasesImg:'img/hg06.jpg',successfulCasesName:'轻奢·生活—港式风格',successfulCasesDetails:'适合人群：追求个性、自由、奔放不喜约束的人士 75后--85后'}
	]
};
var p5 = Vue.extend({
template: '<p class="in_h">{{successfulCases.successfulCasesbiao}}</p>'
});
var hr5 = Vue.extend({
template: '<hr style="clear: both; border: none; border-bottom: 1px solid #dfdfdf; margin-bottom: 10px;" />'
});
var ul6 = Vue.extend({
template: "<ul><li v-for='successfulCaseser in successfulCases.successfulCases2'><a v-bind:href='successfulCaseser.successfulCasesite'><img class='successful_li' v-bind:src='successfulCaseser.successfulCasesImg'/><div class='successful_ld'><p>{{successfulCaseser.successfulCasesName}}</p><p>{{successfulCaseser.successfulCasesDetails}}</p></div></a></li></ul>"
});
Vue.component('my-successful1',{
     template: '<div class="successful"><child1></child1><child2></child2><child3></child3></div>',
      components: {
    'child1': p5,
    'child2': hr5,
    'child3': ul6
    
   }
});
var vm9 = new Vue({
	el: "#successfulCase"
});