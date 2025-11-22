type GameStatePhase = 'PLAYING' | 'GAME_OVER' | 'PAUSED';
const GameState = {
    score: 0,
    timeLeft: 30,
    tick (dl: number)  {
        this.timeLeft = Math.max(0, this.timeLeft - dl);
        if (this.timeLeft <= 0) {
            this.setLoose();
        }
    },

    state: 'PLAYING' as GameStatePhase,
    get () {
        return this.state;
    },
    set (newState: GameStatePhase) {
        this.state = newState;
    },
    reset () {
        this.state = 'PLAYING';
        this.score = 0;
    },
     setLoose () {
        this.state = 'GAME_OVER';
    },
}

export default GameState;

