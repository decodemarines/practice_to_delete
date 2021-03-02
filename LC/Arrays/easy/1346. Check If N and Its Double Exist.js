// Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).

// More formally check if there exists two indices i and j such that :

// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]
 

// Example 1:

// Input: arr = [10,2,5,3]
// Output: true
// Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.


// https://medium.com/steve-cruz/leetcode-check-if-n-and-its-double-exist-60de132b0c85

var checkIfExist = function(arr) {
    for(let i = 0; i < arr.length; i ++) {  
      for(let j = 0; j < arr.length; j ++) {  
        if(arr[j] === 2 * arr[i] && i!== j) {
          return true
        }
      }
    }
  return false
};
// [-2,0,10,-19,4,6,-8]


var checkIfExist = function(arr) {
    let s = new Map();
    for(let i = 0; i< arr.length; i++){
        if(s.has(arr[i]/2) || s.has(arr[i]*2)){return true;}
        s.set(arr[i], i);
    }return false;
};

var checkIfExist = function(arr) {
    for(let i=0; i<arr.length; i++){
      for(let j=i+1; j<arr.length; j++){
        if(arr[i] === 2 * arr[j] || arr[j] === 2 * arr[i]) {
          return true
        }
      }
    }
  return false;
};


// Solution 1 - Array as cache

var checkIfExist = function (A) {
	const arr = [];

	for (i = 0; i < A.length; i++) {
		if (arr.indexOf(A[i] * 2) != -1 ||
			arr.indexOf(A[i] / 2) != -1)
			return true;                               // check prev - 1/2*,2* as it is not sorted

		arr.push(A[i]);
	}

	return false;
};
// Solution 2 - Set as cache

var checkIfExist = function (A) {
	let set = new Set();

	for (let i = 0; i < A.length; i++) {
		if (set.has(A[i] * 2) ||
			set.has(A[i] / 2))
			return true;                               // check prev - 1/2*,2* as it is not sorted

		set.add(A[i]);
	}
	return false;
};
// Solution 3 - Object {} as cache

var checkIfExist = function (A) {
	let obj = {};

	for (let i = 0; i < A.length; i++) {
		if (obj[A[i] / 2] ||
			obj[A[i] * 2])
			return true;                               // check prev - 1/2*,2* as it is not sorted

		if (!obj[A[i]])
			obj[A[i]] = 1;
	}

	return false;
};
// Solution 4 - No cache

var checkIfExist = function (A) {

	for (let i = 0; i < A.length; i++) {

		const inew = A.indexOf(A[i] * 2);
		if (inew != -1 && inew != i)
			return true;                               // double exists & not same ele

	}
	return false;
};


var checkIfExist = function (arr){
    let newSet = new Set()
    for(let i=0;i<arr.length;i++){
        if(newSet.has(arr[i]/2) || newSet.has(arr[i]*2)){
            return true
        }else{
            newSet.add(arr[i])
        }
    }
      return false
}