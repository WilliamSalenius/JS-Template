// En klass för stackens objekt
class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  // Själva stacken
  class Stack {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    // Metod för att lägga till objekt på stacken
    push(val) {
      const newNode = new Node(val);
  
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        const temp = this.head;
        this.head = newNode;
        this.head.next = temp;
      }
  
      this.length++;
      return this;
    }
  
    // Metod för att ta bort objekt från stacken
    // (Det borttagna objektet returneras)
    pop() {
      if (!this.head) return null;
  
      let temp = this.head;
      this.head = this.head.next;
  
      this.length--;
      return temp.val;
    }

  }


    // Demonstration
    const stack = new Stack();
    let myString = prompt('Ditt uttryck:')
    for (i = 0; i < myString.lenght; i++) {
        if (myString[i] === '(') {
            stack.push(myString[i])
        }
    }