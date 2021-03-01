// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, calculate the Hamming distance.

// Note:
// 0 ≤ x, y < 231.

// Example:

// Input: x = 1, y = 4

// Output: 2

// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑

// The above arrows point to positions where the corresponding bits are different.

var hammingDistance = function (x, y) {
    
  let res=x^y
  let i=0
  while(res!=0){
      if(res & 1==1){
          i++
      }
      res=res>>1
  }
  return i  
};

var hammingDistance = function (x, y) {
    
    let res=0
    for(let i=0;i<32;i++){
        if(x&(1<<i)^(y&(1<<i))!==0) res++
    }
        return res
   
};

const hammingDistance = function (x, y) {
    let d = 0
    let h = x ^ y
    while (h > 0) {
      d++
      h &= h - 1
    }
    return d
}
  
const hammingDistance = function (x, y) {
    let n = x ^ y
    n = n - ((n >> 1) & 0x55555555)
    n = (n & 0x33333333) + ((n >> 2) & 0x33333333)
    return (((n + (n >> 4)) & 0xf0f0f0f) * 0x1010101) >> 24
  }

  
  const hammingDistance = function (x, y) {
    let n = x ^ y
    let tmp = n - ((n >> 1) & 033333333333) - ((n >> 2) & 011111111111);
    return ((tmp + (tmp >> 3)) & 030707070707) % 63;
  }