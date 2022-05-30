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
            //se non è una bomba si colora di blu
            if (!bombsList.includes(i + 1)) {
            cell.classList.add("cell-event")
                //se è una bomba si colora di rosso
            } else {
               cell.classList.add("cell-bomb")
            }
            
        })
    
        //inserisco le celle nel contenitore
        gameGrid.append(cell);
    }

    //creo un array per i numeri che rappresenteranno le bombe
    const bombsList = []
    
    do {
        //genero numeri casuali per la posizione delle bombe
        const bombNumber = Math.floor(Math.random() * cellsNumber + 1);

        //pusho il numero solo se non è già presente nella lista
        if (!bombsList.includes(bombNumber)) {
            bombsList.push(bombNumber);
        }
        } while (bombsList.length < 16)

    console.log(bombsList);

    //do una dimensione al container per avere una griglia quadrata
    gameGrid.style.width = `calc(var(--cell-size) * ${xCells}`;
}

gridsize(10, 10)