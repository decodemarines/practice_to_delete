// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

// Mine:
var fib = n => (n <= 1 ? n : fib(n - 1) + fib(n - 2)); // time

var fib = function(n) {
  if (n == 0 || n == 1) return n;
  let arr = [0, 1];
  for (let i = 1; i < n; i++) {
    arr.push(arr[i - 1] + arr[i]);
  }
  return arr[arr.length - 1];
};

// class Solution {
//   public int fib(int N) {
//       if(N<=1){
//           return N;
//       }
//       return fun(N);
//   }

//   public int fun(int N){
//       int[] cache = new int[N+1];
//       cache[1]=1;
//       for(int i=2; i<N+1;i++){
//           cache[i]=cache[i-1]+cache[i-2];
//       }
//       return cache[N];
//   }

// }
// class Solution {
//   public int fib(int N) {
//       if(N<=1){
//           return N;
//       }
//       int a=0,b=1;
//       for(int i=2;i<=N;i++){
//           b=a+b;
//           a=b-a;
//       }
//       return b;
//   }
// }
