// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.

 

// Example 1:

// Input: n = 1
// Output: true
// Explanation: 20 = 1
// Example 2:

// Input: n = 16
// Output: true
// Explanation: 24 = 16

// Constraints:

// -231 <= n <= 231 - 1
 

// Follow up: Could you solve it without loops/recursion?

var isPowerOfTwo = function(n) {
   
    return (n>0) && (n & (n-1))==0
};

// свойство если число в степени 2 то нули на единицы и наоборот
// логическое и дает нули там где значания разные
// спец кейс если n=0 он не дает степень 2
// n       = 1000
// n - 1   = 0111
// n&(n-1) = 0000

var isPowerOfTwo = function(n) {
    let count=0
    while(n!==0){
        count++
        n=n&(n-1)
        
    }
    return count==1
};

