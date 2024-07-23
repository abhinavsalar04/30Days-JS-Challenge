// Activity1
// Task1
const promiseResolve = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise has been resolved!')
    }, 2000)
})

promiseResolve.then((data) => {
    console.log("Promise resolved: ", data)
}).catch((error) => {
    console.log("Error: ", error)
})

// Task2
const promiseReject = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise has been rejected due to unknown error!')
    }, 2000)
})

promiseReject.then((data) => {
    console.log("Promise resolved: ", data)
}).catch((error) => {
    console.log("Error: Promise rejected: ", error)
})


// Activity2
// Task3

const promiseChaining = new Promise((resolve, reject) => {
    setTimeout(() => {
        const bikeInfo = {name: 'Puslor', engineCapacity: '180cc', color: 'Black', fuelTankCapacity: '10 ltrs', price: 150000} 
        resolve(bikeInfo)
    }, 3000)
})

promiseChaining.then((cartData) => {
    console.log("Item added in cart!")
    console.log(`Bike ${cartData.name}, with powerfull engine of ${cartData.engineCapacity} and fuel tank capacity of ${cartData.fuelTankCapacity}`)
    console.log("Generating price detail....")
    return new Promise((resolve, reject) => {
        console.log("Total price: ", (cartData.price + 5000))
        resolve({price: (cartData.price + 5000)})
    }).then((data) => {
        return data
    })
}).then((data) => {
    console.log(`Payment of ${data.price} was successfull`)
    return null
}).catch((error) => {
    console.log("Error: ", error)
})

// Activity3
// Task4
const promise_Resolve = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Async await example- promise is resolved!")
    }, 2000)
})

async function promiseResolveHandlerAsyncAwait(){
    try {
        const prmoiseResponse = await promise_Resolve
        console.log("Promise response: ", prmoiseResponse)
    } catch (error) {
        console.log("Error: ", error)
    }
}
promiseResolveHandlerAsyncAwait()

//  Task5
const promise_Reject = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Async await example- promise is rejected!")
    }, 2000)
})

async function promiseRejectHandlerAsyncAwait(){
    try {
        const prmoiseResponse = await promise_Reject
        console.log("Promise response: ", prmoiseResponse)
    } catch (error) {
        console.log("Error: ", error)
    }
}

promiseRejectHandlerAsyncAwait()

// Activity4
// Task6
function fetchAPIExamplePromise() {
    fetch("https://api.github.com/users/abhinavsalar04")
        .then((response) => {
            return response.json(); // Parse the JSON response
        })
        .then((data) => {
            console.log("Fetch API response using promises: ", data);
        })
        .catch((error) => {
            console.log("Error while fetching data from API: ", error);
        });
}

// Task7
fetchAPIExamplePromise();

async function fetchAPIExampleAsynAwait(){
    try {
        const response = await fetch('https://api.github.com/users/abhinavsalar04')
        const jsonResponse = await response.json()
        console.log("Fetch API response using async-await: ", jsonResponse)
    } catch (error) {
        console.log("Error while fetching data from API: ", error)
    }
}
fetchAPIExampleAsynAwait()


//  Acticity5
// Task8
const promiseBookInfo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const bookInfo = {name: 'Jungle Book', author: 'Author'}
            resolve({bookInfo})
        }, 200)
    })
}

const promiseGenerateQuote = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({quote: "Quantum Mechanics will going to change everything!"})
        }, 500)
    })
}

const promiseRandomNumber = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 1000)
            resolve({randomNumber})
        }, 100)
    })
}

Promise.all([promiseBookInfo(), promiseGenerateQuote(), promiseRandomNumber()]).then((data) => {
    const [bookInfo, quote, randomNumber] = data
    console.log("BookInfo: ", bookInfo?.bookInfo)
    console.log("Quote: ", quote?.quote)
    console.log("Random number: ", randomNumber?.randomNumber)
})

//  Task9
Promise.race([promiseBookInfo, promiseGenerateQuote, promiseRandomNumber]).then((data) => {
   console.log("Response return by Promise race: ", data)
})

