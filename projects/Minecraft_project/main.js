const playField = document.getElementsByClassName("tile")
// let b = playField.querySelectorAll("div")
console.log(playField.length)
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



// const bgColorId = function (max = 3) {
//     return Math.floor(Math.random() * max) + 1;
// }
// console.log(bgColorId())

// rgb(71, 118, 57) for grass