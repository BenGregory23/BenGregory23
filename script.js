
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


  mapkit.init({
    authorizationCallback: function(done) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "/services/jwt");
        xhr.addEventListener("load", function() {
            done(this.responseText);
        });
        xhr.send();
    }
});

var Cupertino = new mapkit.CoordinateRegion(
    new mapkit.Coordinate(37.3316850890998, -122.030067374026),
    new mapkit.CoordinateSpan(0.167647972, 0.354985255)
);
var map = new mapkit.Map("map");
map.region = Cupertino;

