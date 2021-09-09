export default class Board {

    constructor (width,height) {

        this.width=width;
        this.height=height;
        this.playing=false;
        this.gameOver=false;
        this.bars=[];
        this.ball= null;

    }

    get elements () {
        //bars -> Barras lateras que controlan el juego
        let elementos= this.bars;
        elementos.push(this.ball);
        return elementos;

    }

}