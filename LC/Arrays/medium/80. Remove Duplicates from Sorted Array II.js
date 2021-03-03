// Given a sorted array nums, remove the duplicates in-place such that duplicates appeared at most twice and return the new length.

// Do not allocate extra space for another array; you must do this by modifying the input array in-place with O(1) extra memory.

// Clarification:

// Confused why the returned value is an integer, but your answer is an array?

// Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller.

// Internally you can think of this:

// // nums is passed in by reference. (i.e., without making a copy)
// int len = removeDuplicates(nums);

// // any modification to nums in your function would be known by the caller.
// // using the length returned by your function, it prints the first len elements.
// for (int i = 0; i < len; i++) {
//     print(nums[i]);
// }

var removeDuplicates = function(nums) {
    if(nums===null || nums.length==0) return 0 // faster without a check
       let l = 2
  for (let r = 2; r < nums.length; ++r) {
   
    if (nums[l-2] !== nums[r] ) {
      
      nums[l++] = nums[r]
    }
  }
  return l
};


var removeDuplicates = function(nums) {
    let count = 0;
    let prev = nums[0]
    let i = 1;
    while(i < nums.length){
        if(prev === nums[i]) {
            count += 1;
        } else {
           prev = nums[i]; 
            count = 0;
        }  
        if(count > 1) {
            nums.splice(i,1);
            continue;
        }
        i++;
    }
    return nums.length;
};


var removeDuplicates = function(nums) {
    if(nums.length <= 2){
        return nums.length
    }

    let slow = 2
    for(let fast = 2; fast < nums.length; fast++){

        if( nums[slow - 2] !== nums[fast] ){
            nums[slow] = nums[fast]
            slow += 1
        }

    }

    return slow
};