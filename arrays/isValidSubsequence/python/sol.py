import ipdb

def isValidSubsequence(array, sequence):
  if len(sequence) < len(array):
    return False
  arr_idx = 0
  seq_idx = 0
  ipdb.set_trace()
  while (arr_idx <= len(array)):
    if seq_idx == sequence:
      return True
    if (array[arr_idx] == sequence[seq_idx]):
      arr_idx += 1
      seq_idx += 1
    else:
      arr_idx += 1
  return False

a = [5, 1, 22, 25, 6, -1, 8, 10]
b = [1, 6, -1, 10]
isValidSubsequence(a, b)