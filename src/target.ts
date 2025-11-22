import {player} from "./player.ts";
import {checkCollision} from "./collision.ts";
import {canvas, ctx} from "./canvas.ts";
import type {RectEntity} from "./entity.types.ts";
import GameState from "./state.ts";

export const TARGET_WIDTH = 10;
export const TARGET_HEIGHT = 10;

export const target: RectEntity = {
    x: 500,
    y: 500,
    width: TARGET_WIDTH,
    height: TARGET_HEIGHT,
    update: update,
    render: render,
}

function update(this: typeof target) {
    if(checkCollision(player, target)) {
        GameState.score++;
        GameState.timeLeft += 2;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);
    }
}
function render(this: typeof target){
    ctx.fillStyle = "yellow";
    ctx.fillRect(this.x, this.y, this.width, this.height);
}

