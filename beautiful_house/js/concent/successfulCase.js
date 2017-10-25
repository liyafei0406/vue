var successfulCases = {
	successfulCases1: "market_analysis.html?numb2=2",
	successfulCasesbiao: "成功案例",
	successfulCases2: [
		{successfulCasesImg:'img/ren01.jpg',successfulCasesName:'代理商-叶  明',successfulCasesDetails:'人只要鼓起勇气，告别海岸，才能发现新的海洋！'},
		{successfulCasesImg:'img/ren02.jpg',successfulCasesName:'代理商-赵玉斌',successfulCasesDetails:'没有做不到，只有想不到。我这么大年龄同样敢创业！'},
		{successfulCasesImg:'img/ren03.jpg',successfulCasesName:'代理商-李强强',successfulCasesDetails:'我选择美屋定制，因为我深信创意养生是个大市场！'},
		{successfulCasesImg:'img/ren04.jpg',successfulCasesName:'代理商-王金利',successfulCasesDetails:'对于美屋定制的喜爱，让我见人就谈、见人就演示！'},
		{successfulCasesImg:'img/ren05.jpg',successfulCasesName:'代理商-杨国欢',successfulCasesDetails:'做生意真的就是做人，诚实、踏实地干，做啥都成！'},
	]
};
var p5 = Vue.extend({
template: '<p class="in_h">{{successfulCases.successfulCasesbiao}}</p>'
});
var hr5 = Vue.extend({
template: '<hr style="clear: both; border: none; border-bottom: 1px solid #dfdfdf; margin-bottom: 10px;" />'
});
var ul6 = Vue.extend({
template: "<ul><li v-for='successfulCaseser in successfulCases.successfulCases2'><a v-bind:href='successfulCases.successfulCases1'><img class='successful_li' v-bind:src='successfulCaseser.successfulCasesImg'/><div class='successful_ld'><p>{{successfulCaseser.successfulCasesName}}</p><p>{{successfulCaseser.successfulCasesDetails}}</p></div></a></li></ul>"
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