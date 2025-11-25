type GameStatePhase = 'PLAYING' | 'GAME_OVER';

const store = {
    score: 0,
    timeLeft: 30,
    state: 'PLAYING' as GameStatePhase,
}

type State = {
    tick: (dl: number) => void;
    getPhase: () => GameStatePhase;
    getScore: () => number;
    getTimeLeft: () => number;
    reset: () => void;
    setLoose: () => void;
    addScore: (val?: number) => void;
    addTime: (secs: number) => void;
}

const GameState: State = {
    tick (dl: number)  {
        store.timeLeft = Math.max(0, store.timeLeft - dl);
        if (store.timeLeft <= 0) {
            this.setLoose();
        }
    },
    getPhase () {
        return store.state;
    },
    getScore ()  {
      return store.score;
    },
    getTimeLeft () {
        return store.timeLeft;
    },
    reset () {
        store.state = 'PLAYING';
        store.timeLeft = 30;
        store.score = 0;
    },
    addScore (value: number = 1) {
        store.score += value;
    },
    addTime(seconds: number) {
        store.timeLeft += seconds;

    },
    setLoose () {
         store.state = 'GAME_OVER';
    },
}


export default GameState;

