/* 

Given a string that represents a Binary Number, write a function that converts this string into a decimal number. DO NOT use the native parseInt() method. 

For example: 

binToDec('0')   -> 0
binToDec('11')  -> 3
binToDec('100') -> 4
binToDec('101') -> 5
binToDec('0101') -> 5

For more information on how to read binary, check out this article: 
https://m.wikihow.com/Read-Binary

*/

function binToDec(binString){
    let decNum = 0;
    for (let i = binString.length - 1; i >= 0; i--) {
        if (binString[i] != '0' && binString[i] != '1') {
            return 'Not a proper Binary Number'
        }
        decNum += binString[i]*(2**(binString.length-1-i))
    }
    return decNum
}

console.log(binToDec('0'))
console.log(binToDec('11'))
console.log(binToDec('100'))
console.log(binToDec('101'))
console.log(binToDec('0101'))
console.log(binToDec('a0111'))
// iterate through the string from the right 
// last in dex needs to be multiplied by 1 which is 2^0
// second to last index needs to be multiplied by 2 which is 2^1
// third to last index needs to be multipled by 4 which is 2^2
// fourth to last by 8


module.exports = {binToDec};