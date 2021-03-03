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


/*STATS Runtime: 56 ms, faster than 86.46% of JavaScript online submissions for Find Lucky Integer in an Array.
Memory Usage: 35.4 MB, less than 100.00% of JavaScript online submissions for Find Lucky Integer in an Array.*/

var findLucky = function(arr) {
    let map = {};
    for (let num of arr) {
        if (!map[num]) {
            map[num] = 1;
        } else {
            map[num]++;
        }
    }
    let max = -1;
    for (let num of arr) {
        if (map[num] === num) {
            if (num > max) {
                max = num
            }
        }
    } return max;
};
var findLucky=function(arr){
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
// faster
var findLucky = function(arr) {
    const obj = {};
    for(let i = 0; i < arr.length; i++){
        obj[arr[i]] = (obj[arr[i]] || 0) + 1;
    }
    large = 0;
    for(const key in obj){
        if(obj[key] == key){
            if(obj[key] >= large) {
                large = key;
            }
        }
    }
    return large > 0 ? large: -1;
};

var findLucky = function(arr) {
    let map = new Map();
    for(let i=0;i<arr.length;i++)
        if(map.has(arr[i])) map.set(arr[i], map.get(arr[i])+1);
        else map.set(arr[i], 1);
    
   
    let arrEntries = [...map.entries()].filter(x=>x[0]==x[1]);
    if(arrEntries.length ==0) return -1;
    let max = Number.MIN_SAFE_INTEGER;
    for(let i=0;i<arrEntries.length;i++){
        if (arrEntries[i][0]>max) max = arrEntries[i][0]
    }
    return max;
};

// by memory
var findLucky = function(arr) {
    const arrHashMap = arr.reduce((acc, integer) => {
        acc[integer] ? acc[integer] += 1 : acc[integer] = 1;    
        return acc;
    }, {});
    
    const keys = Object.keys(arrHashMap);
    const values = Object.values(arrHashMap);

    return values.reduce((acc, integer, index) => {
       const currentKey = +keys[index];
        
       if(
           currentKey === integer 
           && integer > acc
       ) {
           acc = integer;
       }
        
       return acc;
    }, -1);
};