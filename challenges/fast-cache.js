/*
 define a function "fastCache" that takes one argument, a function, and returns a function. 
 When fastCache is invoked it creates an object that tracks calls to the returned function, where each input to the returned function is associated with its output. 
 Every subsequent call to that returned function with the same argument will return the output directly from the object, instead of invoking the original function again.
*/

const fastCache = (func) => {
  let cache = {};
  return function (input) {
    if (!cache[input]) {
      cache[input] = func(input);
    }
    return cache[input];
  };
};

// fast cache takes in an function argument and returns a function
// within the fastCache function, define an object
// within the return function, it will find if the input is a key of the object and if so return the value
// if there is no key, define the key as the input and the value as the output of the function with the input as its argument

/*
 Extension: Rewrite fastCache so it can handle array or object input, and any number of arguments.
 HINT: you might need to use the spread operator...
*/

const fastCacheAdvanced = (func) => {
  let cache = {}; // define cache as an empty object
  cache[func] = undefined; // define the key of cache as the function being passed in
  return function (...input) {
    // return a function that takes in any number of inputs
    let key = [...input]; // put the inputs into an array
    console.log(key);
    console.log(cache[func]);
    if (cache[func] !== [key]) {
      cache[func] = { ...key };
      console.log(cache[func]);
      cache[func][key] = func(...key);
    }
    // console.log(cache[func].key)
    console.log(cache[func]);
    return cache[func][key];
  };
};

// cache needs to be able to store the function as well
// cache's key will the the function
// value can be an object with its key being the input
// value's value will be the function on its input

let cachedMult;
let cachedAdd;
let cachedPluralize;

const times3 = (num) => num * 3;

const add = (...nums) => {
  return nums.reduce((sum, current) => sum + current);
};

const pluralizedKeys = (...objs) => {
  return objs.reduce((pluralizedKeys, obj) => {
    return pluralizedKeys.concat(Object.keys(obj).map((key) => `${key}s`));
  }, []);
};

let mockMult = times3;
let mockAdd = add;
let mockPluralize = pluralizedKeys;

cachedMult = fastCacheAdvanced(mockMult);
cachedAdd = fastCacheAdvanced(mockAdd);
cachedPluralize = fastCacheAdvanced(mockPluralize);

console.log(cachedMult(3));
cachedMult(3);
cachedMult(3);
cachedMult(4);
cachedMult(4);
cachedMult(4);
// console.log(cachedAdd(1, 2, 3));
// console.log(cachedPluralize({ cat: true }, { dog: true, frog: true }));

module.exports = { fastCache, fastCacheAdvanced };
