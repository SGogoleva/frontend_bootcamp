// The following exercise contains the following subjects:
// ● reduce method
// Instructions
// Write the following functions using the reduce built-in function.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 1. max

// const maxValue = array.reduce((max, value) => {return max > value ? max : value})
// console.log(maxValue)

// 2. the sum of even numbers

// const sumOfArray = array.filter((i) => i % 2 == 0).reduce((counter, value) => counter + value)
// console.log(sumOfArray)

// 3. average

const averageValue = array.reduce((counter, value) => counter + value) / array.length
console.log(averageValue)