// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect. 


// --------------------INSTRUCTOR EXAMPLE: What will this log?
// const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))
// a) Your answer:

// const = is a constant variable, unchanging
//colors = identifying variable reference
// [content] = what the computer reads when given the identifier
// -.push meaning =  add the the end of the content provided
// expected result would be to see "indigo" at the end of the content, but youre not giving the computer enough information. In-order to acheive that result you would need to var the identifier with a -.push() function. With that said the now expected result would be the index.
// console.log(colors.push("indigo"))
// Output: 5
// colors.push('indigo') // was wrong, did not need to make this a new variable, it just needed to be seperated
// console.log(colors)

// Output: [ 'tangerine', 'magenta', 'lilac', 'daffodil', 'indigo' ]

// b) Verify and explain:
// reference above

// --------------------1) What will this log? 

// const cohort = "LEARN 2023"
// console.log(cohort.length)

// let myLength = cohort.map (w => w.length)
// console.log(myLength) ----------------------> The -.map(e=>e.length) DOES NOT WORK HERE. Maybe because there is only one value?



// a) Your answer:
// I think the output will be 9, because that comand should return the length of the string and not the index. 
// b) Verify and explain:
// The actual out put was 10, but I do not really understand why.
// OHHHHHHHHH!!!! the output is 10 because the computer INCLUDES THE SPACE!!!!!



// --------------------2) What will this log?

//const greeting = "Hello World!"
 // console.log(greeting[4])

// a) Your answer:
// should show 'o' because that is the fourth index. indexs start at 0.
// b) Verify and explain:
// The terminal showed the expexted result. Reference above.
// --------------------3) What will this log?

// const languages = ["JavaScript", "Ruby", "Python", "C++"]
// const index = 1
// console.log(languages[index])

// a) Your answer:
// I expect this result to be 'Ruby' because if indexs start at 0 and were asking for the 1 index then the answer would be 'Ruby'. I dont see any faults in the code either.
// b) Verify and explain:
// The terminal showed the expexted result. Reference above.

// --------------------4) What will this log? 


// const weekendDays = ["saturday", "sunday"]

// Get rid of brackets [] above and put () - NOT NECESSARY 


// a) Your answer:
// I think the result would the variables becoming uppercased due to the built-in method .toUpperCase .
// b) Verify and explain:
// I was wrong, produced "not a function" ...

// const weekendDays = ["saturday", "sunday"]
// myUpper = weekendDays.toUpperCase("")
// console.log(myUpper) ----------------------> Not a function

// const weekendDays = ("saturday" , "sunday")
// myUpper = weekendDays.toUpperCase("")
// console.log(myUpper)  ----------------------> Only getting SUNDAY
// console.log(weekendDays.toUpperCase("")) ------------> both just SUNDAY

// const weekendDays = ("saturday" + "sunday")
// myUpper = weekendDays.toUpperCase("")
// console.log(myUpper) --------------------------> SATURDAYSUNDAY joined

// const weekendDays = ("saturday" + "sunday")
// myUpper = weekendDays.toUpperCase("")
// console.log(myUpper.split([7]))  ----------------> [ 'SATURDAYSUNDAY' ] , made it green??

// Found online:
// let weekendDays = ["saturday" , "sunday"]
// let upperCase = weekendDays.map(element => element.toUpperCase());
// console.log(upperCase); --------> [ 'SATURDAY', 'SUNDAY' ] LOOK INTO THIS -.MAP(ELEMENT => ELEMENT)!!!!!!!

// --------------------5) What will this log?

// let dataTypes = ["number", "string", "Boolean", "undefined"]
// console.log(typeof dataTypes.length)

// a) Your answer:
// I think this will output numbers... maybe 6,6,7,9 or just sinmply 4; but honestly that doesnt sound right and I dont really know the intended result.
// b) Verify and explain:
// The actual output was ---> number
//  OHHHHHHH! 'typeOF is a built in function!!!! 
// console.log(dataTypes.length.byString) -----> undefined
// let myLength= dataTypes.map (element => element.length)
// console.log(myLength) -------------> [ 6, 6, 7, 9 ] // REALLY NEED TO LOOK INTO THIS -.MAP(E => E.____)
