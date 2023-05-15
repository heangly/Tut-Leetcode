// Time: O(n^2) | Space: O(n)
const lengthOfLIS = (nums: number[]): number => {
  const dp = new Array(nums.length).fill(1)
  let longest = 1

  for (let curr = 1; curr < nums.length; curr++) {
    for (let prev = 0; prev < curr; prev++) {
      if (nums[prev] < nums[curr]) {
        dp[curr] = Math.max(dp[curr], dp[prev] + 1)
        longest = Math.max(longest, dp[curr])
      }
    }
  }

  return longest
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]))
