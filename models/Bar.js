class Bar{

    constructor(x,y,width,height,board){
        this.x = x;
        this.y = y;
        this.width= width;
        this.height = height;
        this.board = board;
        //Agregar todo el objeto
        this.board.bars.push(this);
        this.kind= "rectangle";
        this.speed= 10;
    }

    down() {
        this.y+= this.speed;
        console.log("down"+ this.y)
    }

    up(){
        
        this.y-= this.speed;
        console.log("Upp"+ this.y)
    }

    toString(){
        return "x: "+ this.x + " y: "+ this.y
    }
    
}