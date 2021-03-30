// Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

// Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.  Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.

 

// Example 1:

// Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
// Output: [2,2,2,1,4,3,3,9,6,7,19]


var relativeSortArray = function(a, b) {  
    const m = new Map()

    arr2.map((el,i) => m.set(el,i))
    console.log(m)

    return arr1.sort((a, b) => {
        if (m.has(a) || m.has(b)) {
            return m.get(a) - m.get(b)
        } else {
            return a - b
        }
    })
}


var relativeSortArray = function(arr1, arr2) {
    // let result = [];
    // arr1.sort((a, b) => a - b);
    // for(let i = 0; i < arr2.length; i++){
    //     for(let j = 0; j < arr1.length; j++){
    //         if(arr2[i] === arr1[j]){
    //             result.push(arr2[i]);
    //         }
    //     }
    // }
    // for(let num of arr1){
    //     if(arr2.indexOf(num) < 0){
    //         result.push(num);
    //     }
    // }
    // return result;
    
    // let temp = {};
    // let result = [];
    // arr1.sort((a, b) => a - b);
    // for(let num of arr1){
    //     if(!temp[num]){
    //         temp[num] = 1;
    //     }else{
    //         temp[num]++;
    //     }
    // }
    // for(let num of arr2){
    //     while(temp[num]){
    //         result.push(num);
    //         temp[num]--;
    //     }
    // }
    // for(let num of arr1){
    //     while(temp[num]){
    //         result.push(num);
    //         temp[num]--;
    //     }
    // }
    // return result;
    
    // let temp = {};
    // let result = [];
    // arr1.sort((a, b) => a - b);
    // for(let num of arr1){
    //     if(!temp[num]){
    //         temp[num] = 1;
    //     }else{
    //         temp[num]++;
    //     }
    // }
    // for(let num of arr2){
    //     while(temp[num]){
    //         result.push(num);
    //         temp[num]--;
    //     }
    // }
    // for(let num of arr1){
    //     while(temp[num]){
    //         result.push(num);
    //         temp[num]--;
    //     }
    // }
    // return result;
    
    
    // const map = {};
    // for (const n of arr1) {
    //     if (!map[n]) map[n] = 1;
    //     else ++map[n];
    // }
    // const result = [];
    // for (const n of arr2) {
    //     while (map[n]) {
    //         result.push(n);
    //         --map[n];
    //     }
    //     delete map[n];
    // }
    // for (const key of Object.keys(map)) {
    //     while (map[key]--) result.push(+key);
    // }
    // return result;
    
      const lookup = new Map();
  const N = arr2.length;
  arr2.forEach((a, i) => {
    lookup.set(a, i);
  });
  return arr1.sort((a, b) => {
    a = lookup.has(a) ? lookup.get(a) : N + a;
    b = lookup.has(b) ? lookup.get(b) : N + b;
    return a - b;
  });
};

var relativeSortArray = function(arr1, arr2) {
    const buckets = initializeBuckets(arr1);    
    let ans = [];
    
    for(let x of arr2) {
        addToArrayNTimes(x, buckets[x], ans)
        buckets[x] = 0;
    }
    
    for(let num in buckets) {
        if(num) {
            addToArrayNTimes(num, buckets[num], ans)
        }
        
    }
    
    return ans;
};


var relativeSortArray = function(arr1, arr2) {
    // let result = [];
    // arr1.sort((a, b) => a - b);
    // for(let i = 0; i < arr2.length; i++){
    //     for(let j = 0; j < arr1.length; j++){
    //         if(arr2[i] === arr1[j]){
    //             result.push(arr2[i]);
    //         }
    //     }
    // }
    // for(let num of arr1){
    //     if(arr2.indexOf(num) < 0){
    //         result.push(num);
    //     }
    // }
    // return result;
    
    // let temp = {};
    // let result = [];
    // arr1.sort((a, b) => a - b);
    // for(let num of arr1){
    //     if(!temp[num]){
    //         temp[num] = 1;
    //     }else{
    //         temp[num]++;
    //     }
    // }
    // for(let num of arr2){
    //     while(temp[num]){
    //         result.push(num);
    //         temp[num]--;
    //     }
    // }
    // for(let num of arr1){
    //     while(temp[num]){
    //         result.push(num);
    //         temp[num]--;
    //     }
    // }
    // return result;
    
    // let temp = {};
    // let result = [];
    // arr1.sort((a, b) => a - b);
    // for(let num of arr1){
    //     if(!temp[num]){
    //         temp[num] = 1;
    //     }else{
    //         temp[num]++;
    //     }
    // }
    // for(let num of arr2){
    //     while(temp[num]){
    //         result.push(num);
    //         temp[num]--;
    //     }
    // }
    // for(let num of arr1){
    //     while(temp[num]){
    //         result.push(num);
    //         temp[num]--;
    //     }
    // }
    // return result;
    
    
    const map = {};
    for (const n of arr1) {
        if (!map[n]) map[n] = 1;
        else ++map[n];
    }
    const result = [];
    for (const n of arr2) {
        while (map[n]) {
            result.push(n);
            --map[n];
        }
        delete map[n];
    }
    for (const key of Object.keys(map)) {
        while (map[key]--){
            result.push(+key);
        }
    }
    return result;
    
    // const lookup = new Map();
    // const N = arr2.length;
    // arr2.forEach((a, i) => {
    //     lookup.set(a, i);
    // });
    // return arr1.sort((a, b) => {
    //     a = lookup.has(a) ? lookup.get(a) : N + a;
    //     b = lookup.has(b) ? lookup.get(b) : N + b;
    //     return a - b;
    // });
};


var relativeSortArray = function (arr1, arr2) {
    let sol = [];
    for (let num of arr2) {
      let temp = arr1.filter((a) => a === num);
      sol = [...sol, ...temp];
      console.log(sol);
      arr1 = arr1.filter((a) => a !== num);
      console.log(arr1);
    }
    arr1.sort((a, b) => parseInt(a) - parseInt(b));
    sol = [...sol, ...arr1];
    return sol;
  };