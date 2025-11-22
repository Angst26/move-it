import { player } from "./player";
import { PLAYER_HEIGHT, PLAYER_WIDTH, TARGET_HEIGHT, TARGET_WIDTH} from "./constants.ts";
import {canvas, ctx} from "./canvas.ts";

let prevTime = 0;

let tX = 500;
let tY = 500;

function update(dl: number) {

    player.update(dl);

    if(checkCollision({x: player.x, y: player.y}, {x: tX, y: tY })) {
        tX = Math.random() * (canvas.width - TARGET_WIDTH);
        tY = Math.random() * (canvas.height - TARGET_HEIGHT);
    }

}

const checkCollision = (targ1: {x: number, y: number}, targ2: {x: number, y: number}) => {
   if (targ1.x < targ2.x + TARGET_WIDTH &&
       targ1.x + PLAYER_WIDTH > targ2.x &&
       targ1.y < targ2.y + TARGET_HEIGHT &&
       targ1.y + PLAYER_HEIGHT > targ2.y){
       return true;
   }
   return false;
}

function render(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.render();
    ctx.fillStyle = "yellow";
    ctx.fillRect(tX, tY, TARGET_WIDTH, TARGET_HEIGHT);
}

function loop(currentTime: number) {
    if(prevTime === 0){
        prevTime = currentTime;
        requestAnimationFrame(loop);
        return;
    }
    const dl = (currentTime - prevTime)/1000;
    prevTime = currentTime;
    update(dl);
    render();
    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);