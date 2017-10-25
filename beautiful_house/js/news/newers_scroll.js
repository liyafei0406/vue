//新闻
	var ls0 = document.getElementsByClassName("ls");
	for(var i = 0; i < ls0.length; i ++) {
		ls0[i].style.display = 'none';
	};
	var num1 = -1;
	function lier() {
		for(var i = 0; i < 10; i ++) {
			num1 ++;
			ls0[num1].style.display = 'block';			
		}
	}
	lier(); 
	 //窗口滚动时在特定条件下去触发创建li的函数
		window.onscroll = function() {
			//获取可视化区域的高度
			var viewHeight = document.documentElement.clientHeight;
			//获取文档的高度
			var dHeight = document.documentElement.offsetHeight;
			//保存差值
			var maxHeight = dHeight - viewHeight;
//			console.log(maxHeight);
			//获取滚动条的偏移量
			var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
			if (maxHeight == scrollTop) {
				lier();
			};
		}; 