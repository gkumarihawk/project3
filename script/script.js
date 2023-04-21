function init(){
	var canvas = document.getElementById('canvas');
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

	var myMap = new google.maps.Map(canvas, maps);

	var marker = new google.maps.Marker({
		position: myFav1,
		map: myMap,
		//animation: google.maps.Animation.BOUNCE,
		icon: 'media/iceCream.png'
		
	});
	var marker2 = new google.maps.Marker({
		position: myFav2,
		map: myMap,
		//animation: google.maps.Animation.BOUNCE,
		icon: 'media/indianGarden.png'
		
	});
	var marker3 = new google.maps.Marker({
		position: myFav3,
		map: myMap,
		//animation: google.maps.Animation.BOUNCE,
		icon: 'media/greenMill.png'
		
	});

	var contentString ="<h1>Legend Tasty House</h1><p> My favourite icecream place. You should definitely try their Double Trouble </p>";

	var infowindow = new google.maps.InfoWindow({
      content: contentString
  	});

	google.maps.event.addListener(marker, 'mouseover', function() {
    	infowindow.open(myMap, marker);
  	});
	
var contentString2 ="<h1>Indian Garden Chicago</h1><p>The best Indian Restaurant in Chicago. You should go here on weekend for lunch. </p>";

	var infowindow2 = new google.maps.InfoWindow({
      content: contentString2
  	});

	google.maps.event.addListener(marker2, 'mouseover', function() {
    	infowindow2.open(myMap, marker2);
  	});
var contentString3 ="<h1>The Green Mill</h1><p>It is one of the oldest Italian pub in Chicago. Their cockatils are super cheap (Drink responsibly). </p>";

	var infowindow3 = new google.maps.InfoWindow({
      content: contentString3
  	});

	google.maps.event.addListener(marker3, 'mouseover', function() {
    	infowindow3.open(myMap, marker3);
  	});
}

google.maps.event.addDomListener(window, 'load', init);