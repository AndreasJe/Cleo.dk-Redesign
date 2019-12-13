    < script async defer src = "https://maps.googleapis.com/maps/api/js?&callback=initMap" > < /script


    var map;

    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {
          lat: 12.6018144,17,
          lng: 55.6619472
        },
        zoom: 8
      });
    }
