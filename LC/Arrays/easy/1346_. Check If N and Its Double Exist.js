// Input: arr = [10,2,5,3]
// Output: true
// Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.

// Example 3:

// Input: arr = [3,1,7,11]
// Output: false
// Explanation: In this case does not exist N and M, such that N = 2 * M.

//https://github.com/Sporkyy/leetcode/blob/d5d52368c087702b4cba651862cda0a18a12c161/1346-check-if-n-and-its-double-exist.js
const checkIfExist = arr =>
  arr.length &&
  ((x => arr.some(n => n === x * 2 || n === x / 2))(arr.pop()) ||
    checkIfExist(arr));

var checkIfExist = function(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr.indexOf(2 * arr[i]) !== -1 && arr.indexOf(2 * arr[i]) !== i) {
      return true;
    }
  }
  return false;
};

// additional solutions:
// https://github.com/GitHubGanKai/leetcode/blob/d88bd85787651aec67ac51aa060a856effd8ad81/1346.%E6%A3%80%E6%9F%A5%E6%95%B4%E6%95%B0%E5%8F%8A%E5%85%B6%E4%B8%A4%E5%80%8D%E6%95%B0%E6%98%AF%E5%90%A6%E5%AD%98%E5%9C%A8.js
// var checkIfExist = function(arr) {
//   const neg = new Uint8Array(1000);
//   const pos = new Uint8Array(1000);
//   for (const val of arr) {
//     const arr = val > 0 ? pos : neg;
//     const v2 = Math.abs(val);
//     if (arr[v2 << 1] === 1 || arr[v2 / 2]) return true;
//     arr[v2] = 1;
//   }
//   return false;
// };

// var checkIfExist = function (arr) {
//   let mySet = new Set();
//   return arr.some(num => {
//       if (mySet.has(num * 2) || mySet.has(num / 2))
//           return true;
//       else
//           mySet.add(num);
//   });
// };

// var checkIfExist = function (arr) {
//   const hash = {};

//   for (let a of arr) {
//     if (hash[a]) {
//       return true;
//     }

//     hash[a * 2] = true;
//     hash[a / 2] = true;
//   }

//   return false;
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 44 ms, faster than 99.61% of JavaScript online submissions
// Memory Usage: 33.9 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[]} arr
//  * @return {boolean}
//  */
// const checkIfExist = arr =>
//   arr.some((n, idx) => {
//     const i2n = arr.indexOf(n * 2);
//     return -1 < i2n && idx !== i2n;
//   });

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 80 ms, faster than 77.79% of JavaScript online submissions
// Memory Usage: 41.9 MB, less than 7.55% of JavaScript online submissions

// /**
//  * @param {number[]} arr
//  * @return {boolean}
//  */
// const checkIfExist = arr =>
//   !arr.length
//     ? false
//     : arr.slice(1).includes(arr[0] * 2) || arr.slice(1).includes(arr[0] / 2)
//     ? true
//     : checkIfExist(arr.slice(1));

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 68 ms, faster than 99.26% of JavaScript online submissions
// Memory Usage: 40 MB, less than 48.03% of JavaScript online submissions

// /**
//  * @param {number[]} arr
//  * @return {boolean}
//  */
// const checkIfExist = arr =>
//   !arr.length
//     ? false
//     : (x => arr.some(n => n === x * 2 || n === x / 2))(arr.pop())
//     ? true
//     : checkIfExist(arr);

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 84 ms, faster than 55.69% of JavaScript online submissions
// Memory Usage: 41.3 MB, less than 9.99% of JavaScript online submissions

// /**
//  * @param {number[]} arr
//  * @return {boolean}
//  */
// const checkIfExist = (arr, haystack = new Set()) =>
//   arr.length &&
//   (n =>
//     haystack.has(n / 2) ||
//     haystack.has(n * 2) ||
//     (haystack.add(n) && checkIfExist(arr, haystack)))(arr.pop());

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 76 ms, faster than 92.03% of JavaScript online submissions
// Memory Usage: 40.1 MB, less than 48.03% of JavaScript online submissions

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = arr =>
  arr.length &&
  ((x => arr.some(n => n === x * 2 || n === x / 2))(arr.pop()) ||
    checkIfExist(arr));

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰
let checkIfExist = (A, seen = new Set()) => {
  for (let x of A) {
    if (seen.has(x / 2) || seen.has(x * 2)) return true;
    seen.add(x);
  }
  return false;
};
