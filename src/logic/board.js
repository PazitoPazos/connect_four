export const checkLowerPositions = (board, col) => {
  for (let i = 5; i >= 0; i--) {
    const currentRow = board[i][col]
    if (currentRow === null) return i
  }

  return -1
}

export const checkBoardLimits = (board, row, col) => {
  return row >= 0 && row < board.length && col >= 0 && col < board[0].length
}

export const checkWin = (board, row, col) => {
  const currentDisk = board[row][col]
  if (currentDisk === null) return false

  const horizontal = checkHorizontal(board, row, col, currentDisk)
  const vertical = checkVertical(board, row, col, currentDisk)
  const diagonal = checkDiagonal(board, row, col, currentDisk)

  return horizontal || vertical || diagonal
}

export const checkHorizontal = (board, row, col, currentDisk) => {
  let count = 1
  // Checks from left to right
  for (let i = 1; i < 4; i++) {
    if (checkBoardLimits(board, row, col + i) &&
      board[row][col + i] === currentDisk) count++
    else break
  }

  // Checks from right to left
  for (let i = 1; i < 4; i++) {
    if (checkBoardLimits(board, row, col - i) &&
      board[row][col - i] === currentDisk) count++
    else break
  }

  if (count >= 4) {
    return currentDisk
  }

  return null
}

export const checkVertical = (board, row, col, currentDisk) => {
  let count = 1
  // Checks from top to bottom
  for (let i = 1; i < 4; i++) {
    if (checkBoardLimits(board, row + i, col) &&
      board[row + i][col] === currentDisk) count++
    else break
  }

  // Checks from bottom to top
  for (let i = 1; i < 4; i++) {
    if (checkBoardLimits(board, row - i, col) &&
      board[row - i][col] === currentDisk) count++
    else break
  }

  if (count >= 4) {
    return currentDisk
  }

  return null
}

export const checkDiagonal = (board, row, col, currentDisk) => {
  let count = 1
  // Checks from top left to bottom right
  for (let i = 1; i < 4; i++) {
    if (checkBoardLimits(board, row + i, col + i) &&
      board[row + i][col + i] === currentDisk) count++
    else break
  }

  // Checks from bottom right to top left
  for (let i = 1; i < 4; i++) {
    if (checkBoardLimits(board, row - i, col - i) &&
      board[row - i][col - i] === currentDisk) count++
    else break
  }

  if (count >= 4) {
    return currentDisk
  }

  // Checks from bottom left to top right
  count = 1
  for (let i = 1; i < 4; i++) {
    if (checkBoardLimits(board, row - i, col + i) &&
      board[row - i][col + i] === currentDisk) count++
    else break
  }

  // Checks from top right to bottom left
  for (let i = 1; i < 4; i++) {
    if (checkBoardLimits(board, row + i, col - i) &&
      board[row + i][col - i] === currentDisk) count++
    else break
  }

  if (count >= 4) {
    return currentDisk
  }

  return null
}

export const checkIfGameIsOver = (board) => {
  return board.flat().every(disk => disk !== null)
}
