export interface GameState { 
    phase: "idle"|"user"|"eval"|"remove";
}

export const initialGameState: GameState = {
    phase : "idle"
}