let new1 = {
	news: "new.html",
	newsDetaile: "news_details.html",
	imgs1: "img/rightjt.png",
	newbiao: "新闻动态",
	detailer:[
		'· 中国将成为继美之后全球第二大安防市场',
		'· 无线视频监控进入飞速发展时代',
		'· 监控技术发展趋势及衍生的新需求',
		'· 高清晰度针孔式隐型镜头分析',
		'· CMOS摄像机和CCD摄像机到底哪种好些'
		]
};
//console.log(new1.detailer);
let img2 = Vue.extend({
template: '<img style="width: 5%;" class="more" v-bind:src="new1.imgs1" alt="图片错误"/>'
});
let a1 = Vue.extend({
template: '<a v-bind:href="new1.news">{{new1.newbiao}}<child5></child5></a>',
 components: {
    'child5': img2
   }
});
let p1 = Vue.extend({
template: '<p class="in_h"><child4></child4></p>',
 components: {
    'child4': a1
   }
});
let hr1 = Vue.extend({
template: '<hr style="clear: both; border: none; border-bottom: 1px solid #dfdfdf; margin-bottom: 10px;" />'
});
let ul3 = Vue.extend({
template: "<ul class='ic'><li v-for='new2 in new1.detailer'><a v-bind:href='new1.newsDetaile'>{{new2}}</a></li></ul>"
});
Vue.component('my-news1',{
     template: '<div class="indexL"><child1></child1><child2></child2><child3></child3></div>',
      components: {
    'child1': p1,
    'child2': hr1,
    'child3': ul3
    
   }
});
let vm5 = new Vue({
	el: "#news1"
});