
var ctx;
var canvas;


function getMouseLocation(event){
    var styles;
    var offset;

    styles = getComputedStyle(canvas)
    offset = canvas.getBoundingClientRect()

    return{
        x : event.clientX - offset.left - parseInt(styles.borderLeftWidth),
        y : event.clientY - offset.top - parseInt(styles.borderTopWidth)
    }
}

let onClickCanvas;
onClickCanvas = (event) => {
    let mouseLocation;
    mouseLocation = getMouseLocation(event)

    var circle;
    circle = new Circle()

    circle.location = mouseLocation

    let colorRandom = getRandomColor()
    circle.color = colorRandom

    console.log(circle)
    circle.draw(ctx)


};

document.addEventListener('DOMContentLoaded', function() {

    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    canvas.addEventListener('click',onClickCanvas);
});




