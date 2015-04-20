initialize = ->
  jQuery(document).find('[id^=map_canvas]').each ->
    postInfo = window['kodamaps_posts_'+jQuery(@).attr('id').replace('map_canvas_','')]
    initLat = if postInfo.centerLat? then postInfo.centerLat else 31.773827
    initLng = if postInfo.centerLng? then postInfo.centerLng else 130.7518837
    initZoom = if postInfo.zoom? and postInfo.zoom isnt '' then parseInt postInfo.zoom,10 else 10

    opt =
      zoom: initZoom
      center: new google.maps.LatLng initLat,initLng
      mapTypeid: google.maps.MapTypeId.ROADMAP

    map = new google.maps.Map @,opt
    marker = new google.maps.Marker
      position: new google.maps.LatLng initLat,initLng
      map: map
    map.panTo new google.maps.LatLng initLat,initLng
    return
  return

window.onload = initialize
