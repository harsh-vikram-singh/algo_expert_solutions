class MinMaxStack {
  constructor() {
    this.minMaxStack = [];
    this.stack = [];
  }

  peek() {
    if (this.stack.length === 0) {
      console.log('stack is empty');
      return null;
    }
    return this.stack[this.stack.length - 1];
  }

  pop() {
    if (this.stack.length === 0) {
      console.log('stack is empty');
      return null;
    }
    this.minMaxStack.pop();
    return this.stack.pop();
  }

  push(val) {
    const tempMinMax = {min: val, max: val};
    if (this.minMaxStack.length === 0) {
      this.minMaxStack.push(tempMinMax);
      this.stack.push(val);
      return null;
    }
    const currentMinMax = this.minMaxStack[this.minMaxStack.length - 1]
    const { min, max } = currentMinMax;
    if (min < tempMinMax.min) {
      tempMinMax.min = min;
    }
    if (max > tempMinMax.max) {
      tempMinMax.max = max;
    }
    this.minMaxStack.push(tempMinMax);
    this.stack.push(val);
    return null;
  }

  getMin() {
    if (this.minMaxStack.length === 0) {
      console.log('stack is empty');
      return null;
    }
    return this.minMaxStack[this.minMaxStack.length - 1]['min'];
  }

  getMax() {
    if (this.minMaxStack.length === 0) {
      console.log('stack is empty');
      return null;
    }
    return this.minMaxStack[this.minMaxStack.length - 1]['max'];
  }
}