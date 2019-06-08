
var Circle = function(){
    this.location = {x:0,y:0}
    this.radius = 10
    this.color = 'black'

}

Circle.prototype.draw = function(ctx){
    ctx.fillStyle = this.color;
    ctx.beginPath()
    ctx.arc(this.location.x,this.location.y,this.radius,0,2*Math.PI)
    ctx.fill()

}

