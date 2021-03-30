// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4


var searchInsert = function(nums, target) {
    for(let i=nums.length;i>=0;i--){
       if(target>nums[i]) return i+1  
       if(nums[i]===target) return i   
    }
    return 0
};

// FAST
var searchInsert = function(nums, target) {
    // iterate over the nums
    let index = 0;
    if (target > nums[nums.length - 1]) return nums.length;
    
    for (let i = 0; i < nums.length; i++) {
      // if curr is equal target return i
      if (nums[i] === target) {
        return i;
      }
      // if curr is greater than target
      if (nums[i] > target) {
        // return i
        return i;                                         
      }
      index = i;
    }
    return index + 1;
};
  

var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let mid = 0;
    while(start <= end) {
        mid = Math.floor((start + end) / 2);
        if(nums[mid] < target) {
            start = mid + 1;
            continue;
        }
        if(nums[mid] > target) {
            end = mid - 1;
            continue;
        }
        return mid;
    }
    return start;
};

var searchInsert = function(nums, target) {
    if (target < nums[0]) return 0;
    if (target > nums[nums.length - 1]) return nums.length;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
        if (nums[i] < target && target < nums[i + 1]) {
            return i + 1;
        }
    }
};