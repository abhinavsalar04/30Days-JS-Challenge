const a = 10, b = 5;

//addition
const sum = a + b;
console.log(`Addition of ${a} and ${b} is: ${sum}`)

//subtraction
const subtraction = a - b;
console.log(`Subtraction of ${a} and ${b} is: ${subtraction}`)

// multiplication
const multiplication = a * b;
console.log(`Multiplication of ${a} and ${b} is: ${multiplication}`)

// division
const division = a / b;
console.log(`Division of ${a} and ${b} is: ${division}`)

//remainder
const remainder = a % b;
console.log(`Remainder of ${a} and ${b} is: ${remainder}`)


// assignment operators

//addition +=
const num1 = 10
let additionResult = 20
additionResult += num1 
console.log("Number after addition: ", additionResult)

// subtraction -=
const num2 = 10
let subtractionResult = 30
additionResult -= num1 
console.log("Number after subtraction: ", subtractionResult)

// comparision operator
const n1 = 12, n2 = 15, n3 = 5, n4 = 10, n5 = 5
console.log("Less than operator: ", n1 < n2)
console.log("Greater than operator: ", n2 > n3)


console.log("Less than equal to operator: ", n1 <= n4)
console.log("Greater than equal to operator: ", n3 >= n5)


const integer = 10, stringNumber = "10"
console.log(integer == stringNumber)
console.log(integer === stringNumber)

// Logical operators

console.log(n1 < n2 && n1 == n4)
console.log(n1 < n2 || n1 == n4)

console.log(`Not (!) of ${n1} is: ${!n1}. Not of true is ${!true}`)

const input = -1500
const isPositive = input > 0 ? true : false
console.log(`Number ${input} is ${isPositive ? "positive" : "negative"}`)





