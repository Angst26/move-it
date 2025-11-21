const HDirection: Record<HDirectionKey, Axis> = {
    LEFT: { x: -1, y: 0 },
    RIGHT: { x: 1, y: 0 },
}
const VDirection: Record<VDirectionKey, Axis> = {
    UP: {x: 0, y: -1},
    DOWN: {x: 0, y: 1},
}

let Direction: Record<DirectionKey, Axis> = {
    ...HDirection,
    ...VDirection,
    IDLE: { x: 0, y: 0}
};

type Axis = Record<'x' | 'y', DirectionType>;

type HDirectionKey = 'LEFT' | 'RIGHT';
type VDirectionKey = 'UP' | 'DOWN';
type DirectionKey = HDirectionKey | VDirectionKey | 'IDLE';
type DirectionType = -1 | 0 | 1;


const canvas = document.querySelector<HTMLCanvasElement>('#game')!;
const ctx = canvas.getContext('2d')!;

let prevTime = 0;
let x = 0;
let y = 0;
const speed = 100;
let direction: Axis = Direction.IDLE;

function update(dl: number) {
    x += direction.x * speed * dl;
    y += direction.y * speed * dl;
}

function render(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "red";

    if (x >= canvas.width - 20) direction = HDirection.LEFT;
    if (x <= 0) direction = HDirection.RIGHT;
    ctx.fillRect(x, y, 20, 20);
}

document.addEventListener('keypress', (event: KeyboardEvent) => {
    applyDirection(event.key.toLowerCase());
})
document.addEventListener('keyup', () => {
    applyDirection('stop');
})

function applyDirection(key: string) {
    switch (key) {
        case `a`: moveASide(HDirection.LEFT);
        break;
        case 'd': moveASide(HDirection.RIGHT);
        break;
        case 'w': moveASide(VDirection.UP);
        break;
        case 's': moveASide(VDirection.DOWN);
        break;
        case 'stop': direction = Direction.IDLE;
    }
}

const moveASide = (ax: Axis) => {
    direction = ax;
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