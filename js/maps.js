(function($){
  function init() {
   var mapCanvas =  document.getElementById('map');
   var map = new google.maps.Map(mapCanvas);

   var mapOptions = {
       center: new google.maps.LatLng(-41.2858, 174.78682,14),
       zoom: 18,
       mapTypeId: google.maps.MapTypeId.ROADMAP
     }
   var map = new google.maps.Map(mapCanvas, mapOptions);
  }
  google.maps.event.addDomListener(window, 'load', init);

})(jQuery);

// $(document).ready(function () {
//     $("img[rel]").overlay();
//     $('#test1').fadeOut();

//     var map = L.map('map').setView([-41.2858, 174.78682], 14);
//     mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
//     L.tileLayer(
//         'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution: 'Map data &copy; ' + mapLink,
//         maxZoom: 18,
//     }).addTo(map);
//     var marker = L.marker([-41.29042, 174.78219])
//         .bindPopup('<img src="http://tinyurl.com/pb9esy2" class="pop" rel="#test1" alt="" width="100px"/>')
//         .addTo(map);

//     map.on('popupopen', function () {
//         $("img[rel]").overlay();
//     });
// });