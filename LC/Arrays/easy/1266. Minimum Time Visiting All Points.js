// On a 2D plane, there are n points with integer coordinates points[i] = [xi, yi]. Return the minimum time in seconds to visit all the points in the order given by points.

// You can move according to these rules:

// In 1 second, you can either:
// move vertically by one unit,
// move horizontally by one unit, or
// move diagonally sqrt(2) units (in other words, move one unit vertically then one unit horizontally in 1 second).
// You have to visit the points in the same order as they appear in the array.
// You are allowed to pass through points that appear later in the order, but these do not count as visits.

// Input: points = [[1,1],[3,4],[-1,0]]
// Output: 7
// Explanation: One optimal path is [1,1] -> [2,2] -> [3,3] -> [3,4] -> [2,3] -> [1,2] -> [0,1] -> [-1,0]   
// Time from [1,1] to [3,4] = 3 seconds 
// Time from [3,4] to [-1,0] = 4 seconds
// Total time = 7 seconds

var minTimeToVisitAllPoints = function(a) {
    let c=0
    for(let i=0;i<a.length-1;i++){
        let [x1,y1]=a[i]
        let [x2,y2]=a[i+1]
        c+=Math.max(
         Math.abs(x1-x2),
         Math.abs(y1-y2)   
        )
    }
    return c
};


// FAST
var minTimeToVisitAllPoints = function(points) {
    let result = 0;
    for(let i=0; i<points.length-1; i++) {
        const hor = Math.abs(points[i+1][0]-points[i][0])
        const ver = Math.abs(points[i+1][1]-points[i][1])
        result += Math.min(hor, ver) + Math.abs(hor-ver);
    }
    return result;
};

var minTimeToVisitAllPoints = function(points) {
    let ans = 0;
    
    for (let i = 1; i < points.length; i++) {
        let current = points[i];
        let prev = points[i - 1];
        
        ans += Math.max(Math.abs(current[0] - prev[0]), Math.abs(current[1] - prev[1]));
    }
    
    return ans;
};