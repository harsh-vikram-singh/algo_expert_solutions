class Node {
  constructor(name){
    this.name = name;
    this.children = [];
  }
  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }
  breadthFirstSearch(array) {
    array.push(this.name);
		let tempArray = [];
    let next;
    if (this.children.length > 0) {
      this.children.forEach(val => {
        tempArray.push(val);
      })
    }
    while (tempArray.length > 0) {
			//console.log(tempArray);
      next = tempArray.shift();
			console.log('NEXT: ', next.name)
      if (next.children.length > 0) {
        next.children.forEach(val => {
          tempArray.push(val);
        })
      }
      array.push(next.name);
    }
    return array;
  }
}