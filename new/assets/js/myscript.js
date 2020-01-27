
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a.more-btn").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 400
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });


  /*Add logo in innerBanner*/
  if (window.matchMedia("(min-width: 768px)").matches) {
  /* The viewport is less than, or equal to, 700 pixels wide */
 
     $(window).scroll(function (event) {
          var navht = $('nav').height();
          console.log(navht); 
          var scroll = $(window).scrollTop();
          if(scroll > navht){
               $('nav').css({"background-color":"rgba(0,0,0,0.7)", "top":"0"})
           }else{
               $('nav').css({"background-color":"rgba(0,0,0,0)", "top":"10px"})
           }

          if($('header').hasClass('logo-white')){
            if(scroll > navht){
              $('.logo-white a.nav-link').css("color","#fff");
              //$('.subheader .navbar-brand').find('img').attr('src','../assets/img/logo.png');
              //$('.navbar-brand img.home').show();
               }else{
              //$('.subheader .navbar-brand').find('img').attr('src','../assets/img/logo-small.png');
              //$('.navbar-brand img.home').hide();
            }
          } 
      });
  } 
});
