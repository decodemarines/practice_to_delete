// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]


// 68 ms
var spiralOrder = function (A) {
    let l=0,
        r=A[0].length-1,
        t=0,
        d=A.length-1,
        dir=0,
        res=[]
    while(l<=r && t<=d){  
         if(dir==0){
         for(let i=l;i<=r;i++){
             res.push(A[t][i])
             }
             t++
         } 
        else if(dir==1){
            for(let i=t;i<=d;i++){
                res.push(A[i][r])
            }
            r--
        }   
        else if(dir==2){
            for(let i=r;i>=l;i--){
                res.push(A[d][i])
            }
            d--
        } 
        else {
            for(let i=d;i>=t;i--){
                res.push(A[i][l])
            }
            l++
        }
         dir=(dir+1)%4
        }
    return res
}


var spiralOrder = function(matrix) {
    let dirs= [[0, 1], [1, 0], [0, -1], [-1, 0]]
     let res=[]
     let nr = matrix.length
     let nc = matrix[0].length 
     if (nc == 0 && nr == 0) return res
     
     let nSteps=[nc, nr-1]
     
     let iDir = 0   // index of direction.
     let ir = 0, ic = -1    // initial position
     while (nSteps[iDir%2]) {
         for (let i = 0; i < nSteps[iDir%2]; ++i) {
             ir += dirs[iDir][0]
             ic += dirs[iDir][1]
             res.push(matrix[ir][ic])
         }
         nSteps[iDir%2]--
         iDir = (iDir + 1) % 4
     }
     return res
 }

 let result = [];
    
    while(matrix.length > 0){
        result = result.concat(matrix.splice(0,1)[0]);
        if(matrix.length > 0){    
            matrix = matrix.map((row) => row.reverse()); 
            matrix = matrix[0].map((_, columnIndex) => {
                return matrix.map((row) => {
                    return row[columnIndex];
                });
            });
        }   
    }
    
    return result;

// FAST
var spiralOrder = function(matrix) {
    const result = []; // Declare constant variable result initialzie to an empty array.
    
    let startRow = 0, 
        endRow = matrix.length - 1; 
    let startCol = 0, 
        endCol = matrix[0].length - 1; 
    
    while (startCol <= endCol && startRow <= endRow) {
        // top row 
        for (let col = startCol; col <= endCol; col++) {
            result.push(matrix[startRow][col]); 
        }
        // right row minus top column
        for (let row = startRow + 1; row <= endRow; row++) {
            result.push(matrix[row][endCol]); 
        }
        // bottom row minus last column
        for (let col = endCol - 1; col >= startCol; col--) {
            if (startRow === endRow) break; 
            result.push(matrix[endRow][col]); 
        }
        // remaining cols
        for (let row = endRow - 1; row > startRow; row--) {
            if (startCol === endCol) break; 
            result.push(matrix[row][startCol]);
        }
        startRow++; 
        endRow--;
        startCol++; 
        endCol--;
    }
    
    
    
    
    return result;// Return result
};