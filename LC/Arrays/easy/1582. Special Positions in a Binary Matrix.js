var numSpecial = function(mat) {
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