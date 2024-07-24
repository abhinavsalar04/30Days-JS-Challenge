// Task8

function handlePromise(){
    fetch("https://api.invalid.url.com/invalid/")
    .then((data) => {
        console.log(`Promise resposne: `, data)
    }).catch((error) => {
        console.log(`Error in fetching data: ${error}`)
    })
}
handlePromise()

// Task9
async function handlePromiseAsync(){
    try {
        const response = await fetch("https://api.invalid.com/users/abhinavsalar04")
        console.log("Async -> Response: ", response)
    } catch (error) {
        console.log(`Async Error in fetching data:`, error)
    }
}

handlePromiseAsync()