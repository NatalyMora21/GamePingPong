export default class Ball{

    constructor(x,y,radius,board){
        this.x = x;
        this.radius = radius;
        this.y = y;
        this.speedy = 0;
        this.speedx = 3;
        this.board = board;
        this.direction = 1;
        this.bounce_angle = 0;
        this.max_bounce_angle = Math.PI/2;
        this.speed = 3;

        board.ball = this;
        this.kind = "circle"

    }

    move () {
        this.x += (this.speedx * this.direction);
        this.y += (this.speedy )
    }

    get width() {
        return this.radius*2;
    }

    get height() {
        return this.radius*2;

    }

    collision(bar) {

        //Angulo en el que va a moverse la pelota

        var relative_intersect_y = (bar.y + (bar.height/2))-this.y;
        var normalized_intersect_y = relative_intersect_y / (bar.height/2);

        this.bounce_angle = normalized_intersect_y * this.max_bounce_angle;

        this.speedy = this.speed * -Math.sin(this.bounce_angle);
        this.speedx = this.speed * Math.cos(this.bounce_angle);

        if ( this.x> (this.board.width/2)){
            this.direction=-1;
        }
        else{
            this.direction=1;
        }



    }
}
