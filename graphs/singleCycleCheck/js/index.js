function hasSingleCycle(array) {
  // debugger;
  let memo = new Map();
  let i = 0;
  while (!memo.has(i)) {
    let nextIndex = getNextIndex(array[i] + i, array.length);
    memo.set(i, nextIndex);
    i = nextIndex;
  }
  if (memo.size === array.length) {
    return true;
  } else {
    return false;
  }
}

function getNextIndex(index, length) {
  let maxIndex = length - 1;
  if ((index > 0) && (index < length)) {
    return index;
  } else if (index < 0) {
    let absVal = Math.abs(index);
    let mod = absVal % length;
    return length - mod;
  } else {
    let mod = index % length;
    return mod;
  }
}