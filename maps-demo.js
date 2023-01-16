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
var route = new L.Routing.control({
                       
  waypoints: [
    L.latLng(24.876902600191627, 67.03108573230874),
    L.latLng(24.939125438326492, 67.12373179721615)
  ],
  routeWhileDragging: true,
  lineOptions: {
    styles: [{ color: 'green', opacity: 1, weight: 5 }]
  },
  createMarker: function (i, wp, nWps) {
    const marker = L.marker(waypoint.latLng, {
      draggable: true,
      bounceOnAdd: false,
      bounceOnAddOptions: {
        duration: 1000,
        height: 800,
        function() {
          (bindPopup(myPopup).openOn(map))
        }
      },
      icon: L.icon({
        iconUrl: '/redpin.png',
        iconSize: [38, 95],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
        shadowUrl: '/redpin.png',
        shadowSize: [68, 95],
        shadowAnchor: [22, 94]
      })
    });
    return marker;
  }

}) .addTo(map).on('routesfound', function(e){
}); 

component.set("v.routeLayer",route);
component.set("v.map2", map);  

 

// L.Routing.control({
//           waypoints: [
//             L.latLng(36.3603179, 59.5041424),
//             L.latLng(36.3279067, 59.5248145)
//           ],
//           routeWhileDragging: true,
//           lineOptions: {
//             styles: [{ color: 'green', opacity: 1, weight: 5 }]
//           },
//           createMarker: function (i: number, waypoint: any, n: number) {
//             const marker = L.marker(waypoint.latLng, {
//               draggable: true,
//               bounceOnAdd: false,
//               bounceOnAddOptions: {
//                 duration: 1000,
//                 height: 800,
//                 function() {
//                   (bindPopup(myPopup).openOn(map))
//                 }
//               },
//               icon: L.icon({
//                 iconUrl: './assets/global/img/mapmarker-red.png',
//                 iconSize: [38, 95],
//                 iconAnchor: [22, 94],
//                 popupAnchor: [-3, -76],
//                 shadowUrl: './assets/global/img/marker-shadow.png',
//                 shadowSize: [68, 95],
//                 shadowAnchor: [22, 94]
//               })
//             });
//             return marker;
//           }
//         }).addTo(map);

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
