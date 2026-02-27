// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below
function incrementByOne(a) {
  return a + 1;
}

// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below

function capitalisesString(word) {
  if (typeof word !== "string" || word.length === 0) return word;
  let chars = word.split("");
  let currentChar = chars[0].toUpperCase();
  for (let i = 1; i < chars.length; i++) {
    currentChar += chars[i];
  }
  return currentChar;
}

// 3. Define a function that takes any person's name and returns it with a smiley :)!
// Remember to make the name capitalized!
//
// Example Input and Output:
//
// Input  | Output
// edward | Hi, Edward :)
// Aiyana | Hi, Aiyana :)
//
// TODO: write code below
function greetWithSmile(name) {
  const capitalised = capitalisesString(name);
  const helloSmiley = `Hi, ${capitalised} :)`;
  return helloSmiley;
}

// 4. Define a function that takes an array of data and returns how many strings are in the array.
//
// Example Input and Output:
//
// Input                | Output
// ['edward']           | 1
// ['edward', 'aiyana'] | 2
// [1]                  | 0
// [1, 'edward']        | 1
//
// TODO: write code below

function countStrings(array) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") {
      count++;
    }
  }
  return count;
}

// 5. Define a function that takes an object and adds a property 'edward' to the object if it doesn't yet exist with a default value of 'amazing'
//
// Example Input and Output:
//
// Input                    | Output
// {}                       | { edward: 'amazing' }
// { aiyana: 'fantastic' }  | { aiyana: 'fantastic', edward: 'amazing' }
// { edward: 'fabulous'}    | { edward: 'fabulous'}
//
// TODO: write code below

function addEdwardAmazing(object) {
  if (!object.edward) {
    object.edward = "amazing";
  }
  return object;
}

// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: incrementByOne,
  b: capitalisesString,
  c: greetWithSmile,
  d: countStrings,
  e: addEdwardAmazing,
};
