import Disk from './Disk'

function Board ({ board, updateBoard }) {
  return (
    <div className='board'>
      {board && board.map((row, i) => (
        <div key={i} className='row'>
          {row.map((disk, j) => (
            <Disk key={j} disk={disk} row={i} col={j} updateBoard={updateBoard} />
          ))}
        </div>)
      )}
    </div>
  )
}

export default Board
