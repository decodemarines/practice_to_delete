var rotate = function(matrix) {
    matrix.reverse()

    return matrix[0].map((col, c) => matrix.map((row, r) => matrix[r][c])) 
};
// wrong answer in LC
// correct in playground



// Runtime: 76 ms, faster than 81.45% of JavaScript online submissions for Rotate
var rotate = function(matrix) {
    matrix.reverse()
    let n = matrix.length;
     for (let i = 0; i < n; i++) {
       for (let j = i+1; j < n; j++) { //   верхний треугольник
         let temp = matrix[i][j]; // или свап функция или бинарником
         matrix[i][j] = matrix[j][i];
         matrix[j][i] = temp;
           
       }
     }
       return matrix
};
   


// 2
var transpose = function(matrix){
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            let temp = matrix[j][i]
            matrix[j][i]=matrix[i][j];
            matrix[i][j]=temp
            if(i===j) break
            //console.log(i,j,matrix[i][j])
        }
    }
}


var mirror=function(matrix){
for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix[i].length;j++){
        if(j>=Math.floor(matrix[i].length/2)) break
        let temp = matrix[i][j];
        matrix[i][j]=matrix[i][matrix[i].length-1-j];
        matrix[i][matrix[i].length-1-j] = temp
    }
}
}
var rotate = function(matrix) {
transpose(matrix);
mirror(matrix);
// console.log(matrix)
};


//3 









// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

 

// Example 1:


// Input: matrix = [
// [1, 2, 3],
// [4, 5, 6],
// [7, 8, 9]]

// Output: [
//  [7, 4, 1], 
//  [8, 5, 2],
//  [9, 6, 3]]

// Example 2:


// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
// Example 3:

// Input: matrix = [[1]]
// Output: [[1]]
// Example 4:

// Input: matrix = [[1,2],[3,4]]
// Output: [[3,1],[4,2]]