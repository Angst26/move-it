import {player} from "./player.ts";
import {canvas, ctx} from "./canvas.ts";
import {target} from "./target.ts";



export function updateWorld(dl: number) {
    player.update(dl);
    target.update(dl);
}

export function renderWorld(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.render();
    target.render();
}