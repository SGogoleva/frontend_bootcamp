const playField = document.getElementsByClassName("tile");
const inventoryList = document.querySelectorAll(".item")
const axe = document.getElementById("axe")
const pickaxe = document.getElementById("pickaxe");
const shovel = document.getElementById("shovel");
const collectedItems = document.getElementsByClassName("collected");
let counterTree = 0
let counterRock = 0
let counterDirt = 0

const getRandomInt = function (num) {
  return Math.floor(Math.random() * num) + 1;
};

const colorTiles = function () {
  for (let i = 0; i < playField.length; i++) {
    const bgColorId = getRandomInt(3);
    switch (bgColorId) {
      case 1: // dirt color
        playField[i].classList.add("dirt");
        break;
      case 2: // rock color
        playField[i].classList.add("rock");
        break;
      case 3: // grass color
        playField[i].classList.add("grass");
        break;
    }
  }
};
colorTiles();

const getGrassTiles = function () {
  for (let i = 0; i < playField.length; i++) {
    if (playField[i].classList.contains("grass")) {
      const treeId = getRandomInt(2);
      if (treeId == 1) {
        playField[i].classList.add("tree");
      }
    }
  }
};
getGrassTiles();

document.addEventListener("click", (clickOn) => {
    if (clickOn.target.classList.contains("item")) {
        inventoryList.forEach((item) => {
            item.classList.remove("clicked")
            item.style.border = "1px solid #F3F3F3"
            console.log("the tool is UNclicked")
        })        

        clickOn.target.classList.add("clicked")
        clickOn.target.style.border = "2px solid #371AB8"
        console.log("the tool is clicked")
        document.removeEventListener("click", clickOnTile)
        document.addEventListener("click", clickOnTile)
        document.removeEventListener("click", clickOnCollected)
        document.addEventListener("click", clickOnCollected)
    }
})

const clickOnTile = function (action) {
    if (axe.classList.contains("clicked")) {
        console.log("the axe is clicked")
        if (action.target.classList.contains("tree")) {
            action.target.classList.remove("tree")
            action.target.classList.add("grass")
            counterTree += 1
            collectedItems[0].classList.add("collected_tree")
            collectedItems[0].textContent = counterTree
            console.log("tree removed")
        }
    }
    else if (pickaxe.classList.contains("clicked")) {
        console.log("the pickaxe is clicked")
        if (action.target.classList.contains("rock")) {
            action.target.classList.remove("rock")
            action.target.classList.add("empty")
            counterRock += 1
            collectedItems[1].classList.add("collected_rock")
            collectedItems[1].textContent = counterRock
            console.log("rock removed")
        }
    }
    else if (shovel.classList.contains("clicked")) {
        console.log("the shovel is clicked")
        if (action.target.classList.contains("dirt") || action.target.classList.contains("grass") && !action.target.classList.contains("tree")) {
            action.target.classList.remove("dirt")
            action.target.classList.add("empty")
            counterDirt += 1
            collectedItems[2].classList.add("collected_dirt")
            collectedItems[2].textContent = counterDirt
            console.log("dirt removed")
        }
    }
}

const clickOnCollected = function (removeAction) {
    if (collectedItems[1].classList.contains("clicked")) {
        console.log("collected_rock is clicked")
        if (removeAction.target.classList.contains("empty")){
            removeAction.target.classList.remove("empty")
            removeAction.target.classList.add("rock")
            counterRock -= 1
            collectedItems[1].textContent = counterRock
            if (counterRock == 0) {
                collectedItems[1].classList.remove("collected_rock")
            }
            console.log("collected_rock is removed")
        }
    }
    else if (collectedItems[0].classList.contains("clicked")) {
        console.log("collected_tree is clicked")
        if (removeAction.target.classList.contains("grass")){
            removeAction.target.classList.add("tree")
            counterTree -= 1
            collectedItems[0].textContent = counterTree
            if (counterTree == 0) {
                collectedItems[0].classList.remove("collected_tree")
            }
            console.log("collected_tree is removed")
        }
    }
    else if (collectedItems[2].classList.contains("clicked")) {
        console.log("collected_dirt is clicked")
        if (removeAction.target.classList.contains("empty")){
            removeAction.target.classList.remove("empty")
            removeAction.target.classList.add("dirt")
            counterDirt -= 1
            collectedItems[2].textContent = counterDirt
            if (counterDirt == 0) {
                collectedItems[2].classList.remove("collected_dirt")
            }
            console.log("collected_dirt is removed")
        }
    }
}


