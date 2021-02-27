// Runtime: 92 ms, faster than 31.44% of JavaScript online submissions for Single Number II.

//  все встречаются по 3 кроме одного
var singleNumber = function(nums) {
    // HT solution
    let ht={}
    for(const n of nums){
        ht[n]=ht[n]+1||1
    }
    for(const k in ht){
        if (ht[k]!==3) return k
    }
};

// TO DO with BITS