var new1 = {
	news: "new.html",
	newsDetaile: "news_details.html",
	imgs1: "img/rightjt.png",
	newbiao: "新闻动态",
	imgs2:'img/1_172457_1_lit.jpg',
	imgs3:'img/1_170628_1_lit.jpg',
	detailer:[ 
	{detailNei:'· 中国将成为继美之后全球第二大安防市场',detailTime:'2017-10-24'},
	{detailNei:'· 无线视频监控进入飞速发展时代',detailTime:'2017-10-24'},
	{detailNei:'· 监控技术发展趋势及衍生的新需求',detailTime:'2017-10-24'},
	{detailNei:'· 高清晰度针孔式隐型镜头分析',detailTime:'2017-10-24'},
	{detailNei:'· CMOS摄像机和CCD摄像机到底哪种好些',detailTime:'2017-10-24'}
	]
};
//console.log(new1.detailer);
var img2 = Vue.extend({
template: '<img style="width: 5%;" class="more" v-bind:src="new1.imgs1" alt="图片错误"/>'
});
var img3 = Vue.extend({
template: '<a v-bind:href="new1.newsDetaile"><img v-bind:src= "new1.imgs2" alt="图片错误"/></a>'
});
var img4 = Vue.extend({
template: '<a v-bind:href="new1.newsDetaile"><img v-bind:src= "new1.imgs3" alt="图片错误"/></a>'
});
var div1 = Vue.extend({
template: '<div class="news_div"><child6></child6><child7></child7></div>',
components: {
    'child6': img3,
    'child7': img4
   }
});
var a1 = Vue.extend({
template: '<a v-bind:href="new1.news">{{new1.newbiao}}<child5></child5></a>',
 components: {
    'child5': img2
   }
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
var ul3 = Vue.extend({
template: "<ul class='ic'><li v-for='new2 in new1.detailer'><a v-bind:href='new1.newsDetaile'><p>{{new2.detailNei}}</p><span>{{new2.detailTime}}</span></a></li></ul>"
});
Vue.component('my-news1',{
     template: '<div class="indexL"><child1></child1><child2></child2><child8></child8><child3></child3></div>',
      components: {
    'child1': p1,
    'child2': hr1,
    'child8': div1,
    'child3': ul3
    
   }
});
var vm5 = new Vue({
	el: "#news1"
});