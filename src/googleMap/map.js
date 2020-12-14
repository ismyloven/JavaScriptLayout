
//
// let map;
//
// function initMap() {
// 	map = new google.maps.Map(document.getElementById("map"), {
// 		center: { lat: 50.397, lng: 30 },
// 		zoom: 8,
// 	});
// }



function initAutocomplete() {
	const map = new google.maps.Map(document.getElementById("map"), {
		center: { lat: 40.38927830190311, lng: 49.89408988683503 },
		zoom: 11,
		mapTypeId: "roadmap",
	});
	const input = document.getElementById("pac-input");
	const searchBox = new google.maps.places.SearchBox(input);
	map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
	map.addListener("bounds_changed", () => {
		searchBox.setBounds(map.getBounds());
	});
	let markers = [];
	searchBox.addListener("places_changed", () => {
		const places = searchBox.getPlaces();

		if (places.length == 0) {
			return;
		}
		// Clear out the old markers.
		markers.forEach((marker) => {
			marker.setMap(null);
		});
		markers = [];
		const bounds = new google.maps.LatLngBounds();
		places.forEach((place) => {
			if (!place.geometry) {
				console.log("Returned place contains no geometry");
				return;
			}
			const icon = {
				url: place.icon,
				size: new google.maps.Size(71, 71),
				origin: new google.maps.Point(0, 0),
				anchor: new google.maps.Point(17, 34),
				scaledSize: new google.maps.Size(25, 25),
			};

			markers.push(
				new google.maps.Marker({
					map,
					icon,
					title: place.name,
					position: place.geometry.location,
				})
			);

			if (place.geometry.viewport) {
				bounds.union(place.geometry.viewport);
			} else {
				bounds.extend(place.geometry.location);
			}
		});
		map.fitBounds(bounds);
	});
}