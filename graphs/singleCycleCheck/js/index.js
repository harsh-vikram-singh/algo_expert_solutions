function hasSingleCycle(array) {
  debugger;
  let startIndex = 0;
  let currentIndex = 0;
  let elementsVisited = 0;
  while (elementsVisited < array.length) {
    if (currentIndex === 0 && elementsVisited > 0) {
      return false;
    }
    currentIndex = getNextIndex(array[currentIndex], array.length);
    elementsVisited += 1;
  }
  return currentIndex === startIndex;
}

function getNextIndex(arrayValueAtIndex, length) {
  let maxIndex = length - 1;
  if ((arrayValueAtIndex > 0) && (arrayValueAtIndex < length)) {
    return arrayValueAtIndex;
  } else if (arrayValueAtIndex < 0) {
    let absVal = Math.abs(arrayValueAtIndex);
    let mod = absVal % length;
    return length - mod;
  } else {
    let mod = arrayValueAtIndex % length;
    return mod;
  }
}