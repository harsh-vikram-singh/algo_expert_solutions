class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    // Solution 1: using the helper function recursion
    // const recursor = (node) => {
    //   array.push(node.name);
    //   if (node.children.length === 0) {
    //     return;
    //   } else {
    //     for (let child of node.children) {
    //       recursor(child);
    //     }
    //   }
    // }
    // recursor(this);
		// // console.log(array);
    // return array;

    // Solution 2: without a helper function
    if (array === undefined) {
      array = [];
    }
    console.log(`called on node: ${this.value} with array: ${array}`)
    array.push(this.name);
    if (this.children.length > 0) {
      for (let child of this.children) {
        child.depthFirstSearch(array);
      }
    }
    return array;
    // note: even though this value is not captured, since variables
    // point to the same location in memory, they get appended to the same array
  }
}

// test code
let a = new Node('a');
a.addChild('b');
a.addChild('c');
a.addChild('d');
a.children[0].addChild('e');
a.children[0].addChild('f');
a.children[2].addChild('g');
a.children[2].addChild('h');
a.children[0].children[1].addChild('i');
a.children[0].children[1].addChild('j');
a.children[2].children[0].addChild('k');
console.log(a.depthFirstSearch());
