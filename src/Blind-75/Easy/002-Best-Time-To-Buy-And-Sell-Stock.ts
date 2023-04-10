// Time: O(N) | Space: O(1)
const maxProfit = (prices: number[]): number => {
  let maxProfit = 0
  let buy = prices[0]

  for (let i = 1; i < prices.length; i++) {
    const currentSell = prices[i]
    const currentProfit = currentSell - buy
    maxProfit = Math.max(maxProfit, currentProfit)
    buy = Math.min(buy, currentSell)
  }

  return maxProfit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
