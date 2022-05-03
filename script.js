

// get every element with the class card 
var cards = document.getElementsByClassName('card');
// for every card, add the dragDrop function
for (var i = 0; i < cards.length; i++) {
    dragDrop(cards[i]);
}





function dragDrop(element){
    element.onmousedown = function(event) {
        console.log(event.target.tagName)
        if (event.target.tagName.toLowerCase() == 'a') {
            console.log('NO DRAG')
            return;
        }
        
        //  start the process
        // get ready to move: make an absolute and top z-index
        element.style.position = 'absolute';
        element.style.zIndex = 1000;
        // move it from any existing parents directly to the body
        // to position it relative to the body
        document.body.append(element);
        // and put this absolutely positioned element under the pointer
        moveAt(event.clientX, event.clientY);
        // centers the element on the coordinates (pageX, pageY)
        function moveAt(pageX, pageY) {
          element.style.left = pageX - element.offsetWidth / 2 + 'px';
          element.style.top = pageY - element.offsetHeight / 2 + 'px';
        }
        function onMouseMove(event) {
          moveAt(event.clientX, event.clientY);
        }
        //  move the element on mousemove
        document.addEventListener('mousemove', onMouseMove);
        // drop the element, remove unneeded handlers
        element.onmouseup = function() {
          document.removeEventListener('mousemove', onMouseMove);
          element.onmouseup = null;
        };
    };
    
}


