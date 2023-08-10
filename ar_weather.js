let cordinates = ""; 

$.ajax({ url:
    'https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.destination_lat}&lon=${coordinates.destination_lon}&appid=94212e971d0ca977303f8ae892224bbd`,
    type: "get",
    success: function (response) {
    let name response.name
    let weather
    response.weather[0].main
    $("#scene_container").append(
    <a-entity gps-entity-place="latitude: ${steps [i]. maneuver.location[1]}; longitude: ${steps[i].m .maneuver.location[0]};">
    <a-entity>
    <a-text height="50" value="Weather forcast is ${weather} at ${name}"></a-text>
    </a-entity>
    </a-entity>
    })
