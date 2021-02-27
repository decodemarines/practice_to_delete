// OPTIMIZED APPROACH:
// https://www.tutorialcup.com/leetcode-solutions/special-positions-in-a-binary-matrix-leetcode-solution.htm

// Algorithm :
// Create a variable special to count the special positions.
// Create two arrays rows and cols of size n and m respectively.
// Traverse each row(i) and count the numbers of 1s for each row and store it in rows[i].
// Traverse each col(i) and count the numbers of 1s for each column and store it in cols[i].
// Traverse the matrix using nested loop for cell (i,j).
//     If value of current cell(i,j) is 1 and rows[i]==1 and cols[j]==1, then:
//         Increment the count of special position.
// Return the value of variable special.

var numSpecial = function (mat) {
    let rows=Array(mat.length).fill(0)
    let cols=Array(mat.length).fill(0)
     for (let i = 0; i < mat.length; i++) {
             for (let j = 0; j < mat.length;j++) {
                 if (mat[i][j]) {
                    rows[i]++
                    cols[j]++
                 }
             }
         }
         let result = 0
         for (let i = 0; i < mat.length;i++) {
             for (let j = 0; j < mat.length;j++) {
                 if (mat[i][j] && rows[i] == 1 && cols[j] == 1) {
                     result++
                 }
             }
         }
         return result
     }
  let mat = [[1,0,0],
               [0,1,0],
               [0,0,1]]
 numSpecial(mat)



//  Given a rows x cols matrix mat, where mat[i][j] is either 0 or 1, return the number of special positions in mat.

// A position (i,j) is called special if mat[i][j] == 1 and all other elements in row i and column j are 0 (rows and columns are 0-indexed).

 

// Example 1:

// Input: mat = [[1,0,0],
//               [0,0,1],
//               [1,0,0]]
// Output: 1
// Explanation: (1,2) is a special position because mat[1][2] == 1 and all other elements in row 1 and column 2 are 0.
// Example 2:

// Input: mat = [[1,0,0],
//               [0,1,0],
//               [0,0,1]]
// Output: 3
// Explanation: (0,0), (1,1) and (2,2) are special positions. 
// Example 3:

// Input: mat = [[0,0,0,1],
//               [1,0,0,0],
//               [0,1,1,0],
//               [0,0,0,0]]
// Output: 2
// Example 4:

// Input: mat = [[0,0,0,0,0],
//               [1,0,0,0,0],
//               [0,1,0,0,0],
//               [0,0,1,0,0],
//               [0,0,0,1,1]]
// Output: 3
 

// Constraints:

// rows == mat.length
// cols == mat[i].length
// 1 <= rows, cols <= 100
// mat[i][j] is 0 or 1.