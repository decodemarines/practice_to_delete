// Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.

// Return the sorted array.

 

// Example 1:

// Input: nums = [1,1,2,2,2,3]
// Output: [3,1,1,2,2,2]
// Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.
// Example 2:

// Input: nums = [2,3,1,3,2]
// Output: [1,3,3,2,2]
// Explanation: '2' and '3' both have a frequency of 2, so they are sorted in decreasing order.
// Example 3:

// Input: nums = [-1,1,-6,4,5,-6,1,4,1]
// Output: [5,-1,4,4,-6,-6,1,1,1]

function frequencySort(arr){
    const fq = {}
     
   for(let n of arr){
       fq[n] = fq[n]+1 || 1
      
   }
        
    
   const sa = arr.map(n => [n, fq[n]])
    sa.sort((a,b) => {
      if (a[1] === b[1]) return b[0]-a[0]
      return a[1]-b[1]
    });
    return sa.map(n => n[0])
  }

  // fast
  var frequencySort = function(nums) {
    const hash = {}
    for(const num of nums) {
        if(hash[num] === undefined) {
            hash[num] = 1
        } else {
            hash[num]++
        }
    }
    const result = []
    
    
    const sorted = Object.entries(hash).sort((a, b) => {
        if(a[1] > b[1]) return 1
        if(a[1] < b[1]) return -1
        if(parseInt(a[0]) > parseInt(b[0])) return -1
    }).map(item => new Array(item[1]).fill(parseInt(item[0]))).forEach(item => result.push(...item))
    
    return result
  };

  var frequencySort = function(nums) {
    const frequencyMap = new Map();

    nums.forEach((value) => {
        if(frequencyMap.has(value)) {
            frequencyMap.set(value, frequencyMap.get(value)+1);
        } else {
            frequencyMap.set(value, 1);
        }
    })

    return nums.sort((a, b) => {
        if(frequencyMap.get(a) === frequencyMap.get(b)) {
            return b - a;
        } else {
            return frequencyMap.get(a) - frequencyMap.get(b);
        }
    })
  }

  var frequencySort = function(nums) {
    const map = {}
    for (const num of nums) {
        map[num] = 1 + (map[num] || 0)
    }
    
    return nums.sort((a, b) => map[a] - map[b] || b - a)
  };

  function sortByFrequency(arr){
    const frequencyMap = arr.reduce((obj, item) => {
        obj[item] = (obj[item] || 0) + 1
        return obj;
    }, {});

    return Object.entries(frequencyMap).sort((a,b) => b[1] - a[1]).flatMap(arr => Array(arr[1]).fill(arr[0]));
  }

  function SortElemByFrequencyObj(arr) {
    const frequency = arr.reduce((obj, curr) => {
        obj[curr] = (obj[curr] || 0) + 1;
        return obj;
    }, {});
    return Object.entries(frequency).sort((a, b) => b[1] - a[1]).flatMap(item => Array(item[1]).fill(item[0]))
}