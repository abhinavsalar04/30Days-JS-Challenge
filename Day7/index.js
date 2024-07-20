// Activity1
// Task1
const book = {
    title: 'Jungle Book',
    author: 'Author',
    publicationYear: 2008
}

console.log("Book info:", book)

// Task2
console.log("Book title: ", book.title)

// Actvity2
//  Task3
const bookWithMethods = {
    title: 'Jungle Book',
    author: 'Author',
    publicationYear: 2008,
    getBookInfo: () => {
        return `${this.title} book's author is ${this.author}`
    }
}

console.log("Book info using get method: ", bookWithMethods.getBookInfo())

// Task4

const bookInfoWithAction = {
    title: 'Jungle Book',
    author: 'Author',
    publicationYear: 2008,
    getBookInfo: () => {
        return `${this.title} book's author is ${this.author}`
    },
    updateBookPublicationYear: (year) => {
        this.publicationYear = year
    }
}

bookInfoWithAction.updateBookPublicationYear(2009)
console.log("Updated book info: ", bookWithMethods.getBookInfo())


//  Actovity 3
// Task5
const library = {
    libraryName: 'Book Library',
    books: [
        {
            title: 'Jungle Book',
            author: 'Author',
            publicationYear: 2008, 
        },
        {
            title: 'Harry Potter',
            author: 'J K Rolling',
            publicationYear: 2008, 
        },
        {
            title: 'One Man Army',
            author: 'Author',
            publicationYear: 2008, 
        },

    ]
}
console.log("Library: ", library)

// Task6
let libraryInfo = `${library} has following books`
library.books.forEach((book) => {
    libraryInfo += "\t" + book.title
})

console.log(libraryInfo)

// Activity4
//  Task7
const useOfThis = {
    title: 'Jungle Book',
    author: 'Author',
    publicationYear: 2008,
    getBookInfo: () => {
        return `${this.title} book's publication year is ${this.publicationYear}`
    }
}

console.log(useOfThis.getBookInfo())

//  Activity5
//  Task8
for(let key in book){
    console.log("Property: ", key, " value: ", book[key])
}

// Task9
console.log("All keys of book object: ", Object.keys(book))
console.log("All keys of book object: ", Object.keys(bookWithMethods))
console.log("All values of keys of book: ", Object.values(book))
console.log("All values of keys of book: ", Object.values(library))

