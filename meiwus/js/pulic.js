//	var project_xdiv = document.querySelectorAll('.project_x li .project_xdiv');
	var particulars_xi = document.getElementsByClassName('particulars_li');
	var lenum = Math.ceil(project_xdiv.length / 3);
		var paddh = (project_xdiv[0].offsetHeight + 10) * lenum;
		for(var z = 0 ; z < particulars_xi.length; z ++) {
			particulars_xi[z].style.paddingTop = paddh + "px";
		};
	window.onload = function(){
	//点击栏目动画效果
		var num = null;		
		var project_xx = document.querySelectorAll('.project_x li');
		var project_div = document.getElementsByClassName('project_div')[0];
		var project_xli = document.getElementsByClassName('project_xli');		
		for(var i = 0; i < project_xx.length; i ++) {
			project_xx[i].nums = i;
			project_xx[i].onclick = function() {
				if(num != this.nums) {
					num = this.nums;
//					project_div.style.display = 'none';
					for(var j = 0; j < project_xdiv.length; j ++) {
						project_xli[j].style.display = 'none';
						project_xdiv[j].style.backgroundColor = '#008b37';
					};
						project_xdiv[this.nums].style.backgroundColor = '#e77817';
						project_xli[this.nums].style.display = 'block';						
				}else {
		 			return false;
		 	};
			};
		};
};