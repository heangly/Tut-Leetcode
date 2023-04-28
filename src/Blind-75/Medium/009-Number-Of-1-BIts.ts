// Convert signed integer to String. so if x = 11, x.toString(2) => '1011' then we can simply count the '1' we have
// const hammingWeight = (n: number) => {
//   return n
//     .toString(2)
//     .split('')
//     .filter((str) => str !== '0').length
// }

// Using Bit Minipulation
// we can use '&' to see if the last bit is 1, if it is 1 , we can increase the count
// then we have to chop off the most right bit and update the value of bit
// example: if we have 1011 -> 101
// how to shift bit the right? we can use >>>
// so 1011 = 1011 >>> 1 = 101
// keep looping until as long as bit is not 0
const hammingWeight = (n: number) => {
  let count = 0
  while (n !== 0) {
    const res = n & 1
    if (res === 1) count++
    n = n >>> 1
  }
  return count
}

console.log(hammingWeight(521))
