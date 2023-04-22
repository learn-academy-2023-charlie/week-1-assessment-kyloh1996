// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:
// Key words: *FUNCTION , * TWO STRINGS , * MORE CHARACTERS , *TEST 
// INPUT: Two Strings => 
// OUTPUT: One String => .length 
// name the function: longestName
// FUNCTION: return (string1,string2) if it have more characters than (string1,string2)
// ANATOMY: 
// const longestName = (string1,string2) => {
    // if (string1.length > string2.length) {
        // return string1 
        // } else {
            // return string2
            // }
// }
// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"
// Expected outcome: "cherry"
// console.log(longestName(fruit1,fruit2))
// console.log(longestName(fruit3,fruit4))

// OUTPUT1: banana  
// OUTPUT2: cherry


// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.



// Pseudo code:
// Key words: *FUNCTION , * NUMBER , * DETERMINES BELOW - AT - OR ABOVE BOILING , *BOILING POINT = 212F *TEST VARIABLES
// INPUT: NUMBERS => 42,350,212
// OUTPUT:  => BELOW, AT, ABOVE
// name the function: myTemp
// FUNCTION: return (temp1,temp2,temp3) if it have more characters than (temp1,temp2,temp3)
// ANATOMY: 
// const myTemp = (temp1,temp2,temp3) => {
//     if (temp1 < 212) {
//         return '42 is below boiling point'
//         } else if (temp1 > 212) {
//             return '350 is above boiling point'
//             } else {
//                 return '212 is at boiling point'
//                 }
//             }
// const temp1 = 42
// Expected output: "42 is below boiling point"

// const temp2 = 350
// Expected output: "350 is above boiling point"

// const temp3 = 212
// Expected output: "212 is at boiling point"

// console.log(myTemp(temp1))
// console.log(myTemp(temp2))
// console.log(myTemp(temp3))

// OUTCOME: 
// 42 is below boiling point
// 350 is above boiling point
// 212 is at boiling point


// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:

// Key words: *COMBINE (CONCATINATION(.CONCAT)) , * TWO ARRAYS([]) , * RETURN LENGTH(.LENGTH) 
// INPUT: ARRAY1 => [2,5,2,2,4] , ARRAY2 => [6,3,5,3]
// OUTPUT: 9

// const myArray1 = [2,5,2,2,4]
// const myArray2 = [6,3,5,3]

// const myOtherArray = [].concat(myArray1,myArray2)

// console.log(myOtherArray.length)

// const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
// const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// OUTPUT: 9
// console.log(padres1998WorldSeriesRuns.concat(padres1984WorldSeriesRuns)) NOTE: only concated the numbers, need to add .length 

// otherNotes: it took me awhile to figure out how to get the index, i was curious about adding [] without information and concating that out. Surprisingly it worked. 


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:

// KEYWORDS: *REVERSE(.reverse), *STRING("")

// const currentCohort = "Charlie 2023"
// console.log(currentCohort.reverse()) Note: maybe .split first
// console.log(currentCohort.split("").reverse().join("")) // did not reverse maybe seperate - could have done this but I forgot the ""
// var splitString = (currentCohort.split("")) // Note: forgot the "" between the ()
// console.log(splitString.reverse().join(""))
// Expected output: "3202 eilrahC"
//Output: 3202 eilrahC


// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
// KEYWORDS: *RETURN, *LAST, INDEX, *GIVEN VALUE(ARRAY)
// The index starts at 0!
// use .indexOf()
// const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

// const givenValue1 = 42
// console.log(numberOfConnections.indexOf(42)) // Did not pay attention need .lastIndexOf() 
// console.log(numberOfConnections.lastIndexOf(42))
// Expected output: 7

// const givenValue2 = 10
// console.log(numberOfConnections.indexOf(10)) // Did not pay attention 
// console.log(numberOfConnections.lastIndexOf(10))
// Expected output: 8
// Output: 7 and 8


// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:
// KEYWORDS: *SORT, *NUMBERS, *IN AN ARRAY, *LARGEST TO SMALLEST (ASSENDING - .sort())

// const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// sanDiegoSummerTemperatures.sort().reverse() // Note: went ahead of myself, they needed fliped to get the correct answer.
// console.log(sanDiegoSummerTemperatures)
// Expected output: [82, 80, 79, 77, 76, 73, 72]

// const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// sanDiegoWinterTemperatures.sort().reverse()
// console.log(sanDiegoWinterTemperatures)

// Expected output: [68, 67, 66, 66, 62, 59, 59]
