var aboutus = {
	aboutus1_1: "about_us.html",
	imgs1: "img/rightjt.png",
	aboutusbiao: "公司简介",
	aboutusImg:'img/meiwu.jpg',
	aboutusImg1:'img/mwwap_01.jpg',
	aboutusP:'美屋定制是中国宋庄 · 创意工场旗下品牌，专注于装饰装修领域，打造智能、环保、养生、创意的定制空间，为人类健康居住环境提供系统解决方案。中国 • 宋庄创意工场总部基地将继续立足于文化创意产业领域，坚持创业带动就业的发展路线，实施“产、融、政”相结合的模式，帮助创业者学习新技能，找到好项目，成功创业；帮助中小企业建立市场体系，拓展渠道网络，快速发展壮大，走向全国....'
};
var img3 = Vue.extend({
template: '<img style="width: 5%;" class="more" v-bind:src="aboutus.imgs1" alt="图片错误"/>'
});
var a2 = Vue.extend({
template: '<a v-bind:href="aboutus.aboutus1_1">{{aboutus.aboutusbiao}}<child5></child5></a>',
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
var img4 = Vue.extend({
template: '<a v-bind:href="aboutus.aboutus1_1"><img style="width:94%;margin-left:3%;" v-bind:src="aboutus.aboutusImg" alt="图片错误" /></a>'
});
var img5 = Vue.extend({
template: '<a v-bind:href="aboutus.aboutus1_1"><img style="width:94%;margin-left:3%;" v-bind:src="aboutus.aboutusImg1" alt="图片错误" /></a>'
});
//var img6 = Vue.extend({
//template: '<a v-bind:href="aboutus.aboutus1_1"><img style="width:94%;margin-left:3%;" v-bind:src="aboutus.aboutusImg2" alt="图片错误" /></a>'
//});
var p3 = Vue.extend({
template: '<p class="about_p">{{aboutus.aboutusP}}</p>'
});
Vue.component('my-aboutus1',{
     template: '<div class="aboutuss"><child1></child1><child2></child2><child3></child3><child6></child6><child7></child7></div>',
      components: {
    'child1': p2,
    'child2': hr2,
    'child3': img4,
    'child6': p3,
    'child7':img5
//  'child8':img6
   }
});
var vm6 = new Vue({
	el: "#aboutus"
});