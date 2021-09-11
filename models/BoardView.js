 class BoardView  {


    constructor (canvas, board) {
        this.canvas = canvas;
        this.canvas.width = board.width;
        this.canvas.height = board.height;
        this.board = board;
        //Contexto en el cual se puede dibujar en js
        this.ctx = canvas.getContext("2d")
    }

    clean() {
        this.ctx.clearRect(0,0,this.board.width,this.board.height);
    }

    draw (){

        for (let i = this.board.elements.length-1; i>=0 ; i--) {
            //Barras laterales y pelota
            
            let element = this.board.elements[i];
            drawn(this.ctx, element)
            
        }

    }

    play() {
        if (this.board.playing) {

            this.clean();
            this.draw();
            this.checkCollisions();
            this.board.ball.move();


        }

    }

    checkCollisions () {
        for (let i = this.board.bars.length -1; i >= 0; i--) {

            let bar = this.board.bars[i];
            //Función hit validar la colisión
            if(hit(bar, this.board.ball)){
                this.board.ball.collision(bar)

            }

        }
    }

}