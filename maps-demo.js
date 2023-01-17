var map = L.map('map');

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: ['a', 'b', 'c']
}).addTo(map);

let routes = [];

let waypoints = [
    [
        L.latLng(24.909445897375484, 67.12201092348717),
        L.latLng(24.939125438326492, 67.12373179721615)
    ],
    [
        L.latLng(24.929125438326492, 67.12273179721615),
        L.latLng(24.929125438326492, 67.12273179721615)
    ]
];

for (var i = 0; i < waypoints.length; ++i) {

    routes.push(
        new L.Routing.control({
            id: 'test',
            routeWhileDragging: true,
            waypoints: waypoints[i],
            lineOptions: {
                styles: [{color: 'green', opacity: 1, weight: 5}],
                addWaypoints: false
            },
            Itinerary: {
                show: false
            },
            routeLine: (r) => {
                var line = L.Routing.line(r, {
                    addWaypoints: false,
                    extendToWaypoints: false,
                    routeWhileDragging: false,
                    autoRoute: true,
                    useZoomParameter: false,
                    draggableWaypoints: false,
                    addWaypoints: false,
                    styles: [{color: 'green', opacity: 1, weight: 5}],
                });
                line.eachLayer((l) => {
                    l.on('click', (e) => {
                        //event will be here
                    });
                });
                return line;
            },
            createMarker: function (i, wp, nWps) {
                const marker = L.marker(wp.latLng, {
                    draggable: false,
                    bounceOnAdd: false,
                    bounceOnAddOptions: {
                        duration: 1000,
                        height: 800,
                        function() {
                            (bindPopup(myPopup).openOn(map))
                        }
                    },
                    icon: L.icon({
                      iconUrl: 'redpin.png',
                      iconSize: [18, 26],
                    //   iconAnchor: [22, 94],
                    //   popupAnchor: [-3, -76],
                    //   shadowAnchor: [22, 94]
                    })
                });
                return marker;
            }
        })
    );
    routes[i].addTo(map);
    routes[i].hide();
}
//to create marker