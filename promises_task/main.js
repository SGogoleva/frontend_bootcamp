// Exercise 1: Basic Arithmetic Operations
// Create a chain of promises to perform and log the result of three arithmetic operations in sequence.
// Start with a number, then add 5, multiply by 3, and finally subtract 2.

function arithmeticOps(number) {
  return new Promise((resolve, reject) => {
    if (!isNaN(number)) {
      resolve(Number(number));
    } else {
      reject("Must be a number");
    }
  })
    .then((value) => {
      return value + 5;
    })
    .then((value) => {
      return value * 3;
    })
    .then((value) => {
      return value - 2;
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
}
arithmeticOps("1");

// Exercise 2: String Manipulation
// Write a promise chain that takes a string, converts it to uppercase,
// then reverses it, and finally appends the string "-finished" at the end.
// Log the final result.
// Use `then` for every phase

function convertString(string) {
  return new Promise((resolve, reject) => {
    if (isNaN(string)) {
      resolve(string);
    } else {
      reject("Must be a word");
    }
  })
    .then((string) => {
      return string.toUpperCase();
    })
    .then((string) => {
      let reversedString = "";
      for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
      }
      return reversedString;
    })
    .then((string) => {
      return `${string}-finished`;
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
}

convertString("sofia")

// Exercise 3: Array Filtering and Mapping
// Write a function compareToNum that takes a number as an argument and returns a Promise
// that tests if the value is less than or greater than the value 10 (reject otherwise)

function compareToNum(object) {
  return new Promise((resolve, reject) => {
    if (
      typeof object === "object" &&
      !isNaN(object.num) &&
      !isNaN(object.isAboveNum)
    ) {
      if (object.isAboveNum > object.num) {
        resolve(`${object.isAboveNum} is greater than 10`);
      } else if (object.isAboveNum < object.num) {
        resolve(`${object.isAboveNum} is less than 10`);
      } else if (object.isAboveNum == object.num) {
        reject("Numbers are equal");
      }
    } else {
      reject("Must be valid input -> object and number");
    }
  });
}

compareToNum({ num: 10, isAboveNum: 5 }) //will reject
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
compareToNum({ num: 10, isAboveNum: 12 }) //will resolve
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// Exercise 4: Delayed Greetings
// Simulate a delayed greeting with promises.
// First, wait 2 seconds, then log "Hello", wait another second, and log "World!".
// Each step should be done in a separate .then().

let greetingsPromise = new Promise((resolve) => {
  setTimeout(resolve, 2000);
});
greetingsPromise
  .then(() => {
    console.log("Hello");
  })
  .then(
    () =>
      new Promise((resolve) => {
        setTimeout(resolve, 1000);
      })
  )
  .then(() => {
    console.log("World!");
  });

// Exercise 5: Error Handling
// Create a promise chain that attempts to parse JSON data.
// Use a try/catch block within a .then() method to handle JSON parsing errors.
// If successful, log the parsed object; if an error occurs, log "Invalid JSON".
// Bonus
// Make an async await version

function parseData(jsonData) {
  return new Promise((resolve) => {
    resolve(jsonData);
  }).then((data) => {
    try {
      const parsedData = JSON.parsel(data);
      console.log(parsedData);
    } catch (error) {
      console.error(error);
    }
  });
}
parseData(`{"name" : "Sofia", "age" : 28}`);
parseData({ name: "Sofia", age: 28 });

async function parseJson(data) {
  try {
    const parsedData = await JSON.parse(data);
    console.log(parsedData);
  } catch (error) {
    console.error(error);
  }
}
parseJson(`{"name" : "Sofia", "age" : 28}`)

// Exercise 6: Promise all
// Create "resolveImmediate" that resolves immediately to a number
// Create "resolveDelayed" that resolves to a number after 2 seconds

function combine(prmX, prmY) {
  return Promise.all([prmX, prmY]).then((values) => {
    return values[0] + values[1];
  });
}
function fetchX() {
  return new Promise((resolve) => {
    resolve(25);
  });
}
function fetchY() {
  return new Promise((resolve) => {
    setTimeout(resolve(17), 2000);
  });
}
// `fetchX()` should return a promise that is resolved to 25 immediately
// and `fetchY()` should return a promise that is resolved after 2 seconds to 17
combine(fetchX(), fetchY()).then((sum) => {
  console.log(sum);
});
