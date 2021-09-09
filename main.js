import Board from './models/Board.js'
import BoardView from './models/BoardView.js'
import Bar from './models/Bar.js'
import Ball from './models/Ball.js';



let board= new Board(800,400);
var bar1 = new Bar(45,100,10,100, board);
var bar2 = new Bar(735,100,10,100, board);
let canvas= document.getElementById('canvas');
let boardViewn= new BoardView(canvas,board);
let ball = new Ball(350,100,10, board);



document.addEventListener("keydown",(ev)=>{

    //ev-> Trae info del evento
    console.log(ev.keyCode);


    switch (ev.keyCode) {
        case 38 : 
            ev.preventDefault();
            bar1.up();
            break;
        case 40 : 
            ev.preventDefault();
            bar1.down();
            break;
        case 87 : 
            ev.preventDefault();
            //S
            bar2.up();
            break;
        case 83 : 
            ev.preventDefault();
            //w
            bar2.down();
            break;
        case 32 :
            ev.preventDefault();
            board.playing = !board.playing;
    }


    console.log(bar1.toString())
})

boardViewn.draw();
window.addEventListener("load",controller)
window.requestAnimationFrame(controller)

setTimeout(()=>{ball.direction=-1},4000)

function controller () {
    //console.log("prueb")
    //

    boardViewn.play();
    window.requestAnimationFrame(controller);
    

}