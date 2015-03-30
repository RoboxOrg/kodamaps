(function() {
    var map;
    function initialize() {
        var initLat = (typeof kodamaps_post !== 'undefined') ? kodamaps_post.lat : 31.773827;
        var initLng = (typeof kodamaps_post !== 'undefined') ? kodamaps_post.lng : 130.7518837;
        var initZoom = (typeof kodamaps_post !== 'undefined') && kodamaps_post.zoom !== '' ? parseInt(kodamaps_post.zoom,10) : 10;
        var mapOptions = {
            zoom: initZoom,
            center: new google.maps.LatLng(initLat, initLng),
            mapTypeid: google.maps.MapTypeId.ROADMAP
        };
        if(document.getElementById("map_canvas")) {
            map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(kodamaps_post.lat, kodamaps_post.lng),
                map: map,
                icon: kodamaps_post.marker
            });
            map.panTo(new google.maps.LatLng(initLat, initLng));
        }
    }
    window.onload = initialize;
}).call(this);
