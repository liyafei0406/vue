var ProductDisplays = {
	ProductDisplaysbiao: "质量管控",
	ProductDisplaysDI:'project.html',
	ProductDisplays2:[
						{imgs:'img/gt1.jpg',ps:'PC1放样标准'},
						{imgs:'img/gt1.jpg',ps:'水电施工标准'},
						{imgs:'img/gt1.jpg',ps:'防水施工标准'},
						{imgs:'img/gt1.jpg',ps:'泥工放工标准'},
						{imgs:'img/gt1.jpg',ps:'木工框架标准'},
						{imgs:'img/gt1.jpg',ps:'木工施工标准'},
						{imgs:'img/gt1.jpg',ps:'油漆基础标准'},
						{imgs:'img/gt1.jpg',ps:'整体竣工验收'}
						]
};
var p19 = Vue.extend({
template: '<p class="in_h">{{ProductDisplays.ProductDisplaysbiao}}</p>'
});
var hr19 = Vue.extend({
template: '<hr style="clear: both; border: none; border-bottom: 1px solid #dfdfdf; margin-bottom: 10px;" />'
});
var ul19 = Vue.extend({
template: "<ul><li v-for='ProductDisplayser in ProductDisplays.ProductDisplays2'><a v-bind:href='ProductDisplays.ProductDisplaysDI'><img v-bind:src='ProductDisplayser.imgs' /><p>{{ProductDisplayser.ps}}</p></a></li></ul>"
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