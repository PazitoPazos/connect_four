// Create a 6x7 board with null values
// Don't use Array(6).fill(Array(7).fill(null))
// because all arrays inside actually reference to same array

export const createBoard2D = (rows, cols) => {
  return new Array(rows).fill().map(() => new Array(cols).fill(null))
}
