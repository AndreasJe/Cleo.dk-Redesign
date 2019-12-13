
      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }


async defer
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCduFbgRBRTr4ERPfCz46yRKthEXHJIuLA&callback=initMap"
    async defer></script>
