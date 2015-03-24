(function($){  
  var jsons = {
    show : function() {
      var contTitle = $('p.json-about-title');
          contTitle.css({'text-transform' : 'uppercase'});
      $.ajax({
        url : 'http://local.susiwebsite.com/json-about1',
        data : {
          
        },
        success: function(result) {
          var set = result.nodes.length;
          for (var a = 0; a < set ; a++) {
            var aboutTitle = result.nodes[a].node['About Title'];
            var aboutImg = result.nodes[a].node['About Background']['src'];
            var aboutContent = result.nodes[a].node['About Content'];
            var historyTitle = result.nodes[a].node['Blog Title'];
            var historyImg = result.nodes[a].node['Blog Background']['src'];
            var historyContent = result.nodes[a].node['Blog Content'];
            var ownerImg = result.nodes[a].node['Slideshow'][0]['src'];
            var ownerAlt = result.nodes[a].node['Slideshow'][0]['alt'];
          }
          $('div#main h2.banner-about').append(aboutTitle);
          $('div#main h2.banner-history').append(historyTitle);
          $('div#main h2.banner-owners').append('Owners Profile');
          $('p.content-about').append(aboutContent);

          // Setting the JSON Objects to HTML

          // About Tab in Initial View

          $('#main > section.current').attr('display', 'none');
          $('section.ten').addClass('tabAbout');
          $('section.tabAbout').removeClass('ten');
          $('#main > section.tabAbout').attr('style', 'background:url('+ aboutImg +'); background-size: cover; height: auto; width: 100%; display: block;');

          // Other Tabs;
          $('ul.selection li').on('click', function() {
            var getText = $(this).find('div.tab-container').text();
              if (getText == 'History') {
                $('section.eleven').addClass('tabHistory');
                $('section.tabHistory').removeClass('eleven');
                $('#main > section.tabHistory').attr('style', 'background:url('+ historyImg +'); background-size: cover; height: auto; width: 100%; display: block;');
                $('p.content-history').empty();
                $('p.content-history').append(historyContent);
                $('div.bg-histcont1').append("<img class= 'right' src = " + historyImg + ">");
              }
              if (getText == 'Owners') {
                $('section.twelve').addClass('tabOwners');
                $('section.tabOwners').removeClass('twelve');
                $('#main > section.tabOwners').attr('style', 'background:url('+ ownerImg +'); background-size: cover; height: auto; width: 100%; display: block;');
                // Ask Kim about the entity type used on the Owners Title
              }

              if (getText == 'Location') {
                console.log('image location');
              }
              else {
                // 
              }
          });
          
        }
      });
     } // End of Show Function
  }

  jsons.show();


})(jQuery)