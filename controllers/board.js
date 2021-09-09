

export function draw(ctx,element){

    if(element!= null ){
        switch(element.kind) {
            case "square": 
                ctx.fillRect(element.x,element.y,element.width,element.height);
                break;
            case "rectangulo": 
                ctx.fillRect(element.x,element.y,element.width,element.height);
        }
    }




}

