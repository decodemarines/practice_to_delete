// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

// Example 1:

// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
// Explanation:
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3).
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1).
// For nums[3]=2 there exist one smaller number than it (1).
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

// Mine:
var smallerNumbersThanCurrent = function(nums) {
  return nums.map(n => nums.reduce((acc, val) => acc + (val < n), 0));
};

// Runtime: 160 ms, faster than 7.47% of JavaScript

// 1365. How Many Numbers Are Smaller Than the Current Number
//       https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

Better: import { deepStrictEqual } from "assert";

/*
Given the array nums, for each nums[i] find out how many numbers in the array
are smaller than it. That is, for each nums[i] you have to count the number of
valid j's such that j != i and nums[j] < nums[i].
Return the answer in an array.
*/

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 68 ms, faster than 95.48% of JavaScript online submissions
// Memory Usage: 37 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// const smallerNumbersThanCurrent = nums => {
//   const map = new Map(
//     nums
//       .slice(0)
//       .sort((a, b) => a - b)
//       .map((val, idx) => [val, idx])
//       .reverse(),
//   );
//   return nums.map(n => map.get(n));
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 64 ms, faster than 98.31% of JavaScript online submissions
// Memory Usage: 37 MB, less than 100.00% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// const smallerNumbersThanCurrent = nums => {
//   const map = new Map(
//     nums
//       .slice()
//       .sort((a, b) => a - b)
//       .map((val, idx) => [val, idx])
//       .reverse(),
//   );
//   return nums.map(n => map.get(n));
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 100 ms, faster than 49.01% of JavaScript online submissions
// Memory Usage: 40.3 MB, less than 14.09% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// const smallerNumbersThanCurrent = nums =>
//   (map => nums.map(n => map.get(n)))(
//     new Map(
//       [...nums]
//         .sort((a, b) => a - b)
//         .map((val, idx) => [val, idx])
//         .reverse(),
//     ),
//   );

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 88 ms, faster than 88.24% of JavaScript online submissions
// Memory Usage: 41.1 MB, less than 12.55% of JavaScript online submissions

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// const smallerNumbersThanCurrent = nums =>
//   (map => nums.map(n => map.get(n)))(
//     new Map(
//       nums
//         .slice()
//         .sort((a, b) => a - b)
//         .map((val, idx) => [val, idx])
//         .reverse(),
//     ),
//   );

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Runtime: 92 ms, faster than 84.06% of JavaScript online submissions
// Memory Usage: 41 MB, less than 17.24% of JavaScript online submissions

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallerNumbersThanCurrent = nums =>
  (map => nums.map(n => map.get(n)))(
    new Map(
      [...nums]
        .sort((a, b) => b - a)
        .map((val, idx) => [val, nums.length - idx - 1])
    )
  );

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰
