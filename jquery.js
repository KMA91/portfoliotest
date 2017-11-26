$(document).ready(function() {

// SMOOTH SCROLLING

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1');  // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });

    $('.projectimg1').hover(function(){
      $('.projectimg1').attr("src", "https://s3-us-west-1.amazonaws.com/kevin-portfolio-images/whin.png");
    })
    $('.projectimg1').mouseleave(function(){
      $('.projectimg1').attr("src", "https://s3-us-west-1.amazonaws.com/kevin-portfolio-images/whfront.png");
    })
    $('.projectimg2').hover(function(){
      $('.projectimg2').attr("src", "https://s3-us-west-1.amazonaws.com/kevin-portfolio-images/artapediain.png").css("margin-bottom","0.1%");
    })
    $('.projectimg2').mouseleave(function(){
      $('.projectimg2').attr("src", "https://s3-us-west-1.amazonaws.com/kevin-portfolio-images/artapediafront.png").css("margin-bottom","0");
    })
    $('.projectimg3').hover(function(){
      $('.projectimg3').attr("src", "https://s3-us-west-1.amazonaws.com/kevin-portfolio-images/emailyin.png").css("margin-bottom","-0.7%");
    })
    $('.projectimg3').mouseleave(function(){
      $('.projectimg3').attr("src", "https://s3-us-west-1.amazonaws.com/kevin-portfolio-images/emailyfront.png").css("margin-bottom","0%");
    })
// FADE IN PROJECTS AND TYPEWRITER

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
      var bottom_of_object = $('.projectTitle').position().top + $('.projectTitle').outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if( bottom_of_window > bottom_of_object ){
        $(".hidetypewriter").removeClass("hidetypewriter").addClass("typewriter");
        $('.projectimg').animate({'opacity': '0.9'},4000);
        }
      });
  });
