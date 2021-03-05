// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [5,6]


// https://www.youtube.com/watch?v=jSfDPVIYe1s
// https://www.youtube.com/watch?v=Y5AkrdnUOxs
// https://www.youtube.com/watch?v=N6uiqEbF0o0&list=PL5b07qlmA3P6UWAVm6rnJXpWAB3Vnj59B&index=113


// https://www.youtube.com/watch?v=4-vQWOVRI98 !!!

var findDisappearedNumbers = function(nums) {
    for(let i = 0; i < nums.length; i++) {
   const idx = Math.abs(nums[i]) - 1
   nums[idx] = - Math.abs(nums[idx])
 }
 const a = []
 
  for(let i = 0; i < nums.length; i++) {
      if(nums[i]>0) {
          let numbers=i+1
      a.push(numbers)
      }
          
  }
 return a
   
};


var findDisappearedNumbers = function(nums) {
    let n=nums.length
     for(let i = 0; i < n; i++) {
  
         nums[(nums[i]-1)%n]+=n
   }
  
  const a = []
  
   for(let i = 0; i < n; i++) {
      
       if(nums[i]<=n)
           a.push(i+1)      
   }
  return a
    
};

const findDisappearedNumbers = (nums = []) => {
    for (let i = 0; i < nums.length; i++) {
      while (
        nums[i] !== nums[nums[i] - 1]
      ) {
        const temp = nums[i]
        const nextIndex = nums[i] - 1
        nums[i] = nums[nextIndex]
        nums[nextIndex] = temp
      }
    }
    return nums.reduce((acc, num, index) => {
      if (num !== index + 1) {
        acc.push(index + 1)
      }
      return acc
    }, [])
  }