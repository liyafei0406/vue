var marketAdvantages = {
	marketAdvantagesbiao: "环保案例",
	marketAdvantages2_2: [
				{marketsite:'protection_case.html?numb2=0',marketsImg:'img/kc.jpg',marketsName:'客餐厅',marketsDetails:'LIVING'},
				{marketsite:'protection_case.html?numb2=1',marketsImg:'img/kc.jpg',marketsName:'阳台',marketsDetails:'BALCONY'},
				{marketsite:'protection_case.html?numb2=2',marketsImg:'img/kc.jpg',marketsName:'水电',marketsDetails:'WATEN'},
				{marketsite:'protection_case.html?numb2=3',marketsImg:'img/kc.jpg',marketsName:'卫生间 ',marketsDetails:'TOILET'},
				{marketsite:'protection_case.html?numb2=4',marketsImg:'img/kc.jpg',marketsName:'卧室',marketsDetails:'BEDROOM'},
				{marketsite:'protection_case.html?numb2=5',marketsImg:'img/kc.jpg',marketsName:'厨房 ',marketsDetails:'KITCHEN'},
	]
};
var a3 = Vue.extend({
template: '<a>{{marketAdvantages.marketAdvantagesbiao}}</a>'
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
template: "<ul><li v-for='markets2 in marketAdvantages.marketAdvantages2_2'><a v-bind:href='markets2.marketsite'><img v-bind:src='markets2.marketsImg'/><h2>{{markets2.marketsName}}</h2><p>{{markets2.marketsDetails}}</p></a></li></ul>"
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