export default class Bar{

    constructor(x,y,width,height,board){
        this.x = x;
        this.y = y;
        this.width= width;
        this.height = height;
        this.board = board;
        //Agregar todo el objeto
        this.board.bars.push(this)
        this.kind= "rectangulo"
    }

    down() {}

    up(){}
    
}