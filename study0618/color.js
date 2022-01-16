var body = { 
			setColor : function(color){
			document.querySelector('body').style.color=color;
			$('body').css('color',color);
		 },
		  setBackGroundColor : function(color){
			document.querySelector('body').style.backgroundColor =color;
			$('body').css('backgroundColor',color);
		 }
		}

		var link = {
		SetColor : function(color){
		 var alist =document.querySelectorAll('a')
		 var i = 0;
		 while(i< alist.length){
	        alist[i].style.color=color;
	        i = i+1;
	       }
		 }
		}

		function NightDayhandler(self) {
		if(self.value === 'night'){
		var target = document.querySelector('body');
		body.setBackGroundColor('black');
		body.setColor('white');
		self.value='day';
		link.SetColor('yellow');

		} else {
		var target = document.querySelector('body');
		body.setBackGroundColor('white');
		body.setColor('black');
		self.value='night';
		link.SetColor('blue');

   		  }
		}