type HDirectionKey = 'LEFT' | 'RIGHT';
type VDirectionKey = 'UP' | 'DOWN';
export type DirectionKey = HDirectionKey | VDirectionKey | 'IDLE';
export type DirectionType = -1 | 0 | 1;
export type Axis = Record<'x' | 'y', DirectionType>;

const HDirection: Record<HDirectionKey, Axis> = {
    LEFT: { x: -1, y: 0 },
    RIGHT: { x: 1, y: 0 },
}
const VDirection: Record<VDirectionKey, Axis> = {
    UP: {x: 0, y: -1},
    DOWN: {x: 0, y: 1},
}

export const Direction: Record<DirectionKey, Axis> = {
    ...HDirection,
    ...VDirection,
    IDLE: { x: 0, y: 0}
};