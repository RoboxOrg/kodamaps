(function() {
    var map;
    function initialize() {
        var initLat = 0;
        var initLng = 0;
        initLat = (typeof kodamaps_posts !== 'undefined') && kodamaps_posts.centerLat !== '' ? parseFloat(kodamaps_posts.centerLat, 10) : initLat;
        initLng = (typeof kodamaps_posts !== 'undefined') && kodamaps_posts.centerLng !== '' ? parseFloat(kodamaps_posts.centerLng, 10) : initLng;
        var initZoom = (typeof kodamaps_posts !== 'undefined') && kodamaps_posts.zoom !== '' ? parseInt(kodamaps_posts.zoom,10) : 10;
        var address = (typeof kodamaps_posts !== 'undefined') && kodamaps_posts.centerAddr !== '' ? kodamaps_posts.centerAddr : '';
        if (address !== '') {
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode(
                {
                    'address': address
                },
                function (results, status) {
                    if (status === google.maps.GeocoderStatus.OK) {
                        initLat = results[0].geometry.location.k;
                        initLng = results[0].geometry.location.D;
                        var mapOptions = {
                            zoom: initZoom,
                            center: new google.maps.LatLng(initLat, initLng),
                            mapTypeid: google.maps.MapTypeId.ROADMAP
                        };
                        if(document.getElementById("map_canvas")) {
                            map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
                        }
                        kodamaps_posts.postInfo.forEach(function(post) {
                            var markerOption = {
                                position: new google.maps.LatLng(post.lat, post.lng),
                                map: map
                            };
                            if (post.marker) { markerOption.icon = post.marker; }
                            var marker = new google.maps.Marker(markerOption);
                        });
                    }
                }
            );
        } else {
            var mapOptions = {
                zoom: initZoom,
                center: new google.maps.LatLng(initLat, initLng),
                mapTypeid: google.maps.MapTypeId.ROADMAP
            };
            if(document.getElementById("map_canvas")) {
                map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
            }
            kodamaps_posts.postInfo.forEach(function(post) {
                var markerOption = {
                    position: new google.maps.LatLng(post.lat, post.lng),
                    map: map
                };
                if (post.marker) { markerOption.icon = post.marker; }
                var marker = new google.maps.Marker(markerOption);
            });
        }
    }
    window.onload = initialize;
}).call(this);
