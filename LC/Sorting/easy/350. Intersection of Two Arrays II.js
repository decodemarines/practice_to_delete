var intersect = function(nums1, nums2) {
    let res = []
     nums2.map((_,i)=>{
         if (nums1.includes(nums2[i])){
              res.push(nums2[i])
              nums1.splice(nums1.indexOf(nums2[i]), 1)
         }
     })
    return res
  };

  var intersect = function(nums1, nums2) {
    const counter = {};
    const res = [];
    
    nums1.map((num) => {
      if (!counter[num]) {
        counter[num] = 0
      };
      counter[num]++;
    });
    
    nums2.map((num) => {
      if (counter[num] > 0) {
        counter[num]--;
        res.push(num);
      }
    });
    return res;
  };
  
  
  // var intersect = function(nums1, nums2) {
  //   const counter = {};
  //   nums1.forEach((num) => {
  //     if (!counter[num]) counter[num] = 0;
  //     counter[num]++;
  //   });
  //   const res = [];
  //   nums2.forEach((num) => {
  //     if (counter[num] > 0) {
  //       counter[num]--;
  //       res.push(num);
  //     }
  //   });
  //   return res;
  // };
  
  
  
  
  // var intersect = function(nums1, nums2) {
  //       const count = {};
      
  //     for (let i = 0; i < nums1.length; i++) {
  //         const curr = nums1[i];
  //         if (count[curr] == null) {
  //             count[curr] = 1;
  //         } else {
  //             count[curr]++;
  //         }
  //     }
      
      
  //     const result = [];
  
  //     for (let i = 0; i < nums2.length; i++) {
  //         const curr = nums2[i];
  //         if (count[curr] > 0) {
  //             result.push(curr);
  //             count[curr]--;
  //         }
  //     }
      
  //     return result;  
  // };

  var intersect = function(nums1, nums2) {
    let result = [];
    for(let i = 0; i < nums1.length; i++) {
          
        for (let j = 0; j < nums2.length; j++) {
            if(nums1[i] === nums2[j]) {
                result.push(nums1[i]);
                nums2.splice(j,1);
                break;
            }
        } 
        
    }
    return result;
  };

  var intersect = function(nums1, nums2) {
    //make map object
    var map = {};
    //nums1 insert '1' in value
    for(var i=0;i<nums1.length;i++){
        if(map[nums1[i]]==null)map[nums1[i]] = 1
        else map[nums1[i]]++;
    }
    
    var ans = [];
    for(var i=0;i<nums2.length;i++){
        if(map[nums2[i]] > 0){
            ans.push(nums2[i])
            map[nums2[i]]--;
        }
    }
    return ans;
};