import Board from './models/Board.js'
import BoardView from './models/BoardView.js'
import Bar from './models/Bar.js'



let board= new Board(800,400);
var bar1 = new Bar(45,100,10,100, board);
var bar2 = new Bar(735,100,10,100, board);
let canvas= document.getElementById('canvas');
let boardViewn= new BoardView(canvas,board);



document.addEventListener("keydown",(ev)=>{
    ev.preventDefault();
    //ev-> Trae info del evento
    console.log(ev.keyCode);
    if(ev.keyCode==38){
        bar1.up();

    }
    else if (ev.keyCode==40){
        bar1.down()
    }

    else if(ev.keyCode==87){
        bar2.up();

    }
    else if (ev.keyCode==83){
        bar2.down()
    }

    console.log(bar1.toString())
})

window.addEventListener("load",controller)
window.requestAnimationFrame(controller)

function controller () {
    //console.log("prueb")
    //

    boardViewn.clean()
    boardViewn.draw()
    window.requestAnimationFrame(controller)
    

}