var map = L.map('map', {
    center: [20.0, 5.0],
    minZoom: 2,
    zoom: 2
});

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: ['a', 'b', 'c']
}).addTo(map);

var LeafIcon = L.Icon.extend({
    options: {
        shadowUrl: 'leaf-shadow.png',
        iconSize:     [38, 95],
        shadowSize:   [50, 64],
        iconAnchor:   [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76]
    }
});

var greenIcon = new LeafIcon({iconUrl: 'leaf-green.png'}),
    redIcon = new LeafIcon({iconUrl: 'leaf-red.png'}),
    orangeIcon = new LeafIcon({iconUrl: 'leaf-orange.png'});

L.icon = function (options) {
        return new L.Icon(options);
};

L.marker([51.5, -0.09], {icon: greenIcon}).addTo(map).bindPopup("I am a green leaf.");
L.marker([51.495, -0.083], {icon: redIcon}).addTo(map).bindPopup("I am a red leaf.");
L.marker([51.49, -0.1], {icon: orangeIcon}).addTo(map).bindPopup("I am an orange leaf.");
// for ( var i=0; i < markers.length; ++i ) 
// {
//    L.marker( [markers[i].lat, markers[i].lng] )
//       .bindPopup( '<a href="' + markers[i].url + '" target="_blank" rel="noopener">' + markers[i].name + '</a>' )
//       .addTo( map );
// }
// L.Routing.control({
//     waypoints: [
//         L.latLng(24.876902600191627, 67.03108573230874),
//         L.latLng(24.939125438326492, 67.12373179721615)
//     ]
// }).addTo(map);

// L.Routing.control({
//     waypoints: [
//         L.latLng(24.869958726443084, 67.03467656837883),
//         L.latLng(24.856999489313626, 67.03026456376176)
//     ]
// }).addTo(map);
