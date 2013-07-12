       
$(document).ready(function(){
    $('#blocker').fadeIn('slow'); 
    $('#instructions').css('margin','0px auto 0 auto');

	$('html').keydown(function(event) {
	  if (event.which == 87) {
	     $('#w').css({"color":"orange","font-size":"1.4em","opacity":"1"});
	   }
	});

	$('html').keyup(function(event) {
	  if (event.which == 87) {
	     $('#w').css({"color":"black","font-size":"1em","opacity":".2"});
	   }
	});

	$('html').keydown(function(event) {
	  if (event.which == 81) {
	     $('#q').css({"color":"orange","font-size":"1.4em","opacity":"1"});
	   }
	});

	$('html').keyup(function(event) {
	  if (event.which == 81) {
	     $('#q').css({"color":"black","font-size":"1em","opacity":".2"});
	   }
	});

	$('html').keydown(function(event) {
	  if (event.which == 69) {
	     $('#e').css({"color":"orange","font-size":"1.4em","opacity":"1"});
	   }
	});

	$('html').keyup(function(event) {
	  if (event.which == 69) {
	     $('#e').css({"color":"black","font-size":"1em","opacity":".2"});
	   }
	});

	$('html').keydown(function(event) {
	  if (event.which == 65) {
	     $('#a').css({"color":"orange","font-size":"1.4em","opacity":"1"});
	   }
	});

	$('html').keyup(function(event) {
	  if (event.which == 65) {
	     $('#a').css({"color":"black","font-size":"1em","opacity":".2"});
	   }
	});

	$('html').keydown(function(event) {
	  if (event.which == 83) {
	     $('#s').css({"color":"orange","font-size":"1.4em","opacity":"1"});
	   }
	});

	$('html').keyup(function(event) {
	  if (event.which == 83) {
	     $('#s').css({"color":"black","font-size":"1em","opacity":".2"});
	   }
	});

	$('html').keydown(function(event) {
	  if (event.which == 68) {
	     $('#d').css({"color":"orange","font-size":"1.4em","opacity":"1"});
	   }
	});

	$('html').keyup(function(event) {
	  if (event.which == 68) {
	     $('#d').css({"color":"black","font-size":"1em","opacity":".2"});
	   }
	});
});
           