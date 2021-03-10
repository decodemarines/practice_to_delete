// Given an array of integers numbers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

// Return the indices of the two numbers (1-indexed) as an integer array answer of size 2, where 1 <= answer[0] < answer[1] <= numbers.length.

// You may assume that each input would have exactly one solution and you may not use the same element twice.

 

// Example 1:

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.


// 280 ms

var twoSum = function(nums, target) {
    for (let i=0;i<nums.length;i++){
        for (let j=i+1;j<nums.length;j++)
            if(nums[i]+nums[j]===target) return [i+1,j+1]
    }
    
}

// Fast
var twoSum = function(numbers, target) {
    let i = 0, j = numbers.length - 1
    while (i < j) {
        if (numbers[i] + numbers[j] < target) i++
        if (numbers[i] + numbers[j] > target) j--
        if (numbers[i] + numbers[j] === target) return [i+1,j+1]
    }
};