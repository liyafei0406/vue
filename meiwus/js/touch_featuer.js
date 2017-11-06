var div00 = document.querySelectorAll('.brand_lr div');
		var li00 = document.querySelectorAll('.feature li');
		var brand1 = document.getElementsByClassName('brand_i01')[0];
		var brand2 = document.getElementsByClassName('brand_i02')[0];
		div00[0].style.backgroundColor = '#00862e';
		//滑动特色的动画效果
//		$(".brand_lr div").eq(0).css("background-color","#00862e");
		window.onload=function(){
			var index0 = 6;
			var index1 = 0;
		touch.on(".feature li","swipeleft",function(){
//			console.log(index0);
//			console.log(li00[index0]);
	 	if(index0 <= 0) {
	 		index0 = 0;
//	 		console.log(111);
	 		return false;	
	 	}else {
	 		index1 ++;
	 		for (var i = 0; i < div00.length; i ++) {
	 			div00[i].style.backgroundColor = '';
	 		};	 		
	 		div00[index1].style.backgroundColor = '#00862e';
	 	 	li00[index0].style.left = -screen.width + "px";
//	 	 	$(".brand li").eq(index).hide();
			if(index0 <= 0) {
				index0 = 0;
				return false;
			};
	 	 };
	 	index0 --;
	 });
	  touch.on(".feature li","swiperight",function(){
	  	index0 ++;
	 	if(index0 >= 7) {
	 		index0 = 6;
	 		return false;
	 	}else {
	 		index1 --;
	 		for (var i = 0; i < div00.length; i ++) {
	 			div00[i].style.backgroundColor = '';
	 		};
	 		div00[index1].style.backgroundColor = '#00862e';
	 	 	li00[index0].style.left = '3%';
	 	 	if(index0 >= 6) {
	 	 		index0 = 6;
	 	 		return false;
	 	 	};
	 	 };
	 });
	 //点击下标图片滑动效果
	  brand1.onclick = function() {
 	  
	  	if(index0 <= 0) {
	  		index0 = 0;
	 		return false;
	 	}else {
	 		index1 ++;
	 		for (var i = 0; i < div00.length; i ++) {
	 			div00[i].style.backgroundColor = '';
	 		};
	 		div00[index1].style.backgroundColor = '#00862e';
	 	 	li00[index0].style.left = -screen.width + "px";
			if(index0 <= 0) {
				index0 = 0;
				return false;
			};
	 	 };
	 		index0 --;
	  };
	  brand2.onclick = function() {
	  		index0 ++;
	 	if(index0 >= 7) {
	 		index0 = 6;
	 		return false;
	 	}else {
	 		index1 --;
	 		for (var i = 0; i < div00.length; i ++) {
	 			div00[i].style.backgroundColor = '';
	 		};
	 		div00[index1].style.backgroundColor = '#00862e';
	 	 	li00[index0].style.left = '3%';
	 	 	if(index0 >= 6) {
				index0 = 6;
				return false;
			};
	 	 };
	  };
};