// Activity1
//  Task1
const numbers = [1 ,2, 3, 4, 5]
console.log(numbers)

// Task2
console.log("First element of array: ", numbers[0], " last element of array: ", numbers[numbers.length - 1])

//  Activity2
//  Task3
const numberArray = [1,2,3,4,5]
numberArray.push(6)
console.log(`Array after pushing element 6: ${numberArray}`)

// Task4
numberArray.pop()
console.log(`Array after removing last element: ${numberArray}`)

//  Task5
numberArray.shift(0,1)
console.log(`Array after shifting first element: ${numberArray}`)

//  Task6
numberArray.shift(0, 12)
console.log(`Array after unshifting element adding 12: ${numberArray}`)

//  Activity3
//  Task7
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const arrayWithDoubledElements = array.map((number, index) => {
    return number*2
})
console.log("Array after doubling each element using map: ", arrayWithDoubledElements)

// Task8
const evenNumbers = array.filter((number) => number % 2 === 0)
console.log(`Even number from ${array} are: ${evenNumbers}`)

// Task9
const sum = array.reduce((sum, currentNumber) => {
    return sum += currentNumber
}, 0)

console.log("Sum of numbers: ", array, " is: ", sum)

//  Activity4
//  Task10
for(let index = 0; index < array.length; index++){
    process.stdout.write(`Element at index ${index} is ${array[index]} \n`)
}


// Task11
console.log("\nUsing forEach")
array.forEach((number, index) => {
    process.stdout.write(`Element at index ${index} is ${number} \n`)
})

// Activity5
//  Task12
const matrix = [[0, 1, 2], [3, 4, 5], [6, 7, 8]]
console.log("Matrix\n:", matrix)


// Task13
console.log("Matrix element at row:2 col:3:", matrix[1][2])