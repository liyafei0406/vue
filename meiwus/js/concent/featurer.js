var featurers = {
	featurers1: "project_introduction.html",
	featurersbiao: "智能家居",
	imgs1: "img/rightjt.png",
	imgs2: "img/leftjt.png",
	featurers2_1: "smart_home.html",
	featurers2_2: [
		{featurersImg:'img/zn1.jpg',featurersName:'智能睡眠系统',featurersP:'监控呼吸频率、心跳，发现异常及时报警，保障用户身体健康，并在次日提交完整详尽的睡眠报告，有助改善睡眠状况。'},
		{featurersImg:'img/zn1.jpg',featurersName:'智能门窗系统',featurersP:'根据光线强弱联动调整窗帘开度，根据空气质量联动开窗通风，打造健康舒适的生活环境。'},
		{featurersImg:'img/zn1.jpg',featurersName:'智能门锁系统',featurersP:'指纹、感受应式3/卡、防泄漏密码、临时手机验证码、应急式钥匙插孔五种开锁模式。'},
	{featurersImg:'img/zn1.jpg',featurersName:'智能家电控制系统',featurersP:'边刷牙边浏览天气、穿衣建议、新闻快讯，同时播放音乐、打开厨房的面包机、客厅的饮水机。'},	
		{featurersImg:'img/zn1.jpg',featurersName:'智能影音系统',featurersP:'远程控制全部家电设备，实时查看家电当前开关状态，并可设置家电之间的联动。'},
		{featurersImg:'img/zn1.jpg',featurersName:'智能照明系统',featurersP:'除本地触控外，支持远程操控。结合RGB灯带DIY任意场景氛围模式。'},
		
		{featurersImg:'img/zn1.jpg',featurersName:'智能安防系统',featurersP:'安防门禁系统支持门锁、门磁、人体红外感应器、烟雾报警器、摄像头等多种安防设备的组合，满足家庭安全的第一需求。'},
	]
};
var a5 = Vue.extend({
template: '<a href="#">{{featurers.featurersbiao}}</a>'
});
var p6 = Vue.extend({
template: '<p class="in_h"><child4></child4></p>',
 components: {
    'child4': a5
   }
});
var hr6 = Vue.extend({
template: '<hr style="clear: both; border: none; border-bottom: 1px solid #dfdfdf; margin-bottom: 10px;" />'
});
var ul7 = Vue.extend({
template: "<ul><li v-for='featurerser in featurers.featurers2_2'><a v-bind:href='featurers.featurers2_1'><img v-bind:src='featurerser.featurersImg'/><div class='feature_dl'><p>{{featurerser.featurersName}}</p><p>{{featurerser.featurersP}}</p></div></a></li></ul>"
});
var img7 = Vue.extend({
template: '<img class="brand_i01" v-bind:src="featurers.imgs2" alt="美屋定制"/>'
});

var div3 = Vue.extend({
template: '<div></div>'
});
var img8 = Vue.extend({
template: '<img class="brand_i02" v-bind:src="featurers.imgs1" alt="美屋定制"/>'
});
var div2 = Vue.extend({
template: '<div class="brand_lr"><child7></child7><child8 v-for="item101 in featurers.featurers2_2.length"></child8><child9></child9></div>',
 components: {
    'child7': img7,
    'child8': div3,
    'child9': img8
   }
});
Vue.component('my-feature1',{
     template: '<div class="feature"><child1></child1><child2></child2><child3></child3><child6></child6></div>',
      components: {
    'child1': p6,
    'child2': hr6,
    'child3': ul7,
    'child6': div2
    
   }
});
var vm10 = new Vue({
	el: "#featurer"
});