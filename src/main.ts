import {renderWorld, updateWorld} from "./game.ts";

let prevTime = 0;



function loop(currentTime: number) {
    if(prevTime === 0){
        prevTime = currentTime;
        requestAnimationFrame(loop);
        return;
    }
    const dl = (currentTime - prevTime)/1000;
    prevTime = currentTime;
    updateWorld(dl);
    renderWorld();
    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);