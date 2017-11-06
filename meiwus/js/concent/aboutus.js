var aboutus = {
	aboutus1_1: "about_us.html",
	aboutusbiao: "全案流程",
	aboutusImg:'img/qa.png',
	aboutusH:'环保智能全装基本流程',
	aboutusP:'简单清晰 畅享无忧'
};
var a2 = Vue.extend({
template: '<a v-bind:href="aboutus.aboutus1_1">{{aboutus.aboutusbiao}}</a>'
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
template: '<a v-bind:href="aboutus.aboutus1_1"><img style="width:94%;margin-left:3%;" v-bind:src="aboutus.aboutusImg" alt="美屋定制" /></a>'
});
var p3 = Vue.extend({
template: '<p class="about_p">{{aboutus.aboutusP}}</p>'
});
var h5 = Vue.extend({
template: '<h5>{{aboutus.aboutusH}}</h5>'
});
Vue.component('my-aboutus1',{
     template: '<div class="aboutuss"><child1></child1><child2></child2><child7></child7><child3></child3><child6></child6></div>',
      components: {
    'child1': p2,
    'child2': hr2,
    'child7': h5,
    'child3': p3,
    'child6': img4
//  'child8':img6
   }
});
var vm6 = new Vue({
	el: "#aboutus"
});