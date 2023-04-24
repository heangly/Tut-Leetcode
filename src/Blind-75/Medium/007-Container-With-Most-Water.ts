const maxArea = (height: number[]): number => {
  let max = -Infinity
  let i = 0
  let j = height.length - 1
  while (i < j) {
    const tempWidth = j - i
    const tempHeight = Math.min(height[i], height[j])
    const area = tempWidth * tempHeight
    max = Math.max(max, area)

    if (height[i] < height[j]) {
      i++
    } else {
      j--
    }
  }
  return max
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
