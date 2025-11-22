type Rect = {x:number, y:number, width:number, height:number};

export const checkCollision = (targ1: Rect, targ2: Rect) => {
    return targ1.x < targ2.x + targ2.width &&
        targ1.x + targ1.width > targ2.x &&
        targ1.y < targ2.y + targ2.height &&
        targ1.y + targ1.height > targ2.y;
}