// Given an integer n, return any array containing n unique integers such that they add up to 0.

 

// Example 1:

// Input: n = 5
// Output: [-7,-1,1,3,4]
// Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
// Example 2:

// Input: n = 3
// Output: [-1,0,1]
// Example 3:

// Input: n = 1
// Output: [0]

var sumZero = function(n) {
    let res=[]
   
    for(let i=0;i<Math.floor(n/2);++i){
       res.push(n-i)   
       res.unshift(-n+i)
    }
      n&1?res.unshift(0):null
      return res
  }
   // console.log(sumZero(5))
   // [-4,-5,-6,6,5,4]

// FAST
var sumZero = function (n) {
    var arr = [];
    var sum = 0;
    
    for (let i = 0; i < n - 1; i++) {
        arr.unshift(-i);
        sum += i;
    }
    
    arr.push(sum);
    return arr;
};
   // console.log(sumZero(5))
   //[ -3, -2, -1, -0, 6 ]