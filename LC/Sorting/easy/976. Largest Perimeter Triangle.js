// Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.

 

// Example 1:

// Input: nums = [2,1,2]
// Output: 5
// Example 2:

// Input: nums = [1,2,1]
// Output: 0

var largestPerimeter = function(A) {
    A.sort((a,b)=>a-b)
    let  a, b, c;
        for (let i = A.length - 1; i >= 2; i--) {
            a = A[i - 2]
            b = A[i - 1]
            c = A[i]
            if (a + b > c) {
                return a + b + c
            }
        }
        return 0      
   
};

// for (int i = 0; i < n - 2; i++){ 
//     for (int j = i + 1; j < n - 1; j++){ 
//         for (int k = j + 1; k < n; k++){ 

//             // a, b, c are 3 sides of the triangle 
//             int a = arr[i]; 
//             int b = arr[j]; 
//             int c = arr[k]; 

//             // check whether a, b, c forms 
//             // a triangle or not. 
//             if (a < b+c && b < c+a && c < a+b){ 

//                 // if it forms a triangle 
//                 // then update the maximum value. 
//                 maxi = max(maxi, a+b+c); 
//             } 
//         } 
//     } 
// } 