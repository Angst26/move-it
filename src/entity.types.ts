export type RectEntity = {
    x: number;
    y: number;
    width: number;
    height: number;
    update: (dl: number) => void;
    render: () => void;
    resetPosition: () => void;
};