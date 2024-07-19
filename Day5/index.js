//  Activity1
// Task1
function checkEvenOdd(number) { 
    if(number % 2 === 0) {
        console.log("Number", number, " is even")
    }
    else {
        console.log("Number", number, " is odd")
    } 
}

checkEvenOdd(45)

// Task2
function getSquareOfNumber(number){
    if(typeof number !== 'number') return null 
    return number * number
}

console.log(getSquareOfNumber(15))

// Activity2
//  Task3
const findMaximum = function (number1, number2){
    const greaterNumer = number1 > number2 ? number1 : number2
    console.log(`${greaterNumer} is maximum of ${number1} and ${number2}`)
}

findMaximum(34, 87)

// Task4

const concateStrings = function (string1, string2){
    return string1 + string2
}

console.log(concateStrings("Hello", "JavaScript"))

// Actovity 3
// Task5
const addNumbers = (number1, number2) => {
    return (number1 + number2)
}

console.log(addNumbers)

// Task6
const isCharacterPresent = (string, char) => {
    if(!string || !char) return false
    return string?.indexOf(char) !== -1
}

console.log(isCharacterPresent("JavaScript", 'i'))

// Activity4
// Task7
function multiplication(num1, num2=10){
    return num1 * num2
}

console.log(multiplication(12))

// Task8
function greetings(name, age = 18){
    return `Hello ${name}`
}
console.log(greetings("Abhinav Salar"))

// Activity5
//  Task9
function higherOrder_v1(callback, noOfCalls = 0){
    for(let t = 1; t <= noOfCalls; t++){
        callback(t)
    }
}

function callback(num){
    console.log("Higher order: ", num)
}

higherOrder_v1(callback, 4)

// Task10
function higherOrder_v2(callbackFirst, callbackSecond, value){
    const result = callbackFirst(value)
    callbackSecond(result)
}

function callbackFirst(value){
    return value * 2;
}

function callbackSecond(value){
    console.log("Result from callback: ", value)
}

higherOrder_v2(callbackFirst, callbackSecond, 56)
