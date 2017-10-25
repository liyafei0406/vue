var footers = {
	magicersbiao: "更多项目",
	magicers1: [
		{magicersite:'http://www.cyg799.com',magicersImg:'img/site01.png'},
		{magicersite:'http://www.cyfw001.com',magicersImg:'img/site02.png'},
		{magicersite:'http://www.cgcy001.com',magicersImg:'img/site03.png'},
		{magicersite:'http://www.cyg114.com',magicersImg:'img/site04.png'}
	],
	recordersImg:"img/mwwap_10.jpg",
	stockers1:[
		{stockersite:"vm13.site1()",stockersImg1:'img/souye.png',stockersImg2:'img/souye1.png',stockersName:'主页'},
		{stockersite:"vm13.site2()" ,stockersImg1:'img/link.png',stockersImg2:'img/link1.png',stockersName:'产品'},
		{stockersite:"vm13.site3()",stockersImg1:'img/Home.png',stockersImg2:'img/Home1.png',stockersName:'热线'},
		{stockersite:"vm13.func1()",stockersImg1:'img/write.png',stockersImg2:'img/write1.png',stockersName:'留言'}
	],
	onlinersImg:'img/zaixian.png',
	onlinersite:'vm14.func2()',
	untitledersImg:'img/untitled.png',
	scrollers:'vm15.scroller()'
};
//更多项目
var p7 = Vue.extend({
template: '<p class="in_h">{{footers.magicersbiao}}</p>'
});
var hr7 = Vue.extend({
template: '<hr style="clear: both; border: none; border-bottom: 1px solid #dfdfdf; margin-bottom: 10px;" />'
});
//var a6 = Vue.extend({
//template: '<a v-bind:href="featurers.featurers1"><child4></child4></a>'
//});
Vue.component('my-magicer1',{
     template: '<div class="magier"><child1></child1><child2></child2><a v-for="magicerser in footers.magicers1" v-bind:href="magicerser.magicersite"><img v-bind:src="magicerser.magicersImg" alt="图片错误"/></a></div>',
      components: {
    'child1': p7,
    'child2': hr7   
   }
});
var vm11 = new Vue({
	el: "#magicer"
});
//地址备案
var img9 = Vue.extend({
template: '<img v-bind:src="footers.recordersImg" alt="图片错误"/>'
});
Vue.component('my-recorders1',{
     template: '<div class="recorder"><child3></child3><child4></child4></div>',
      components: {
    'child3': img9
   }
});
var vm12 = new Vue({
	el: "#recorders"
});
//托盘
var ul8 = Vue.extend({
template: "<ul><li v-for='stockerss in footers.stockers1' v-bind:onclick='stockerss.stockersite'><img v-bind:src='stockerss.stockersImg1'/><img class='stock_is' v-bind:src='stockerss.stockersImg2'/><br />{{stockerss.stockersName}}</li></ul>"
});
Vue.component('my-stockers1',{
     template: '<div class="stock"><child7></child7></div>',
      components: {
    	'child7': ul8
   }
});
var vm13 = new Vue({
	el: "#stockers",
	methods: {
		site1: function() {
			this.stock01(0);
			window.location.href='index.html';
		},
		site2: function() {
			this.stock01(1);
			window.location.href='project.html';
		},
		site3: function() {
			this.stock01(2);
			window.location.href='tel://400-709-2868';
		},
		func1: function() {
			this.stock01(3);
			layer.open({
			type: 2,
			title: '在线留言',
			closeBtn: 1,
			shade: 0.8,
			area: ['94%', '70%'],
			content: 'http://www.mhsjgc.com/dsly/excl_message2/index.asp'
			});
		},
		stock01: function(index011) {
			var stock_is1 = document.getElementsByClassName('stock_is');
			for(var i = 0; i < stock_is1.length; i ++) {
				stock_is1[i].style.display = 'none';
			};
			stock_is1[index011].style.display ="inline";
		}
	}
});
//在线咨询
var img10 = Vue.extend({
template: '<img v-bind:src="footers.onlinersImg" alt="图片错误"/>'
});
Vue.component('my-onliners1',{
     template: '<div class="online" v-bind:onclick = "footers.onlinersite"><child8></child8></div>',
      components: {
    	'child8': img10
   }
});
var vm14 = new Vue({
	el: "#onliners",
	methods: {
		func2: function () {
			layer.open({
			type: 2,
			title: '在线咨询',
			closeBtn: 1,
	        shade: 0.8,
			area: ['94%', '75%'],
			content:'http://www7.53kf.com/m.php?cid=70792892&style=2&keyword=http%3A%2F%2Fwww.cgcy001.com%2Fplus%2Flist.php%3Ftid%3D17&referer=http%3A%2F%2Fwww.cgcy001.com%2Fwap%2Findex.html&guest_id=10107770143017&tpl=crystal_blue&uid=9d8d1dc40685c0270084e937594dbc32&u_stat_id=&talktitle=%E7%BE%8E%E5%B1%8B%E5%AE%9A%E5%88%B6%E4%B8%AA%E6%80%A7%E5%8C%96%E5%85%BB%E7%94%9F%E6%99%BA%E8%83%BD%E5%AE%B6%E8%A3%85%E4%B8%80%E7%AB%99%E5%BC%8F%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88&tfrom=50&zdkf_type=1&kf=pengchaowz%40163.com%2C2915065108%40qq.com%2C3258853642%40qq.com%2Czknet'
			});
		}
	}
});
//回到顶部
var img11 = Vue.extend({
template: '<img v-bind:src="footers.untitledersImg" alt="图片错误"/>'
});
Vue.component('my-untitleders1',{
     template: '<div v-bind:onclick = "footers.scrollers" class="untitled"><child9></child9></div>',
      components: {
    	'child9': img11
   }
});
var vm15 = new Vue({
	el: "#untitleders",
	data: {
		 times: null
	},
	methods: {
		scroller: function () {
//			console.log(111);
			//获取滚动条的偏移量
			var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
			var _this = this;
         	this.times = setInterval(function () {
         		scrollTop -=32;
         		if(scrollTop <= 0) {
         			clearInterval(_this.times);
         		};
         	document.body.scrollTop = scrollTop; 
            document.documentElement.scrollTop = scrollTop;	
         	}, 1);
		}
	}
});
var untitled1 = document.getElementsByClassName('untitled')[0];
var online1 = document.getElementsByClassName('online')[0];
window.onscroll = function() {
			//获取滚动条的偏移量
			var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
			if (scrollTop > 150) {
				untitled1.style.display = 'block';
	    		online1.style.display = 'block';
			}else if(scrollTop < 150) {
				untitled1.style.display = 'none';
	    		online1.style.display = 'none';
			};
};
	//判断空p标签
	var pp1 = document.getElementsByTagName('p');
	for(var i = 0; i < pp1.length; i ++) {
	if(pp1[i].innerHTML == "" || pp1[i].innerHTML == null) {
		pp1[i].style.display = 'none';
	};
	};
	//判断空h5标签
	var hh5 = document.getElementsByTagName('h5');
	for(var i = 0; i < hh5.length; i ++) {
	if(hh5[i].innerHTML == "" || hh5[i].innerHTML == null) {
		hh5[i].style.display = 'none';
	};
	};
 //判断空的img标签
 	var imgi = document.getElementsByTagName('img');
	for(var i = 0; i < imgi.length; i ++) {
	if(imgi[i].getAttribute("src") == "" || imgi[i].getAttribute("src") == "Beautiful/") {
		imgi[i].style.display = 'none';
	};
	};