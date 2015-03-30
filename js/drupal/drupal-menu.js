(function($) {
  var jsons = {
    tabs : function() {
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
            var setTabs = "<li><div class = 'tab-container' data-views='"+ rename.toLowerCase() + "' data-termid = '"+ menuID +"'>" + menuTabs + "</div></li>";
            $('div.nav-menu ul.json-menu').append(setTabs);
            jsons.look();
            
          }
          $('div.nav-menu ul.selection-menu li div').on('click', function(){
            $('div.4u').empty();
            var getID = $(this).data('termid');
            var getName = $(this).html();
            jsons.getProducts(getID, getName);
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

    getProducts : function(id, name) {
      $.ajax({
        url : 'http://local.susiwebsite.com/json-menu1/' + id,
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
            
            var overallImg = "<article class='item'><a href = '#' class='image fit'><img src =" + menuImg + "></a>";
            var overallTitle = "<header><a href= '#'><h3>" + menuTitle.toUpperCase(); + "</h3></a></header></article>";

            $('div.4u').append("<div class = 'container1'>" + overallImg + overallTitle + "</div>");

            for (var b = 0 ; b < allTags_length ; b++) {
              var tags = "<a href = '#'><span>" + allTags[b] + "</span></a>&nbsp<span>|</span>&nbsp";
              $('div.4u h3').after(tags);
            }
            var price = "<div class = 'price'><div class = 'left amount'><h1>" + menuPrice + "</h1></div></div>";
            $('div.container1').append(price);
          }
        },
      });
    },
   
    // getProducts : function(id, name) {
    //   $.ajax({
    //     url : 'http://local.susiwebsite.com/json-menu1/' + id,
    //     data : {
    //       format: 'json'
    //     },
    //     success : function(result) {
    //       var result_len = result.nodes.length;
    //       for (var a = 0; a < result_len ; a++) {
    //         var menuImg = result.nodes[a].node['Product Menu Image']['src'];
    //         var menuTitle = result.nodes[a].node['Title'];
    //         var menuTags = result.nodes[a].node['Product Tags'];
    //         var allTags = menuTags.split(",");
    //         var allTags_length = allTags.length; 

    //         var overallImg = "<div class = product-img><a href = '#'><img src =" + menuImg + "></a></div>";
    //         var overallTitle = "<div class = product-title1><a href= '#'>" + menuTitle.toUpperCase(); + "</a></div>";
    //         $('div.entree').append(overallImg).append(overallTitle);
  
    //         for (var b = 0 ; b < allTags_length ; b++) {
    //           var call = '<li>' + allTags[b] + '</li>';
    //           $('div.entree').append('<a>' + call + '</a>');
    //         }
    //       }
    //     }
    //   })
    // }
    
  };
  jsons.tabs();
})(jQuery)