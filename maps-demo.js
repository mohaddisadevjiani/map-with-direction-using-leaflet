var map = L.map('map', {
    center: [20.0, 5.0],
    minZoom: 2,
    zoom: 2
});

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: ['a', 'b', 'c']
}).addTo(map);

// for ( var i=0; i < markers.length; ++i ) 
// {
//    L.marker( [markers[i].lat, markers[i].lng] )
//       .bindPopup( '<a href="' + markers[i].url + '" target="_blank" rel="noopener">' + markers[i].name + '</a>' )
//       .addTo( map );
// }
L.Routing.control({
    waypoints: [
        L.latLng(24.876902600191627, 67.03108573230874),
        L.latLng(24.939125438326492, 67.12373179721615)
    ]
}).addTo(map);

L.Routing.control({
    waypoints: [
        L.latLng(24.869958726443084, 67.03467656837883),
        L.latLng(24.856999489313626, 67.03026456376176)
    ]
}).addTo(map);
