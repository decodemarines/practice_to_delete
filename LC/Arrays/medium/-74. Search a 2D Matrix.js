// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.
 

// Example 1:


// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Example 2:


// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false




var searchMatrix = function(matrix, target) {
    let x = -1
    let y = -1
    for (let i = 0; i < matrix.length; i++){
        if (matrix[i] == 0) break
        if (matrix[i][0] > target) break
        x = i
    }
    if (x == -1) return false
    for (let j = 0; j < matrix[x].length; j++){
        if (matrix[x][j] > target) break
        if (matrix[x][j] == target) return true
    }
    return false
};

