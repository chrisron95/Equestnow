// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

function get_started(position) {
  var mapcanvas = document.createElement('div');
  mapcanvas.id = 'mapcontainer';
  mapcanvas.style.height = '400px';
  // mapcanvas.style.width = '600px';

  document.querySelector('article').appendChild(mapcanvas);

  var coords = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

  var locations = {lat: 26.128765,lng: -80.144857};
  
  var options = {
    zoom: 15,
    center: coords,
    mapTypeControl: false,
    navigationControlOptions: {
      style: google.maps.NavigationControlStyle.SMALL
    },
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("mapcontainer"), options);

  var marker = new google.maps.Marker({
    position: coords,
    map: map,
    title:"You are so here!"
  });
  var marker = new google.maps.Marker({
    position: locations,
    map: map,
    title:"C and I"
  });
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(get_started);
} else {
  error('Geo Location is not supported');
} 
