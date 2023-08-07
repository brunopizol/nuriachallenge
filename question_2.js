function countSubmatrixOccurrences(matrixA, submatrixB) {
  const rowsA = matrixA.length;
  const colsA = matrixA[0].length;
  const rowsB = submatrixB.length;
  const colsB = submatrixB[0].length;
  let count = 0;

  if (rowsB > rowsA || colsB > colsA) {
    throw new Error("A submatriz deve ser menor ou igual à matriz principal.");
  }

  for (let i = 0; i <= rowsA - rowsB; i++) {
    for (let j = 0; j <= colsA - colsB; j++) {
      if (isSubmatrixAt(matrixA, submatrixB, i, j)) {
        count++;
      }
    }
  }

  return count;
}

function isSubmatrixAt(matrixA, submatrixB, row, col) {
  const rowsB = submatrixB.length;
  const colsB = submatrixB[0].length;

  for (let i = 0; i < rowsB; i++) {
    for (let j = 0; j < colsB; j++) {
      if (matrixA[row + i][col + j] !== submatrixB[i][j]) {
        return false;
      }
    }
  }

  return true;
}

