window.onload=function(){
	function hotchange(){
		var current_index=0;
		var timer=window.setInterval(autochange,3000);
		var button_li=document.getElementById("button").getElementsByTagName("li");
		var pic_li=document.getElementById("banner_pic").getElementsByTagName("li");
		for(var i=0;i<button_li.length;i++){
			button_li[i].onmousemove=function(){
			if(timer){
				clearInterval(timer);
			}
			for(var j=0;j<pic_li.length;j++){
				if(button_li[j]==this){
					current_index=j;
					button_li[j].className="current";
					pic_li[j].className="current";
				}else{
					pic_li[j].className="pic";
					button_li[j].className="but";
				}
			}
		}
		button_li[i].onmouseout=function(){
			timer=setInterval(autochange,3000);
		}
	}
	function autochange(){
		++current_index;
		if(current_index==button_li.length){
			current_index=0;
		}
		for(var i=0;i<button_li.length;i++){
			if(i==current_index){
				button_li[i].className="current";
				pic_li[i].className="current";
			}else{
				button_li[i].className="but";
				pic_li[i].className="pic";
			}
		}
	}
}
	hotchange();

	function school(){
		var speed=50;
		var imgbox=document.getElementById("imgbox");
		imgbox.innerHTML+=imgbox.innerHTML;
		var span=imgbox.getElementsByTagName("span");
		var timer1=window.setInterval(marquee,speed);
		imgbox.onmouseover=function(){
			clearInterval(timer1);
		}
		imgbox.onmouseout=function(){
			timer1=setInterval(marquee,speed);
		};
		function marquee(){
			if(imgbox.scrollLeft>span[0].offsetWidth){
				imgbox.scrollLeft=0;
			}else{
				++imgbox.scrollLeft;
			}
		}
	}
	school();
	
	function tablechange(){
		var lis=document.getElementById("SwitchNav").getElementsByTagName("li");
		var spans=document.getElementById("SwitchBigPic").getElementsByTagName("span");
		var current_index=0;
		var timer=setInterval(autochange,3000);
		for(var i=0;i<lis.length;i++){
			lis[i].onmouseover=function(){
				if(timer){
					clearInterval(timer);
				}
				for(var i=0;i<lis.length;i++){
					if(lis[i]==this){
						spans[i].className="sp";
						current_index=i;
					}else{
						spans[i].className="";
					}
				}
			}
			lis[i].onmouseout=function(){
				timer=setInterval(autochange,3000);
			}
		}
		function autochange(){
			++current_index;
			if(current_index==lis.length){
				current_index=0;
			}
			for(var i=0;i<lis.length;i++)
			{
				spans[i].className="";
			}
			spans[current_index].className="sp";
		}
	}
	tablechange();
	}