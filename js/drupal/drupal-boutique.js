(function($){
  var jsons = {
    tabs : function() {
     $.ajax({
       url : 'http://local.susiwebsite.com/json-parent-boutique-tax',
       data : {
        format : 'json'
       },
       success : function(result) {
        var result_len = result.nodes.length;
          for (var a = 0; a < result_len ; a++) {
            var bouTabs = result.nodes[a].node['name'];
            var bouID = result.nodes[a].node['Term ID'];
            var rename = bouTabs.replace("&", "");
            var rename_stage2 =  rename.replace(" ", "-");
            var setTabs = "<li data-views='"+ rename.toLowerCase() + "' data-termid = '"+ bouID +"'><div class = 'tab-container'>" + bouTabs + "</li></div>";
            $('div.nav-menu ul.selection').append(setTabs);
            jsons.look();
          }
          $('div.nav-menu ul.selection li').on('click', function(){
            $('div.entree').empty();
            var getID = $(this).data('termid');
            var getName = $(this).html();
            jsons.getDeli(getID, getName);
          });
       }
     });
    },

    look : function() {
      var nav_menu_width = 0;
        $('div.nav-menu ul.selection li').each(function(e){
          nav_menu_width += $(this).innerWidth();
        });
        $('div.nav-menu ul.selection').css({'width' : nav_menu_width , 'overflow' : 'hidden !important'});
    },

    getDeli : function(id, name) {
      $.ajax({
        url : 'http://local.susiwebsite.com/json-boutique1/' + id,
        data : {
          format: 'json'
        },
        success : function(result) {
          var result_len = result.nodes.length;
          for (var a = 0; a < result_len ; a++) {
            var menuImg = result.nodes[a].node['Product Menu Image']['src'];
            var menuTitle = result.nodes[a].node['Title'];
            var menuTags = result.nodes[a].node['Product Tags'];
            var allTags = menuTags.split(",");
            var allTags_length = allTags.length; 

            var overallImg = "<div class = product-img><a href = '#'><img src =" + menuImg + "></a></div>";
            var overallTitle = "<div class = product-title1><a href= '#'>" + menuTitle.toUpperCase(); + "</a></div>";
            $('div.entree').append(overallImg).append(overallTitle);
  
            for (var b = 0 ; b < allTags_length ; b++) {
              var call = '<li>' + allTags[b] + '</li>';
              $('div.entree').append('<a>' + call + '</a>');
            }
              jsons.showInfo();
          }
        }
      });
    },

    showInfo : function() {
      console.log('it work');
    }
    
  };
  jsons.tabs();
})(jQuery)