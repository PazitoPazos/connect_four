import { TURNS } from '../constants'
import { createBoard2D } from '../utils'

export const loadBoard = () => {
  const boardFromStorage = window.localStorage.getItem('board')
  if (boardFromStorage) return JSON.parse(boardFromStorage)
  return createBoard2D(6, 7)
}

export const loadTurn = () => {
  const turnFromStorage = window.localStorage.getItem('turn')
  if (turnFromStorage) return JSON.parse(turnFromStorage)
  return TURNS.RED
}

export const saveGame = (board, turn) => {
  window.localStorage.setItem('board', JSON.stringify(board))
  window.localStorage.setItem('turn', JSON.stringify(turn))
}

export const clearGame = () => {
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
}
