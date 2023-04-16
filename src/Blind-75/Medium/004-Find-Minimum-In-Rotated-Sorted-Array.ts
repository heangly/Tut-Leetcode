// Time: O(log(N)) | Space: O(1)
const findMin = (nums: number[]) => {
  let left = 0
  let right = nums.length - 1
  let finalMin = Infinity

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const midNum = nums[mid]
    const leftNum = nums[left]
    const rightNum = nums[right]
    finalMin = Math.min(finalMin, midNum)

    if (rightNum < midNum && rightNum < leftNum) {
      left = mid + 1
    } else if (leftNum < midNum && leftNum < rightNum) {
      right = mid - 1
    } else {
      left++
      right--
    }
  }
  return finalMin
}

console.log(findMin([3, 4, 5, 1, 2]))
