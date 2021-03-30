// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]


var intersection = function (nums1, nums2) {
    return [...new Set(nums1.filter(el=>nums2.includes(el)))]
};

// FAST
var intersection = function(a, b) {    
    let res = new Set()
    for(let elem of a) {
        if(b.includes(elem)) res.add(elem)
    }
    return [...res]
};

var intersection = function(a, b) {
    const intersections = new Set();
    for (let i = 0; i < a.length; i++) {
        if (b.includes(a[i]) && !intersections.has(a[i])) {
            intersections.add(a[i]);
        }
    }
    return Array.from(intersections);
}

var intersection = function(nums1, nums2) {
    let inter = [];
    
    for(let i = 0; i< nums1.length; i++){
        if(nums2.indexOf(nums1[i]) > -1 && inter.indexOf(nums1[i]) == -1){
            inter.push(nums1[i]);
          
        }
        
    }
    return inter;  
}


/**
 * finds the intersection of 
 * two arrays in a simple fashion.
 * 
 * see : http://stackoverflow.com/a/1885660
 * 
 * PARAMS
 *  a - first array, must already be sorted
 *  b - second array, must already be sorted
 *
 * NOTES
 *
 *  Should have O(n) operations, where n is 
 *    n = MIN(a.length(), b.length())
 * 
 * Note that if the input arrays contain multiple identical
 * intersecting elements that they will be returned. This
 * means that the result set is not guaranteed to contain
 * unique values. Given [1,3,3,4] and [1,2,3,3] the result
 * will be [1,3,3].
 *
 * This function relies on the arrays being sorted
 * before being called to find the intersection of
 * sets of values stored in them. It guards against
 * doing any extra work by basically sliding the
 * ordered values side by side in the same direction,
 * the sliding of one set or another being dependent
 * upon the equality of the two elements observed just
 * prior to the action. This method ensures that the
 * consistent amount of elements processed from each set
 * will be equal to the lesser of both array's lengths
 * summed with the quantity of observations for which
 * no intersection was found. The quantity of observations
 * will not exceed the greater of the lengths of the
 * input arrays.
 * 
 * When given two arrays with lengths of 1000 and 10,
 * this function will make at least 10 observations and
 * at most 1000 observations.
 * These first ten observations are immediately compared
 * and if they happen to all show the intersection of sets
 * then this function will return the intersecting set and
 * exit immediately. If the 9th observation should happen
 * to be made with one element not belonging to the
 * intersecting set then this element will be compared to
 * the remaining unknown elements of the other set until
 * it is observed that it has passed a point of that
 * ordered set where it would have intersected. i.e. 9
 * will be compared with 6, 7, and 10, at which point
 * it will be determined to belong outside of the
 * intersection and will be discarded. The 10th
 * element will then be compared to that same element (10). If
 * there is a match then the 10th element will be added to
 * the intersecting set and the function will return. If it
 * does not match then the process continues on.
 */
function intersect_safe(a, b)
{
  var ai=0, bi=0;
  var result = new Array();

  while( ai < a.length && bi < b.length )
  {
     if      (a[ai] < b[bi] ){ ai++; }
     else if (a[ai] > b[bi] ){ bi++; }
     else /* they're equal */
     {
       result.push(a[ai]);
       ai++;
       bi++;
     }
  }

  return result;
}