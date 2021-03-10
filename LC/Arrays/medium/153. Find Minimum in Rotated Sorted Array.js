// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums, return the minimum element of this array.

 

// Example 1:

// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.
// Example 2:

// Input: nums = [4,5,6,7,0,1,2]
// Output: 0
// Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
// Example 3:

// Input: nums = [11,13,15,17]
// Output: 11
// Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 
 

// Constraints:

// n == nums.length
// 1 <= n <= 5000
// -5000 <= nums[i] <= 5000
// All the integers of nums are unique.
// nums is sorted and rotated between 1 and n times.

//  Если перебирать каждый елемент то O(n) но задача добиться  log n


// class Solution:
//     def findMin(self, nums):
//         """
//         :type nums: List[int]
//         :rtype: int
//         """
//         # set left and right bounds
//         left, right = 0, len(nums)-1
                
//         # left and right both converge to the minimum index;
//         # DO NOT use left <= right because that would loop forever
//         while left < right:
//             # find the middle value between the left and right bounds (their average);
// 			# can equivalently do: mid = left + (right - left) // 2,
// 			# if we are concerned left + right would cause overflow (which would occur
// 			# if we are searching a massive array using a language like Java or C that has
// 			# fixed size integer types)
//             mid = (left + right) // 2
                        
//             # the main idea for our checks is to converge the left and right bounds on the start
//             # of the pivot, and never disqualify the index for a possible minimum value.

//             # in normal binary search, we have a target to match exactly,
//             # and would have a specific branch for if nums[mid] == target.
//             # we do not have a specific target here, so we just have simple if/else.
                        
//             if nums[mid] > nums[right]:
//                 # we KNOW the pivot must be to the right of the middle:
//                 # if nums[mid] > nums[right], we KNOW that the
//                 # pivot/minimum value must have occurred somewhere to the right
//                 # of mid, which is why the values wrapped around and became smaller.

//                 # example:  [3,4,5,6,7,8,9,1,2] 
//                 # in the first iteration, when we start with mid index = 4, right index = 9.
//                 # if nums[mid] > nums[right], we know that at some point to the right of mid,
//                 # the pivot must have occurred, which is why the values wrapped around
//                 # so that nums[right] is less then nums[mid]

//                 # we know that the number at mid is greater than at least
//                 # one number to the right, so we can use mid + 1 and
//                 # never consider mid again; we know there is at least
//                 # one value smaller than it on the right
//                 left = mid + 1

//             else:
//                 # here, nums[mid] <= nums[right]:
//                 # we KNOW the pivot must be at mid or to the left of mid:
//                 # if nums[mid] <= nums[right], we KNOW that the pivot was not encountered
//                 # to the right of middle, because that means the values would wrap around
//                 # and become smaller (which is caught in the above if statement).
//                 # this leaves the possible pivot point to be at index <= mid.
                            
//                 # example: [8,9,1,2,3,4,5,6,7]
//                 # in the first iteration, when we start with mid index = 4, right index = 9.
//                 # if nums[mid] <= nums[right], we know the numbers continued increasing to
//                 # the right of mid, so they never reached the pivot and wrapped around.
//                 # therefore, we know the pivot must be at index <= mid.

//                 # we know that nums[mid] <= nums[right].
//                 # therefore, we know it is possible for the mid index to store a smaller
//                 # value than at least one other index in the list (at right), so we do
//                 # not discard it by doing right = mid - 1. it still might have the minimum value.
//                 right = mid
                
//         # at this point, left and right converge to a single index (for minimum value) since
//         # our if/else forces the bounds of left/right to shrink each iteration:

//         # when left bound increases, it does not disqualify a value
//         # that could be smaller than something else (we know nums[mid] > nums[right],
//         # so nums[right] wins and we ignore mid and everything to the left of mid).

//         # when right bound decreases, it also does not disqualify a
//         # value that could be smaller than something else (we know nums[mid] <= nums[right],
//         # so nums[mid] wins and we keep it for now).

//         # so we shrink the left/right bounds to one value,
//         # without ever disqualifying a possible minimum
//         return nums[left]
 

const findMin = function (nums) {
    let low = 0,
      high = nums.length - 1
    // loop invariant: 1. low < high
    //                 2. mid != high and thus A[mid] != A[high] (no duplicate exists)
    //                 3. minimum is between [low, high]
    // The proof that the loop will exit: after each iteration either the 'high' decreases
    // or the 'low' increases, so the interval [low, high] will always shrink.
    while (low < high) {
      const mid = low + ((high - low) >> 1)
      if (nums[mid] <= nums[high]) high = mid
      else if (nums[mid] > nums[high]) low = mid + 1
    }
  
    return nums[low]
  }

 // https://zxi.mytechroad.com/blog/divide-and-conquer/leetcode-153-find-minimum-in-rotated-sorted-array/


// Time complexity:

// T(n) = O(1) + T(n/2) = O(logn)


// Author: Huahua
// class Solution {
// public:
//     int findMin(vector<int> &num) {
//         return findMin(num, 0, num.size()-1);
//     }
    
// private:
//     int findMin(const vector<int>& num, int l, int r)
//     {
//         // Only 1 or 2 elements
//         if (l+1 >= r) return min(num[l], num[r]);
        
//         // Sorted
//         if (num[l] < num[r]) return num[l];
        
//         int mid = l + (r-l)/2; 
        
//         return min(findMin(num, l, mid-1), 
//                    findMin(num, mid, r));
//     }
// };

https://www.programcreek.com/2014/02/leetcode-find-minimum-in-rotated-sorted-array/

https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/discuss/158940/Beat-100%3A-Very-Simple-(Python)-Very-Detailed-Explanation

// *** WE CANNOT CHECK FOR UNSORTED WITH START AND MID
// - Even if nums[start] > nums[mid], numbers AFTER mid may STILL be a DECREASING SEQUENCE
// - If we move End to Mid, we prematurely elimiate the RIGHT half, even tho Min may live on that side

// *** WE CAN SAFELY CHECK FOR UNSORTED WITH MID AND END
// - If nums[mid] > nums[end], we KNOW the pivot MUST be somewhere to the RIGHT of MID
// EX) [3,4,5,6,7,8,9,1,2] 
// - 7 > 2, we know pivot must be to the RIGHT of 7, because the values wrapped around making nums[right] SMALLER than nums[mid]


// Pivot Point Approach)
// 1) If nums[start] < nums[end], the entire arr sorted, return nums[0]

// Else, we know the array was rotated
// - Since the array was sorted, then rotated, a portion of the array will remain sorted
// - The min MUST be in the UNSORTED portion of the array, because it is ALWAYS ASCENDING leading up to the MIN

// PIVOT IDX OCCURS ONLY ONCE WHEN:
// - EITHER 
// a. nums[i] > nums[i+1]  OR  
// b. nums[i] < nums[i-1]

// Binary Search)
// - Start and End will converge towards the minimum value
// - While (Start < End), because a minimum is GARUNTEED to be in the array. Exits at Start == End which MUST be our answer

// 2) Each iteration, calculate Mid idx to determine whether we are at the min
//     - Only one number where PREV is LARGER, or NEXT is SMALLER
//     - If number BEFORE mid is GREATER than mid, mid is at min        ex. [4,5,1,2,3]
//     - IF number NEXT mid is SMALLER than mid, next is the min        ex. [2,1]
    
// 2) Determine which side to search on
//     - If nums[start] LESS than nums[mid], it must be sorted from start through mid. Search right side
//     - Else nums[start] GREATER/EQUAL to numd[mid], left side is unsorted. Search left side
//     - We can EXCLUDE mid in both cases, because we checked if mid is the min beforehand

// EX) 
//         S     M     E
// nums = [4,5,6,7,0,1,2]    
// nums[mid] > nums[mid+1] => 7 > 0 => nums[mid+1] must be the min

//         S E
// nums = [2,1]
//         M
// nums[mid] > nums[mid+1] => 2 > 1 => nums[mid+1] must be the min
// */
// Pivot Idx Approach. Determine if Mid is the Min, if not then search in unsorted side

var findMin = function(nums) { 
    // searh in unsorted side in order to find pivotIdx
    // it is always ascending up till pivotIdx
    // compare mid with end to determine if sorted from [mid ... end]   (sorted)
    // if yes, move end to mid [start ... mid]  (unsorted)
    
    // bsearch will exi when s === e, then return either
    let start = 0;
    let end = nums.length - 1;
    
    while (start < end) {
        let mid = start + Math.floor((end - start) / 2);
        
        if (nums[mid] < nums[end]) {        // right half sorted
            end = mid;
        } else {                // nums[mid] >= nums[end]
            start = mid + 1;            
        }
    }
    return nums[start];
}


// var findMin = function(nums) { 
//     let start = 0;
//     let end = nums.length - 1;
    
//     if (nums[start] < nums[end]) return nums[start];
    
//     while (start < end) {
//         let mid = start + Math.floor((end - start) / 2);
        
//         // Check ahead     
//         if (mid + 1 <= nums.length && nums[mid] > nums[mid + 1]) {
//             return nums[mid + 1];
//         }
        
//         // Check before
//         if (mid - 1 >= 0 && nums[mid] < nums[mid - 1]) {
//             return nums[mid];
//         }
        
//         // Search in UNSORTED portion. We can compare Start and Mid, because we check Mid beforehand.
//         if (nums[start] < nums[mid]) {
//             start = mid + 1;
//         }
//         // Else, nums[start] >= nums[mid]
//         else {
//             end = mid;
//         }
//         // if (nums[mid] > nums[end]) start = mid + 1;
//         // else end = mid;
//     }
    
//     return nums[start];
// }



// ==========================================================================
// Pivot Idx Approach. No need to check Mid each time, Left and Right will converge towards the Min at each iteration.
var findMin = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    
    while (start < end) {
        let mid = start + Math.floor((end - start ) / 2);
        
        // Right half unsorted. Discard Left
        if (nums[mid] >= nums[end]) {
            start = mid + 1;
        }
        // nums[mid] < nums[end], Right half sorted, discard right
        else {
            end = mid;
        }
    }
    
    return nums[end];
}




// ================================================================================
// Binary Search <= Approach
// Keep track of Min. Use nums[0] as comparison to decide which side to search. 
// var findMin = function(nums) {    
//     let start = 0;
//     let end = nums.length - 1;
//     let min = Infinity;
    
//     let first = nums[start];
    
//     // Entire array is sorted, return START
//     if (nums[start] <= nums[end]) {
//         return nums[start];
//     }
    
//     while (start <= end) {    
//         let mid = start + Math.floor((end - start) / 2);            

//         // Update min
//         if (nums[mid] < min) {
//             min = nums[mid];
//         }
        
//         // We can exclude mid in both if else cases, since we already accounted for mid
//         // Left half is sorted, look at the right half   
//         if (first <= nums[mid]) {
//             start = mid + 1;
//         }
        
//         // nums[start] > nums[mid], Left half is UNSORTED, look left half
//         else {
//             end = mid - 1;
//         }
//     }
//     return min
// }



// =======================================================================
// var findMin = function(nums) {
//     if (!nums || nums.length === 0) return nums
    
//     let left = 0
//     let right = nums.length - 1
    
//     while (left < right) {
//         let mid = Math.floor(left + (right - left) / 2)

//         // Right half is SORTED, search LEFT side
//         if (nums[mid] <= nums[right]) {
//             right = mid
            
//         // nums[mid] > nums[right]   Right half is UNSORTED
//         } else {
//             left = mid + 1
//         }
//     }

//     return nums[left]
// }