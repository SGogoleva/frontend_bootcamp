// The following exercise contains the following subjects:
// ● callback functions
// Instructions
// 1. Write a function called ‘isString’ that receives 2 arguments,
// a string and a callback function. The function checks that
// the string is indeed a string. If the string is a string, pass
// the string to a callback function that logs that string to the
// console.

// isString('123', result)
// function isString(str, func) {
//     if(typeof str == "string") {
//         func(str)
//     }
// }
// function result(str) {
//     console.log(str)
// }

// 2. Create a function called ‘firstWordUpperCase’ that
// receives 2 arguments, a string and a callback function.
// The function will capitalize the first word in the sentence
// and pass the string to a callback function which will create
// dashes between the words.

// function firstWordUpperCase(str, func) {
//     let capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1)
//     func(capitalizedStr)
// }
// function splitStr(capitalizedStr) {
//     capitalizedStr = capitalizedStr.split(' ').join('-')
//     console.log(capitalizedStr)
// }

// 3. Call the ‘firstWordUpperCase’ function with a callback of
// your choice.

// firstWordUpperCase('hello everybody happy to see you again', splitStr)

// 4. Create your own function that will receive from one of its
// arguments a callback function

function isSumEven(x, y, callback) {
    if((x + y) % 2 == 0) {
        let res = x + y
        callback(res)
    }
}
function printResult(n) {
    console.log(`The sum - ${n} is even.`)
}

isSumEven(2, 8, printResult)