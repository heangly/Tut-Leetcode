// Time: O(N) | Space: O(1)
const maxSubArray = (nums: number[]) => {
  let maxSum = nums[0]
  let runningSum = nums[0]

  for (let i = 1; i < nums.length; i++) {
    const currNum = nums[i]
    const sum = runningSum + currNum
    // if we are at this element, we wanna check if it makes sense to take or add the value we have accumulated. if the value we have accumulated + current value is smaller than current value, we should just take the current value because we want to get the maxizimum value
    if (sum > currNum) {
      runningSum = sum
    } else {
      runningSum = currNum
    }
    maxSum = Math.max(maxSum, runningSum)
  }

  return maxSum
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
