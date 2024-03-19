// The following exercise contains the following subjects:
// ● for loop
// Instructions
// You are given two arrays:
const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];
// Create a function that takes these two arrays as
// arguments.
// Compare these two arrays using 2 for loops and return the
// items that are the same. If none are the same return false.
const findDublicates = function(arr1, arr2) {
    let lst = []
    for(let i = 0; i < arr1.length; i++) {
        if(arr2.includes(arr1[i])) {
            lst.push(arr1[i])
        }
    }
    if(lst.length > 0) {
        console.log(...lst)
    }
    else {
        console.log(false)
    }
}
findDublicates(food, food1)