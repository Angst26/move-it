import {player} from "./player.ts";
import {canvas, ctx} from "./canvas.ts";
import {target} from "./target.ts";
import GameState from "./state.ts";
import {keys} from "./buttons-state.ts";
import {renderHud} from "./hud.ts";

export function updateWorld(dl: number) {
    if(GameState.getPhase() === 'GAME_OVER') {
        if(keys['r']) resetWorld();
        return;
    }
    player.update(dl);
    target.update(dl);
    GameState.tick(dl);
}

export function renderWorld(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.render();
    target.render();
    renderHud();
}

export function resetWorld() {
    player.resetPosition();
    target.resetPosition();
    GameState.reset();
}