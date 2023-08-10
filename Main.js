let latitude = 22.7868542, longitude = 88.3543296;

var map = new mapboxg1.Map({
container: 'map',
style: "mapbox://styles/mapbox/streets-v11",
center: [longitude, latitude],
zoom: 4
});

var img1 = document.querySelector("#amber")

// Create a Amber Palace, Jaipur Marker and add it to the map.
var marker1 = new mapboxgl.Marker({
element:img1
})
.setLngLat([75.85133, 26.98547])
.addTo(map);

map.addControl(
    new MapboxGeocoder({
    accessToken: mapboxgl.accessToken, 
    mapboxgl: mapboxgl
    })
    );

    map.addControl(
        new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
        }) .on('result', function (e) {
        destination = e.result.center
        })
        );

        $(function () {
            $("#navigate-button").click(function () {
            window.location.href=`ar_weather.htmlsource=${latitude};${longitude}&destination=${destination[1]};${destination[0]}`
            })
            })