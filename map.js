document.addEventListener("DOMContentLoaded", function() {
    var mapContainer = document.getElementById('map'),
        mapOption = {
            center: new kakao.maps.LatLng(33.442336, 126.571471),
            level: 3
        };

    var map = new kakao.maps.Map(mapContainer, mapOption);

    var markerPosition  = new kakao.maps.LatLng(33.442336, 126.571471);

    var marker = new kakao.maps.Marker({
        position: markerPosition
    });

    marker.setMap(map);
});