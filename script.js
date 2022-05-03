
//getting element
let text = document.getElementById('about-me');

text.onmousedown = function(event) { //  start the process
    // get ready to move: make an absolute and top z-index
    text.style.position = 'absolute';
    text.style.zIndex = 1000;
    // move it from any existing parents directly to the body
    // to position it relative to the body
    document.body.append(text);
    // and put this absolutely positioned text under the pointer
    moveAt(event.clientX, event.clientY);
    // centers the text on the coordinates (pageX, pageY)
    function moveAt(pageX, pageY) {
      text.style.left = pageX - text.offsetWidth / 2 + 'px';
      text.style.top = pageY - text.offsetHeight / 2 + 'px';
    }
    function onMouseMove(event) {
      moveAt(event.clientX, event.clientY);
    }
    //  move the text on mousemove
    document.addEventListener('mousemove', onMouseMove);
    // drop the text, remove unneeded handlers
    text.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      text.onmouseup = null;
    };
};

let map

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

window.initMap = initMap;

