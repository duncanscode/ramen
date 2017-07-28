
      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 49.27500, lng: -123.122000},
          zoom: 14,
		   styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{visibility: 'off'}]
            },
			{
			  featureType: 'poi',
			  elementType: 'labels.icon',
			  stylers: [{visibility: 'off'}]
			},
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            },
			{
			  featureType: 'road.highway',
			  elementType: 'labels.icon',
			  stylers: [{visibility: 'off'}]
			}
          ],
		  disableDefaultUI: true,
		  scrollwheel: false
        });
		
		var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Ramen Gojiro</h1>'+
      '</div>';
	  
	    var infowindow = new google.maps.InfoWindow({
			content: contentString
		});


		
		var image = 'img/ramenicon.png';
		
		var icon = {
			url: 'img/ramenicon.png',
			scaledSize: new google.maps.Size(50, 50)
		};
		var gojiro = new google.maps.Marker({
			  position: {lat: 49.2824997, lng: -123.116645},
			  map: map,
			  icon: icon,
			  title: 'Gojiro'
		  });
		gojiro.addListener('click', function() {
			infowindow.open(map, gojiro);
		});
		var marker = new google.maps.Marker({
			  position: {lat: 49.2635994, lng: -123.1169049},
			  map: map,
			  icon: icon,
			  title: 'Benkei'
		  }); 
		var marker = new google.maps.Marker({
			  position: {lat: 49.2633631, lng: -123.1152567},
			  map: map,
			  icon: icon,
			  title: 'Menya'
		  });
		  
		var marker = new google.maps.Marker({
			  position: {lat: 49.263088, lng: -123.1190517},
			  map: map,
			  icon: icon,
			  title: 'Hokkaido'
		  });
		  var marker = new google.maps.Marker({
			  position: {lat: 49.2821353, lng: -123.1357985},
			  map: map,
			  icon: icon,
			  title: 'Koika'
		  });
		var marker = new google.maps.Marker({
			  position: {lat: 49.268193, lng: -123.1485908},
			  map: map,
			  icon: icon,
			  title: 'Taishoken Ramen'
		  });
		  
		var marker = new google.maps.Marker({
			  position: {lat: 49.280847, lng: -123.1100223},
			  map: map,
			  icon: icon,
			  title: 'Taishoken Ramen'
		  });
      };