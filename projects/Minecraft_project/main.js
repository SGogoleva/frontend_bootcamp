const playField = document.getElementsByClassName("tile");

const getRandomInt = function (num) {
  return Math.floor(Math.random() * num) + 1;
};

const colorTiles = function () {
  for (let i = 0; i < playField.length; i++) {
    const bgColorId = getRandomInt(3);
    switch (bgColorId) {
      case 1: // dirt color
        playField[i].classList.add("dirt");
        playField[i].style.backgroundColor = "#845034";
        break;
      case 2: // rock color
        playField[i].classList.add("rock");
        playField[i].style.backgroundColor = "#787473";
        break;
      case 3: // grass color
        playField[i].classList.add("grass");
        playField[i].style.backgroundColor = "#477639";
        break;
    }
  }
};
colorTiles();

const getGrassTiles = function () {
  for (let i = 0; i < playField.length; i++) {
    const currentTileColor = window
      .getComputedStyle(playField[i])
      .getPropertyValue("background-color");
    if (currentTileColor === "rgb(71, 118, 57)") {
      const treeId = getRandomInt(2);
      if (treeId == 1) {
        playField[i].classList.add("tree");
      }
    }
  }
};
getGrassTiles();

const toolList = document.getElementsByClassName("item");
for (let i = 0; i < toolList.length; i++) {
  toolList[i].addEventListener("click", () => {
    for (let j = 0; j < toolList.length; j++) {
      toolList[j].classList.remove("cliked");
      toolList[j].style.border = "1px solid #F3F3F3";
    }
    toolList[i].classList.add("cliked");
    toolList[i].style.border = "2px solid #371AB8";

    const collectedItems = document.getElementsByClassName("collected");

    if (toolList[i].id == "axe") {
        let counterTree = 0
        document.addEventListener("click", (clickEvent) => {
            if (clickEvent.target.classList.contains("tree")) {
                clickEvent.target.style.background = "none"
                clickEvent.target.classList.remove("tree")
                clickEvent.target.classList.add("grass")
                clickEvent.target.style.backgroundColor = "#477639"
                counterTree += 1
                collectedItems[0].classList.add("collected_tree")
                collectedItems[0].textContent = counterTree; 
            }
        })
    }
    if (toolList[i].id == "pickaxe") {
      let counterRock = 0;
      document.addEventListener("click", (clickEvent) => {
        if (clickEvent.target.classList.contains("rock")) {
            clickEvent.target.style.backgroundColor = "#DCD1C7"
            clickEvent.target.classList.remove("rock")
            counterRock += 1
            collectedItems[1].style.backgroundColor = "#787473";
            collectedItems[1].textContent = counterRock; 
        }
      })
    }
    if (toolList[i].id == "shovel") {
        let counterDirt = 0;
        document.addEventListener("click", (clickEvent) => {
          if (clickEvent.target.classList.contains("dirt")) {
            clickEvent.target.style.backgroundColor = "#DCD1C7"
            clickEvent.target.classList.remove("dirt")
            counterDirt += 1
            collectedItems[2].style.backgroundColor = "#845034";
            collectedItems[2].textContent = counterDirt; 
          }
          if (clickEvent.target.classList.contains("grass") && !clickEvent.target.classList.contains("tree")) {
            clickEvent.target.style.backgroundColor = "#DCD1C7"
            clickEvent.target.classList.remove("grass")
            counterDirt += 1
            collectedItems[2].style.backgroundColor = "#845034";
            collectedItems[2].textContent = counterDirt; 
          }
        })
    }
})
}
