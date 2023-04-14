const maxProduct = (nums: number[]): number => {
  let prevMax = nums[0]
  let prevMin = nums[0]
  let result = nums[0]

  for (let i = 1; i < nums.length; i++) {
    let currMax = Math.max(nums[i] * prevMax, nums[i], nums[i] * prevMin)
    let currMin = Math.min(nums[i] * prevMin, nums[i], nums[i] * prevMax)

    prevMax = currMax
    prevMin = currMin

    result = Math.max(currMax, result)
  }

  return result
}

console.log(maxProduct([2, 3, -2, 4]))
console.log(maxProduct([-2, 3, -4]))
