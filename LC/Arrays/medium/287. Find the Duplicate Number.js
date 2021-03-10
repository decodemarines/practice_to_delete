// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

 

// Example 1:

// Input: nums = [1,3,4,2,2]
// Output: 2

var findDuplicate = function(nums) {
    let arr=[]
 for (let i = 0; i < nums.length; i++) {
     let index = Math.abs(nums[i]) - 1
     if (nums[index] > 0) {
         nums[index] *= -1
     } else {
         arr.push(index + 1)
     }
 }
 return arr[0]
};



var findDuplicate = function(nums) {
    let seen = new Set();
    for (let i = 0; i < nums.length; i++){
        if(seen.has(nums[i])){
            return nums[i];
        } else {
            seen.add(nums[i]);
        }
    }
    return false;
};

var findDuplicate = function(nums) {
    let i = 0; 
    while (i < nums.length) {
        let correctIdx = nums[i] - 1;
        if (nums[i] !== nums[correctIdx]) {
            [nums[i], nums[correctIdx]] = [nums[correctIdx], nums[i]]
            continue;
        }
        i++;
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) return nums[i];
    }
};