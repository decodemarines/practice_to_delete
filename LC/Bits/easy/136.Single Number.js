// Runtime: 88 ms, faster than 77.79% of JavaScript online submissions for Single
var singleNumber = function (nums) {
    // HT solution
    let ht={}
    for(const n of nums){
        ht[n]=ht[n]+1||1
    }
    for(const k in ht){
        if (ht[k]==1) return k
    }
}

// Runtime: 80 ms
// Memory Usage: 40.1 MB
var singleNumber = function(nums) {
    let res = nums[0]
       for (let i = 1; i < nums.length ; i++) {
           res = res ^ nums[i]
       }
       return res
};