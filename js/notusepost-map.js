// Generated by CoffeeScript 1.9.2
(function() {
  var initialize;

  initialize = function() {
    jQuery(document).find('[id^=map_canvas]').each(function() {
      var initLat, initLng, initZoom, map, marker, opt, postInfo;
      postInfo = window['kodamaps_posts_' + jQuery(this).attr('id').replace('map_canvas_', '')];
      initLat = postInfo.centerLat != null ? postInfo.centerLat : 31.773827;
      initLng = postInfo.centerLng != null ? postInfo.centerLng : 130.7518837;
      initZoom = (postInfo.zoom != null) && postInfo.zoom !== '' ? parseInt(postInfo.zoom, 10) : 10;
      opt = {
        zoom: initZoom,
        center: new google.maps.LatLng(initLat, initLng),
        mapTypeid: google.maps.MapTypeId.ROADMAP
      };
      map = new google.maps.Map(this, opt);
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(initLat, initLng),
        map: map
      });
      map.panTo(new google.maps.LatLng(initLat, initLng));
    });
  };

  window.onload = initialize;

}).call(this);
