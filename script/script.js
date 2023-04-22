/*function init(){
	var el = document.getElementById('canvas');
	var myFav1 = new google.maps.LatLng(41.851611, -87.632264);
	var myFav2 = new google.maps.LatLng(41.893300, -87.620830);
	var myFav3 = new google.maps.LatLng(41.9691831, -87.6598913);
	var maps = {
		center: myFav2,
		zoom: 18,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		}
	};

	var myMap = new google.maps.Map(el, maps);

	var marker = new google.maps.Marker({
		position: myFav1,
		map: myMap,
		animation: google.maps.Animation.DROP,
		icon: 'media/iceCream.png'
		
	});
	var marker2 = new google.maps.Marker({
		position: myFav2,
		map: myMap,
		animation: google.maps.Animation.DROP,
		icon: 'media/indianGarden.png'
		
	});
	var marker3 = new google.maps.Marker({
		position: myFav3,
		map: myMap,
		animation: google.maps.Animation.DROP,
		icon: 'media/greenMill.png'
		
	});

	var contentString ="<h1>Legend Tasty House</h1><p> My favourite icecream place. You should definitely try their Double Trouble </p>";
	var contentString2 ="<h1>Indian Garden Chicago</h1><p>The best Indian Restaurant in Chicago. You should go here on weekend for lunch. </p>";
	var contentString3 ="<h1>The Green Mill</h1><p>It is one of the oldest Italian pub in Chicago. Their cockatils are super cheap (Drink responsibly). </p>";

	var infowindow = new google.maps.InfoWindow({
      content: contentString
  	});

	google.maps.event.addListener(marker, 'mouseover', function() {
    	infowindow.open(myMap, marker);
  	});
	
	var infowindow2 = new google.maps.InfoWindow({
      content: contentString2
  	});

	google.maps.event.addListener(marker2, 'mouseover', function() {
    	infowindow2.open(myMap, marker2);
  	});

	var infowindow3 = new google.maps.InfoWindow({
      content: contentString3
  	});

	google.maps.event.addListener(marker3, 'mouseover', function() {
    	infowindow3.open(myMap, marker3);
  	});
}

google.maps.event.addDomListener(window, 'load', init);*/

/*function initMap(){
  var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
}

google.maps.event.addDomListener(window, 'load', initMap);*/

function init(){
	//alert('it works');
	var el = document.getElementById('canvas');
	var myLocation = new google.maps.LatLng(41.881416037821374, -87.62371107312794);
	var myLocation2 = new google.maps.LatLng(42.36753131192254, -87.93324023323575);
	var myLocation3 = new google.maps.LatLng(41.77236943257747, -88.15194568534602);
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