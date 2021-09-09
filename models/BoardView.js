import drawn  from "../controllers/board.js";

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

        for (let i = this.board.elements.length-1; i>=0 ; i--) {
            //Barras laterales y pelota
            console.log("prueba")
            let element = this.board.elements[i];
            drawn(this.ctx, element)
            
        }

    }

}