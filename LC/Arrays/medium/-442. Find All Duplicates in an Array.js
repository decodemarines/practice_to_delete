// https://www.youtube.com/watch?v=0SEOwGZR92Y

const findDuplicates = function (nums) {
    const result = []
    for (const x of nums) {
      const index = Math.abs(x) - 1
      if (nums[index] < 0) {
        result.push(Math.abs(x))
      } else {
        nums[index] *= -1
      }
    }
    return result
}
  
const findDuplicates = function(nums) {
  if (nums === null || nums.length <= 1) {
    return [];
  }

  let dup = [];
  for (let i = 0, n = nums.length; i < n; i++) {
    let next = Math.abs(nums[i]);
    nums[next - 1] < 0 ? dup.push(next) : (nums[next - 1] = -nums[next - 1]);
  }

  return dup;
};




const findDuplicates = function(nums) {
  const res = []
  for(let i = 0, len = nums.length; i < len; i++) {
    const idx = Math.abs(nums[i]) - 1
    if(nums[idx] < 0) res.push(idx + 1)
    nums[idx] = -nums[idx]
  }
  return res;
};

var findDuplicates = function(nums) {
  const res = [];
   for(let n of nums){
       num = Math.abs(n);
       const indexToChange = num - 1;
       if(nums[indexToChange] < 0) {
           res.push(num);
       } else {
          nums[indexToChange] *= -1;
       }
   }
  return res;
  
};

var findDuplicates = function(nums) {
  let arr = []
  for (let i = 0; i < nums.length; i++) {
      let index = Math.abs(nums[i]) - 1
      if (nums[index] > 0) {
          nums[index] *= -1
      } else {
          arr.push(index + 1)
      }
  }
  return arr
};