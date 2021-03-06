var mapid = L.map('mapid').setView([41.386956, 2.170003], 16);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
}).addTo(mapid);

L.control.scale().addTo(mapid);

var latitud = 41.386889;
var longitud = 2.166028;
var popup = L.popup();

L.marker([latitud, longitud]).addTo(mapid).on('click', onClick);
function onClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("<strong>Restaurant Centfocs</strong><br><br>Restaurante mediterráneo<br>Carrer de Balmes, 16, 08007 Barcelona")
        .openOn(mapid);
}