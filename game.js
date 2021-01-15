import { Column } from "./column.js";

export class Game {
    constructor(name1, name2) {
        this.name1 = name1;
        this.name2 = name2;
        this.currentPlayer = 1;     //unsure?
        this.columns = [new Column(), new Column(), new Column(), new Column(), new Column(), new Column(), new Column()]
    }

    getName() {
        return `${this.name1} vs. ${this.name2}`;
    }

    //.token.red
    //.token.black
    playInColumn(index) {

        index = Number(index);
        this.columns[index].add(this.currentPlayer);

        if (this.currentPlayer === 1) {
            this.currentPlayer = 2

        } else if (this.currentPlayer === 2) {
            this.currentPlayer = 1;
        }
    }

    getTokenAt(rowIndex, columnIndex) {
        return this.columns[columnIndex].getTokenAt(rowIndex);
    }

    isColumnFull(colIndex) {
        return this.columns[colIndex].isFull();
    }
}

//Number()
