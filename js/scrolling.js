/******************
 Author: Heather Migliorisi
 Source: https://css-tricks.com/smooth-scrolling-accessibility/
 
 To be replaced with scroll-behavior once compatibility improves.
 ******************
*/

// URL updates and the element focus is maintained
// originally found via in Update 3 on http://www.learningjquery.com/2007/10/improved-animated-scrolling-script-for-same-page-links

// filter handling for a /dir/ OR /indexordefault.page
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        target.focus(); // Setting focus
        if (target.is(":focus")){ // Checking if the target was focused
          return false;
        } else {
          target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          target.focus(); // Setting focus
        };
        return false;
      }
    }
  });
});

$(this).click(function(event) {
  if ($('#animation').prop('checked')) {
    event.preventDefault();
    $('html, body').animate({scrollTop: $target.offset().top}, 1000, function() {
      location.hash = target;
      $target.focus();
      if ($target.is(":focus")) {
        return !1;
      } else {
        $target.attr('tabindex', '-1');
        $target.focus()
      }
    })
  }
});