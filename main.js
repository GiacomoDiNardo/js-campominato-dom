const gameGrid = document.querySelector(".game-grid")

//creazione griglia
function gridsize (xCells, yCells) {

    //numero di celle da creare
    const cellsNumber = xCells * yCells;

    console.log(cellsNumber);

    let points = 0;
    let findBomb = false;

    for (let i = 0; i < cellsNumber; i++) {
        //creo la cella da inserire in html
        const cell = document.createElement("div");
        //assegno lo stile alla cella
        cell.classList.add("cell");

        //inserisco numeri incrementali da 1 a 100
        cell.dataset.index = i + 1;

        //alert di fine partita
        function gameOver() {
            if (findBomb) {
                alert("Hai perso! Hai totalizzato " + points + " punti");
            } else {
                alert ("Hai vinto!!! Sei un grande.");
            }
        }

        //aggiungo evento al click
        cell.addEventListener ("click", function() {

            // quando clicko una cella non la posso più clickare, se ho perso non posso clickare altro
            if (cell.classList.contains("cell-bomb") || cell.classList.contains("cell-event") || findBomb) {
                
                return;
            }

            //se trovo tutte le caselle giuste ho vinto e non posso clickare altro
            if (points === cellsNumber - bombsList.length) {
                gameOver();
                return;
            }
            //se non è una bomba si colora di blu
            if (!bombsList.includes(i + 1)) {
                cell.classList.add("cell-event");
                points += 1;
                //se è una bomba si colora di rosso
            } else {
                cell.classList.add("cell-bomb");
                findBomb = true;
                gameOver();
            }
            
            console.log("clickato " + i);
            console.log("punti " + points);
        })

    
        //inserisco le celle nel contenitore
        gameGrid.append(cell);
    }

    //creo un array per i numeri che rappresenteranno le bombe
    const bombsList = [];
    
    do {
        //genero numeri casuali per la posizione delle bombe
        const bombNumber = Math.floor(Math.random() * cellsNumber + 1);
    
        //pusho il numero solo se non è già presente nella lista
        if (!bombsList.includes(bombNumber)) {
            bombsList.push(bombNumber);
        }
    } while (bombsList.length < 16);

    console.log(bombsList);

    //do una dimensione al container per avere una griglia quadrata
    gameGrid.style.width = `calc(var(--cell-size) * ${xCells}`;
}

gridsize(10, 10);