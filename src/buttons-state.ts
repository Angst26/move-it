export const keys : Record<string, boolean> = {};

document.addEventListener('keyup', (e) => {
    keys[e.key.toLowerCase()] = false;
})
document.addEventListener('keydown', (e) => {
    keys[e.key.toLowerCase()] = true;
})