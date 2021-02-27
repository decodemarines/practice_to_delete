// Runtime: 88 ms, faster than 55.35% of JavaScript online submissions for Single Number III.
// Memory Usage: 42.8 MB, less than 8.81% of JavaScript online submissions for Single Number III.

var singleNumber = function(nums) {
   
    // HT solution
    let ht={}
    let arr=[]
    for(const n of nums){
        ht[n]=ht[n]+1||1
    }
    for(const k in ht){
        if (ht[k]==1) arr.push(k)
    }
    return arr
}

// TO DO with BITS