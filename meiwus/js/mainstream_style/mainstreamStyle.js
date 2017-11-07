var analysisers = {
	analysisersImg1:'img/148231840872338l2iy.jpg',
	analysisersDao:'主流风格',
	analysisersDaoy:'STYLES',
	analysisersDiv: [
				{
				analysisersName:'现代风格',
				h0:"《格调·生活》——现代风格",
				h1:"适合人群：都市白领，简约主义 85后--90后",
				p1:"现代风格：即现代主义风格，提倡突破传统，创造革新，重视功能和空间组织，注重发挥结构本身的形式美。现代主义造型简洁，反对多余装饰，崇尚合理的结构工艺，设计表现得简约而不简单，时尚而又典雅，整体空间表现得深沉、雅致又不失灵性。",
				img1:"img/xd01.jpg",
				img2:"img/xd02.jpg",
				img3:"img/xd03.jpg",
				img4:"img/xd04.jpg",
				img5:"img/xd05.jpg"
				},
				{
				analysisersName:'北欧风格',
				h0:"《休闲·生活》——北欧风格",
				h1:"适合人群：崇尚自然、追求简洁人性化的生活方式 80后--90后",
				p1:"北欧风格更加注重简洁、实用、满足了最基本的功能性，摒弃装饰性的设计手法，却又有别于冰冷的极简主义，是一种更加有温度的家居风格。",
				img1:"img/xd01.jpg",
				img2:"img/xd02.jpg",
				img3:"img/xd03.jpg",
				img4:"img/xd04.jpg",
				img5:"img/xd05.jpg"
				},	
				{
				analysisersName:'美式风格',
				h0:"《浪漫·生活》——美式风格",
				h1:"适合人群：追求舒适、自由不喜约束的人士 75后--85后",
				p1:"美式风格较注重历史感，不仅反映在软件摆件上偏爱对仿古艺术品的喜爱，同时也反映在装修上对各种仿古地砖、石材的偏爱和对各种仿旧工艺的追求上。",
				img1:"img/xd01.jpg",
				img2:"img/xd02.jpg",
				img3:"img/xd03.jpg",
				img4:"img/xd04.jpg",
				img5:"img/xd05.jpg"
				},	
				{
				analysisersName:'新中式风格',
				h0:"《禅意·生活》——新中式风格",
				h1:"适合人群：性格沉稳，喜爱中国传统文化的成功人士 70后--85后",
				p1:"新中式风格诞生于中国传统文化复兴的新时代，以含蓄秀美为主要特色。新中式风格通过对传统文化的认识，将现代元素和传统元素结合在一起，清明家具、窗棂、布艺床品相互辉映，以现代人的审美需求来打造富有传统韵味的事物，让传统艺术在当今社会得到合适的体现。",
				iimg1:"img/xd01.jpg",
				img2:"img/xd02.jpg",
				img3:"img/xd03.jpg",
				img4:"img/xd04.jpg",
				img5:"img/xd05.jpg"
				},	
				{
				analysisersName:'新古典风格',
				h0:"《尊享·生活》——新古典风格",
				h1:"适合人群：追求文化感，崇尚华贵典雅的成功人士 70后--80后",
				p1:"新古典主义的设计风格是经过改良的古典主义风格。新古典风格一方面保留了材质、色彩的大致风格，可以很强烈的感受传统的历史痕迹与浑厚的文化蕴，同时又摒弃了过于复杂的肌理和装饰，简化了线条。",
				img1:"img/xd01.jpg",
				img2:"img/xd02.jpg",
				img3:"img/xd03.jpg",
				img4:"img/xd04.jpg",
				img5:"img/xd05.jpg"
				},	
				{
				analysisersName:'港式风格',
				h0:"《轻奢·生活》——港式风格",
				h1:"适合人群：追求个性、自由、奔放不喜约束的人士 75后--85后",
				p1:"港式风格多以金属色和线条感营造金碧辉煌的豪华感，简洁而不失时尚。港式风格是码头文化与殖民文化的产物，对于钢性材料的运用确是到了极致，换句话说，港式文化属于多源头文化。",
				img1:"img/xd01.jpg",
				img2:"img/xd02.jpg",
				img3:"img/xd03.jpg",
				img4:"img/xd04.jpg",
				img5:"img/xd05.jpg"
				}
	]
};
var Img4_1 = Vue.extend({
template: '<img class="img12" v-bind:src="analysisers.analysisersImg1"/>'
});

var ul4_1 = Vue.extend({
	template:'<ul><li v-for="analysisersx in analysisers.analysisersDiv"><div class="project_xdiv">{{analysisersx.analysisersName}}</div><div class="particulars_li project_xli"><h4>{{analysisersx.h0}}</h4><h5>{{analysisersx.h1}}</h5><p>{{analysisersx.p1}}</p><img v-bind:src="analysisersx.img1"/><img v-bind:src="analysisersx.img2"/><img v-bind:src="analysisersx.img3"/><img v-bind:src="analysisersx.img4"/><img v-bind:src="analysisersx.img5"/></div></li></ul>'
});
var div4_2 = Vue.extend({
	template:'<div class="project_x"><child4></child4></div>',
	components: {
		'child4': ul4_1
	}　
});
var div4_3 = Vue.extend({
	template:'<div class="dao_title"><div class="div_dao">{{analysisers.analysisersDao}}<span>{{analysisers.analysisersDaoy}}</span></div></div>'
});
Vue.component('my-analysisers1',{
     template: '<div class="particulars"><child1></child1><child16></child16><child2></child2></div>',
     components: {
    // <my-component> 将只在父模板可用
    'child1': Img4_1,
    'child16': div4_3,
    'child2': div4_2
   }
});
var vm4_3 = new Vue({
	el: "#analysiser"
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
		var numb3 = decodeURI(getQueryStringByName('numb3'));
//		console.log(typeof numb3);
		var projecters_xx = document.querySelectorAll('.project_x li');
		var project_xdiv = document.querySelectorAll('.project_x li .project_xdiv');
//		var projecters_div = document.getElementsByClassName('project_div')[0];
		var projecters_xli = document.getElementsByClassName('project_xli');
		if(numb3 === '0') {
//		   projecters_div.style.display = 'none';	
		 	for(var i = 0; i < projecters_xx.length; i ++) {
		 		projecters_xli[i].style.display = 'none';
		 		project_xdiv[i].style.backgroundColor = '#008b37';
		 	};
		 	project_xdiv[numb3].style.backgroundColor = '#e77817';
		 	projecters_xli[numb3].style.display = 'block';
		}else if(numb3 === '1') {
//			 projecters_div.style.display = 'none';	
		 	for(var i = 0; i < projecters_xx.length; i ++) {
		 		projecters_xli[i].style.display = 'none';
		 		project_xdiv[i].style.backgroundColor = '#008b37';
		 	};
		 	project_xdiv[numb3].style.backgroundColor = '#e77817';
		 	projecters_xli[numb3].style.display = 'block';
		}else if(numb3 === '2') {
//			 projecters_div.style.display = 'none';	
		 	for(var i = 0; i < projecters_xx.length; i ++) {
		 		projecters_xli[i].style.display = 'none';
		 		project_xdiv[i].style.backgroundColor = '#008b37';
		 	};
		 	project_xdiv[numb3].style.backgroundColor = '#e77817';
		 	projecters_xli[numb3].style.display = 'block';
		}else if(numb3 === '3') {
//			 projecters_div.style.display = 'none';	
		 	for(var i = 0; i < projecters_xx.length; i ++) {
		 		projecters_xli[i].style.display = 'none';
		 		project_xdiv[i].style.backgroundColor = '#008b37';
		 	};
		 	project_xdiv[numb3].style.backgroundColor = '#e77817';
		 	projecters_xli[numb3].style.display = 'block';
		}else if(numb3 === '4') {
//			 projecters_div.style.display = 'none';	
		 	for(var i = 0; i < projecters_xx.length; i ++) {
		 		projecters_xli[i].style.display = 'none';
		 		project_xdiv[i].style.backgroundColor = '#008b37';
		 	};
		 	project_xdiv[numb3].style.backgroundColor = '#e77817';
		 	projecters_xli[numb3].style.display = 'block';
		}else if(numb3 === '5') {
//			 projecters_div.style.display = 'none';	
		 	for(var i = 0; i < projecters_xx.length; i ++) {
		 		projecters_xli[i].style.display = 'none';
		 		project_xdiv[i].style.backgroundColor = '#008b37';
		 	};
		 	project_xdiv[numb3].style.backgroundColor = '#e77817';
		 	projecters_xli[numb3].style.display = 'block';
		};
//};