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

function render () {
    ctx.fillStyle = "red";
    ctx.fillRect(player.x, player.y, PLAYER_HEIGHT, PLAYER_WIDTH);
}

function update(this: Player, dl: number) {
    let dirX: DirectionType = 0;
    let dirY: DirectionType = 0;
    if (keys["a"]) dirX = -1;
    if (keys["d"]) dirX = 1;
    if (keys["w"]) dirY = -1;
    if (keys["s"]) dirY = 1;
    console.log('x', dirX, 'y', dirY);

    this.direction = { x: dirX, y: dirY };
    this.x += this.direction.x * this.speed * dl;
    this.y += this.direction.y * this.speed * dl;
    if(player.x < 0) player.x = 0;
    if(player.y < 0) player.y = 0;
    if(player.x > canvas.width - PLAYER_WIDTH) player.x = canvas.width - PLAYER_WIDTH;
    if(player.y > canvas.height - PLAYER_HEIGHT) player.y = canvas.height - PLAYER_HEIGHT;
}

