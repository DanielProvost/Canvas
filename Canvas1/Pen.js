var Pen=function(){
    this.color = 'black'
    this.size = 1
}

Pen.prototype.setColor = function(color){
    this.color = color
}
Pen.prototype.setSize = function(size){
    this.size = size
}
Pen.prototype.getColor = function(){
    return this.color
}
Pen.prototype.getSize = function(){
    return this.size
}