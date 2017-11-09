      new Vue({
    el: '#large',
    data: {
        mark: 0,
        timer: null,
        img: ['img/lun01.jpg',
            'img/lun02.jpg',
            'img/lun03.jpg',
            'img/lun04.jpg',
            'img/lun05.jpg',
            'img/lun01.jpg'
        ]
    },
    created:function() {
        this.play();
    },
    methods: {
        change: function(i) {
            this.mark = i;
        },
        autoPlay: function() {
			this.mark ++;
            var middles = document.getElementsByClassName('middle')[0];
             var imgs = document.getElementsByClassName('imgs')[0].offsetWidth;
            if(this.mark == 5) {
            	var _this = this;
            	setTimeout ( function(marker) {
            	middles.style.transitionDuration = "0s";
            	middles.style.left = 0;
            	 _this.mark = 0;
//          	 console.log(_this);
             },1000);   	         	
            	 
            }
//          console.log(this);
//              if (this.mark === 3) {
//                  this.mark = 0
//                  return false;
//              };
 		
				middles.style.transitionDuration = "1s";
        middles.style.left =  -this.mark * imgs + "px";
               
   
        },
        play: function() {
        	clearInterval(this.timer);
            this.timer = setInterval(this.autoPlay, 2000);
        }
    }
})