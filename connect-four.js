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
        // const topGrid = document.querySelectorAll(".click-target");

        let column0 = document.getElementById("column-0");
        let column1 = document.getElementById("column-1");
        let column2 = document.getElementById("column-2");
        let column3 = document.getElementById("column-3");
        let column4 = document.getElementById("column-4");
        let column5 = document.getElementById("column-5");
        let column6 = document.getElementById("column-6");

        if (game.currentPlayer === 1) {
            event.target.classList.add("red");
        } else if (game.currentPlayer === 2) {
            event.target.classList.add("black");
        }

    });
});
