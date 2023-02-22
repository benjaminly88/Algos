/*

Write a function that returns an array containing the numbers 1 to NUM.

Put "fizz" in place of numbers divisble by 3 but not by 5,
"buzz" in place of numbers divisble by 5 but not by 3,
and "fizzbuzz" in place of numbers divisble by both 3 and 5.

fizzbuzz(16);
-> [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz',
11, 'fizz', 13, 14, 'fizzbuzz', 16]

*/

const fizzbuzz = num => { 
    let outputArray = [];
    for (let i = 1; i <= num; i++) {
        if (i % 3 == 0) {
            if (i % 5 == 0) {
                outputArray.push('fizzbuzz')
                continue
            }
            outputArray.push('fizz');
            continue
        }
        if (i % 5 == 0) {
            outputArray.push('buzz')
            continue
        }
        outputArray.push(i)
    }
    return outputArray
};

console.log(fizzbuzz(16))
// loop through the numbers
// if divisible by 3, check if also divisble by 5, if so, push fizzbuzz, if not push fizz
// if divisible by 5, push buzz.
// otherwise push num

/*

Extension: 
Write a function that returns an array containing the numbers 1 to NUM.

Put "fizz" in place of numbers divisble by 3 but not by 5 or 7,
"buzz" in place of numbers divisble by 5 but not by 3 or 7,
"bazz" in place of numbers divisble by 7 but not by 3 or 5,
"fizzbuzz" in place of numbers divisble by 3 and 5 but not 7,
"fizzbazz" in place of numbers divisble by 3 and 7 but not 5,
"buzzbazz" in place of numbers divisble by 5 and 7 but not 3,
and "fizzbuzzbazz" in place of numbers divisble by 3, 5, and 7.

fizzbuzzbazz(22);
-> [1, 2, 'fizz', 4, 'buzz', 'fizz', 'bazz', 8, 'fizz', 'buzz',
11, 'fizz', 13, 'bazz', 'fizzbuzz', 16, 17, 'fizz', 19, 'buzz', 'fizzbazz', 22]

*/

const fizzbuzzbazz = num => {
    const dictionary = {
        3: 'fizz',
        5: 'buzz',
        7: 'bazz',
    }
    let legKeys = Object.keys(dictionary)
    console.log(legKeys)
    for (let i = 1; i <= num; i++) {
        for (let j = 0; j < legKeys.length; j++) {
            if (num % legKeys[j] == 0) {
                
            }
        }
    }
};

// console.log(fizzbuzzbazz(22))

// iterate through all the numbers pushing the results in to an array
// if i make a legends with all the results taht i want
// if any num mod object.keys(legend)[i]
// console.log(+Object.keys(legend)[0])
// console.log(typeof +Object.keys(legend)[0]) returns a number


module.exports = {fizzbuzz, fizzbuzzbazz};
