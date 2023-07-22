import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import { createBoard2D } from './utils'
import { TURNS } from './constants'
import { checkIfGameIsOver, checkLowerPositions, checkWin } from './logic/board'
import Board from './components/Board'
import WinnerModal from './components/WinnerModal'
import { clearGame, loadBoard, loadTurn, saveGame } from './logic/saveLoadGame'

function App () {
  const [board, setBoard] = useState(loadBoard)
  const [turn, setTurn] = useState(loadTurn)
  const [winner, setWinner] = useState(null)

  const updateBoard = (row, col) => {
    const newRow = checkLowerPositions(board, col)
    if (board[row][col] || newRow === -1 || winner) return

    const newBoard = [...board]
    newBoard[newRow][col] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.RED ? TURNS.YELLOW : TURNS.RED
    setTurn(newTurn)

    saveGame(newBoard, newTurn)

    const newWinner = checkWin(newBoard, newRow, col)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkIfGameIsOver(newBoard)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(createBoard2D(6, 7))
    setTurn(TURNS.RED)
    setWinner(null)

    clearGame()
  }

  return (
    <main className='App'>
      <h1>Connect 4</h1>
      <button className='reset-button' onClick={resetGame}>Reset Game</button>
      <section className='board-wrapper'>
        <Board board={board} updateBoard={updateBoard} />
      </section>
      <section className='game-info'>
        <h2>Next move:</h2>
        <div className={`player-disk ${turn}`} />
      </section>

      {winner !== null &&
        <WinnerModal winner={winner} resetGame={resetGame} />}
    </main>
  )
}

export default App
