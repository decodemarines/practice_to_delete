// Given an array of integers nums, half of the integers in nums are odd, and the other half are even.

// Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.

// Return any answer array that satisfies this condition.

 

// Example 1:

// Input: nums = [4,2,5,7]
// Output: [4,5,2,7]
// Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
// Example 2:

// Input: nums = [2,3]
// Output: [2,3]



// TIME:
var sortArrayByParityII = function(A) {
    let n=A.length
    for(let i=0,j=1;i<n && j<n;){
         if(A[i]%2!==0) {
            swap(A, i, j)
           j += 2
        } else {
            i += 2
        }   
    }
    function swap(arr, i, j) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    return A
};
// FAST
 var sortArrayByParityII = function(A) {
    var res = [];
    var odd = 0;
    var even = 1;
    A.map((x) =>
      x % 2 ? ((res[even] = x), (even += 2)) : ((res[odd] = x), (odd += 2))
    );
  
    return res;
  };

var sortArrayByParityII = function(A) {
    
    let i = 0, j = 1, n = A.length;
    while (i < n && j < n) {
        while ( A[i] % 2 == 0) {
            i += 2;
        }
        while ( A[j] % 2 == 1)  j += 2;
        
        if (i < n && j < n) 
            swap(A, i, j);
        
    }
  function swap(A, i, j) {
    let temp = A[i];
    A[i] = A[j];
    A[j] = temp;
}


return A
};
console.log(sortArrayByParityII([4,2,5,7]))
console.log(sortArrayByParityII([3, 2]))



// class Solution:
//     def sortArrayByParityII(self, A: List[int]) -> List[int]:
//         def get_odd():
//             for i in range(1, len(A), 2):
//                 if not A[i] % 2:
//                     yield i
        
//         odd = get_odd()
//         for i in range(0, len(A), 2):
//             if A[i] % 2:
//                 j = next(odd)
//                 A[i], A[j] = A[j], A[i]
        
//         return A

// class Solution {
//     public:
//         vector<int> sortArrayByParityII(vector<int>& A) {
//             int n = A.size(), i = 0, j = 1;
//             while (i < n && j < n) {
//                 if (A[i] % 2 == 0) i += 2;
//                 else if (A[j] % 2 == 1) j += 2;
//                 else swap(A[i], A[j]);
//             }
//             return A;
//         }
//     };


// 922. Sort Array By Parity II
// https://leetcode.com/problems/sort-array-by-parity-ii/

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 124 ms, faster than 10.08% of JavaScript online submissions
// Memory Usage: 39.1 MB, less than 45.45% of JavaScript online submissions

// /**
//  * @param {number[]} A
//  * @return {number[]}
//  */
//  const sortArrayByParityII = A => {
//   let [e, o] = [0, 1];
//   do {
//     if (A[e] & 1 && !(A[o] & 1)) {
//       [A[e], A[o]] = [A[o], A[e]];
//       [e, o] = [e + 2, o + 2];
//     } else {
//       while (e < A.length && !(A[e] & 1)) e += 2;
//       while (o < A.length && A[o] & 1) o += 2;
//     }
//   } while (e < A.length && o < A.length);
//   return A;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 100 ms, faster than 54.17% of JavaScript online submissions
// Memory Usage: 42 MB, less than 9.09% of JavaScript online submissions

// const isEven = n => 0 === n % 2;
// const isOdd = n => 1 === n % 2;

// /**
//  * @param {number[]} A
//  * @return {number[]}
//  */
// const sortArrayByParityII = A => {
//   const evens = A.filter(n => isEven(n));
//   // console.log(evens);
//   const odds = A.filter(n => isOdd(n));
//   // console.log(odds);
//   const answer = [];
//   for (let i = (e = o = 0); i < A.length; i++) {
//     if (isEven(i)) {
//       answer.push(evens[e++]);
//     } else {
//       answer.push(odds[o++]);
//     }
//   }
//   return answer;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 100 ms, faster than 54.17% of JavaScript online submissions
// Memory Usage: 38.8 MB, less than 45.45% of JavaScript online submissions

// /**
//  * @param {number[]} A
//  * @return {number[]}
//  */
// const sortArrayByParityII = A => {
//   const result = new Array(A.length);
//   for (let i = 0, e = 0, o = 1; i < A.length; i++)
//     if (A[i] & 1) {
//       result[o] = A[i];
//       o += 2;
//     } else {
//       result[e] = A[i];
//       e += 2;
//     }
//   return result;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 92 ms, faster than 87.04% of JavaScript online submissions
// Memory Usage: 38.8 MB, less than 54.55% of JavaScript online submissions

// /**
//  * @param {number[]} A
//  * @return {number[]}
//  */
// const sortArrayByParityII = A => {
//   let [e, o] = [0, 1];
//   while (e < A.length && o < A.length) {
//     if (A[e] & 1 && !(A[o] & 1)) {
//       [A[e], A[o]] = [A[o], A[e]];
//       [e, o] = [e + 2, o + 2];
//     } else {
//       if (!(A[e] & 1)) e += 2;
//       if (A[o] & 1) o += 2;
//     }
//   }
//   return A;
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Runtime: 88 ms, faster than 94.53% of JavaScript online submissions
// Memory Usage: 38.8 MB, less than 54.55% of JavaScript online submissions

/**
 * @param {number[]} a
 * @return {number[]}
 */
const sortArrayByParityII = a => {
    let [e, o] = [0, 1];
    while (e < a.length && o < a.length) {
      if (1 === a[e] % 2 && 0 === a[o] % 2) {
        [a[e], a[o]] = [a[o], a[e]];
        [e, o] = [e + 2, o + 2];
      } else {
        if (0 === a[e] % 2) e += 2;
        if (1 === a[o] % 2) o += 2;
      }
    }
    return a;
  };
  
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  
  const checkParity = a => a.every((n, i) => null !== n && (n & 1) === (i & 1));