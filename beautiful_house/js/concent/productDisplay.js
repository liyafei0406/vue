var ProductDisplays = {
	ProductDisplaysbiao: "产品展示",
	ProductDisplaysDI:'project.html',
	ProductDisplays2:[
						'img/a002.jpg',
						'img/a003.jpg',
						'img/a005.jpg',
						'img/a006.jpg',
						'img/a008.jpg',
						'img/a009.jpg',
						'img/a014.jpg',
						'img/a015.jpg'
						]
};
var p19 = Vue.extend({
template: '<p class="in_h">{{ProductDisplays.ProductDisplaysbiao}}</p>'
});
var hr19 = Vue.extend({
template: '<hr style="clear: both; border: none; border-bottom: 1px solid #dfdfdf; margin-bottom: 10px;" />'
});
var ul19 = Vue.extend({
template: "<ul><li v-for='ProductDisplayser in ProductDisplays.ProductDisplays2'><a v-bind:href='ProductDisplays.ProductDisplaysDI'><img v-bind:src='ProductDisplayser' /></a></li></ul>"
});
Vue.component('my-productdisplay1',{
     template: '<div class="productDisplayss"><child1></child1><child2></child2><child3></child3></div>',
      components: {
    'child1': p19,
    'child2': hr19,
    'child3': ul19
    
   }
});
var vm99 = new Vue({
	el: "#productDisplay"
});