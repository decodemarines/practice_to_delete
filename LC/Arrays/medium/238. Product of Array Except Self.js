// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

// Note: Please solve it without division and in O(n).

// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)


// https://www.youtube.com/watch?v=gREVHiZjXeQ&list=PLEJXowNB4kPxQIN2dCUAnQ_92HIziG4x6&index=95

var productExceptSelf = function(nums) {
    let res=[]
    let n=nums.length
    let prod=1
    if(n<1) return res
    for(let i=0;i<n;i++){
        prod*=nums[i]
        res.push(prod)
    }
    prod=1
    for(let i=n-1;i>0;--i){
        res[i]=res[i-1]*prod
        prod*=nums[i]
    }
    res[0]=prod
    return res
};


var productExceptSelf = function(nums) {
    const res = [];
    res[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        res[i] = res[i-1] * nums[i-1];
    }
    let right = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] = res[i] * right;
        right = right * nums[i];
    }
    return res;
};