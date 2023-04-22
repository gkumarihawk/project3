function init(){
	//alert('it works');
	var el = document.getElementById('canvas');
	var myLocation = new google.maps.LatLng(41.851611, -87.632264);
	var myLocation2 = new google.maps.LatLng(41.893300, -87.620830);
	var myLocation3 = new google.maps.LatLng(41.9691831, -87.6598913);
	var mapOptions = {
		center: myLocation2,
		zoom: 18,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		}
	};

	var myMap = new google.maps.Map(el, mapOptions);

	var marker = new google.maps.Marker({
		position: myLocation,
		map: myMap,
		animation: google.maps.Animation.BOUNCE,
		icon: 'images/fountain.png'
		
	});
	var marker2 = new google.maps.Marker({
		position: myLocation2,
		map: myMap,
		animation: google.maps.Animation.BOUNCE,
		icon: 'images/ride.png'
		
	});
	var marker3 = new google.maps.Marker({
		position: myLocation3,
		map: myMap,
		animation: google.maps.Animation.BOUNCE,
		icon: 'images/city.png'
		
	});

	var contentString ="<h1>Millenium Park</h1><p>A public park located in the Loop community area of Chicago </p>";

	var infowindow = new google.maps.InfoWindow({
      content: contentString
  	});

	google.maps.event.addListener(marker, 'mouseover', function() {
    	infowindow.open(myMap, marker);
  	});
	
var contentString2 ="<h1>Six Flags</h1><p>Thrilling theme/water park featuring more than 100 rides, shows, and attractions. </p>";

	var infowindow2 = new google.maps.InfoWindow({
      content: contentString2
  	});

	google.maps.event.addListener(marker2, 'mouseover', function() {
    	infowindow2.open(myMap, marker2);
  	});
var contentString3 ="<h1>Naperville</h1><p>Just 30 minutes from Chicago, Downtown Naperville is the destination of choice for shopping, dining and enjoying.</p>";

	var infowindow3 = new google.maps.InfoWindow({
      content: contentString3
  	});

	google.maps.event.addListener(marker3, 'mouseover', function() {
    	infowindow3.open(myMap, marker3);
  	});


}

google.maps.event.addDomListener(window, 'load', init);