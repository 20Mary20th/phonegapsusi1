(function($) {
 var elements = {
    hide : function(el1) {
      el1.on('click', function() {
        console.log('boutique!');
        $('.item-menu').css({'display' : 'none'});
      });
   }
 };

  elements.hide('a.navBoutique span');
})(jQuery)