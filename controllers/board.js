function drawn(ctx,element){


    switch(element.kind) {
        case "rectangle": 
            ctx.fillRect(element.x,element.y,element.width,element.height);
            break;
        case "circle": 
            ctx.beginPath();
            ctx.arc(element.x,element.y,element.radius,0,7);
            ctx.fill();
            ctx.closePath();
            break;
    }
    




}

