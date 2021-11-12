import { createReducer } from "@reduxjs/toolkit"
import { newGame } from "../actions/gameActions"
import { initialGameState } from "../states/gameState"

export const gameReducer = createReducer(initialGameState, (builder) => {
    builder
      .addCase(newGame, (state, action) => {
          state.phase = "user"
      })
  })

