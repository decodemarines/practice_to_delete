// Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

// You may return any answer array that satisfies this condition.

 

// Example 1:

// Input: [3,1,2,4]
// Output: [2,4,3,1]
// The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.


var sortArrayByParity = function(A) {
    let res=[]
    A.map(i=>i%2?res.push(i):res.unshift(i))
    return res
};


// FASTER

var sortArrayByParity = function (A) {
    
    let i = 0;
    let j = A.length - 1;

    while (i < j) {
        if (A[i] % 2 !== 0 && A[j] % 2 === 0) {
            let temp = A[i];
            A[i] = A[j];
            A[j] = temp;
        }

        if (A[i] % 2 !== 0) {
            j--;
        }

        if (A[i] % 2 === 0) {
            i++;
        }
    }
}
    

function sortByParity_I1(A) {
    const odd = [], even = [];
    for (const a of A) {
        if (a % 2 === 0) { even.push(a) }
        else { odd.push(a) }
    }
    return [...even, ...odd];
}
const sortByParity_F2 = A => A.reduce((acc, x) => x % 2 === 0 ? [x, ...acc] : [...acc, x], []);
const sortByParity_F1 = A => A.reduce((acc, x) => {
        if (x % 2 === 0) { acc.unshift(x) }
        else { acc.push(x) }
        return acc;
}, []);
    
// see Banchmark: https://codereview.stackexchange.com/questions/217944/sort-array-by-parity


function sortByParity_I2(A) {
    const res = new Array(A.length);
    var top = res.length - 1, bot = 0;
    for (const a of A) { res[a % 2 ? top-- : bot ++] = a }
    return res;
}