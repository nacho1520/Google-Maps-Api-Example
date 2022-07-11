// Initialize and add the map
function initMap() {

    // Map creation
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15
    });
  
    // Geocoder initialization
    const geocoder = new google.maps.Geocoder();
    
    // Set address 
    const address = 'La Bombonera CABA, Argentina';
    
    // Setting map with address wanted
    geocoder.geocode({ address: address}, (results, status) => {
      if(status == 'OK'){
        console.log(results);
        map.setCenter(results[0].geometry.location);
        const marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
        })
      }
    });
  
  }
  
  window.initMap = initMap;
  
  