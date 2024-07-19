// Activity1
// nums 1-10, multiplicate table
// Task1

for(let num = 1; num <= 10; num++){
    process.stdout.write(num + "\t")
}

//  Task2
const table_num = 10
for(let idx = 1; idx <= 10; idx++){
    process.stdout.write((table_num * idx) + "\t")
}

// Activity2
//  Task1
let sum = 0, currentNumber = 1;
while(currentNumber <= 10){
    sum += currentNumber
    currentNumber++
}
console.log("\nSum of numbers from 1-10: ", sum)

//  Task2
let tenToOne = 10
while(tenToOne > 0){
    process.stdout.write(tenToOne + "\t")
   tenToOne--
}

// Activity 3
// Task1
process.stdout.write("\n")
let oneToFive = 1
do{
    process.stdout.write(oneToFive + "\t")
    oneToFive++
}while(oneToFive <=5 )

// Task2
let fact = 1, factNum = 8, tempFactNum = 8
do{
    fact *= tempFactNum
    tempFactNum--
}while(tempFactNum >= 1)
console.log(`\nFactorial of number ${factNum} is ${fact}`)


// Activity4

for(let row = 0; row < 5; row++){
    for(let col = 0; col <= row; col++){
        process.stdout.write("*" + "\t")
    }
    process.stdout.write("\n")
}

// Activity5
// Task8

for(let num = 1; num <= 10; num++){
    if(num === 5) continue
    process.stdout.write(num + "\t")
}

console.log("\n")
//  Task9
for(let num = 1; num <= 10; num++){
    if(num === 7) break
    process.stdout.write(num + "\t")
}
