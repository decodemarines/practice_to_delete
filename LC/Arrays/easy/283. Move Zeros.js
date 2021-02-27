
// void moveZeroes(vector<int>& nums) {
//     int pos = 0;
//     for (auto& num : nums) {
//         if (num) {
//             swap(nums[pos++], num);
//         }
//     }
// }

// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// a; // => 2
// b; // => 1

//  ставим два поинтера на нуле двигаем правым если он нуль пропускаем и увеличиваем если не нуль 
// то свап с левым и каждый увеличиваем
var moveZeroes = function(nums) {
    if(nums.length==0 || nums.length==1) return
    let r=0,l=0, t
    while(r<nums.length){
    if(nums[r]==0) {
        r++
    } else{
      t=nums[l]
        nums[l]=nums[r]
        nums[r]=t
      r++     
      l++
    }
    }
    
};

var moveZeroes = function(nums) {
    let с = 0;
    
  
    if (nums.length) {
      for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
          const tmp = nums[с];
          nums[с++] = nums[i];
          nums[i] = tmp;
        }
      }
    }
  };