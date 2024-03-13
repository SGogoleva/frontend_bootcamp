// The following exercise contains the following subjects:
// ● Declaring functions 2
// Instruction
// Copy the code below to your computer, answer the
// questions on the file, and submit.
/*
JavaScript - Declaring Functions
The following exercise contains the following
subjects:
* functions
Instructions
* Please reformat the following function
expressions to IIFE functions.
* Please reformat the following function
declarations in two ways, explicit return and implicit
return functions.
Submit the file to Hive
*/
// From function declarations to explicit and implicit
// return functions (one of each).
// const welcome = () => {return 'Welcome to Appleseeds Bootcamp!'}
// console.log(welcome())

// const power = (a) => Math.pow(a, 2)
// console.log(power(5))

// From function expressions to IIFE functions.
// a = (function squareRoot(a) { return Math.sqrt(a)})(25)
// console.log(a)

b = (function randomNumbers(a, b) {return Math.random() * (a - b) + b})(3, 4)
console.log(b)


