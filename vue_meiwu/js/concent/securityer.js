let securityers = {
	securityers1: "project_introduction.html?numb1=3",
	imgs1: "img/rightjt.png",
	securityersbiao: "合作保障",
	securityersImg: 'img/security.jpg'
};
let img5 = Vue.extend({
template: '<img style="width: 5%;" class="more" v-bind:src="securityers.imgs1" alt="图片错误"/>'
});
let a4 = Vue.extend({
template: '<a v-bind:href="securityers.securityers1">{{securityers.securityersbiao}}<child5></child5></a>',
 components: {
    'child5': img5
   }
});
let p4 = Vue.extend({
template: '<p class="in_h"><child4></child4></p>',
 components: {
    'child4': a4
   }
});
let hr4 = Vue.extend({
template: '<hr style="clear: both; border: none; border-bottom: 1px solid #dfdfdf; margin-bottom: 10px;" />'
});
let imger1 = Vue.extend({
template: "<img style='width: 94%; margin-left: 3%;' v-bind:src='securityers.securityersImg'/>"
});
Vue.component('my-securityers1',{
     template: '<div class="security"><child1></child1><child2></child2><child3></child3></div>',
      components: {
    'child1': p4,
    'child2': hr4,
    'child3': imger1
    
   }
});
let vm8 = new Vue({
	el: "#securityer"
});