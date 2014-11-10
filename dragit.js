jQuery(document).ready(function ($) {

var elem = document.querySelector('#draggable');
console.log(elem);

/*var draggie = new Draggabilly( elem, {
	containment: '#draggable-container'
});

});
*/
var draggie = new Draggabilly( elem, {
	containment: '#draggable-container'
});




function onDragMove( instance, event, pointer ) {
  console.log( 'dragMove on ' + event.type +
    pointer.pageX + ', ' + pointer.pageY +
    ' position at ' + instance.position.x + ', ' + instance.position.y );
  var posx = instance.position.x;
  var posy = instance.position.y;
}
// bind event listener
draggie.on( 'dragMove', onDragMove );
// un-bind event listener
draggie.off( 'dragMove', onDragMove );
// return true to trigger an event listener just once
draggie.once( 'dragMove', function() {
  console.log('Draggabilly did move, just once');
});

draggie.on( 'dragMove', function() {
var element = document.getElementById('draggable'),
    style = window.getComputedStyle(element),
    top = style.getPropertyValue('top');
    left = style.getPropertyValue('left');
    top = parseInt(top);
    left = parseInt(left);
    // console.log('top:'+top);
    // console.log('left:'+left);
    if ( left>1390 && top>175 ){
    	console.log("SCORE!!!");
    	jQuery("#score").addClass("show");
    }
});

});
