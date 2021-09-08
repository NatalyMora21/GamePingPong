class Board {

    constructor (width,height) {

        this.width=width;
        this.height=height;
        this.playing=false;
        this.gameOver=false;
        this.bars=[];
        this.ball= null;

    }

    getElmentos () {

        let elementos= this.bars;
        elementos.push(ball);
        return elementos;

    }
}