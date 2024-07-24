// Task1
function errorHandler(){
    try {
        console.log("Throwing error...")
        throw new Error("Error thrown explicitly by the function")
    } catch (error) {
        console.log("Error: ", error?.message)
    }
}

errorHandler()

function divisionHandler(numerator, denominator){
    try {
        if(denominator === 0) throw new Error(`${numerator} can not divided by zero!`)
        return numerator / denominator
    } catch (error) {
        console.log("Error: ", error?.message)
        return null
    }
}

console.log("Division result 100 / 5: ", divisionHandler(100, 5))
console.log("Division result: 5 / 0: ", divisionHandler(5, 0))
