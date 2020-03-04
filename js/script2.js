var mapid = L.map('mapid').setView([41.386956, 2.170003], 16);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
}).addTo(mapid);

L.control.scale().addTo(mapid);

var latitud = 41.386889;
var longitud = 2.166028;

L.marker([latitud, longitud], { draggable: true }).addTo(mapid);

var popup = L.popup();

function onMapClick(e) {
    console.log(e.latlng);
    if (true) {
        
        popup
            .setLatLng(e.latlng)
            .setContent("Mis coordenadas son:<br><strong>Lat:" + e.latlng["lat"]+"  Len:"+e.latlng["lng"])
            .openOn(mapid);
    }
}

mapid.on('click', onMapClick);