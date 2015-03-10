(function($){

  var nav_menu_width = 0;

  $('div.nav-menu ul.selection li').each(function(e){
    nav_menu_width += $(this).innerWidth();

  });
  
  $('div.nav-menu ul.selection').css({'width' : nav_menu_width});

})(jQuery);

$(document).ready(function() {

  $(".content").hide();
  $(".content:first, .wrapper-banner:first").show(); 

  $("ul.selection li").click(function() {
    var target = $(this).index(); 
    $(".wrapper-banner").hide();
      $(".wrapper-banner").eq(target).show();
    $("ul.selection li").removeClass("active");
    $(this).addClass("active");
    $(".content").hide();
    var activeTab = $(this).attr("rel"); 
    $("#"+activeTab).fadeIn(); 
  });
});