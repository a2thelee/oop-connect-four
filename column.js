export class Column {
  constructor() {
    this.stack = Array(6);
    this.stack.fill(null);
  }



  add(playerNumber) {
    for (let i = this.stack(length - 1); i >= 0; i--) {
      if (this.stack[i] === null) {
        this.stack[i] = playerNumber;
        break;      //pretty much stops the loop from iterating further
      }
    }
  }

  getTokenAt(number) {    //checking to see if the element at that index of this.stack is empty or not
    return this.stack[number];
  }
}
