function WinnerModal ({ winner, resetGame }) {
  if (winner === null) return

  return (
    <section className='game-over'>
      <div className='text'>
        <h2>
          {winner === false ? 'Game is a draw!' : `Player ${winner} wins!`}
        </h2>

        {winner && (
          <header className='win'>
            <div className={`player-disk ${winner}`} />
          </header>
        )}

        <footer>
          <button className='reset-button' onClick={resetGame}>Reset Game</button>
        </footer>
      </div>
    </section>
  )
}

export default WinnerModal
