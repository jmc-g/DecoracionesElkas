$(document).ready(function () {


  $('a#quienessomos').click(function(e) {
    e.preventDefault();
    var quienessomos1 = $(this).attr('href');
    $('html, body').animate({

      scrollTop:$(quienessomos1).offset().top

    }, 1500);

  });

  $('a#mision').click(function(e) {
    e.preventDefault();
    var mision = $(this).attr('href');
    $('html, body').animate({

      scrollTop:$(mision).offset().top

    }, 1500);

  });
  

  $('a#vision').click(function(e) {
    e.preventDefault();
    var vision = $(this).attr('href');
    $('html, body').animate({

      scrollTop:$(vision).offset().top

    }, 1500);

  });

  


















  

              //scrollpsy
              $('body').scrollspy({ target: '#navbarNavDropdown' })
                
                
                $(window).scroll(function(){
                        if ($(this).scrollTop() > 100) {
                            $('.scrollup').fadeIn();
                        } else {
                            $('.scrollup').fadeOut();
                        }
                    });
              
                    $('.scrollup').click(function(){
                        $("html, body").animate({ scrollTop: 0 }, 600);
                        return false;
                  });


              // Add smooth scrolling to all links in navbar + footer link






  $("#enviadatos").click(function () {
		var mail = $("#correo").val();
		var mensaje = $("#mensajecliente").val();  
    
    
    if (($("#correo").val().length == 0)) {
			$("#validadorcorreo").fadeIn("slow");
			return false;
		}
            else {$("#validadorcorreo").fadeOut("slow");	
		         }
    
    
    if (($("#mensajecliente").val().length == 0)) {
			$("#validadormensaje").fadeIn("slow");
			return false;
		}
            else {$("#validadormensaje").fadeOut("slow");	
		         }
    
    
});





});

