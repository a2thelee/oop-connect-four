import { Game } from "./game.js";

let game;
function updateUI() {
    if (game === undefined) {
        document.getElementById("board-holder").classList.add("is-invisible");
    } else {
        document.getElementById("board-holder").classList.remove("is-invisible")
        document.getElementById("game-name").innerHTML = game.getName();

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
            game.playInColumn(game.currentPlayer);
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
