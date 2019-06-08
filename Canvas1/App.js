const App= function() {
    this.pen = new Pen()
    this.slate = new Slate(this.pen)
    this.init();
}

App.prototype.init = function(){
    var colorButtons = document.getElementsByClassName('color-button')
    for(let i=0; i<colorButtons.length;i++) {
        colorButtons[i].addEventListener('click',this.onClickColor.bind(this))
    }
    let button
    button = document.getElementById('reset')
    button.addEventListener('click',this.slate.clear.bind(this.slate))
}

App.prototype.onClickColor = function (e) {
    var button,color
    button = e.currentTarget
    color = button.dataset.color
    this.pen.setColor(color)



   console.log(this.pen)

}


