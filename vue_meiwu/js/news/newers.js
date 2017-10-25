 //新闻详情
var newers = {
	newersImg1:'img/news.gif',
	newers1: {
		newers1Site:'news_details.html',
		newers1H5:'中国将成为继美之后全球第二大安防市场',
		newers1P:'2017年6月8日，创意快装工场发展史上一个具有里程碑意义的日子——集团公司在全球中小企业股权交易中心挂牌。这也是继创意快装工场上海股权托管交易中心挂牌后，又一次重新定制装修装饰行业标杆企业标准。创意快装工场积蓄了多年的力量，在全球中小企业股权交易中心挂牌挂牌，随着挂牌的锣声的敲响，创意快装工场上了一个新的阶段，一个更高的阶段。5月份公司B轮融成功融资1.6亿，为本次挂牌提供了重要的助推力量。企业的成功挂牌，不仅展示了企业的发展实力，更预示着企业在未来发展之路上，将借助资本的力量取得更大的飞跃。',
		newers1Img1:'img/icon01.png',
		newers1Img2:'img/rightjt.png',
		newers1Img3:'img/xianggang01.jpg',
		newers1Ci:'250'
	},
	newersImg2:'img/xiong.jpg',
	newersP:'没有搜到结果',
	newsNum:10
	
}
var headeros = {
	headers1:'新闻资讯',
	hesders1_1:'公司新闻'
};
var Img1_1 = Vue.extend({
template: '<img class="news_img1" v-bind:src="newers.newersImg1"/>'
});
var div1_3 = Vue.extend({
template: '<div class="news_ul"></div>'
});
//console.log(ul1_1.template);
var Img1_2 = Vue.extend({
template: '<img style="margin-top: 10px; width: 30%; margin-left: 30%; display: block;" v-bind:src="newers.newersImg2"/>'
});
var p1_1 = Vue.extend({
template: '<p style="margin:10px 0 10px 35%; font-size: 0.8rem;">{{newers.newersP}}</p>'
});
var div1_2 = Vue.extend({
template: '<div class="news_xiao"><child5></child5><child6></child6></div>',
 components: {
    // <my-component> 将只在父模板可用
    'child5': Img1_2,
    'child6': p1_1
   }
});
var div1_1 = Vue.extend({
template: '<div class="news_centre"><child3></child3><child4></child4></div>',
 components: {
    // <my-component> 将只在父模板可用
    'child3': div1_3,
    'child4': div1_2
   }
});
 Vue.component('my-newers1',{
     template: '<div class="news"><child1></child1><child2></child2></div>',
     components: {
    // <my-component> 将只在父模板可用
    'child1': Img1_1,
    'child2': div1_1
   }
});
var vm1_1 = new Vue({
	el: "#newers"
//	data: {locals: false},
//	methods: {
//		worders() {
//			if(this.worder == "") {
//				alert("请输入搜索关键字！");
//			}else {
//				window.location.href = 'new.html?word='+this.worder+'';
//			};
//		}
//	}
});
//新闻关键字查询并且改变关键字颜色
function createLi() {
Vue.component('my-lis1',{
template: '<ul><li v-for="item0 in newers.newsNum"><a v-bind:href="newers.newers1.newers1Site"><div class="centre_d1"><img v-bind:src="newers.newers1.newers1Img3" /></div><div class="centre_d2"><h5>{{newers.newers1.newers1H5}}</h5><p class="centre_p3">{{newers.newers1.newers1P}}</p><p class="centre_p1"><img v-bind:src="newers.newers1.newers1Img1" />阅读：<span>{{newers.newers1.newers1Ci}}</span>次</p>&nbsp;&nbsp;|<p class="centre_p2">点击查看 <img v-bind:src="newers.newers1.newers1Img2" /></p></div></a></li></ul>'
});
var lis01 = '<my-lis1 id="lis1"></my-lis1>';
var centrehAiv = document.querySelector('.news_centre .news_ul'); 
centrehAiv.innerHTML = lis01;
var vm1_2 = new Vue({
	el: "#lis1"
});
};
createLi();
var bol = true;
     document.ready = function() {
    var word = decodeURI(getQueryStringByName('word'));
    var worders = document.getElementsByClassName('word')[0];
    worders.value = word;
    var centreh = document.querySelector('.centre_d2 h5'); 
	var biao =  centreh.innerHTML;
//	console.log(word);
	var worder1 = biao.replace(new RegExp(word,"gm"),"<span style='color: red;' >"+word+"</span>");
//	console.log(worder1);
	centreh.innerHTML = worder1;
 	var centrehs = document.querySelector('.centre_d2 h5 span'); 
    if(centrehs != null) {
    	return true;
    }else {
    	var centrehUl = document.querySelector('.news_centre .news_ul'); 
    	var newsXiao = document.getElementsByClassName('news_xiao')[0];
    	centrehUl.style.display = 'none';
    	newsXiao.style.display = 'block';
    	bol = false;
    };
    //根据QueryString参数名称获取值
function getQueryStringByName(name) {
    var result = location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
    if (result == null || result.length < 1) {
        return "";
    };
    return result[1];
};
    };
window.onload = function() {
     //窗口滚动时在特定条件下去触发创建li的函数
		window.onscroll = function() {
			//获取可视化区域的高度
			var viewHeight = document.documentElement.clientHeight;
			//获取文档的高度
			var dHeight = document.documentElement.offsetHeight;
			//保存差值
			var maxHeight = dHeight - viewHeight;
			//获取滚动条的偏移量
			var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
			if (maxHeight == scrollTop) {
//				console.log(111);
			   if(bol == true) {
			   	newers.newsNum += 10;
                   createLi();
                }else {
			       bol = false;
		        };
			};
		};
};
var pps = document.getElementsByClassName('header_ppp')[0];
Vue.component('my-headerp1',{
template: '<p class="header_p1">{{headeros.headers1}}</p>'
});
Vue.component('my-headerp2',{
template: '<p class="header_p2">{{headeros.hesders1_1}}</p>'
});
pps.innerHTML = '<my-headerp1 id="headerp1"></my-headerp1> <my-headerp2 id="headerp2"></my-headerp2>'
var vm1_3 = new Vue({
	el: "#headerp1"
});
var vm1_4 = new Vue({
	el: "#headerp2"
});
