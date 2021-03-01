const hammingWeight = function(n) {
    let str = (n >>> 0).toString(2)
    let count = 0
    for(let i = 0; i < str.length; i++) {
        if(str.charAt(i) === '1') {
            count += 1
        }
    }
    return count
};

var hammingWeight = function(n) {
    let count=0
    while(n!==0){ 
        count++
        n=n&(n-1)
        
    }
    return count
};

const hammingWeight = function(n) {
    let str = (n >>> 0).toString(2)
    let count = 0
    for(let i = 0; i < str.length; i++) {
        if(str.charAt(i) === '1') {
            count += 1
        }
    }
    return count
};