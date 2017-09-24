let div00 = document.querySelectorAll('.brand_lr div');
		let li00 = document.querySelectorAll('.feature li');
		let brand1 = document.getElementsByClassName('brand_i01')[0];
		let brand2 = document.getElementsByClassName('brand_i02')[0];
		div00[0].style.backgroundColor = '#00862e';
		//滑动特色的动画效果
//		$(".brand_lr div").eq(0).css("background-color","#00862e");
		window.onload=function(){
			let index0 = 8;
			let index1 = 0;
		touch.on(".feature li","swipeleft",function(){
//			console.log(index0);
//			console.log(li00[index0]);
	 	if(index0 <= 0) {
	 		index0 = 0;
//	 		console.log(111);
	 		return false;	
	 	}else {
	 		index1 ++;
	 		for (let i = 0; i < div00.length; i ++) {
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
	 	if(index0 >= 9) {
	 		index0 = 8;
	 		return false;
	 	}else {
	 		index1 --;
	 		for (let i = 0; i < div00.length; i ++) {
	 			div00[i].style.backgroundColor = '';
	 		};
	 		div00[index1].style.backgroundColor = '#00862e';
	 	 	li00[index0].style.left = '3%';
	 	 	if(index0 >= 8) {
	 	 		index0 = 8;
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
	 		for (let i = 0; i < div00.length; i ++) {
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
	 	if(index0 >= 9) {
	 		index0 = 8;
	 		return false;
	 	}else {
	 		index1 --;
	 		for (let i = 0; i < div00.length; i ++) {
	 			div00[i].style.backgroundColor = '';
	 		};
	 		div00[index1].style.backgroundColor = '#00862e';
	 	 	li00[index0].style.left = '3%';
	 	 	if(index0 >= 8) {
				index0 = 8;
				return false;
			};
	 	 };
	  };
};