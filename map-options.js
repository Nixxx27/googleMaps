(function (window, mapster) {

  mapster.MAP_OPTIONS = {
    	  
      center: {
        //Hyderabad, Coordinates
        // You can adjust coordinates as per requirement 
        lat: 14.3800, // Hyd Latitude
        lng: 121.0500  // Hyd Longitude
      }, 
        zoom : 10, 
        disableDefaultUI: false,
        scrollwheel: true,
        draggable : true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,  // for Satellite - mapTypeId: 'satellite'
        maxZoom: 11,
        minZoom: 9,
        zoomControlOptions      : {
          position    : google.maps.ControlPosition.LEFT_BOTTOM,
          style       : google.maps.ZoomControlStyle.DFAULT
        },
        panControlOptions: {
          position: google.maps.ControlPosition.LEFT_BOTTOM
      }
  };
	
}(window, window.Mapster || (window.Mapster = {})));