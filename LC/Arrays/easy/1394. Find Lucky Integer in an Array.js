// Given an array of integers arr, a lucky integer is an integer which has a frequency in the array equal to its value.

// Return a lucky integer in the array. If there are multiple lucky integers return the largest of them. If there is no lucky integer return -1.

 

// Example 1:

// Input: arr = [2,2,3,4]
// Output: 2
// Explanation: The only lucky number in the array is 2 because frequency[2] == 2.
// Example 2:

// Input: arr = [1,2,2,3,3,3]
// Output: 3
// Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.
// Example 3:

// Input: arr = [2,2,2,3,3]
// Output: -1
// Explanation: There are no lucky numbers in the array.
// Example 4:

// Input: arr = [5]
// Output: -1
// Example 5:

// Input: arr = [7,7,7,7,7,7,7]
// Output: 7

// Runtime: 84 ms, faster than 64.23% of JavaScript online submissions for Find Lucky Integer in an Array.
// Memory Usage: 40.9 MB, less than 12.47% of JavaScript online submissions for Find Lucky Integer in an Array.

var findLucky = function (arr) {
    let m=new Map()
    for(let n of arr){
        if(m.has(n)){
            m.set(n,m.get(n)+1)
        }else{
            m.set(n,1)
        }
    }
    let max=-1
    for(let [n,count] of m){
        if(n===count && n>max){
            max=n
        }
    }
    return max
}