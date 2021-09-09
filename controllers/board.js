

export default function drawn(ctx,element){

    if(element!== null && element.hasOwnProperty("kind") ){
        switch(element.kind) {
            case "square": 
                ctx.fillRect(element.x,element.y,element.width,element.height);
                break;
            case "rectangulo": 
                ctx.fillRect(element.x,element.y,element.width,element.height);
                break;
        }
    }




}

