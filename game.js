export class Game {
    constructor(name1, name2) {
        this.name1 = name1;
        this.name2 = name2;
        this.currentPlayer = 1;     //unsure?
    }

    getName() {
        return `${this.name1} vs. ${this.name2}`;
    }

    //.token.red
    //.token.black
    playInColumn(currentPlayer) {
        if (currentPlayer === 1) {
            this.currentPlayer = 2

        } else if (currentPlayer === 2) {
            this.currentPlayer = 1;
        }
    }
}
