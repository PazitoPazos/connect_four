function Disk ({ disk, updateBoard, row, col }) {
  const handleClick = () => {
    updateBoard(row, col)
  }

  return (
    <div className={`disk ${disk ?? 'empty'}`} onClick={handleClick}/>
  )
}

export default Disk
