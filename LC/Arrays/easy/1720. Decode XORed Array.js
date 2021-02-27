// https://donic0211.medium.com/leetcode-1720-decode-xored-array-5c9b85c53867
var decode = function(encoded, first) {
    let res=[first]
    encoded.map((a,i)=>res[i+1]=[res[i]^encoded[i]])
    return res
};

// 1 ^ 1 =0
// 0 ^ 2 = 2
// 2 ^ 3 =1
// Return [1,0,2,1]


// 1 = 0001 
// xor    0 = 0000 
//          = 0001 = 1
// --> 0001 xor 0001 = 0000

//        0 = 0000
// xor    2 = 0010 
//          = 0010 = 2
// --> 0000 xor 0010 = 0010

//        2 = 0010
// xor    1 = 0001 
//          = 0011 = 3
// --> 0010 xor 0011 = 0001