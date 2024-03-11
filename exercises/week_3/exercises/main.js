// Week 3 practice

// console.log("Hello!")

//let username = prompt("What is your username?")
//console.log(username)

// let boughtTesla = true
// const yearOfTeslaPurchase = 2014
// let isUSCitizen = false
// let currentYear = 2018

// if (boughtTesla && isUSCitizen) {
//     if (currentYear - yearOfTeslaPurchase >= 4) {
//         console.log("Would like an upgrade?")
//     }
//     else {
//         console.log("Satisfied with the car?")
//     }
// }
// if (!isUSCitizen && boughtTesla) {
//     console.log("Would like to move to the US?")
// }
// if (!boughtTesla) {
//     console.log("Interested in buying one?")
// }

// let companies = ["Tesla", "Amazon", "Google", "Microsoft"]
// companies.push("Blizzard Entertainment");
// console.log(companies.length)

// const numbers = [1,2,3,4,5,6,7,8,9,10]
// numbers.splice(1,2)
// numbers.splice(3,1, numbers[0])
// numbers.splice(4,4)
// numbers.splice(0, 0, 0)
// console.log(numbers)

// let p1 = {
//     name: "Jill",
//     age: 25,
//     city: "Greenwich"
// }
// let p2 = {
//     name: "Robert",
//     age: 25,
//     city: "Greenwich"
// }
// if (p1.age == p2.age) {
//     if (p1.city == p2.city) {
//         console.log("Jill wanted to date Robert")
//     }
//     else {
//         console.log("Jill wanted to date Robert, but couldn’t")
//     }
// }

// let library = {books: [{title:"Book_1", author:"Name"}]}
// console.log(library.books[0])

// const reservations = {
//     Bob: {claimed: false},
//     Ted: {claimed: true}
// }
// const name = prompt('Please enter the name for your reservation')
// if (reservations.hasOwnProperty(name) && reservations[name].claimed == false) {
//     console.log(`Welcome ${name}!`)
// }
// if (reservations.hasOwnProperty(name) && reservations[name].claimed == true) {
//     console.log('Your reservation have been already claimed.')
// }
// if (reservations.hasOwnProperty(name) == false) {
//     console.log('There is no reservation under this name.')
// }

// const reservations = {
//     Bob: {claimed: false},
//     Ted: {claimed: true}
// }
// const name = prompt('Please enter the name for your reservation')
// if (reservations.hasOwnProperty(name) && reservations[name].claimed == false) {
//     console.log(`Welcome ${name}!`)
// }
// if (reservations.hasOwnProperty(name) && reservations[name].claimed == true) {
//     console.log('Your reservation have been already claimed.')
// }
// if (reservations.hasOwnProperty(name) == false) {
//     console.log('There is no reservation under this name.')
//     reservations[name] = {claimed: true}
// }

// const reservations = {
//     bob: {claimed: false},
//     ted: {claimed: true}
// }
// const name = prompt('Please enter the name for your reservation').toLowerCase()
// if (reservations.hasOwnProperty(name) && reservations[name].claimed == false) {
//     console.log(`Welcome ${name}!`)
// }
// if (reservations.hasOwnProperty(name) && reservations[name].claimed == true) {
//     console.log('Your reservation have been already claimed.')
// }
// if (reservations.hasOwnProperty(name) == false) {
//     console.log('There is no reservation under this name.')
//     reservations[name] = {claimed: true}
// }

// const date = 3;
// const kitchen = {
//   owner: "Geraldine",
//   hasOven: false,
//   fridge: {
//     price: 500,
//     works: false,
//     items: [
//       { name: "cheese", expiryDate: 7 },
//       { name: "raddish", expiryDate: 2 },
//       { name: "bread", expiryDate: 1 },
//     ],
//   },
// };

// const isOven = kitchen.hasOven;
// const isWorking = kitchen.fridge.works;

// if (isOven && isWorking) {
//   console.log(
//     `Geraldine’s raddish expired ${
//       date - kitchen.fridge.items[1].expiryDate
//     } day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the raddish in.`
//   );
// }
// if (isOven == false && isWorking) {
//   console.log(
//     `Geraldine’s raddish expired ${
//       date - kitchen.fridge.items[1].expiryDate
//     } day ago. Weird, considering her fridge works. Too bad she doesn’t have an oven to cook the raddish in.`
//   );
// }
// if (isOven && isWorking == false) {
//   console.log(
//     `Geraldine’s raddish expired ${date - kitchen.fridge.items[1].expiryDate} day ago. Probably because her fridge doesn’t work. Luckily, she has an oven to cook the raddish in. And she’ll have to pay ${kitchen.fridge.price - 250} to fix the fridge.`);
// }
// if (isOven == false && isWorking == false) {
//     console.log(`Geraldine’s raddish expired ${date - kitchen.fridge.items[1].expiryDate} day ago. Probably because her fridge doesn’t work. Too bad she doesn’t have an oven to cook the raddish in. And she’ll have to pay ${kitchen.fridge.price - 250} to fix the fridge.`)
// }

// const names = ["Ashley", "Donovan", "Lucas"]
// const ages = [23, 47, 18]
// const people = []
// for(let i=0; i < 3; i++) {
//     people.push({name: names[i], age: ages[i]})
// }
// console.log(people)

// for(i of people) {
//     console.log(`${i.name} is ${i.age} years old.`)
// }

// const posts = [
//     {id: 1, text: "Love this product"},
//     {id: 2, text: "This is the worst. DON'T BUY!"},
//     {id: 3, text: "So glad I found this. Bought four already!"}
//   ]
// for(i of posts) {
//     if (i.id == 2) {
//         posts.splice(1, 1)
//     }
// }
// console.log(posts)

// const posts = [
//     {
//       id: 1, 
//       text: "Love this product",
//       comments: []
//     },
//     { 
//       id: 2, 
//       text: "This is the worst. DON'T BUY!", 
//       comments: [
//                   {id: 1, text: "Idiot has no idea"}, 
//                   {id: 2, text:"Fool!"}, 
//                   {id: 3, text: "I agree!"}
//                 ]
//      },
//      {
//       id: 3, 
//       text: "So glad I found this. Bought four already!",
//       comments: []
//      }
//   ]
// for(i of posts) {
//     if(i.id == 2) {
//         for(j of i.comments) {
//             if(j.id == 3) {
//                 console.log(j.text)
//             }
//         }
//     }
// }

// const dictionary = {
//     "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
//     "B": ["Banana", "Bonkers", "Brain", "Bump"],
//     "C": ["Callous", "Chain", "Coil", "Czech"]
//   }

// let keys = Object.keys(dictionary)

// for(let i of keys) {
//     console.log(`Words that begin with  ${i}:`)
//     for(let j of dictionary[i]) {
//         console.log(j)
//     }
// }

// const person = {
//     name: "Julius",
//     speak: function(strin) {
//         console.log(`I like ${strin}`)
//         }
//     }

// console.log(person.name) 
// person.speak("cheese toast")

// const isEven = function(num) {
//     if(num % 2 == 0) {
//         return true
//     }
//     else {
//         return false
//     }
// }

// const writeEven = function(arr) {
//     for(let i of arr) {
//         if (isEven(i)) {
//             console.log(i)
//         }
//     }
// }

// writeEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])


// const checkExists = function(arr, num) {
//     if(num in arr) {
//         return true
//     }
//     else if(!(num in arr)) {
//         return false
//     }
// }
// console.log(checkExists([1, 2, 3], 2))


// let calculator = {
//     add: function(x, y) {
//         return x + y
//     },
//     subtract: function(x, y) {
//         return x - y
//     }
// }

// const result1 = calculator.add(20, 1)
// const result2 = calculator.subtract(30, 9)

// console.log(calculator.add(result1, result2)) //should print 42

// const increaseByNameLength = function(mon, nam) {
//     return nam.length * mon
// }
// const makeRegal = function(nam) {
//     return `His Royal Highness, ${nam}`
// }

// const turnToKing = function(name, money){
//     name = name.toUpperCase()
//     money = increaseByNameLength(money, name)
//     name = makeRegal(name)

//     console.log(name + " has " + money + " gold coins")
// }

// turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"

