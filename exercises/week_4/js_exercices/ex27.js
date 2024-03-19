// The following exercise contains the following subjects:
// ● Array
// ● Objects
// Instructions
// Create a function that takes one argument, an array.
// Use this array:
const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
// to count over all the letters and return an object with the
// letter as the key and the letter count as the value.
// Expected output:
// { h: 3, e: 4, l: 3, o: 7, g: 3, d: 3, a: 2, y: 2, u: 2, r: 3, w: 1, c:
// 1, m: 2, t: 1, b: 1, s: 1 }
// Note:
// that it shouldn’t be case sensitive
// Extra:
// return the letter with the most occurrences as well

// let l = {}

const getListOfChars = function(arr){
    let str = arr.map(i => i.toLowerCase().split(',').join(''))
    str = str.map(i => i.split(' ').join(''))
    let finalStr = ''
    str.forEach((x) => finalStr += x)
    return finalStr.split('')
}

const getUniqueValues = function(list) {
    return list.filter((curr, idx, arr) => (arr.indexOf(curr) === idx))
}

const countValues = function(inp) {
    let l = {}
    let lst = getListOfChars(inp)
    let uniqueLst = getUniqueValues(getListOfChars(inp))
    for(let i = 0; i < uniqueLst.length; i++) {
        counter = 0
        for(let j = 0; j < lst.length; j++) {
            if(uniqueLst[i] == lst[j]) {
                counter += 1
            }
        }
        l[uniqueLst[i]] = counter
    }
    return l
}

let result = countValues(array)
console.log(result)
let maxValue = Math.max(...Object.values(result))
for(let key in result) {
    if(result[key] === maxValue) {
        console.log(`Letter with the most occurrences: ${key}`)
    }
}
