	window.onload = function(){
	//点击栏目动画效果
		let num = null;
		let project_xx = document.querySelectorAll('.project_x li');
		let project_div = document.getElementsByClassName('project_div')[0];
		let project_xli = document.getElementsByClassName('project_xli');
		for(let i = 0; i < project_xx.length; i ++) {
			project_xx[i].nums = i;
			project_xx[i].onclick = function() {
				if(num != this.nums) {
					num = this.nums;
					project_div.style.display = 'none';
					for(let j = 0; j < project_xli.length; j ++) {
						project_xli[j].style.display = 'none';
					};
						project_xli[this.nums].style.display = 'block';						
				}else {
		 			return false;
		 	};
			};
		};
};