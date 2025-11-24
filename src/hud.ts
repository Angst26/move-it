import { ctx } from "./canvas.ts";
import GameState from './state';

export const renderHud = () => {
    ctx.font = '16px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText(`${String(GameState.score)} points`, 10, 20);

    ctx.font = '16px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText(`${String(GameState.timeLeft.toFixed(2))} sec`, 500, 20);
}

export const update = (dl: number) => {
    GameState.tick(dl);
}