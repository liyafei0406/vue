var magicpaintingers = {
	magicpaintingersImg1:'img/lun06.jpg',
	magicpaintingersDao:'智能家居',
	magicpaintingersDaoy:'SMART',
	magicpaintingersLi: {
		H4:'环保智能全装空间',
		P1:'不管您身在何地，随时随地掌控家里一切',
		H5_1:'智能安防系统',
		H5_2:'智能照明系统',
		H5_3:'智能影音系统',
		H5_4:'智能家电控制系统',
		H5_5:'智能门锁系统',
		H5_6:'智能门窗系统',
		H5_7:'智能睡眠系统',
		P5_1:'安防门禁系统支持门锁、门磁、人体红外感应器、烟雾报警器、摄像头等多种安防设备的组合，满足家庭安全的第一需求。',
		P5_2:'除本地触控外，支持远程操控。结合RGB灯带DIY任意场景氛围模式。',
		P5_3:'远程控制全部家电设备，实时查看家电当前开关状态，并可设置家电之间的联动。',
		P5_4:'边刷牙边浏览天气、穿衣建议、新闻快讯，同时播放音乐、打开厨房的面包机、客厅的饮水机。',
		P5_5:'指纹、感受应式3/卡、防泄漏密码、临时手机验证码、应急式钥匙插孔五种开锁模式。',
		P5_6:'根据光线强弱联动调整窗帘开度，根据空气质量联动开窗通风，打造健康舒适的生活环境。',
		P5_7:'监控呼吸频率、心跳，发现异常及时报警，保障用户身体健康，并在次日提交完整详尽的睡眠报告，有助改善睡眠状况。',
		img1:'img/zn01.jpg',
		img2:'img/zn01.jpg',
		img3:'img/zn01.jpg',
		img4:'img/zn01.jpg',
		img5:'img/zn01.jpg',
		img6:'img/zn01.jpg',
		img7:'img/zn01.jpg'
	}
};
var Img1 = Vue.extend({
template: '<img class="img12" v-bind:src="magicpaintingers.magicpaintingersImg1"/>'
});
var h49_1 = Vue.extend({
	template:'<h4>{{magicpaintingers.magicpaintingersLi.H4}}</h4>'
});
var h59_1 = Vue.extend({
	template:'<h5>{{magicpaintingers.magicpaintingersLi.H5_1}}</h5>'
});
var h59_2 = Vue.extend({
	template:'<h5>{{magicpaintingers.magicpaintingersLi.H5_2}}</h5>'
});
var h59_3 = Vue.extend({
	template:'<h5>{{magicpaintingers.magicpaintingersLi.H5_3}}</h5>'
});
var h59_4 = Vue.extend({
	template:'<h5>{{magicpaintingers.magicpaintingersLi.H5_4}}</h5>'
});
var h59_5 = Vue.extend({
	template:'<h5>{{magicpaintingers.magicpaintingersLi.H5_5}}</h5>'
});
var h59_6 = Vue.extend({
	template:'<h5>{{magicpaintingers.magicpaintingersLi.H5_6}}</h5>'
});
var h59_7 = Vue.extend({
	template:'<h5>{{magicpaintingers.magicpaintingersLi.H5_7}}</h5>'
});
var p1 = Vue.extend({
	template:'<p>{{magicpaintingers.magicpaintingersLi.P1}}</p>'
});
var p9_1 = Vue.extend({
	template:'<p>{{magicpaintingers.magicpaintingersLi.P5_1}}</p>'
});
var p9_2 = Vue.extend({
	template:'<p>{{magicpaintingers.magicpaintingersLi.P5_2}}</p>'
});
var p9_3 = Vue.extend({
	template:'<p>{{magicpaintingers.magicpaintingersLi.P5_3}}</p>'
});
var p9_4 = Vue.extend({
	template:'<p>{{magicpaintingers.magicpaintingersLi.P5_4}}</p>'
});
var p9_5 = Vue.extend({
	template:'<p>{{magicpaintingers.magicpaintingersLi.P5_5}}</p>'
});
var p9_6 = Vue.extend({
	template:'<p>{{magicpaintingers.magicpaintingersLi.P5_6}}</p>'
});
var p9_7 = Vue.extend({
	template:'<p>{{magicpaintingers.magicpaintingersLi.P5_7}}</p>'
});
var Img9_1 = Vue.extend({
	template:'<img v-bind:src="magicpaintingers.magicpaintingersLi.img1" />'
});
var Img9_2 = Vue.extend({
	template:'<img v-bind:src="magicpaintingers.magicpaintingersLi.img2" />'
});
var Img9_3 = Vue.extend({
	template:'<img v-bind:src="magicpaintingers.magicpaintingersLi.img3" />'
});
var Img9_4 = Vue.extend({
	template:'<img v-bind:src="magicpaintingers.magicpaintingersLi.img4" />'
});
var Img9_5 = Vue.extend({
	template:'<img v-bind:src="magicpaintingers.magicpaintingersLi.img5" />'
});
var Img9_6 = Vue.extend({
	template:'<img v-bind:src="magicpaintingers.magicpaintingersLi.img6" />'
});
var Img9_7 = Vue.extend({
	template:'<img v-bind:src="magicpaintingers.magicpaintingersLi.img7" />'
});
var div9_1 = Vue.extend({
	template:'<div class="particulars_li project_div"><child5></child5><child6></child6><child7></child7><child8></child8><child9></child9><child10></child10><child11></child11><child12></child12><child13></child13><child14></child14><child15></child15><child16></child16><child17></child17><child18></child18><child19></child19><child20></child20><child21></child21><child22></child22><child23></child23><child24></child24><child25></child25><child26></child26><child27></child27></div>',
	components: {
		'child5': h49_1,
    	'child6': p1,
    	'child7': h59_1,
    	'child8': p9_1,
    	'child9': Img9_1,
    	'child10': h59_2,
    	'child11': p9_2,
    	'child12': Img9_2,
    	'child13': h59_3,
    	'child14': p9_3,
    	'child15': Img9_3,
    	'child16': h59_4,
    	'child17': p9_4,
    	'child18': Img9_4,
    	'child19': h59_5,
    	'child20': p9_5,
    	'child21': Img9_5,
    	'child22': h59_6,
    	'child23': p9_6,
    	'child24': Img9_6,
    	'child25': h59_7,
    	'child26': p9_7,
    	'child27': Img9_7
	}
});
var div9_3 = Vue.extend({
	template:'<div class="dao_title"><div class="div_dao">{{magicpaintingers.magicpaintingersDao}}<span>{{magicpaintingers.magicpaintingersDaoy}}</span></div></div>'
});
Vue.component('my-magicpaintingers1',{
     template: '<div class="particulars"><child1></child1><child2></child2><child3></child3></div>',
     components: {
    // <my-component> 将只在父模板可用
    'child1': Img1,
    'child2': div9_3,
    'child3': div9_1
   }
});
var vm9_3 = new Vue({
	el: "#magicpaintinger"
});