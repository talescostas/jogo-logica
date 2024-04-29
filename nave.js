

//Nome: Alicia Taiwo da Silva Montesano                          nº: 02        Turma: 3ºA              
//Nome: Diego Souza Horvate                                      nº: 06        Turma: 3ºA             
//Nome: Tales Costa Caetano Silva                                nº: 32        Turma: 3ºA
var cor = 'blue';
var cont = 1;
var myGamePiece;
function startGame() {
    var img = document.getElementById('image');
myGamePiece = new component(img, 30, 30, "red", 450, 10);
myGameArea.start();
}

var myGameArea = {
canvas : document.createElement("canvas"),
start : function() {
this.canvas.width = 550;
this.canvas.height = 450;
this.context = this.canvas.getContext("2d");
document.body.insertBefore(this.canvas, document.body.childNodes[0]);
this.interval = setInterval(updateGameArea, 20);
},
clear : function() {
this.context.clearRect(10, 0, this.canvas.width, this.canvas.height);
}
}

function component( image, height, width, color, x, y) {
    this.image = image;
this.width = width;
this.height = height;
this.x = x;
this.y = y;
this.color;
this.update = function(){
ctx = myGameArea.context;
if(cont % 10 == 0)
cor = 'red';
else
cor = 'blue';
ctx.fillStyle = cor;
ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
cont++;
}
}

function updateGameArea() {
myGameArea.clear();
if (myGamePiece.x > 0 && myGamePiece.y < 550) {
    myGamePiece.x -= 1;
    myGamePiece.y += 1;
}
myGamePiece.update();
}
