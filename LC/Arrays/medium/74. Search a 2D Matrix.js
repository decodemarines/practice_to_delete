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
        if (matrix[i].length==0) break
        if (matrix[i][0] > target) break
        x = i
    }
    if (x == -1) return false
    for (let j = 0; j < matrix[x].length; j++){
        if (matrix[x][j] > target) break
        if (matrix[x][j] == target) return true
    }
    return false
}

let matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 13
console.log(searchMatrix(matrix, target))


// [[-8],[-5],[-4],[-2],[0],[3],[4],[5],[6],[8],[9],[11],[13],[16],[18],[20],[23],[25],[26],[27],[29],[31],[32],[34],[37],[38],[41],[44],[46],[49],[51],[53],[56],[57],[58],[60],[63],[65],[68],[70],[73],[76],[77],[79],[82],[84],[87],[90],[92],[94]]
// 57



// bool searchMatrix(int** matrix, int matrixSize, int* matrixColSize, int target){
//     if(matrixSize == 0) {
//         return false;
//     }
    
//     int left = 0;
//     int right = matrixSize * (*matrixColSize) - 1;
    
//     while(left <= right) {
//         int mid = (left + right) / 2;
//         int element = matrix[mid/(*matrixColSize)][mid % (*matrixColSize)];
//         if(target == element) {
//             return true;
//         } else {
//             if(target < element) {
//                 right = mid - 1;
//             } else {
//                 left = mid + 1;
//             }
//         }
//     }
//     return false;
// }