const search = (nums: number[], target: number) => {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const numMid = nums[mid]
    const numLeft = nums[left]
    const numRight = nums[right]

    if (numMid === target) return mid

    if (numMid >= numLeft) {
      if (target >= numLeft && target < numMid) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {
      if (target <= numRight && target > numMid) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }

  return -1
}
