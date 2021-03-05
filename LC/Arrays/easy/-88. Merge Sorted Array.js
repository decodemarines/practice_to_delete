// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.

 

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]

// https://www.youtube.com/watch?v=LXq6wnkkeNA&list=PL5b07qlmA3P6UWAVm6rnJXpWAB3Vnj59B&index=26
var merge = function(A, m, B, n) {
    while(m>0 && n>0){
        if(A[m-1]>B[n-1]){
            A[m+n-1]=A[m-1]
            m--
        }else{
            A[m+n-1]=B[n-1]
            n--
        }
    }
    while(n>0){
        A[n-1]=B[n-1]
        n--
    }

};


const merge = (nums1, m, nums2, n) => {
    const aux = (arr1 = [], arr2 = [], bound, counter1, counter2) => {
      if (counter2 >= nums2.length) {
        return
      }
      if ((arr1[counter1] <= arr2[counter2]) && (counter1 <= bound)) {
        return aux(arr1, arr2, bound, counter1 + 1, counter2)
      }
      if (counter1 <= bound) {
        arr1.splice(counter1, 0, arr2[counter2])
        arr1.splice(arr1.length - 1, 1)
        return aux(arr1, arr2, bound + 1, counter1, counter2 + 1)
      }
      arr1.splice(counter1, 1, arr2[counter2])
      return aux(arr1, arr2, bound, counter1 + 1, counter2 + 1)
    }
    aux(nums1, nums2, m - 1, 0, 0)
  }