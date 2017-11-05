
(function($) {
  /*"use strict";*/

$(window).load(function(){


  // Portfolio Filter
  var portfolioActive = '';

  $('#filter-header .category-item').on('click', function(event){    
    var portfolioActive = $(this).attr('data-filter');  
    $('#filter-header .category-item').removeClass('category-item-active'); 
    $(this).addClass('category-item-active');
    $("#filter-container .filter-item").removeClass('project-item-disabled');  
    $("#filter-container .filter-item:not(." + portfolioActive + ")").addClass('project-item-disabled');
    event.preventDefault();
  });

 
     var navMain = $(".navbar-collapse");

     navMain.on("click", "a", null, function () {
         navMain.collapse('hide');
     });
    
  //Fixed menu
  $('#banner1').waypoint(function(direction) {
      if (direction === 'down') {
        $('#header').addClass( 'header-stick');       
      }
      else {
        $('#header').removeClass( 'header-stick');
      }     
    },
    {
     offset: '-2px'
  });

    
   /* SMOOTH SCROLLING */
    
// Select all links with hashes  
  $('a[href*="#"]')

  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus(); 
          };
        });
      }
    }
  });  
/* SMOOTH SCROLLING-END */ 
    
    

});



$(document).ready(function(){

   
    
    var colors = [
										['#ffffff', '#6ed4c0'], ['#ffffff', '#6ed4c0'], ['#ffffff', '#6ed4c0'], ['#ffffff', '#6ed4c0'], ['#ffffff', '#6ed4c0'], ['#ffffff', '#6ed4c0']
									];
								for (var i = 1; i <= 7; i++) {
									var child = document.getElementById('circles-' + i),
										percentage = 40 + (i * 5);
										
									Circles.create({
										id:         child.id,
										percentage: percentage,
										radius:     75,
										width:      9,
                                        duration:            1000,
										number:   	percentage / 1,
										text:       '%',
										colors:     colors[i - 1]
									});
								};

   
    

});


})(jQuery);