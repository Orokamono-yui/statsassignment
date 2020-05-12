//ウインドウの起動時・拡大縮小時に自動的にコンテンツの幅をかえる
window.onload = widthSet; 
window.onresize = widthSet;

function widthSet() { 
	$('.image').css('height', $('#container').css('height'));
	$('.image').css('width', window.innerWidth+'px');
	if(window.innerWidth > 900){
		$('#container').css('left', (window.innerWidth-700)/2+'px');
	}else{
		$('#container').css('left', '100px');	//左の余白は１００以上にします
	}
  }

//１０秒間隔で背景の画像を変更する。
var i = 0;
setInterval(function() {
	if(i===0){
		$("#backImage2").animate({opacity: 1}, 1000);
	}else if(i==1){
		$("#backImage3").animate({opacity: 1}, 1000);
		$("#backImage2").animate({opacity: 0}, 1000);
	}else{
		$("#backImage3").animate({opacity: 0}, 1000);
	}
	i = (i+1) %3;
}, 10000);