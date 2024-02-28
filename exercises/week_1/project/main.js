console.log("Hello!")
// line comment
/*
multiple
line
comment
*/

//let username = prompt("What is your username?")
//console.log(username)

let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = false
let currentYear = 2018

if (boughtTesla && isUSCitizen) {
    if (currentYear - yearOfTeslaPurchase >= 4) {
        console.log("Would like an upgrade?")
    }
    else {
        console.log("Satisfied with the car?")
    }
}
if (!isUSCitizen && boughtTesla) {
    console.log("Would like to move to the US?")
}
if (!boughtTesla) {
    console.log("Interested in buying one?")
}

let companies = ["Tesla", "Amazon", "Google", "Microsoft"]
companies.push("Blizzard Entertainment");
console.log(companies.length)
const numbers = [1,2,3,4,5,6,7,8,9,10]
numbers.splice(1,2)
numbers.splice(3,1, numbers[0])
numbers.splice(4,4)
numbers.splice(0, 0, 0)
console.log(numbers)
let p1 = {
    name: "Jill",
    age: 25,
    city: "Greenwich"
}
let p2 = {
    name: "Robert",
    age: 25,
    city: "Greenwich"
}
if (p1.age == p2.age) {
    if (p1.city == p2.city) {
        console.log("Jill wanted to date Robert")
    }
    else {
        console.log("Jill wanted to date Robert, but couldn’t")
    }
}
let library = {books: [{title:"Book_1", author:"Name"}]}
console.log(library.books[0])
