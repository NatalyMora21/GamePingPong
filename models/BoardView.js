import { draw } from "../controllers/board.js";

export default class BoardView  {


    constructor (canvas, board) {
        this.canvas = canvas;
        this.canvas.width = board.width;
        this.canvas.height = board.height;
        this.board = board;
        //Contexto en el cual se puede dibujar en js
        this.ctx = canvas.getContext("2d")
    }

    draw (){
        for (let i = 0; i < this.board.elements.length; i++) {
            //Barras laterales y pelota
            let element = this.board.elements[i];
            draw(this.ctx, element)
            
        }

    }

}