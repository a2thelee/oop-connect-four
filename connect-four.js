import { Game } from "./game.js";

let game;
function updateUI() {
    if (game === undefined) {
        document.getElementById("board-holder").classList.add("is-invisible");
    } else {
        document.getElementById("board-holder").classList.remove("is-invisible")
        document.getElementById("game-name").innerHTML = game.getName();

        // game.currentPlayer  //
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
        game.playInColumn(game.currentPlayer);
        updateUI();
    })

    document.getElementById("click-targets").addEventListener("mouseover", event => {
        const topGrid = document.querySelectorAll(".click-target");


    });
});






//clickTargets -> playInColumn
//if 1, use black
//if 2, use red
