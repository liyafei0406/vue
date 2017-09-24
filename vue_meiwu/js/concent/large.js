      new Vue({
    el: '#large',
    data: {
        mark: 0,
        timer: null,
        img: ['img/lun1.png',
            'img/lun2.png',
            'img/lun3.png',
            'img/lun4.png',
            'img/lun5.png',
            'img/lun1.png'
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