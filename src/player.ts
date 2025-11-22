import {keys} from "./buttons-state";
import {type Axis, PLAYER_HEIGHT, PLAYER_WIDTH} from "./constants";
import {Direction, type DirectionType, INITIAL_SPEED} from "./constants";
import {canvas, ctx} from "./canvas.ts";

type Player = {
    x: number;
    y: number;
    speed: number;
    update: (dl: number) => void;
    render: () => void;
    direction: Axis
}

export const player: Player = {
    x: 0,
    y: 0,
    speed: INITIAL_SPEED,
    direction: Direction.IDLE,
    update: update,
    render: render,
}

function render (this: Player) {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, PLAYER_HEIGHT, PLAYER_WIDTH);
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
    if(this.x > canvas.width - PLAYER_WIDTH) this.x = canvas.width - PLAYER_WIDTH;
    if(this.y > canvas.height - PLAYER_HEIGHT) this.y = canvas.height - PLAYER_HEIGHT;
}

