/*
Define a function isValidSubStr that takes in two string parameters. The
function should return a string of "VALID" if the second string is part of the
first string regardless of the casing of the characters. Otherwise it should
return "INVALID".
*/
function isValidSubStr(str1, str2) {
    const strLower1 = str1.toLowerCase()
    const strLower2 = str2.toLowerCase()

    if (strLower1.includes(strLower2)) {
        return "VALID"
    } else {
        return "INVALID"
    }
}
// Your code here 

// console.log(isValidSubStr("JOY", "joy"));                     // => 'VALID'
// console.log(isValidSubStr("The cat jumped!", "he cat jump")); // => 'VALID'
// console.log(isValidSubStr("Time to program", "time"));        // => 'VALID'
// console.log(isValidSubStr("happy", "happiness"));             // => 'INVALID'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = isValidSubStr;
