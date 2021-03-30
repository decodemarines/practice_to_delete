// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]


var sortedSquares = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    const result = new Array(nums.length);
    
    for (let i = nums.length - 1; i >= 0; i--) {
        const leftVal = Math.abs(nums[left]);
        const rightVal = Math.abs(nums[right]);

        if(leftVal > rightVal) {
            result[i] = leftVal * leftVal;
            left++;
        } else {
            result[i] = rightVal * rightVal;
            right--;
        }
    }
    return result;
};


var sortedSquares = function (nums) {
    // 平方計算
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        nums[i] = num ** 2;
    }

    // 插入排序
    for (let i = 1; i < nums.length; i++) {
        const temp = nums[i];
        let position = i;
        for (let j = i; j >= 0; j--) {
            if (temp < nums[j - 1]) {
                nums[j] = nums[j - 1];
                position = j - 1;
            }
        }
        nums[position] = temp;
    }
}

const sortedSquares = function (A) {
    const result = []
    let left = 0
    let right = A.length - 1
    while (left <= right) {
      const leftSquare = A[left] * A[left]
      const rightSquare = A[right] * A[right]
      if (leftSquare < rightSquare) {
        result.push(rightSquare)
        right -= 1
      } else {
        result.push(leftSquare)
        left += 1
      }
    }
    return result.reverse()
}
  
var sortedSquares = function(A) {
    let left = 0;
    let right = A.length-1;
    
    while(left <= right) {
        
        if(left == right) {
            A[left] = Math.pow(A[left], 2);
        } else {
            A[left] = Math.pow(A[left], 2);
            A[right] = Math.pow(A[right], 2);
        }
        
        left++;
        right--;
    }
        
    return A.sort((a,b) => a-b);
};

var sortedSquares = function(A) {
    const res = [];
    let i = 0;
    while (A[i] < 0) i++;
    let j = i - 1;
    while (j >= 0 || i < A.length) {
      if (i >= A.length || -A[j] <= A[i]) {
        res.push(A[j--] ** 2);
      } else {
        res.push(A[i++] ** 2);
      }
    }
    return res;
  };