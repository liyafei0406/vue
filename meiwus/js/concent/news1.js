var new1 = {
	news: "culture.html?numb4=0",
	newbiao: "品牌故事",
	newsP:'中国创意快装工场始创于2003年，始终遵循为客户打造环保、智能、省钱、省时、省心、省力专业化的环保智能全装发展战略，依托卓越的设计实力与精湛的施工工艺，严格遵循全过程的高标准控制流程...',
	newsImg:'img/ps01.jpg',
	newsImg1:'img/ps02.jpg'
	
};
//console.log(new1.detailer);
var img3 = Vue.extend({
template: '<a v-bind:href="new1.news"><img style="width:94%;margin-left:3%;" v-bind:src="new1.newsImg" alt="美屋定制"/></a>'
});
var img4 = Vue.extend({
template: '<a v-bind:href="new1.news"><img style="width:94%;margin-left:3%;" v-bind:src="new1.newsImg1" alt="美屋定制"/></a>'
});
var div1 = Vue.extend({
template: '<div class="news_div"><child6></child6></div>',
components: {
    'child6': img3
   }
});
var a1 = Vue.extend({
template: '<a v-bind:href="new1.news">{{new1.newbiao}}</a>'
});
var p1 = Vue.extend({
template: '<p class="in_h"><child4></child4></p>',
 components: {
    'child4': a1
   }
});
var hr1 = Vue.extend({
template: '<hr style="clear: both; border: none; border-bottom: 1px solid #dfdfdf; margin-bottom: 10px;" />'
});
var p2 = Vue.extend({
template: '<p class="about_p">{{new1.newsP}}</p>'
});
Vue.component('my-news1',{
     template: '<div class="indexL"><child1></child1><child2></child2><child8></child8><child3></child3><child7></child7></div>',
      components: {
    'child1': p1,
    'child2': hr1,
    'child8': div1,
    'child3': p2,
    'child7': img4
    
   }
});
var vm5 = new Vue({
	el: "#news1"
});