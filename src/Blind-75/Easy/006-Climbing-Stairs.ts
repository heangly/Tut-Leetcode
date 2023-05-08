/**
 * We know that we can only climb either 1 step or 2 step at a time
 * if n = 4, how many ways we can climb to reach 3?
 * 1, 1, 1, 1
 * 1, 1, 2
 * 1, 2, 1
 * 2, 1, 1,
 * 2, 2
 *
 * 5 ways
 *
 * so instead of thinking bottom up, which is usually harder in dynamic programming
 * we can simply use top down approach in dynamic programming
 * top down approach mean we start from the top, or from result, and work our way back to the original state or the beginning
 *
 * e.g. n = 4
 *                  4
 *               /      \
 *             n-2      n-1
 *            /  \      /  \
 *          n-2  n-1  n-2  n-1
 *
 *  we want use 2 steps, or 1 step to get 4
 * but How do we know when to step, the clue is we can either climb 1 step or 2 step so
 * if we want to climb to 2, how many way we can do it? either 1 + 1, or just 2 , so 2 ways
 * if we want to climb to 1, it is only 1, so 1 way
 *
 *                  4
 *               /      \
 *              2        3
 *                      / \
 *                     2   1
 * which means base cases are if n === 1 = 1, n === 2 = 2
 *
 */
const climbStairs = (n: number, cache: Record<number, number> = {}) => {
  if (n === 1) return 1
  if (n === 2) return 2

  if (n in cache) return cache[n]

  const oneStep = climbStairs(n - 1, cache)
  const twoStep = climbStairs(n - 2, cache)
  cache[n] = oneStep + twoStep
  return cache[n]
}

console.log(climbStairs(4))
