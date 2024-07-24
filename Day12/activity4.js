// Task6

function validateCredentials({name, email}){
    if(name && email) return {status: true, message: ""}
    let message = ""
    if(!name && !email){
        message = "Invalid Data! Name and Email are mandaotry to create user"
    }
    else if(!email){
        message = "Invalid Data! Email is mandatory to create user"
    } else {
        message = "Invalid Data! Name is mandatory to create user"
    }
    return {status: false, message: message}
}

function generateUserId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let userId = '';

    for (let i = 0; i < 16; i++) {
        userId += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

return userId;
}

function createUser({name, email}){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const resposne = validateCredentials({name, email}) 
            if(resposne?.status === false) {
                reject({message: resposne?.message, user: null})
            }
            const userId = generateUserId()
            const userInfo = {_id: userId, name: name, email: email}
            resolve({user: userInfo, message: "User created successfully"})
        }, 200)
    })
}

function handlePromise({name, email}){
    createUser({name, email}).then((data) => {
        console.log(`Promise resolved.\n Message: ${data?.message}\nUserInfo: `, data?.user)
    }).catch((error) => {
        console.log(`Promise rejected.\n Message: ${error?.message}`)
    })
}

const userInfo = [
    {
        name: "John",
        email: "john@domain.com"
    },
    {
        name: "Mack"
    },
    {
        email: "petric@yahoo.com"
    },
    {

    }
]

userInfo?.map((user) => {
    handlePromise({...user})
})

// Task7
async function handlePromiseAsync({name, email}){
    try {
        const response = await createUser({name, email})
        console.log(`Async -> Promise resolved.\n Message: ${response?.message}\nUserInfo: `, response?.user)
    } catch (error) {
        console.log(`Async -> Promise rejected.\n Message: ${error?.message}`)
    }
}

userInfo?.map((user) => {
    handlePromiseAsync({...user})
})