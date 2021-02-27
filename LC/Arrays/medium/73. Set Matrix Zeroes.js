// Given an m x n matrix. If an element is 0, set its entire row and column to 0. Do it in-place.

// Follow up:

// A straight forward solution using O(mn) space is probably a bad idea.
// A simple improvement uses O(m + n) space, but still not the best solution.
// Could you devise a constant space solution ?

// Input : matrix = [
//         [1, 1, 1],
//         [1, 0, 1],
//         [1, 1, 1]]
// Output: [
//     [1, 0, 1],
//     [0, 0, 0],
//     [1, 0, 1]]






// https://www.youtube.com/watch?v=n_iywyotkCY
// константная сложность по памяти

// 1. простое решение О(m+n) доп памяти
// для каждой строчки и столбца флаг на логическое значение
// если ноль есть то будем занулять
// первый проход - ищем нули отмечаем инд в этих массивах
// второй проход - ищем коорд текущей клетки в этих массивах нужно занулять или нет


// 2. О(1)

// сначала делаем отметки где нужно занулить потом при встрече нуля зануляем в этом столбце или строке
// то есть первый проход просто отмечаем

// в первом ряду 0 (1/1)отмечаем значи 1 ряд и 1 столбец для отметок
//    v
// 1  2  3  4  5
// 5  0  7  1  9  <
// 1  2  3  4  5 
// 5  6  7  0  9
// 1  3  4  5  6
 
// при встрече следующего нуля (3/3) на перекрестке с (1/1) отмечаем нули
//    v
// 1  2  3  4  5
// 5  0  7  0  9 <
// 1  2  3  4  5 
// 5  0  7  0  9
// 1  3  4  5  6
// второй проход по всей матрице кроме столбца и строки где есть отметка что нужно занулять 
// зануляем если есть инф что нужно занулять
// например идем по первому ряду на (0/3)=4 Нужно занулять значит меням на 0 
// например по (0/4)=5 тоже ставим 0 и занулям столбец и строку кроме изначальной

//     v     *  
//  1  2  3  4  5          
//  5  0  7  0  9 <
//  1  2  3  4  5 
//  5  0  7  0  9
//  1  3  4  5  6

//     v
//  1  2  3  0  5
//  5  0  7  0  9 <
//  1  2  3  4  5 
//  5  0  7  0  9
//  1  3  4  5  6

//      v
//   1  2  3  0  5
//   5  0  7  0  9 <
//   1  2  3  4  5 
// * 0  0  7  0  9
//   1  3  4  5  6
  

//      v
//   1  2  3  0  5
//   5  0  7  0  9 <
//   1  2  3  0  5
// * 0  0  0  0  9
//   1  3  4  5  6

// третий проход или по всей матрице или по избранным строке и столбце


// Runtime: 92 ms, faster than 96.26% of JavaScript online submissions for Set Matrix Zeroes.
var setZeroes = function(matrix) {
    let n=matrix.length
    let m=matrix[0].length
    
    let markI=-1
    let markJ=-1
    
    for(let i=0;i<n;i++){
    for(let j=0;j<m;j++){
        if(matrix[i][j]==0){
            if(markI==-1){
                markI=i
                markJ=j
            }  else{
                matrix[i][markJ]=0
                matrix[markI][j]=0
            } 
               
           } 
        }
    }
    if(markI==-1) return 
    
     for (let i = 0; i < n; i++) {
         for (let j = 0; j < m; j++) {
             if (i!= markI && j != markJ) {
                 if (matrix[i][markJ] == 0 || matrix[markI][j] == 0) {
                     matrix[i][j] = 0
                 }
             }
         }
     }
    
    
     for(let i=0;i<n;i++) matrix[i][markJ]=0
             
     for(let j=0;j<m;j++) matrix[markI][j]=0
    
    
 };
 // let matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
 // console.log(setZeroes(matrix))
 // Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]


// FASTER
var setZeroes = constant;

function constant(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (matrix[row][col] === null) {
        continue;
      }
      if (matrix[row][col] === 0) {
        for (let i = 0; i < rows; i++) {
          if (matrix[i][col] !== 0) {
            matrix[i][col] = null;
          }
        }
        for (let j = 0; j < cols; j++) {
          if (matrix[row][j] !== 0) {
            matrix[row][j] = null;
          }
        }
      }
    }
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (matrix[row][col] === null) {
        matrix[row][col] === 0;
      }
    }
  }
}


var setZeroes = function(matrix) {
    const R = matrix.length;
    const C = matrix[0].length;

    const rows = new Set();
    const cols = new Set();

    for (let r = 0; r < R; r++) {
      for (let c = 0; c < C; c++) {
        if (matrix[r][c] === 0) {
          rows.add(r);
          cols.add(c);
        }
      }
    }

    rows.forEach(r => {
        for (let c = 0; c < C; c++) {
            matrix[r][c] = 0;            
        }
    })

    cols.forEach(c => {
        for (let r = 0; r < R; r++) {
          matrix[r][c] = 0;
        }
    })
};
const res = setZeroes([
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
]);
console.log(res);


var setZeroes = function(matrix) {
    var zeroes = []
    
    // all the zeroes
    for(var i = 0; i < matrix.length; i++){
      for(var j = 0; j < matrix[0].length; j++){
        if(matrix[i][j] === 0) {
          zeroes.push([i, j])
        } 
      }
    }
    
    var zero_x = 0
    var zero_y = 0
    for(var i = 0; i < zeroes.length; i++){
      // var [x, y] = zeroes[i]
      zero_x = zeroes[i][0]
      zero_y = zeroes[i][1]
      
      // update row
      for(var y = 0; y < matrix[0].length; y++){
        matrix[zero_x][y] = 0
      }
      
      // udpate column
      for(var x = 0; x < matrix.length; x++){
        matrix[x][zero_y] = 0
      }

    }
};


var setZeroes = function(matrix) {
    const h = matrix.length;
    const w = matrix[0].length;
    const rowZero = matrix[0].some(e => e === 0);
    let columnZero = false;
    for (let i = 0; i < h; i++) {
        if (matrix[i][0] === 0) {
            columnZero = true;
        }
        for (let j = 1; j < w; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    for (let i = 1; i < h; i++) {
        for (let j = 1; j < w; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
    if (rowZero) {
        for (let j = 0; j < w; j++) {
            matrix[0][j] = 0;
        }
    }
    if (columnZero) {
        for (let i = 0; i < h; i++) {
            matrix[i][0] = 0;
        }
    }
};