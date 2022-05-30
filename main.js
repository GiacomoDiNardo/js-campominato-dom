const gameGrid = document.querySelector(".game-grid")

//creazione griglia
function gridsize (xCells, yCells) {

    //numero di celle da creare
    const cellsNumber = xCells * yCells;

    console.log(cellsNumber);

    for (let i = 0; i < cellsNumber; i++) {
        //creo la cella da inserire in html
        const cell = document.createElement("div");
        //assegno lo stile alla cella
        cell.classList.add("cell");

        //inserisco numeri incrementali da 1 a 100
        cell.innerText = i + 1;

        //aggiungo evento al click
        cell.addEventListener ("click", function() {
            cell.classList.add("cell-event")
        })
    
        //inserisco le celle nel contenitore
        gameGrid.append(cell);
    }

    //creo un array per i numeri che rappresenteranno le bombe
    const bombsList = []

    //genero numeri casuali per la posizione delle bombe
    for (let i = 0; i < 16; i++) {
        const bombNumber = Math.floor(Math.random() * cellsNumber + 1);

        //pusho il numero solo se non è già presente nella lista
        if (!bombsList.includes(bombNumber)) {
            bombsList.push(bombNumber);
        }
    }

    console.log(bombsList);

    //do una dimensione al container per avere una griglia quadrata
    gameGrid.style.width = `calc(var(--cell-size) * ${xCells}`;
}

gridsize(10, 10)