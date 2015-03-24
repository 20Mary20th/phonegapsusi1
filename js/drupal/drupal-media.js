(function($){
  var jsons = {
  	show : function() {
      $.ajax({
         url: 'http://local.susiwebsite.com/json-media1',
         data: {
         	format: 'json'
         },
         success : function(result) {
           var set = result.nodes.length;
           for (var a = 0; a < set ; a ++) {
           	var getImgs = result.nodes[a].node['Image Gallery']['src'];
           	var containerImages1 = '<div class="items Drinks"><a class = "example-image-link" href = "' + getImgs + '"><img src = ' + getImgs + '></a></div>';
           	$('div.masonry').addClass('column').append(containerImages1);
           	$('a.example-image-link').attr({'data-lightbox' : 'example-2' , 'data-title' : 'Optional caption.'});
           }  
         }
      });
  	}
  };

  jsons.show();
})(jQuery)