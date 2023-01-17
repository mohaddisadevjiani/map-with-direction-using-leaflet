window.MAP_WITH_DIRECTION_USING_LEAFLET = window.MAP_WITH_DIRECTION_USING_LEAFLET || {};

(function (window, document, $, mwdul, undefined) {
    "use strict";
    var $document;
    mwdul.init = function () {
        $document = $(document);
        mwdul.init();
        mwdul.trigger("mwdul_init");
    };
    mwdul.init = function () {
        var map = L.map('map');

        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            subdomains: ['a', 'b', 'c']
        }).addTo(map);

        const colors = ['blue', 'red', 'black', 'green', 'orange']; //5 colors as we have at max 5 emergency contacts
        let routes = [];

        let waypoints = [
            [
                L.latLng(24.909445897375484, 67.12201092348717),
                L.latLng(24.939125438326492, 67.12373179721615)
            ],
            [
                L.latLng(24.909445897375484, 67.12201092348717),
                L.latLng(24.929125438326492, 67.12273179721615)
            ]
        ];

        for (var i = 0; i < waypoints.length; i++) {

            routes.push(
                new L.Routing.control({
                    id: 'test',
                    routeWhileDragging: true,
                    waypoints: waypoints[i],
                    Itinerary: {
                        show: false
                    },
                    lineOptions: {
                        styles: [{color: colors[i], opacity: 1, weight: 5}],
                        addWaypoints: false
                    },
                    // routeLine: (r) => {
                    //     var line = L.Routing.line(r, {
                    //         addWaypoints: false,
                    //         extendToWaypoints: false,
                    //         routeWhileDragging: false,
                    //         autoRoute: true,
                    //         useZoomParameter: false,
                    //         draggableWaypoints: false,
                    //         styles: [{color: colors[i], opacity: 1, weight: 5}],
                    //     });
                    //     line.eachLayer((l) => {
                    //         l.on('click', (e) => {
                    //             //event will be here
                    //         });
                    //     });
                    //     return line;
                    // },
                    createMarker: function (i, wp, nWps) {
                        if (i === 0) {
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
                                    // iconAnchor: [22, 94],
                                    // popupAnchor: [-3, -76],
                                    // shadowUrl: 'redpin.png',
                                    // shadowSize: [68, 95],
                                    // shadowAnchor: [22, 94]
                                })
                            });
                            return marker;
                        }
                        return L.marker(wp.latLng);
                    }
                })
            );
            routes[i].addTo(map);
            routes[i].hide();
        }

    };
    mwdul.trigger = function (evtName) {
        var args = Array.prototype.slice.call(arguments, 1);
        args.push(mwdul);
        $document.trigger(evtName, args);
    };

    $(mwdul.init);

})(window, document, jQuery, window.MAP_WITH_DIRECTION_USING_LEAFLET);

