(function($){
  var json = {
    navList : function() {
      $.ajax({
       url : 'http://local.susiwebsite.com/json-parent-menu-tax',
       data : {
        format : 'json'
       },
       success : function(result) {
        var result_len = result.nodes.length;
          for (var a = 0; a < result_len ; a++) {
            var menuTabs = result.nodes[a].node['name'];
            var menuID = result.nodes[a].node['Term ID'];
            var rename = menuTabs.replace("&", "");
            var rename_stage2 =  rename.replace(" ", "-");
            var setTabs = "<li><div class = 'tab-container' data-views='"+ rename.toLowerCase() + "' data-termid = '"+ menuID +"' rel = '"+ a +"'>" + menuTabs + "</div></li>";
            $('div.nav-menu ul.json-menu').append(setTabs);
            json.look();
          }
          $('div.nav-menu ul.selection-menu li div').on('click', function() {
            var getID = $(this).data('termid');
            var getName = $(this).html();
            var getDiv = $(this).attr('rel');
            json.getProducts(getDiv, getID);
          });
       }
     });
    }, 

    look : function() {
      var nav_menu_width = 0;
        $('div.nav-menu ul.json-menu li div').each(function(e){
          nav_menu_width += $(this).innerWidth();
          console.log(nav_menu_width);
        });
        $('div.nav-menu ul.json-menu').css({'width' : nav_menu_width , 'overflow' : 'hidden !important'});
    },

    getProducts : function(divID, productID) {
      $('div.get-pro').empty();
      $('div.get-pro').html("<div id = " + divID + " class = 'menu entree' >");
      $('div.menu').append("<div class = 'container' style='margin-top: 10px;'><div class = 'row'><div class = '4u'> </div></div></div>");

      $.ajax({
        url : 'http://local.susiwebsite.com/json-menu1/' + productID,
        data : {
          format: 'json'
        },
        success : function(result) {
          var result_len = result.nodes.length;
          for (var a = 0; a < result_len ; a++) {
            var menuImg = result.nodes[a].node['Product Menu Image']['src'];
            var menuTitle = result.nodes[a].node['Title'];
            var menuTags = result.nodes[a].node['Product Tags'];
            var menuPrice = result.nodes[a].node['Price'];
            var allTags = menuTags.split(",");
            var allTags_length = allTags.length; 
            console.log(allTags_length);
            
            var overallImg = "<article class='item item-menu'><a href = '#' class='image fit'><img src =" + menuImg + "></a>";
            var overallTitle = "<header class = 'item-menu'><a href= '#'><h3>" + menuTitle.toUpperCase(); + "</h3></a></header></article>";
            $('div.4u').append(overallImg).append(overallTitle);
          }

          for (var b = 0 ; b < allTags_length ; b++) {
            var tags = "<a href = '#' class = 'pro-tags'><span class = 'hello'>" + allTags[b] + "</span></a>&nbsp<span>|</span>&nbsp";
            $('div.4u h3').after(tags);
          }
            $('a.pro-tags span.hello:last-child').addClass('here!');
        },
      });

    }
  };
  json.navList();
})(jQuery)