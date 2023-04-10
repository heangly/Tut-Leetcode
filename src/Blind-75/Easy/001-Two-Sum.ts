// solution 1
// function twoSum(nums: number[], target: number): number[] {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       const sum = nums[i] + nums[j]
//       if (sum === target) return [i, j]
//     }
//   }
//   return []
// }

// Solution 2
function twoSum(nums: number[], target: number): number[] {
  const table: Record<string, number> = {}

  for (let i = 0; i < nums.length; i++) {
    const missingPair = target - nums[i]
    if (missingPair in table) return [table[missingPair], i]
    table[nums[i]] = i
  }

  return []
}
