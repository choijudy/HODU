document.addEventListener("DOMContentLoaded", function() {
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div
        mapOption = {
            center: new kakao.maps.LatLng(37.459882, 126.951905), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 마커가 표시될 위치입니다
    var markerPosition  = new kakao.maps.LatLng(37.459882, 126.951905);

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    var modal = document.getElementById("modal");
    var closeModal = document.getElementsByClassName("close")[0];

    // Open modal for demo purposes, you can replace this with your own logic
    document.querySelectorAll(".download-btn").forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            modal.style.display = "block";
        });
    });

    closeModal.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});