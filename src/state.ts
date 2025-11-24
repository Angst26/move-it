type GameStatePhase = 'PLAYING' | 'GAME_OVER' | 'PAUSED';

const store = {
    score: 0,
    timeLeft: 30,
    state: 'PLAYING' as GameStatePhase,
}

const GameState = {
    tick (dl: number)  {
        store.timeLeft = Math.max(0, store.timeLeft - dl);
        if (store.score <= 0) {
            this.setLoose();
        }
    },
    get () {
        return store.state;
    },
    set (newState: GameStatePhase) {
        store.state = newState;
    },
    reset () {
        store.timeLeft = 30;
        store.state = 'PLAYING';
        store.score = 0;
    },
     setLoose () {
         store.state = 'GAME_OVER';
    },
}

export default GameState;

