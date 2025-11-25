import { ctx } from "./canvas.ts";
import GameState from './state';

export const renderHud = () => {
    ctx.font = '16px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText(`${String(GameState.getScore())} points`, 10, 20);

    ctx.font = '16px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText(`${String(GameState.getTimeLeft().toFixed(2))} sec`, 500, 20);
}