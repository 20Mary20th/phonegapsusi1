(function($){
  var jsons = {
    init : function() {
      $.ajax({
        url: 'http://local.susiwebsite.com/json-feed-me1',
        data : {
          format : 'json'
        },
        success : function(result) {
          var set = result.nodes.length;
          for (var a = 0; a < set ; a++) {
            var setSusiImg = result.nodes[a].node['Header Background']['src'];
            var setSusiTitle = result.nodes[a].node['Header Title'];
            $('div.bg-mysusi1').attr('style', 'background:url('+ setSusiImg +'); background-size: cover; height: auto; width: 100%; display: block;');
            $('h1.set-mysusi1').append(setSusiTitle);
          }
        }
      });
    },

    tabs : function() {
      $.ajax({
        url: 'http://local.susiwebsite.com/json-parent-tax1',
        data : {
          format : 'json'
        },
        success : function(result) {
          var set = result.nodes.length;
          for (var a = 0; a < set ; a++) {
            var feedMeTabs = result.nodes[a].node['Name'];
            var rename = feedMeTabs.replace(" ", "-");
            var setTabs = "<li data-views="+ rename.toLowerCase() +"><div class = 'tab-container'>" + feedMeTabs + "</li></div>";
            $('ul.selection').append(setTabs);
            $('ul.selection li').eq(a).attr('rel', 'tab' + a);
          }
         
        }
      });
    },

    check : function() {
      $(document).on('click', '.selection li', function() {
        $('.wrapper-content').empty();
        var views_feedme = "json-taxonomy-" + $(this).data('views');
        var views_list =  "json-" + $(this).data('views');
        $.ajax({
          url: 'http://local.susiwebsite.com/' + views_feedme,
          success: function(result) {
            var result_length = result.nodes.length;
              for (var x = 0; x < result_length; x++) {
                var name = result.nodes[x].node['name'];
                var craveID = result.nodes[x].node['Term ID'];
                $('div.wrapper-content').append("<li data-termid = " + craveID + "><a>" + name + "</li></a>");
            }
            
            $('div.wrapper-content li').on('click', function(){
              var getID = $(this).data('termid');
              var getName = $(this).html();
              console.log(views_list); // This will get the dynamic urls of the child taxonomies of IFeel, ICrave, MyDiet1
              console.log(getID);
              jsons.getCrave(views_list, getID, getName);
            });
          }
        });
      });
    },

   getCrave : function(views, get, name) {
    $('body').load('my-susi-call.html', function(){ 
      $('h6.entree-selected').append(name);
      $.ajax({
      url : 'http://local.susiwebsite.com/' + views + '/' + get,

      data : {
        format : 'json'
      },
      success : function(result) {

        var set = result.nodes.length;
        for (var a = 0 ; a < set ; a ++) {
          var getTitle = result.nodes[a].node['Title'];
          var getImg = result.nodes[a].node['Product Menu Image']['src'];
          var getTags = result.nodes[a].node['Product Tags'];
          var setTitle = "<h6>" + getTitle + "</h6>";
          var setImg = "<img src =" + getImg + ">";
          var setAllTags = "<ul><li><a>" + getTags + "</li></a>"; 
              setAllTags += "</ul>";
          var setOverAll = "<div class = product-container1>" + setImg + setTitle + setAllTags + "</div>";
          $('div.entree').append(setOverAll);
        } 
      }
      });
    });
   },
  };
  jsons.init();
  jsons.tabs();
  jsons.check();
})(jQuery)