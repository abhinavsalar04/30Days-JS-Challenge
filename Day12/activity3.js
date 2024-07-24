// Task 4
class CustomError extends Error {
    constructor(message, errorCode){
        super(message)
        this.message = message
        this.errorCode = errorCode
        Error.captureStackTrace(this, this.constructor)
    }
}


function customErrorParent(){
    try {
        console.log
        customErrorChild()
    } catch (error) {
        console.log("Error: ", error?.message)
        console.log("Stack trace: ", error)
    }
}

function customErrorChild(){
    console.log("Child component....")
    throw new CustomError("Error is thrown by child", 401)
} 

customErrorParent()

// Task5
function validateInput(input) {
    try {
        if(!input) {
            throw new CustomError("Invalid input", 403)
        }

        console.log("Valid input: ", input)
    } catch (error) {
        console.log("Error: ", error?.message)
    }
}

validateInput("JavaScript")
validateInput("")
validateInput(undefined)

