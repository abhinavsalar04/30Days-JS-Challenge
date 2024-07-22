// Activity1
// Task1
const paragraph = document.getElementById('para1');
paragraph.innerHTML = `Paragraph text updated using DOM manipulation`;

// Task2
const div = document.getElementsByClassName('div-container')[0]
div.style.backgroundColor = `green`

// Activity2
// Task3
const newDiv = document.createElement('div')
newDiv.textContent = 'This div is created using JS'
newDiv.style.padding = "10px"
newDiv.style.margin = "10px"
newDiv.style.backgroundColor = 'cyan'
newDiv.className = 'new-div'
const body = document.getElementsByTagName('body')[0]
body.appendChild(newDiv)

// Task4
const li = document.createElement('li')
li.textContent = 'Mango Shake'
li.style.color = 'yellow'
li.style.backgroundColor = 'green'
li.style.width = '100px'
li.style.borderRadius = "5px"
li.style.padding = "2px"

const list = document.getElementById('unordered-list-drinks')
list.appendChild(li)

// Activity3
// Task5
const addedDiv = document.getElementsByClassName('new-div')[0]
addedDiv.remove()

// Task6
const listElement = document.getElementById('unordered-list-drinks')
const option = document.getElementsByTagName('li')[2]

// removing the added element
listElement.removeChild(option)

//  Activity4
//  Task7
const image = document.getElementById('image')
const newImageSrc = 'https://www.techsmith.com/blog/wp-content/uploads/2022/03/resize-image.png'
image.setAttribute('src', newImageSrc)
image.style.width = "100px"

//  Task8
image.classList.add('dummy-class')
image.classList.add('added-class')
image.classList.remove('dummy-class')

// Activity5
const button = document.getElementById('button')
button.addEventListener('click', () => {
    const div = document.getElementsByClassName('div-container')[0]
    div.textContent = `Text updated using button click`
    div.style.backgroundColor = 'red'
    div.style.color = 'white'
})


const secondOption = document.getElementsByTagName('li')[1]
console.log(secondOption)
secondOption.addEventListener('mouseover', () => {
    secondOption.style.border = "2px solid green"
    secondOption.style.borderRadius = "5px"
    secondOption.style.width = "50px"
})

//  to remove effects when mouse is removed away from element
secondOption.addEventListener('mouseout', () => {
    secondOption.style.border = ""
    secondOption.style.borderRadius = ""
    secondOption.style.width = ""
})




