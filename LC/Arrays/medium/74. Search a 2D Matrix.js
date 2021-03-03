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


// Faster
var searchMatrix = function(matrix, target) {
    
    //     for (let i = 0; i < matrix.length; i++) {
    //         for (let j = 0; j < matrix[i].length; j++) {
    //             if (matrix[i][j] == target) return true
    //         }
    //     }
        
    //     return false
        
        if (matrix.length == 1) {
            for (let i = 0; i < matrix[0].length; i++) {
                if (target == matrix[0][i]) return true
            }
            return false
        }
        
        let arrayToSearch = []
        
        for (let i = 1; i < matrix.length; i++) {
            
            if (target < matrix[i][0]) {
                //look in row (array) above the i-th row
                //console.log("ITS IN THIS ONE", matrix[i-1])
                arrayToSearch = matrix[i-1]
                break
            } else if (target >= matrix[i][0] && target <= matrix[i][matrix[i].length - 1]) {
                //its in the ith row
                //console.log("it should be here", matrix[i])
                arrayToSearch = matrix[i]
                break
            } 
        }
        
        for (let i = 0; i < arrayToSearch.length; i++) {
            if (target == arrayToSearch[i]) return true
        }
        
        return false

};
    
var searchMatrix = function(matrix, target) {
    if(matrix.length===0 || matrix===null) return false;
    let i =0;
    let n = matrix[0].length-1
    let j= n;
    
    while(i< matrix.length && j>=0){
        if(matrix[i][j]===target){
            return true;
        } else if(target < matrix[i][j]){
            j--;
        } else{
            i++;
        }
    }
    return false;
};

var searchMatrix = function(matrix, target) { 
    let m = matrix.length 
    let n = matrix[0].length
    if(m == 0) return false
    let l = 0
    let r = m * n-1
    
    while(l+1 < r){
        let mid = parseInt((l+r)/2)
        let midElement = matrix[Math.floor(mid/n)][mid%n]
        if(target == midElement){
            return true
        }
        if(target > midElement){
            l = mid
           }
        if(target < midElement){
                r = mid
          }
    }
    if(matrix[Math.floor(l/n)][l%n] == target) return target
    if(matrix[Math.floor(r/n)][r%n] == target) return target
    return false
    
};