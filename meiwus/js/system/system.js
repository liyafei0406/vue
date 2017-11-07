
var glasspacers = {
	glasspacersImg1:'img/lun01.jpg',
	glasspacersDao:'环保保障',
	glasspacersDaoy:'SYSTEM',
	glasspacersDiv: [
				{
				glasspacersName:'八大保障',
				h0:"环保智能全装8大保障",
				p1:"让您和您的家人过上健康幸福高品质的生活",
				h1:'环保保障——环保不达标 全额退款',
				h2:'智能保障——家居智能化 安全便捷',
				h3:'质量保障——质量不合格 砸掉重做',
				h4:'设计保障——设计个性化 确保品质',
				h5:'4A保障——省钱·省心·省力·省时',
				h6:'产品保障——产品保正品 集团采购',
				h7:'软装保障——软装艺术化 点亮生活',
				h8:'服务保障——水电隐工程 保修十年',
				img1:"img/pp.jpg",
				img2:"img/pp.jpg",
				img3:"img/pp.jpg",
				img4:"img/pp.jpg",
				img5:"img/pp.jpg",
				img6:"img/pp.jpg",
				img7:"img/pp.jpg",
				img8:"img/pp.jpg"
				},
				{
				glasspacersName:'质量管控',
				h0:"8G质量管控系统",
				p1:"系统化质检服务 质量保障更放心",
				h1:'PC1放样标准',
				h2:'水电施工标准',
				h3:'防水施工标准',
				h4:'泥工放工标准',
				h5:'木工框架标准',
				h6:'木工施工标准',
				h7:'油漆基础标准',
				h8:'整体竣工验收',
				img1:"img/pp.jpg",
				img2:"img/pp.jpg",
				img3:"img/pp.jpg",
				img4:"img/pp.jpg",
				img5:"img/pp.jpg",
				img6:"img/pp.jpg",
				img7:"img/pp.jpg",
				img8:"img/pp.jpg"
				}
	]
};
var Img10_1 = Vue.extend({
template: '<img class="img12" v-bind:src="glasspacers.glasspacersImg1"/>'
});

var ul10_1 = Vue.extend({
	template:'<ul><li v-for="glasspacersx in glasspacers.glasspacersDiv"><div class="project_xdiv">{{glasspacersx.glasspacersName}}</div><div class="particulars_li project_xli"><h4>{{glasspacersx.h0}}</h4><p>{{glasspacersx.p1}}</p><h5>{{glasspacersx.h1}}</h5><img v-bind:src="glasspacersx.img1"/><h5>{{glasspacersx.h2}}</h5><img v-bind:src="glasspacersx.img2"/><h5>{{glasspacersx.h3}}</h5><img v-bind:src="glasspacersx.img3"/><h5>{{glasspacersx.h4}}</h5><img v-bind:src="glasspacersx.img4"/><h5>{{glasspacersx.h5}}</h5><img v-bind:src="glasspacersx.img5"/><h5>{{glasspacersx.h6}}</h5><img v-bind:src="glasspacersx.img6"/><h5>{{glasspacersx.h7}}</h5><img v-bind:src="glasspacersx.img7"/><h5>{{glasspacersx.h8}}</h5><img v-bind:src="glasspacersx.img8"/></div></li></ul>'
});
var div10_2 = Vue.extend({
	template:'<div class="project_x"><child4></child4></div>',
	components: {
		'child4': ul10_1
	}　
});
var div10_3 = Vue.extend({
	template:'<div class="dao_title"><div class="div_dao">{{glasspacers.glasspacersDao}}<span>{{glasspacers.glasspacersDaoy}}</span></div></div>'
});
Vue.component('my-glasspacers1',{
     template: '<div class="particulars"><child1></child1><child14></child14><child2></child2></div>',
     components: {
    // <my-component> 将只在父模板可用
    'child1': Img10_1,
    'child14': div10_3,
    'child2': div10_2
   }
});
var vm10_3 = new Vue({
	el: "#glasspacer"
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
		var numb1 = decodeURI(getQueryStringByName('numb1'));
		var project_xdiv = document.querySelectorAll('.project_x li .project_xdiv');
//		console.log(typeof numb1);
		var projecters_xx = document.querySelectorAll('.project_x li');
//		var projecters_div = document.getElementsByClassName('project_div')[0];
		var projecters_xli = document.getElementsByClassName('project_xli');
		if(numb1 === '0') {
//		   projecters_div.style.display = 'none';	
		 	for(var i = 0; i < projecters_xx.length; i ++) {
		 		projecters_xli[i].style.display = 'none';
		 		project_xdiv[i].style.backgroundColor = '#008b37';
		 	};
		 	project_xdiv[numb1].style.backgroundColor = '#e77817';
		 	projecters_xli[numb1].style.display = 'block';
		}else if(numb1 === '1') {
//			 projecters_div.style.display = 'none';	
		 	for(var i = 0; i < projecters_xx.length; i ++) {
		 		projecters_xli[i].style.display = 'none';
		 		project_xdiv[i].style.backgroundColor = '#008b37';
		 	};
		 	project_xdiv[numb1].style.backgroundColor = '#e77817';
		 	projecters_xli[numb1].style.display = 'block';
		};
//};