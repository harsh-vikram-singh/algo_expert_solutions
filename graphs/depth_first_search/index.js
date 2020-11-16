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
    const recursor = (node) => {
      array.push(node.name);
      if (node.children.length === 0) {
        return;
      } else {
        for (let child of node.children) {
          recursor(child);
        }
      }
    }
    recursor(this);
		// console.log(array);
    return array;
  }
}

// test code
// let a = new Node('a');
// a.addChild('b');
// a.addChild('c');
// a.addChild('d');
// a.children[0].addChild('e');
// a.children[0].addChild('f');
// a.children[2].addChild('g');
// a.children[2].addChild('h');
// a.children[0].children[1].addChild('i');
// a.children[0].children[1].addChild('j');
// a.children[2].children[0].addChild('k');
// console.log(a.depthFirstSearch());
