// const productExeptSelf = (nums: number[]): number[] => {
//   const dp1 = new Array(nums.length).fill(1)
//   const dp2 = new Array(nums.length).fill(1)
//   const ans: number[] = []

//   for (let i = 1; i < nums.length; i++) {
//     dp1[i] = dp1[i - 1] * nums[i - 1]
//   }

//   for (let j = nums.length - 2; j >= 0; j--) {
//     dp2[j] = dp2[j + 1] * nums[j + 1]
//   }

//   for (let i = 0; i < dp1.length; i++) {
//     ans.push(dp1[i] * dp2[i])
//   }

//   return ans
// }

// Time: O(N) | Space: O(N)
const productExeptSelf = (nums: number[]): number[] => {
  const dp = new Array(nums.length).fill(1)

  for (let i = 1; i < nums.length; i++) {
    dp[i] = dp[i - 1] * nums[i - 1]
  }

  let acc = nums[nums.length - 1]
  for (let j = nums.length - 2; j >= 0; j--) {
    dp[j] *= acc
    acc *= nums[j]
  }

  return dp
}

console.log(productExeptSelf([1, 2, 3, 4]))
