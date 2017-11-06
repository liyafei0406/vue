		var headerps1 = document.getElementsByClassName('header_rp1')[0];
		var headerps2 = document.getElementsByClassName('header_rp2')[0];
		//获取session的username名称
		var username = sessionStorage.getItem("username");
		if(username == null) {
			sessionStorage.clear();
			localStorage.clear();
			alert("请登录！");
			window.location.href = 'index.html';
		}else {
			headerps1.innerHTML = username + " 欢迎您！";
		};
		//点击取消登录
		headerps2.onclick = function() {
			sessionStorage.clear();
			localStorage.clear();
			window.location.href = "index.html";
		};
