// Time: O(nlogn + n^2) | Space: O(n)
const threeSum = (nums: number[]) => {
  nums.sort((a, b) => a - b)
  const output: number[][] = []
  let i = 0
  while (i < nums.length) {
    while (i > 0 && nums[i] === nums[i - 1]) i++

    let j = i + 1
    let k = nums.length - 1

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k]
      if (sum === 0) {
        output.push([nums[i], nums[k], nums[j]])
        while (nums[j] === nums[j + 1]) j++
        while (nums[k] === nums[k - 1]) k--
        j++
        k--
      } else if (sum > 0) {
        k--
      } else {
        j++
      }
    }
    i++
  }

  return output
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
