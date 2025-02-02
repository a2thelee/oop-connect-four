import { Game } from "./game.js";

let game;
function updateUI() {
    if (game === undefined) {
        document.getElementById("board-holder").classList.add("is-invisible");
    } else {
        document.getElementById("board-holder").classList.remove("is-invisible")
        document.getElementById("game-name").innerHTML = game.getName();

        for (let i = 0; i <= 6; i++) {
            if (game.isColumnFull(i)) {
                document.getElementById(`column-${i}`).classList.add("full");
            } else {
                document.getElementById(`column-${i}`).classList.remove("full");
            }
        }

        for (let i = 0; i <= 5; i++) {
            for (let j = 0; j <= 6; j++) {
                let square = document.getElementById(`square-${i}-${j}`);
                square.innerHTML = "";

                if (game.getTokenAt(i, j) === 1) {
                    let token = document.createElement("div")
                    token.classList.add("token", "red");
                    square.appendChild(token);
                } else if (game.getTokenAt(i, j) === 2) {
                    let token = document.createElement("div")
                    token.classList.add("token", "black");
                    square.appendChild(token);
                }
            }
        }

        const topGrid = document.getElementById("click-targets");

        if (game.currentPlayer === 1) {
            topGrid.classList.add("red");
            topGrid.classList.remove("black");
        } else {
            topGrid.classList.add("black");
            topGrid.classList.remove("red");
        }
    }
}


document.addEventListener("DOMContentLoaded", event => {
    document.getElementById("form-holder").addEventListener("keyup", event => {
        if ((document.getElementById("player-1-name").value) && (document.getElementById("player-2-name").value)) {
            document.querySelector("#new-game").disabled = false;
        }
    });

    document.getElementById("new-game").addEventListener("click", event => {
        // event.target.disabled = true;
        const player1 = document.getElementById("player-1-name").value;
        const player2 = document.getElementById("player-2-name").value;
        game = new Game(player1, player2);
        updateUI();
    });

    document.getElementById("click-targets").addEventListener("click", event => {
        if (event.target.id !== event.currentTarget.id) {
            game.playInColumn(event.target.id[event.target.id.length - 1]);
            updateUI();

        }
    });

    document.getElementById("click-targets").addEventListener("mouseover", event => {
        if (game.currentPlayer === 1) {
            event.target.classList.add("red");
        } else if (game.currentPlayer === 2) {
            event.target.classList.add("black");
        }



    });
});
