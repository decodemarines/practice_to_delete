// Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal.

// In one move, you can increment n - 1 elements of the array by 1.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: 3
// Explanation: Only three moves are needed (remember each move increments two elements):
// [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]

// Example 2:

// Input: nums = [1,1,1]
// Output: 0


// YT: 3.5 задачи

// Поскольку нет ограничений на эл и размер массива то полный перебор не сработает за нормальное время
// будет или факториал или хуже

// Увеличение всех эл не влияет на равенство эл
// поэтому нужно минимизировать к-о операций уменьшения одного элемента на 1

var minMoves = function(a) {
    let min=a[0],
    sum=0
    for(let i of a){
        min=Math.min(min,i)
        sum+=i-min
    }
    return sum
};

// FASTER
const minMoves = function(nums) {
    let min = Number.MAX_SAFE_INTEGER;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      min = Math.min(min, nums[i]);
      sum += nums[i];
    }
    return sum - min * nums.length;
};
var minMoves = function(nums) {
  let moves = 0, min = Infinity;
  for(let num of nums) {
      moves += num;
      min = Math.min(min, num)
  }
  return moves - min*nums.length
};
  
// JavaScript O(n log n) solution.
var minMoves = function(nums) {
    nums.sort((a, b) => b - a)
  
    let moves = 0
  
    let index = 1
    while (index < nums.length) {
      moves += (nums[index - 1] - nums[index]) * index
      ++index
    }
  
    return moves
};
  
var minMoves = function(nums) {
    return nums.reduce((acc, cur) => acc + cur) - nums.length * Math.min(...nums);
  };