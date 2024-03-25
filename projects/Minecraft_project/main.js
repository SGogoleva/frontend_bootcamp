const playField = document.getElementsByClassName("tile")

const getRandomInt = function(num) {
    return Math.floor(Math.random() * num) + 1
}

const colorTiles = function() {
    for(let i = 0; i < playField.length; i++) {
        const bgColorId = getRandomInt(3)
        switch(bgColorId) {
            case 1: // dirt color
                playField[i].style.backgroundColor = "#845034"
                break;
            case 2: // rock color
                playField[i].style.backgroundColor = "#787473"
                break;
            case 3: // grass color
                playField[i].style.backgroundColor = "#477639"
                break;
        }
    }
}
colorTiles()

const getGrassTiles = function() {
    for(let i = 0; i < playField.length; i++) {
        const currentTileColor = window.getComputedStyle(playField[i]).getPropertyValue("background-color")
        if (currentTileColor === "rgb(71, 118, 57)") {
            const treeId = getRandomInt(2)
            if (treeId == 1) {
                playField[i].classList.add("tree_background")
            }
        }
    }
}
getGrassTiles()

const axeField = document.getElementById("axe")
const pickaxeField = document.getElementById("pickaxe")
const shovelField = document.getElementById("shovel")
const makeFieldActive = function(field) {
    field.style.border = "2px solid #371AB8"
}

// axeField.addEventListener("click", () => {
//     if (this.style.border === "1px solid #F3F3F3") {
//         this.style.border = "2px solid #371AB8"
//     }
//     else {
//         this.style.border = "1px solid #F3F3F3"
//     }
// })




// axeField.addEventListener("click", makeFieldActive(axeField), false)

// makeFieldActive(axeField)
const toolList = document.getElementsByClassName("tool")
const tryY = window.getComputedStyle(axeField).getPropertyValue("border")
console.log(tryY)

for(let i = 0; i < toolList.length; i++) {
    let currentStatus = window.getComputedStyle(toolList[i]).getPropertyValue("border")
    toolList[i].addEventListener("click", () => {
        if (currentStatus === "0.8px solid rgb(243, 243, 243)") {
            toolList[i].style.border = "2px solid #371AB8"
            currentStatus = window.getComputedStyle(toolList[i]).getPropertyValue("border")
        }
        else {
            toolList[i].style.border = "1px solid #F3F3F3"
            }
        })
    console.log(currentStatus)
}

// for(let i = 0; i < toolList.length; i++) {
//     toolList[i].addEventListener("click", () => {
//         toolList[i].style.border = "2px solid #371AB8"
//     })
// }
// 0.8px solid rgb(243, 243, 243)
//1px solid #F3F3F3

// console.log(toolList)

// const bgColorId = function (max = 3) {
//     return Math.floor(Math.random() * max) + 1;
// }
// console.log(bgColorId())

// rgb(71, 118, 57) for grass

