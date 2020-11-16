function isValidSubsequence(array, sequence) {
  let i = 0;
  let j = 0;
  while (j <= array.length) {
    if (i === sequence.length) {
      return true
    }
    if (sequence[i] === array[j]) {
      i++;
      j++;
    } else {
      j++
    }
  }
  return false;
}