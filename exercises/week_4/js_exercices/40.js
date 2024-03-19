// JavaScript – Font size changer
// The following exercise contains the following subjects:
// ● DOM
// Instructions
// Create a webpage that has some text and two buttons with ‘+’
// and ‘-‘ Clicking the ‘+’ button should increase the text’s font-size
// and clicking the ‘-‘ should decrease it.
// Limit the font size to be between 6px and 100px.
const textMessage = document.createElement("p")
textMessage.className = "ex_40"
textMessage.textContent = "Hello, it's me!"
textMessage.style.fontSize = "30px"

const plusBtn = document.createElement("button")
plusBtn.className = "plus"
plusBtn.textContent = "+"
const minusBtn = document.createElement("button")
minusBtn.className = "minus"
minusBtn.textContent = "-"

let fontSize = 30

function increaseFontSize() {
    if (fontSize <= 100) {
        fontSize += 1
        textMessage.style.fontSize = `${fontSize}px`
    }
}

function decreaseFontSize() {
    if (fontSize >= 6) {
        fontSize -= 1
        textMessage.style.fontSize = `${fontSize}px`
    }
}

plusBtn.addEventListener("click", increaseFontSize) 
minusBtn.addEventListener("click", decreaseFontSize) 

document.querySelector("body").appendChild(textMessage) 
document.querySelector("body").appendChild(plusBtn)
document.querySelector("body").appendChild(minusBtn)

