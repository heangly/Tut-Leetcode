/**
 * var missingNumber = function(nums) {
    const seen = new Set()
    for(const num of nums){
        seen.add(num)
    }
    for(let i = 0; i <= nums.length; i++){
        if(!seen.has(i)) return i
    }
    return -1
};
 * 
 * 
 * 
 * 
 *  We know there is ONLY ONE missing number in the array
 *  So, if we sort both array and put them side by side we can clearly see what number is missing
 *  In addition, if we sum or compress each array into single value
 *  We can see the different, which is the missing number
 *
 *  For actual implementation, we dont have to sort anything, we can simply sum element each array
 *  Sorting here is only for visualization purpose
 *
 *  Or you can think that element in both arrays cancel out each other if they are the same element
 *
 *    eg   expectedArray = [0, 1, 2, 3, 4, 5]         = 15
 *         actualArray =   [0, 1, 2,    4, 5]         = 13
 *                                                    ----
 *                                          substract = 2
 */

// Time: O(N) | Space: O(1)
const missingNumber = (nums: number[]) => {
  let actualSum = nums.reduce((acc, curr) => acc + curr, 0)
  let expectedSum = 0
  for (let i = 0; i <= nums.length; i++) {
    expectedSum += i
  }
  return expectedSum - actualSum
}

console.log(missingNumber([3, 0, 1]))
