// Activity1

// Task1
const num = 100
if(num > 0){
    console.log(`${num} is positive`)
} else if(num < 0){
    console.log(`${num} is negative`)
} else {
    console.log(`${num} is zero`)
}

// Task2
const age = 19
if(age >= 18){
    console.log(`Person is eligible to vote`)
} else{
    console.log(`Person is not eligible to vote`)
}

const num1 = 178, num2 = 98888, num3 = 5090

if(num1 >= num2){
    if(num1 >= num3){
        console.log(`${num1} is greatest among ${num1}, ${num2}, ${num3}`)
    } else {
        console.log(`${num3} is greatest among ${num1}, ${num2}, ${num3}`)
    }
} else if(num2 >= num3) {
    console.log(`${num2} is greatest among ${num1}, ${num2}, ${num3}`)
} else {
    console.log(`${num3} is greatest among ${num1}, ${num2}, ${num3}`)
}

// Activity3
// Task1
const day = 5
switch(day){
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
        break
    default:
        console.log("Invalid day!")
}

// Task2
const score = 87

switch(true){
    case score >= 90:
        console.log("Your Grade is A")
        break
    case score >= 85 && score < 90:
        console.log("Your Grade is B")
        break
    case score >= 75 && score < 85:
        console.log("Your Grade is C")
        break
    case score >= 60 < 75:
        console.log("Your Grade is D")
        break
    case score >= 50 && score < 60 :
        console.log("Your Grade is E")
        break
    default:
        console.log("Your Grade is F")
}

// Activity4
const even_odd = 5453767346
console.log(even_odd % 2 == 0 ? `${even_odd} is an even number` : `${even_odd} is an odd number`)

// ACtivity5
const year = 2500
console.log((year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? `${year} is a leap year` : `${year} is not a leap year` )
