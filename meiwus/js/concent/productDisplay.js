var ProductDisplays = {
	ProductDisplaysbiao: "质量管控",
	ProductDisplaysDI:'system.html?numb1=1',
	ProductDisplays2:[
						{imgs:'img/bz01.jpg',ps:'PC1:1放样标准'},
						{imgs:'img/bz02.jpg',ps:'水电施工标准'},
						{imgs:'img/bz03.jpg',ps:'防水施工标准'},
						{imgs:'img/bz04.jpg',ps:'泥工放工标准'},
						{imgs:'img/bz05.jpg',ps:'木工框架标准'},
						{imgs:'img/bz06.jpg',ps:'木工施工标准'},
						{imgs:'img/bz07.jpg',ps:'油漆基础标准'},
						{imgs:'img/bz08.jpg',ps:'整体竣工验收'}
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