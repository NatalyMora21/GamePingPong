import Board from './models/Board.js'
import BoardView from './models/BoardView.js'

function main () {

    let board= new Board(800,400);
    let canvas= document.getElementById('canvas');
    let boardViewn= new BoardView(canvas,board);
    boardViewn.draw()


    console.log(board)

}

window.addEventListener("load",main)