/*
Define a function `isFive` that takes in a number parameter. It should return
a string of 'is five' if the number is equal to 5 and `null` if it is not.
*/

// Your code here 
function isFive(num) {
    if (num === 5) {
        console.log("is five")
    } else {
        console.log(null)
    }
}
// console.log(isFive(5));      // => 'is five'
// console.log(isFive(13));     // => null
// console.log(isFive("apple")) // => null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = isFive;
