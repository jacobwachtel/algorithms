// Locating the first version of product build out of a series that is bad. 
// Each product after that also fails, and so on. 
// You have to find the first one in the series that fails quality inspection.


// This uses a different take on the Binary Search algorithm.
// Whereas a Binary is just looking for a number, this uses Bool to 
// determine if the product at that index is bad or not. 
var solution = function(isBadVersion) { 
    
    // Psudo code:
    // 1. returning a boolean for each isBadVersion(version)
    // 2. Binary search, with a twist
    // 3. Finding the earliest bad version, returning that number
    // 4. Use BS to find a bad version, check the one before if bad, check the one after if good.
    
    return function(n) {
        let start = 0;
        let end = n
        let mid;
        
        while(start <= end){
            mid = Math.floor((start + end)/2)
            
            if (isBadVersion(mid)) { //true, move left | false, move right
                // This section reduces midpoint down till the bad version is found...As long as midpoint is greater than zero.
                // if midpoint is found through !isBadVersion(mid), then return mid, else move on (or mid is just === 1).
                if((mid -1 > 0 && !isBadVersion(mid-1)) || mid === 1) { 
                    return mid
                }
                else {
                    end = mid -1
                }
            } else {
                start = mid + 1
            }            
        }
        return -1
    };
};

