export class Game {
    constructor(name1, name2) {
        this.name1 = name1;
        this.name2 = name2;
        this.currentPlayer = 1;     //unsure?
    }

    getName() {
        return `${this.name1} vs. ${this.name2}`;
    }

    playInColumn(event) {
        if (event.target.id === "player-1-name") {
            this.currentPlayer = 2
        } else if (event.target.id === "player-2-name") {
            this.currentPlayer = 1;
        }
    }
}
