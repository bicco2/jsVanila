const API_KEY="241051bf13976dd3ddff8b8d9f247255e";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("you live in ", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url);
}
function onGeoError(){
    alert("Can't find you. No wather for you");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);