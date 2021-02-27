// Given a non-negative integer x, compute and return the square root of x.

// Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

 

// Example 1:

// Input: x = 4
// Output: 2
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.


// const mySqrt = (x) => {
//   const aux = (low, high) => {
//     if (low > high) {
//       return null
//     }
//     const middle = Math.floor((low + high) / 2)
//     const left = middle - 1
//     const right = middle + 1
//     if ((middle * middle <= x) && (right * right > x)) {
//       return middle
//     }
//     if (middle * middle < x) {
//       return aux(right, high)
//     }
//     return aux(low, left)
//   }
//   return aux(0, x)
// }


const mySqrt = (x) => {
    let r = x
    while (r * r > x) {
      r = Math.floor((r + x / r) / 2)
    }
  
    return r
  }