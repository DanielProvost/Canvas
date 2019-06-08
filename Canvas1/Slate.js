const Slate = function (pen) {
    this.canvas = document.getElementById('canvas')
    this.ctx = this.canvas.getContext('2d')
    this.isDrawing = false
    this.currentLocation = null
    this.canvas.addEventListener('mousedown',this.onMouseDown.bind(this))
    this.canvas.addEventListener('mousemove',this.onMouseMove.bind(this))
    this.canvas.addEventListener('mouseup',this.onMouseUp.bind(this))
    this.canvas.addEventListener('mouseleave',this.onMouseLeave.bind(this))
    this.pen = pen
}

Slate.prototype.getMouseLocation = function(e) {
    var styles;
    var offset;
    styles = getComputedStyle(this.canvas)
    offset = this.canvas.getBoundingClientRect()
    return {
        x: e.clientX - offset.left - parseInt(styles.borderLeftWidth),
        y: e.clientY - offset.top - parseInt(styles.borderTopWidth)
    }
}

Slate.prototype.onMouseDown = function(e){
    this.isDrawing = true
    this.currentLocation = this.getMouseLocation(e)
    this.ctx.strokeStyle = this.pen.getColor()
    }


Slate.prototype.onMouseMove = function(e) {

    var newLocation
    if (this.isDrawing) {
        this.ctx.strokeStyle = this.pen
        this.ctx.beginPath()
        this.ctx.moveTo(this.currentLocation.x, this.currentLocation.y)
        newLocation = this.getMouseLocation(e)
        this.ctx.lineTo(newLocation.x, newLocation.y)
        this.ctx.stroke()
        this.currentLocation = newLocation
    }
}

Slate.prototype.onMouseUp = function(e) {
    this.isDrawing =false
}

Slate.prototype.onMouseLeave = function(e) {
    this.isDrawing = false
}

Slate.prototype.clear = function(){
    this.ctx.clearRect(0,0 , this.canvas.width,this.canvas.height)

}




