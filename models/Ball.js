export default class Ball{

    constructor(x,y,radius,board){
        this.x = x;
        this.radius = radius;
        this.y = y;
        this.speedy = 0;
        this.speedx = 3;
        this.board = board;

        board.ball = this;
        this.kind = "circle"

    }
}
