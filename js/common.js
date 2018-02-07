$(function() {
    $(".menu").click(function(){
        $(".menu1").toggleClass("menuclick1")
    });
    $(".menu").click(function(){
        $(".menu2").toggleClass("menuclick2")
    });
    $(".menu").click(function(){
        $(".menu3").toggleClass("menuclick3")
    }); 

  $(".menu").click(function() {
    $(".gnavi").slideToggle(300);
    return false;
  });
  $(window).resize(function(){
    var win = $(window).width();
    var p = 480;
    if(win > p){
      $(".gnavi").show();
    } else {
      $(".gnavi").hide();
    }
  });


  $(".menu").click(function() {
    $(".gnavi_under").slideToggle(300);
    return false;
  });
  $(window).resize(function(){
    var win = $(window).width();
    var p = 480;
    if(win > p){
      $(".gnavi_under").show();
    } else {
      $(".gnavi_under").hide();
    }
  });
});


 


$(function() {
    var topBtn = $('.backtop');    
    topBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});



$(function(){
	var wid = $(window).width();
	if( wid < 480 ){
		$('.imgChange').each(function(){
			$(this).attr("src",$(this).attr("src").replace('_pc', '_sp'));
		});
	}
});

$(function(){
	var wid = $(window).width();
	if( wid < 480 ){
		$('.imgChange').each(function(){
			$(this).attr("src",$(this).attr("src").replace('_pc', '_sp'));
		});
	}
});