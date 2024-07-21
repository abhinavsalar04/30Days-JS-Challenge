// Activity1
// Task1
const personName = "John", age = 20;
const personInfo = `${personName} is ${age} years old.`
console.log("Person info using object literal: ", personInfo)

// Task2
const multilineString = `This is a multiline string
This is a multiline string, This is a multiline string
This is a multiline string
This is a multiline string: This is a multiline string`

console.log("Multiline string: ", multilineString)

// Activity2
// Task3
const array = [1, 2, 3, 4, 5, 6]
const [firstElement, secondElement] = array
console.log(`${firstElement} and ${secondElement} are the First & second element of array ${array}`)

// Task4
const book = { name: 'Jungle Book', author: 'Author'}
const {name, author} = book
console.log(`Book object destructing ${book}: ${name}, ${author}`)

// Activity3
// Task5
const object = {key1: "value1", key2: "value2", key3: "value3", key4: "value4"}
const copiedWithSpread = {...object}

console.log("Original: ", object)
console.log("Copied: ", copiedWithSpread)
console.log(object === copiedWithSpread)

const originalArray = [1, 2, 3, 4]
const createdArray = [...originalArray, 5, 6, 7]
console.log("Originnal: ", originalArray)
console.log("Copied with spread plus new element: ", createdArray)

// Task6
function useOfRestOperator(...elements){
    let sum  = elements?.reduce((acc, currentElement) => {
        return acc += currentElement
    }, 0)
    
    return sum
}

const array1 = [2,3,35,6,47,567,587]
const array2 = [2,45,67,567,6,867,87,3,35,6,47,567,587]
const sumOfElements1 = useOfRestOperator(...array1)
const sumOfElements2 = useOfRestOperator(...array2)

console.log("Sum of ", array1, ": ", sumOfElements1,  "\n Sum of ", array2, ": ", sumOfElements2)

//  Activity4
// Task7
function multiplicationWithDefaultParams(firstNumber, secondNumber = 5){
    if(!firstNumber) return null
    return firstNumber * secondNumber
}

console.log("Product With both params: 10, 15 => ", multiplicationWithDefaultParams(10, 15))
console.log("Product With single params: 10 => ", multiplicationWithDefaultParams(10))
console.log("Product Without any param => ", multiplicationWithDefaultParams())


//  Activity5
//  Task8

const objectLiteral = {
    name: "Robert downey Jr",
    occupation: "Acting",
    movies: ["Iron Man", "Avengers"],
    getDetails: function () {
        return `${this.name} played role in the following movies: ${this.movies.join(", ")}`;
    },
    updateMovies: function (movies) {
        this.movies = [...this.movies, ...movies]
    }
}


console.log("ObjectLiteral: ", objectLiteral, "\n",objectLiteral.getDetails())
objectLiteral.updateMovies(["SpiderMan, Dolittle"])
console.log("Updated ObjectLiteral: ", objectLiteral, "\n", objectLiteral.getDetails())