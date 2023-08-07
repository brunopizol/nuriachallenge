function invertDiagonals(matrix) {
    if (!Array.isArray(matrix) || matrix.length === 0 || matrix.length !== matrix[0].length) {
      throw new Error("A matriz deve ser quadrada e não vazia.");
    }
  
    const size = matrix.length;
    const result = [];
  
    for (let i = 0; i < size; i++) {
      const row = [];
      for (let j = 0; j < size; j++) {
        // Inverte as diagonais principal e secundária
        if (i === j) {
          row.push(matrix[size - 1 - i][size - 1 - j]);
        } else if (i + j === size - 1) {
          row.push(matrix[j][i]);
        } else {
          row.push(matrix[i][j]);
        }
      }
      result.push(row);
    }
  
    return result;
  }
  