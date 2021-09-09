import Board from './models/Board.js'
import BoardView from './models/BoardView.js'
import Bar from './models/Bar.js'

function main () {

    let board= new Board(800,400);
    let bar1 = new Bar(20,100,10,100, board);
    let bar2 = new Bar(700,100,10,100, board);
    let canvas= document.getElementById('canvas');
    let boardViewn= new BoardView(canvas,board);
    boardViewn.draw()




}

window.addEventListener("load",main)