var transpose = function(matrix) {
    let cols=matrix[0].length // количесто колонок это длина ряда
    let rows=matrix.length // длина матрици это количество рядов то есть длина колонки
  const tr = Array(cols).fill().map(() => Array(rows).fill(0))
  console.log(tr)
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      tr[j][i] = matrix[i][j]
    }
  }
  return tr   
}

let matrix = [[1,2,3],[4,5,6]]
console.log(transpose(matrix))
Output: [[1, 4], [2, 5], [3, 6]]


// 2
function transpose(a) {
    return Object.keys(a[0]).map(function(c) {
        return a.map(function(r) { return r[c]; });
    });
}

console.log(transpose([
    [1,2,3],
    [4,5,6],
    [7,8,9]
]));

// 3
function transpose(a) {
    return a[0].map(function (_, c) { return a.map(function (r) { return r[c]; }); });
}

// 4
function transpose(matrix) {
    return Object.keys(matrix[0])
        .map(colNumber => matrix.map(rowNumber => rowNumber[colNumber]));
}


// 5
transpose = m => m[0].map((x,i) => m.map(x => x[i]))



// Given a 2D integer array matrix, return the transpose of matrix.

// The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.



 

// Example 1:

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[1,4,7],[2,5,8],[3,6,9]]
// Example 2:

// Input: matrix = [[1,2,3],[4,5,6]]
// Output: [[1,4],[2,5],[3,6]]
