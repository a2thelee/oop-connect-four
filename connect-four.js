import { Game } from "./game.js";

let game;

document.addEventListener("DOMContentLoaded", event => {
    document.getElementById("form-holder").addEventListener("keyup", event => {
        if ((document.getElementById("player-1-name").value) && (document.getElementById("player-2-name").value)) {
            document.querySelector("#new-game").disabled = false;
        }
    });

    document.getElementById("new-game").addEventListener("click", event => {
        event.target.disabled = true;
        updateUI();
    });
});
