const maxProduct = (nums: number[]): number => {
  let maxSofar = nums[0]
  let minSofar = nums[0]
  let result = nums[0]

  for (let i = 1; i < nums.length; i++) {
    let currMax = Math.max(nums[i] * maxSofar, nums[i], nums[i] * minSofar)
    let currMin = Math.min(nums[i] * maxSofar, nums[i], nums[i] * minSofar)

    maxSofar = currMax
    minSofar = currMin

    result = Math.max(maxSofar, result)
  }

  return result
}

console.log(maxProduct([2, 3, -2, 4]))
console.log(maxProduct([-2, 3, -4]))
