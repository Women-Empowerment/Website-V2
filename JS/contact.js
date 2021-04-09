// Initialize and add the map
function initMap() {
	// The location of Uluru
	const uowd = { lat: 25.1015, lng: 55.1628 };
	// The map, centered at Uluru
	const map = new google.maps.Map(document.getElementById("map"), {
		zoom: 20,
		center: uowd,
	});
	// The marker, positioned at Uluru
	const marker = new google.maps.Marker({
		position: uowd,
		map: map,
	});
}
