// Activity1
// Task1
const button = document.getElementById("button")
button.addEventListener('click', () => {
    const para1 = document.getElementById("para1")
    para1.textContent = `Paragraph content changed using JS Dom manipulation`
})

// Task2
const imageElement = document.getElementById('image')
imageElement.addEventListener('dblclick', () => {
    imageElement.style.display = 'none'
    setTimeout(() => {
        imageElement.style.display = 'inline'
    }, 1000)
})

// Activity2
// Task3
const para = document.getElementById("para1")
para.addEventListener('mouseover', () => {
    para.style.border = "2px solid green"
    para.style.borderRadius = "5px"
    para.style.backgroundColor = 'green'
    para.style.color = 'white'
})


//  Task4
para.addEventListener('mouseout', () => {
    para.style.border = ""
    para.style.borderRadius = ""
    para.style.backgroundColor = 'white'
    para.style.color = 'black'
})

// Activity3
// Task5
const inputKeyDown = document.getElementById('key-down')
const keyDownOutput = document.getElementById('key-down-output')
inputKeyDown.addEventListener('keydown', (e) => {
    console.log(e.key)
    keyDownOutput.value = `Key down: ${e.key}`
})

// Task6
const inputKeyUp = document.getElementById('key-up')
const keyUpOutput = document.getElementById('key-up-output')
inputKeyUp.addEventListener('keyup', (e) => {
    console.log(e.key)
    keyUpOutput.value = `Key up: ${e.key}`
})

// Activity4
// Task7
const form = document.getElementById("form")
const formOutput = document.createElement('div')
form.appendChild(formOutput)
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());
    console.log(values); // Log form values to the console
    formOutput.textContent = `Name: ${values.name}, Email: ${values.email}`;
})

// Task8
const dropdown = document.getElementById('dropdown')
const selectedOption = document.createElement('p')
dropdown.insertAdjacentElement('afterend', selectedOption);
dropdown.addEventListener('change', (e) => {
    console.log(e.target.value)
    selectedOption.textContent = `Selected option: ${e.target.value}`
})

// Activity5
// Task9
const list = document.getElementsByClassName('list')[0]
const selectedItem = document.getElementById('selected-item')
list.addEventListener('click', (e) => {
    console.log(e.target.textContent)
    selectedItem.textContent = e.target.textContent;
})

// Task10
const parentDiv = document.getElementById('parent-container');
const dynamicDiv = document.createElement('div');
dynamicDiv.id = 'child-container';
dynamicDiv.style.backgroundColor = 'cyan';
dynamicDiv.style.color = 'green';
dynamicDiv.innerHTML = 'Child Container';

parentDiv.appendChild(dynamicDiv);

dynamicDiv.addEventListener('click', (e) => {
    console.log("Child Clicked:", e.target.textContent);

    // Creating custom event
    const customEvent = new CustomEvent('customEvent', {
        bubbles: true,
        cancelable: true,
        detail: { message: 'Custom event triggered from child!' } // Custom data
    });

    // Dispatch
    dynamicDiv.dispatchEvent(customEvent);
});


parentDiv.addEventListener('customEvent', (e) => {
    console.log("Parent Received Custom Event:", e.target.textContent);
    console.log("Event Detail custom message:", e.detail.message); 
});


