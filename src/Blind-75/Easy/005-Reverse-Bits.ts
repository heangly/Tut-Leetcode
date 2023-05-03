const reverseBits = (n: number) => {
  const signedIntegerString = n.toString(2)
  const reversedSignedIntegerString = signedIntegerString.split('').reverse().join('')
  const reversedSignedIntegerStringWith32Bit = reversedSignedIntegerString.padEnd(32, '0')
  const reverseSignedInteger = parseInt(reversedSignedIntegerStringWith32Bit, 2)
  return reverseSignedInteger
}
