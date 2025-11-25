import {keys} from "./buttons-state";
import {type Axis} from "./constants";
import {Direction, type DirectionType} from "./constants";
import {canvas, ctx} from "./canvas.ts";
import type {RectEntity} from "./entity.types.ts";

export const INITIAL_SPEED = 350;
export const PLAYER_HEIGHT = 20;
export const PLAYER_WIDTH = 20;
export const INIT_X = 300;
export const INIT_Y = 350;


export type Player = RectEntity & {
    speed: number;
    direction: Axis;
}

export const player: Player = {
    x: INIT_X,
    y: INIT_Y,
    speed: INITIAL_SPEED,
    direction: Direction.IDLE,
    update: update,
    render: render,
    resetPosition: resetPostion,
    height: PLAYER_HEIGHT,
    width: PLAYER_WIDTH,
}

function resetPostion () {
    player.x = INIT_X;
    player.y = INIT_Y;
}

function render (this: Player) {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.height, this.width);
}

function update(this: Player, dl: number) {
    let dirX: DirectionType = 0;
    let dirY: DirectionType = 0;
    if (keys["a"]) dirX = -1;
    if (keys["d"]) dirX = 1;
    if (keys["w"]) dirY = -1;
    if (keys["s"]) dirY = 1;

    this.direction = { x: dirX, y: dirY };
    this.x += this.direction.x * this.speed * dl;
    this.y += this.direction.y * this.speed * dl;
    if(this.x < 0) this.x = 0;
    if(this.y < 0) this.y = 0;
    if(this.x > canvas.width - this.width) this.x = canvas.width - this.width;
    if(this.y > canvas.height - this.height) this.y = canvas.height - this.height;
}

