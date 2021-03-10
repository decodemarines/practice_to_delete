// Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.

// There may be duplicates in the original array.

// Note: An array A rotated by x positions results in an array B of the same length such that A[i] == B[(i+x) % A.length], where % is the modulo operation.

 

// Example 1:

// Input: nums = [3,4,5,1,2]
// Output: true
// Explanation: [1,2,3,4,5] is the original sorted array.
// You can rotate the array by x = 3 positions to begin on the the element of value 3: [3,4,5,1,2].
// Example 2:

// Input: nums = [2,1,3,4]
// Output: false
// Explanation: There is no sorted array once rotated that can make nums.
// Example 3:

// Input: nums = [1,2,3]
// Output: true
// Explanation: [1,2,3] is the original sorted array.
// You can rotate the array by x = 0 positions (i.e. no rotation) to make nums.


// Thought Process
// Simple problem, just need to find a pattern
// If always non-decreasing, true
// If it has one decreasing pivot, the last element needs to be less or equal than the first element
// If it has more than one decreasing pivot, false

var check = function(nums) {
  let c=0,n=nums.length
  for(let i=0;i<n;i++){
      if(nums[i]>nums[(i+1)%n]) {
       c++   
      }
  }
      if(c>1) return false
      return true
};

const check = function(nums) {
    let prev = -1, mark = 0
    for(let e of nums) {
      
      if(e >= prev) prev = e
      else {
        mark++
        prev = e
      }
      if(mark > 1) return false
    }
    if(mark === 1 && nums[0] < nums[nums.length - 1]) {
        return false
    }
    return true
};
  

// 56
var check = function(nums) {
  let count = 0
  for (let i = 1; i < nums.length; i += 1) {
      if (nums[i] < nums[i - 1]) count += 1
      if (count > 1) return false
  }
  return count === 0 || (count === 1 && nums[0] >= nums[nums.length - 1])
};

// 64
var check = function(nums) {
  let range = 0; 
  let notSorted = false;
  
  for(let i = 0; i < nums.length - 1; i++){
      if(nums[i] > nums[i + 1]){
          if(notSorted){
              return false;
          } else {
              notSorted = true;
          }           
       }
      if(notSorted) range++;
  }    
      
  if(notSorted && nums[0] < nums[nums.length - 1]){
      return false;
  }
 
  return true;

};