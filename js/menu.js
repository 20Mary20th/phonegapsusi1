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

$(document).ready(function() {

  $(".menu").hide();
  $(".menu:first").show(); 

  $("ul.selection-menu li").click(function() {
    var target = $(this).index(); 
    $("ul.selection-menu li").removeClass("active");
    $(this).addClass("active");
    $(".menu").hide();
    var activeTab = $(this).attr("rel"); 
    $("#"+activeTab).fadeIn(); 
    return false;
  });
});

$(document).ready(function() {

  $(".food").hide();
  $(".food:first, .wrapper-header:first").show(); 

  $("ul.selection-boutique li").click(function() {
    var pointer = $(this).index();
    $(".wrapper-header").hide();
    $(".wrapper-header").eq(pointer).show();
    $("ul.selection-boutique li").removeClass("append");
    $(this).addClass("append");
    $(".food").hide();
    var activeTabs = $(this).attr("rel"); 
    $("#"+activeTabs).fadeIn(); 
  });
});

$(document).ready(function() {

  $(".food-2").hide();
  $(".food-2:first").show(); 

  $("ul.selection-boutique-2 li").click(function() {
    var pointers = $(this).index();
    $(".wrapper-header").hide();
    $(".wrapper-header").eq(pointers).show();
    $("ul.selection-boutique-2 li").removeClass("append-2");
    $(this).addClass("append-2");
    $(".food-2").hide();
    var activeTab2 = $(this).attr("rel"); 
    $("#"+activeTab2).fadeIn(); 
  });
});

$(document).ready(function() {

  $(".media").hide();
  $(".media:first").show(); 

  $("ul.selection-media li").click(function() {
    var media = $(this).index();
    $(".wrapper-header").hide();
    $(".wrapper-header").eq(media).show();
    $("ul.selection-media li").removeClass("active-2");
    $(this).addClass("active-2");
    $(".media").hide();
    var activeMedia = $(this).attr("rel"); 
    $("#"+activeMedia).fadeIn(); 
  });
});

$(document).ready(function() {

  $(".login").hide();
  $(".login:first").show(); 

  $("ul.selection-login li").click(function() {
    var login = $(this).index();
    $(".wrapper-header").hide();
    $(".wrapper-header").eq(login).show();
    $("ul.selection-login li").removeClass("active-4");
    $(this).addClass("active-4");
    $(".login").hide();
    var activeLogin= $(this).attr("rel"); 
    $("#"+activeLogin).fadeIn(); 
  });
});

$(document).ready(function() {

  $(".contact").hide();
  $(".contact:first").show(); 

  $("ul.selection-contact li").click(function() {
    var showDiv = $(this).index();
    $("ul.selection-contact li").removeClass("active-3");
    $(this).addClass("active-3");
    $(".contact").hide();
    var activeTab3 = $(this).attr("rel"); 
    $("#"+activeTab3).fadeIn(); 
  });
});
$(document).ready(function() {
$("#slider-effect").click(function(){
    $("#sidePanelToggle").hide();
});
$("#back-effect").click(function(){
    $("#sidePanelToggle").show();
});
});

// $(document).ready(function() {

//   $(".media").hide();
//   $(".media:first").show(); 

//   $("ul.selection-media li").click(function() {
//     var target = $(this).index(); 
//     alert(target)
//     $("ul.selection-media li").removeClass("active");
//     $(this).addClass("active");
//     $(".media").hide();
//     var activeTab = $(this).attr("rel"); 
//     $("#"+activeTab).fadeIn(); 
//   });
// });

