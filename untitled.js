
<script>
$(document).ready(function(){

	//// WRAP PRODUCT INFO

	$('.views-row-1').children(':gt(0)').wrapAll("<div class='productInfo'></div>");
	$('.views-row-2').children(':gt(0)').wrapAll("<div class='productInfo'></div>");
	$('.views-row-3').children(':gt(0)').wrapAll("<div class='productInfo'></div>");
    

    /////// UNLINK PRODUCT TITLES

    var row1name = $('.view-id-shit .views-row-1 .productInfo .field-content a').html();
    $('.view-id-shit .views-row-1 .productInfo .field-content a').replaceWith('<p class="productName">' + row1name + '</p>');

    var row2name = $('.view-id-shit .views-row-2 .productInfo .field-content a').html();
    $('.view-id-shit .views-row-2 .productInfo .field-content a').replaceWith('<p class="productName">' + row2name + '</p>');

    var row3name = $('.view-id-shit .views-row-3 .productInfo .field-content a').html();
    $('.view-id-shit .views-row-3 .productInfo .field-content a').replaceWith('<p class="productName">' + row3name + '</p>');


    ///// HIDE 2nd IMAGE

    $('.views-row-1 .views-field-field-product-shot .field-content').children(':gt(0)').css({'display':'none'});


    //// FRONT/BACK MOUSEOVER EFFECT

    $(".views-row-1 .views-field-field-product-shot .field-content img").hover(function(){
	    $(this).attr("src","http://www.shit.yungjake.com/sites/default/files/product1abest.png");
    }, 
    function(){
	    $(this).attr("src","http://www.shit.yungjake.com/sites/default/files/product1best.png");
    });


    //// BACKGROUND STROBE EFFECT

	//     var vph = $(window).height();
	//     $('#strobeBG').css({'height':  vph + 'px','position':'fixed'});

	// function blink() {
	// $("#strobeBG")
	//         .animate({color: '#0000FF', backgroundColor: '#00FFFF'}, 20)
	//         .animate({color: '#00FF00', backgroundColor: '#FF00FF'}, 20)
	//         .animate({color: '#FF0000', backgroundColor: '#FFFF00'}, 20)
	//         .animate({color: '#FFFF00', backgroundColor: '#FF0000'}, 20)
	//         .animate({color: '#FF00FF', backgroundColor: '#00FF00'}, 20)
	//         .animate({color: '#00FFFF', backgroundColor: '#0000FF'}, 20, function(){blink()});
	// }

 //    $(".views-row .views-field-field-product-shot .field-content img").hover(function(){
 //    	blink();
 //        $('#strobeBG').css({'visibility':'visible'});
 //    }, 
 //    function(){
 //        $('#strobeBG').css('visibility','hidden');
 //    });


    //// CLICK PRODUCT INFO TOGGLE

  //       jQuery(document).ready(function($){
  //       var gal1 = new GravityGallery({
		// 	id : '#gg'
  //           , 'settings_fullscreen' : 'on'
		// 	, settings_bg : ''
		// });
  //   })
	 $('#header, #navigation').remove();
     var vph = $(window).height();
     $('html').css({'max-height': vph + 'px','overflow':'hidden'});
     // $('.views-row').addClass('transition');
	 $('.views-row').click(function(){
	 if (!$(this).hasClass("active")) {
   	 $(this).find( '.productInfo' ).slideDown();
	 }
	 $(this).addClass('active');
	 $('.views-row').not(this).removeClass('active');
	 // $('.views-row').not(this).removeClass('transition');
     // $('.views-row').not(this).throwable({bounce:1,containment:[0,0,2000,700],gravity:{x:0,y:1}});
    });




});


</script>
