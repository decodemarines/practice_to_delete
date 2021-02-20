// Example 1:

// Input: nuExample 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].ms = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

var nums = [5, 10, 3, 2];
var runningSum = function(nums) {};

// 1
var nums = [5, 10, 3, 2];
var runningSum = function(nums) {
  nums.reduce((acc, _, i) => (nums[i] += acc));
  return nums;
};

// 2
let myarray = [5, 10, 3, 2],
  result = [];

for (let i = 0, s = myarray[0]; i < myarray.length; i++, s += myarray[i])
  result.push(s);

console.log(result); // [5, 15, 18, 20]

// 3.
[1, 2, 3].reduce((a, x, i) => [...a, x + (a[i - 1] || 0)], []);

// 4.
let myarray = [5, 10, 3, 2];
let new_array = [];
myarray.reduce((prev, curr, i) => (new_array[i] = prev + curr), 0);
console.log(new_array);

// 5.
var result = myarray.reduce(function(a, b, i) {
  return i === 0 ? [b] : a.concat(a[i - 1] + b);
}, 0);

//6.
var cumsum = function(sums, val) {
  return sums.concat([val + 1 * sums.slice(-1)]);
};
var some_sums = [5, 10, 3, 2].reduce(cumsum, []);

// 7.

var nums = [5, 10, 3, 2];
var runningSum = function(nums) {
  nums.reduce((a, _, i) => (nums[i] = a + nums[i]));
  return nums;
};
