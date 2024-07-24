// Activity2
// Task3

function errorHandler(age){
    try {
        console.log("Try block...")
        if(age < 18){
            throw new Error("Number is less than 18")
        }
    
        console.log(`User is ${age} years old so user is eligible for vote!`)
    } catch (error) {
        console.log("Catch block...")
        console.log("Error: ", error?.message)
        console.log("Stack trace: ", error?.stackTrace)
    } finally {
        console.log("Finally block...\n Inside finally block input: ", age)
    }
}

errorHandler(18)
errorHandler(17)
errorHandler(47)
