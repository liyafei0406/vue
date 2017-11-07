var introductioners = {
	introductionersImg1:'img/lun03.jpg',
	introductionersDao:'环保材料',
	introductionersDaoy:'MATERIAL',
	introductionersDiv: [
				{
				introductionersName:'基材品牌',
				h0:'配置品牌',
				p1:"环标工程，精选国际、国内一线品牌，六大全环保保障体系，从每一个细节保障家居健康！",
				img1:"img/jc01.jpg",
				img2:"img/jc02.jpg",
				img3:"img/jc03.jpg",
				img4:"img/jc04.jpg",
				img5:"img/jc05.jpg",
				img6:"img/jc06.jpg",
				img7:"img/jc07.jpg",
				img8:"img/jc08.jpg"
				},
				{
				introductionersName:'主材品牌',
				h0:'配置品牌',
				p1:"环标工程，精选国际、国内一线品牌，六大全环保保障体系，从每一个细节保障家居健康！",
				img1:"img/zc01.jpg",
				img2:"img/zc02.jpg",
				img3:"img/zc03.jpg",
				img4:"img/zc04.jpg",
				img5:"img/zc05.jpg",
				img6:"img/zc06.jpg",
				img7:"img/zc07.jpg",
				img8:"img/zc08.jpg"
				}
	]
};
var Img3_1 = Vue.extend({
template: '<img class="img12" v-bind:src="introductioners.introductionersImg1"/>'
});
var ul3_1 = Vue.extend({
	template:'<ul><li v-for="introductionersx in introductioners.introductionersDiv"><div class="project_xdiv">{{introductionersx.introductionersName}}</div><div class="particulars_li project_xli"><h4>{{introductionersx.h0}}</h4><p>{{introductionersx.p1}}</p><img v-bind:src="introductionersx.img1"/><img v-bind:src="introductionersx.img2"/><img v-bind:src="introductionersx.img3"/><img v-bind:src="introductionersx.img4"/><img v-bind:src="introductionersx.img5"/><img v-bind:src="introductionersx.img6"/><img v-bind:src="introductionersx.img7"/><img v-bind:src="introductionersx.img8"/></div></li></ul>'
});
var div3_2 = Vue.extend({
	template:'<div class="project_x"><child4></child4></div>',
	components: {
		'child4': ul3_1
	}　
});
var div3_3 = Vue.extend({
	template:'<div class="dao_title"><div class="div_dao">{{introductioners.introductionersDao}}<span>{{introductioners.introductionersDaoy}}</span></div></div>'
});
Vue.component('my-introductioners1',{
     template: '<div class="particulars"><child1></child1><child10></child10><child2></child2></div>',
     components: {
    // <my-component> 将只在父模板可用
    'child1': Img3_1,
    'child10': div3_3,
    'child2': div3_2
   }
});
var vm3_3 = new Vue({
	el: "#introductioner"
});
//根据QueryString参数名称获取值
function getQueryStringByName(name) {
    var result = location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
    if (result == null || result.length < 1) {
        return "";
    };
    return result[1];
};
//document.ready = function() {
		var numb5 = decodeURI(getQueryStringByName('numb5'));
		var project_xdiv = document.querySelectorAll('.project_x li .project_xdiv');
//		console.log(typeof numb5);
		var projecters_xx = document.querySelectorAll('.project_x li');
//		var projecters_div = document.getElementsByClassName('project_div')[0];
		var projecters_xli = document.getElementsByClassName('project_xli');
		if(numb5 === '0') {
//		   projecters_div.style.display = 'none';	
		 	for(var i = 0; i < projecters_xx.length; i ++) {
		 		projecters_xli[i].style.display = 'none';
		 		project_xdiv[i].style.backgroundColor = '#008b37';
		 	};
		 	project_xdiv[numb5].style.backgroundColor = '#e77817';
		 	projecters_xli[numb5].style.display = 'block';
		};
//};
		