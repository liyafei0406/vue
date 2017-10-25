var marketAdvantages = {
	marketAdvantages1: "market_analysis.html?numb2=1",
	imgs1: "img/rightjt.png",
	marketAdvantagesbiao: "市场优势",
	marketAdvantages2_1: 'market_analysis.html?numb2=0',
	marketAdvantages2_2: [
				{marketsImg:'img/sc001.jpg',marketsName:'新房装修',marketsDetails:'美屋定制让新房装饰独具一格！'},
				{marketsImg:'img/sc002.jpg',marketsName:'旧房翻新',marketsDetails:'美屋定制让旧房重装焕发光彩！'},
				{marketsImg:'img/sc003.jpg',marketsName:'工装工程',marketsDetails:'承接行政单位装修改造工程！'},
				{marketsImg:'img/sc004.jpg',marketsName:'商装市场',marketsDetails:'为商家门店装修提供主题定制！'},
	]
};
var img4 = Vue.extend({
template: '<img style="width: 5%;" class="more" v-bind:src="marketAdvantages.imgs1" alt="图片错误"/>'
});
var a3 = Vue.extend({
template: '<a v-bind:href="marketAdvantages.marketAdvantages1">{{marketAdvantages.marketAdvantagesbiao}}<child5></child5></a>',
 components: {
    'child5': img4
   }
});
var p3 = Vue.extend({
template: '<p class="in_h"><child4></child4></p>',
 components: {
    'child4': a3
   }
});
var hr3 = Vue.extend({
template: '<hr style="clear: both; border: none; border-bottom: 1px solid #dfdfdf; margin-bottom: 10px;" />'
});
var ul5 = Vue.extend({
template: "<ul><li v-for='markets2 in marketAdvantages.marketAdvantages2_2'><a v-bind:href='marketAdvantages.marketAdvantages2_1'><img v-bind:src='markets2.marketsImg'/><h2>{{markets2.marketsName}}</h2><p>{{markets2.marketsDetails}}</p></a></li></ul>"
});
Vue.component('my-markets1',{
     template: '<div class="brand1"><child1></child1><child2></child2><child3></child3></div>',
      components: {
    'child1': p3,
    'child2': hr3,
    'child3': ul5
    
   }
});
var vm7 = new Vue({
	el: "#marketAdvantage"
});