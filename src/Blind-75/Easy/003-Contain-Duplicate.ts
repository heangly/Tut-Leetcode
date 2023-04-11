// Time:O(N) | Space:O(N)
const containsDuplicate = (nums: number[]): boolean => {
  const seen = new Set<number>()
  for (const num of nums) {
    if (seen.has(num)) return true
    seen.add(num)
  }

  seen.size
  return false
}

console.log(containsDuplicate([1, 2, 3, 1]))
