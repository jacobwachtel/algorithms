// Binary search - Array of Integers, sorted, find the index of a target value given "nums" array.



var search = function(nums, target) {

    // Declared a starting and endind variable to start at first index and "end" at last index of a given array.
    // Also declared a midpoint that I will specify within the loop.
    let start = 0;
    let end = nums.length -1;
    let mid;
    // While loop that runs until the target value is found or until loop ends, in which case it returns -1.
    while(start <= end){
        
        // Halfway point in the array
        let mid = Math.floor((start + end) / 2)
     
        // If the target is indeed the midpoint, return the midpoint index
        if(nums[mid] === target){
            return mid
        }
        // If the target is greater than the midpoint, then the midpoint is the new start + 1 because we already know midpoint is not the target.
        else if(nums[mid] < target){
            start = mid + 1;
        }
        // If the target is less than the midpoint, then the midpoint is the new end - 1 because we already know midpoint is not the target.
        else if (nums[mid] > target) {
            end = mid - 1
        }
    }
    // If the target is not found, return -1.
    return -1
};

let arr = [1,2,3,4,5,6,7,8,9,10]
search(arr, 9)