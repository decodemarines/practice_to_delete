// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

// Return the sum of all the unique elements of nums.

 

// Example 1:

// Input: nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: 0
// Explanation: There are no unique elements, and the sum is 0.
// Example 3:

// Input: nums = [1,2,3,4,5]
// Output: 15
// Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.

var sumOfUnique = function(nums) {
    let m={}
      for(const n of nums){
          m[n]=m[n]+1||1
      }
      let counter=0
      for(const k in m){
          if (m[k]==1)
          counter+=parseInt(k)
      }
      return counter
};
  
var sumOfUnique = function(nums) {
    let counter = {};
    let ans = 0;
    
    for(let i=0; i<nums.length; i++){
        
       if(counter[nums[i]] === undefined) {
            counter[nums[i]] = 1;
        } else {
            counter[nums[i]] = counter[nums[i]] + 1;
        }
    }

    for (const key in counter) {
        if(counter[key] < 2) {
            ans  = ans + parseInt(key);
        }
    }
    
    return ans;
};
// 64
var sumOfUnique = function(nums) {
    const arr = new Array(101).fill(0);
    let sum = 0;
    nums.forEach((num) => {
       arr[num]++;
    });
    for (let i = 1;i <= 100;i++) {
        if (arr[i] === 1) {
            sum += i;
        }
    }
    
    return sum;
};
// 60 ms
const sumOfUnique = (nums) => {
    const map = {};

    for (const num of nums) {
        if (!map[num]) map[num] = 0;
        map[num]++;
    }

    return Object.entries(map)
        .filter((el) => el[1] < 2)
        .reduce((acc, curr) => acc + +curr[0], 0);
};