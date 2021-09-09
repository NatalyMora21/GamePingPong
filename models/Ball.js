export default class Ball{

    constructor(x,y,radius,board){
        this.x = x;
        this.radius = radius;
        this.y = y;
        this.speedy = 0;
        this.speedx = 3;
        this.board = board;
        this.direction = 1;

        board.ball = this;
        this.kind = "circle"

    }

    move () {
        this.x += (this.speedx * this.direction);
        this.y += (this.speedy )
    }
}
