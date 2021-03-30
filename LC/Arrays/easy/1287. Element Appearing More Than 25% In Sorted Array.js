// Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time.

// Return that integer.

 

// Example 1:

// Input: arr = [1,2,2,6,6,6,6,7,10]
// Output: 6

var findSpecialInteger = function (nums) {
    let ht={}
    for(const n of nums){
        ht[n]=ht[n]+1||1
    }
    for(const k in ht){
        if (ht[k]>nums.length*0.25) return k
    }
};


var findSpecialInteger = function(arr) {
    const len = arr.length;
    const candiates = new Set();
    for (let i = 0; i <= 4; ++ i) {
        const sep = i / 4.0 * len;
        
        candiates.add(arr[Math.floor(sep)]);
        candiates.add(arr[Math.ceil(sep)]);
    }
    
    let maxSize = 0;
    let target = null;
    for (const cand of candiates) {
        const left = findLeftMostIndex(arr, cand);
        const right = findRightMostIndex(arr, cand);
        
        if (right - left + 1 > maxSize) {
            maxSize = right - left + 1;
            target = cand;
        }
    }
    
    return target;
};


// 1 2
function findLeftMostIndex(arr, cand) {
    // Left: the left most index of cand.
    let left = 0, right = arr.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        // When the candidate == mid, still move to the left side, to make sure we still have the answer in [left, right], no miss.
        if (cand <= arr[mid]) {
            right = mid;
        } else {
            // When the candidate > mid, we can safely increase left to 1 position over mid to make sure we don't miss.
            left = mid + 1;
        }
    }
    
    return left;
}


function findRightMostIndex(arr, cand) {
    // right: the right most index of cand
    let left = 0, right = arr.length - 1;

    while (left < right) {
        const mid = Math.ceil((left + right) / 2);
        
        if (cand < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid;
        }
    }
    
    return right;
}

function findRightMostIndex2(arr, cand) {
    // left: the smallest index larger than cand.
    let left = 0, right = arr.length;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (cand < arr[mid]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
}


var findSpecialInteger = function(arr) {
    const qLen = Math.floor(arr.length / 4);
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == arr[i+qLen]) return arr[i];
    }
    
};

var findSpecialInteger = function(arr) {
    let length = arr.length, count = 1;
    let frequency = Math.ceil(length * 0.25);
    
    if(length == 1) return arr[0];
    
    for(let i = 1; i < length; i++) {
        
        if(arr[i] == arr[i-1]) {
            count++;
            
            if(count > frequency) {
                return arr[i];
            }
        } else {
            count = 1;
        }
        
    }
};