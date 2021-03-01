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

const singleNumber = function(nums) {
    const hash = {};
    nums.forEach((el, idx) => {
      if (hash.hasOwnProperty(el)) {
        hash[el] += 1;
        delete hash[el];
      } else {
        hash[el] = 1;
      }
    });
    return Object.keys(hash).map(el => +el);
  };
  
  // another
  
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  const singleNumber = function(nums) {
    const s = new Set()
    for(let el of nums) {
      if(s.has(el)) s.delete(el)
      else s.add(el)
    }
    return Array.from(s)
  };
  
  // another
  
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  const singleNumber = function (nums) {
    const res = Array(2).fill(0)
    const x = nums.reduce((acc, v) => acc ^ v, 0)
    const partition = x & ~(x - 1)
    for (let i = 0; i < nums.length; i++) {
      if (partition & nums[i]) {
        res[1] ^= nums[i]
      } else {
        res[0] ^= nums[i]
      }
    }
    return res
  }