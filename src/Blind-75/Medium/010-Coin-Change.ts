/**
 * coins = [1, 2, 5]
 * amount = 11
 *
 * initialize dp
 * dp = [inf, inf, inf, inf, inf, inf, inf, inf, inf, inf, inf, inf] // this array will tell use how many coin we need for each amount
 * each index will be the amount, 0 -> 11
 * if we have 0 amount, we need 0 coin to get 0 amount
 *
 * so dp[0] = 0
 *
 * then, we loop through entires coins we have
 *
 * we skip if i < coin, eg. if coin = 5, and i = 1, there is no way we can make change from 5 coin to get 1 coin
 *
 * we check i - coin to get the previous use, and add + 1 because we use it 1 more time
 * but we want to get mininium, so we compare, (dp[i] vs i-coin + 1)
 *
 * at the end if the last value is inf = cannot make change
 *
 *
 */

// Time: O(c * n) where c is the length of coins, and n is the number of amount
// Space: O(n)
const coinChange = (coins: number[], amount: number) => {
  const dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0

  for (const coin of coins) {
    for (let i = coin; i < dp.length; i++) {
      const previousValue = dp[i - coin] + 1
      dp[i] = Math.min(dp[i], previousValue)
    }
  }
  return dp[dp.length - 1] === Infinity ? -1 : dp[dp.length - 1]
}

console.log(coinChange([1, 2, 5], 11))
