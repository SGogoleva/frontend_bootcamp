// The following exercise contains the following subjects:
// ● functions
// Instruction
// 1. The world population is 7900 million people. Create
// a function declaration called 'percentageOfWorld1'
// which receives a 'population' value, and returns the
// percentage of the world population that the given
// population represents. For example, China has
// 1441 million people, so it's about 18.2% of the world
// population.
function percentageOfWorld2(population ,worldPopulation=7900) {
    return `This country has ${Number.parseFloat(population * 100 / worldPopulation).toFixed(1)}% of world population`
}
let usaPercent = percentageOfWorld2(1567)
let israelPercent = percentageOfWorld2(15)
let scotlandPercent = percentageOfWorld2(346)
console.log(usaPercent)
console.log(israelPercent)
console.log(scotlandPercent)
// 2. To calculate the percentage, divide the given
// 'population' value by 7900 and then multiply by 100.
// 3. Call 'percentageOfWorld1' for 3 populations of
// countries of your choice, store the results into
// variables and log them to the console.

// 4. Create a function expression that does the exact
// same thing, called 'percentageOfWorld2', and also
// call it with 3 country populations (can be the same
// populations)
const percentageOfWorld1 = function(population ,worldPopulation=7900) {
    let percentage = Number.parseFloat(population * 100 / worldPopulation).toFixed(1)
    return `This country has ${percentage}% of world population`
}
let chinaPercent = percentageOfWorld1(1441)
let russiaPercent = percentageOfWorld1(1986)
let ukrainePercent = percentageOfWorld1(957)
console.log(chinaPercent)
console.log(russiaPercent)
console.log(ukrainePercent)