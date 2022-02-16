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
    let obalanserad = false
    const stack = new Stack();
    const stack2 = new Stack();
    let myString = prompt('Ditt uttryck:');
    for (i = 0; i < myString.length; i++) {
        if (stack2.length > stack.length) {
            obalanserad = true
            alert('Obalansered')
            break;
        } else if (myString[i] === '(') {
            stack.push(myString[i]);
        } else if (myString[i] === ')') {
            stack2.push(myString[i]);
            }
        }


    if (obalanserad === false && stack.length == stack2.length) {
      alert('Balanserad')
    } else if (obalanserad === true) {
    } else {
      alert('Obalanserad')
    }