// Given a binary array, find the maximum number of consecutive 1s in this array.

// Example 1:
// Input: [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
//     The maximum number of consecutive 1s is 3.

var findMaxConsecutiveOnes = function(nums) {
    let c=0,
        max=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]===1){
            c++
        } else { 
         c=0
        }
        if(c>max) {
           max=c 
        }
       
           
       
        
    }
    return max
};
// FAST
var findMaxConsecutiveOnes = function(nums) {

    let max = 0;
    let groupMax = 0;
    let length = nums.length;
    for (let i = 0; i < length; i++) {
        if (nums[i] == 1) {
            groupMax = groupMax + 1;
           if (groupMax > max) { max = groupMax; }
        } else {
            groupMax = 0;
        }
    }
    return max;
};