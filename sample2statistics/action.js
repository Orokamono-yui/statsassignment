//ウインドウの起動時・拡大縮小時に自動的にコンテンツの幅をかえる
window.onload = sizeSet;
window.onresize = sizeSet;

function sizeSet() { 
	//画面サイズ変更と同時に要素のサイズも変更
	var allHeight = $('#container').innerHeight() + $('#main').innerHeight();	//全要素の高さ
	var headnavHeight = $('header').outerHeight() + $('.navpanel').innerHeight();//メインコンテンツの縦の位置
	$('.image').css('height', allHeight+'px');
	$('.image').css('width', window.innerWidth+'px');
	$('#main').css('top', headnavHeight+'px');
	if(window.innerWidth > 900){
		$('#container').css('left', (window.innerWidth-700)/2+'px');
	}else{
		$('#container').css('left', '100px');	//左の余白は１００以上にします
	}
	
	//ナビゲーションに触ったらメニューが伸びる。他の要素に触ればなくなる。
	$('.navhead').mouseover(function(){
		$('.dropdown').css('display', 'none');
			$(this).siblings('.dropdown').slideToggle(500);
	});
	$('#backImage3, header, #main').mouseover(function(){
		$('.dropdown').css('display', 'none');
	});

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