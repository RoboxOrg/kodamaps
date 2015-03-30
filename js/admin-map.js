(function() {
    var map, marker;
    function initialize() {
        var initLat = jQuery('#kodamaps-txt-input-lat').val() || 0;
        var initLng = jQuery('#kodamaps-txt-input-lng').val() || 0;
        var initZoom = (initLat || initLng) ? 16 : 0;
        var mapOptions = {
            zoom: initZoom,
            center: new google.maps.LatLng(initLat, initLng),
        };
        map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

        var latLng = new google.maps.LatLng(initLat, initLng);
        marker = new google.maps.Marker({
            position: latLng,
            map: map
        });

        jQuery('#kodamaps-txt-input-address, #kodamaps-txt-input-lat, #kodamaps-txt-input-lng').change(function() {
            var geocoder = new google.maps.Geocoder();
            if (this.id === 'kodamaps-txt-input-address') {
                var address = jQuery('#kodamaps-txt-input-address').val();
                geocoder.geocode(
                    {
                        'address': address
                    },
                    function (results, status) {
                        if (status === google.maps.GeocoderStatus.OK) {
                            var latLng = new google.maps.LatLng(results[0].geometry.location.k, results[0].geometry.location.D);
                            marker.position = latLng;
                            marker.setMap(map);
                            map.panTo(new google.maps.LatLng(marker.getPosition().k, marker.getPosition().D));
                            map.setZoom(16);
                            jQuery('#kodamaps-txt-input-lat').val(marker.getPosition().k);
                            jQuery('#kodamaps-txt-input-lng').val(marker.getPosition().D);
                            jQuery('.kodamaps-postdata-address').val(address);
                            jQuery('.kodamaps-postdata-lat').val(marker.getPosition().k);
                            jQuery('.kodamaps-postdata-lng').val(marker.getPosition().D);
                        }
                    }
                );
            } else {
                var latLng = new google.maps.LatLng(jQuery('#kodamaps-txt-input-lat').val(), jQuery('#kodamaps-txt-input-lng').val());
                geocoder.geocode(
                    {
                        'latLng': latLng
                    },
                    function (results, status) {
                        if (status === google.maps.GeocoderStatus.OK) {
                            var address = results[0].formatted_address;
                            marker.position = latLng;
                            marker.setMap(map);
                            map.panTo(new google.maps.LatLng(marker.getPosition().k, marker.getPosition().D));
                            map.setZoom(16);
                            jQuery('#kodamaps-txt-input-address').val(address);
                            jQuery('#kodamaps-txt-input-lat').val(marker.getPosition().k);
                            jQuery('#kodamaps-txt-input-lng').val(marker.getPosition().D);
                            jQuery('.kodamaps-postdata-address').val(address);
                            jQuery('.kodamaps-postdata-lat').val(marker.getPosition().k);
                            jQuery('.kodamaps-postdata-lng').val(marker.getPosition().D);
                        }
                    }
                );
            }
        });
    }
    window.onload = initialize;
}).call(this);
