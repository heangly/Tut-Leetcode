// Time: O(n * m) | Space: O(n * m)
const longestCommonSubsequence = (text1: string, text2: string): number => {
  const dp2d = new Array(text1.length + 1).fill(0).map((_row) => new Array(text2.length + 1).fill(0))
  for (let row = 1; row <= text1.length; row++) {
    for (let col = 1; col <= text2.length; col++) {
      const firstChar = text1[row - 1]
      const secondChar = text2[col - 1]
      const top = dp2d[row - 1][col]
      const left = dp2d[row][col - 1]
      const diag = dp2d[row - 1][col - 1]

      if (firstChar === secondChar) {
        dp2d[row][col] = diag + 1
      } else {
        dp2d[row][col] = Math.max(top, left, diag)
      }
    }
  }

  return dp2d.pop()?.pop()
}

console.log(longestCommonSubsequence('abc', 'abc'))
