export const canvas = document.querySelector<HTMLCanvasElement>('#game')!;
export const ctx = canvas.getContext('2d')!;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;