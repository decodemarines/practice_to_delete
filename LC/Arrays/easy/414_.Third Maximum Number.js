var thirdMax = function(nums) {
    arr=[...new Set(nums)].sort((a,b)=>a-b)
    console.log(arr)
    return arr.length>=3?arr.splice(-3).shift():Math.max(...arr)
};
// Runtime: 80 ms, faster than 81.66% of JavaScript online submissions for Third Maximum Number.
// Memory Usage: 41.2 MB, less than 23.51% of JavaScript online submissions for Third Maximum Number.