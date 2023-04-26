// ^ is XOR either 1 not both must be 1 to get 1,  that can add digit perfectly except it does not care about over flow
// E.g 3  -> 0 1 1
//     2  -> 0 1 0
//   ---------------
//           0 0 1     this is gonna be new 'a', missing carry
//
// to get carry we can  use '&' that both must be 1 to get 1
//
//// E.g 3  -> 0 1 1
//       2  -> 0 1 0
//   ---------------
//             0 1 0    // but the carry is at the wrong spot, so we shift it 1 spot << 1
// ->          1 0 0
// we use this as new b
// so we keep looping or repeat the process until there is no more b or no more carry
//
//
// Time: O(1) because each integer contain 32 bit | Space: O(1)
const getSum = (a: number, b: number) => {
  let carry
  while (b !== 0) {
    carry = a & b
    a = a ^ b
    b = carry << 1
  }
  return a
}

console.log(getSum(2, 3))
